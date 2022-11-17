import {
  Component,
  ContentChild,
  HostListener,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonLevel, ButtonStyle, ButtonSize } from '@challenger6/vm-pattern-library/button';
import { environment } from '../../../../environments/environment';
import { IStep, IStepOption } from './interface';
import { IChipStyle } from './chip/interface';
import responseMock from '../mocks/data.mock';
import card from '../mocks/card-product.mock';
import { ICarousel } from './carousel/interface';

@Component({
  selector: 'vm-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @ViewChild('slidesContainer') public div;
  @ContentChild(TemplateRef) public templateRef: TemplateRef<any>;
  public form: FormGroup;
  public count = 0;
  public isBreakpointActive: boolean;
  public isBtnDisabled: boolean;
  public btnTxt: string;
  public btnColor = ButtonLevel;
  public btnSize = ButtonSize;
  public btnStyle = ButtonStyle;
  public assetBaseUrl = environment.assetsPrefix;
  public chipStyle: IChipStyle;
  public chipStyleHover: IChipStyle;
  public carouselData = {} as ICarousel;
  public steps: IStep[] = [];
  public clone: IStep[] = [];
  public keywords: string[] = [];
  public breadCrumbLabels: any[] = [];
  public optionsRecap: any[] = [];
  public icons = ['volt-wifi', 'review-tv-plus', 'review-home-phone', 'review-sim'];
  public productCards: any[] = [];

  constructor() {}

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.handleMobileView();
  }

  public ngOnInit(): void {
    this.handleMobileView();
  }

  public getSteps(): void {
    this.clone = [...responseMock];
    this.steps = responseMock;
    const startPage: IStep = this.findStep(0);
    this.formInit(startPage.options);
    this.setStyles();
    this.breadCrumbLabels.push(startPage);
    this.isBtnDisabled = this.checkCondition(startPage.options, 'isRequired');
    this.btnTxt =
      this.isBtnDisabled || this.checkCondition(startPage.options, 'isChecked') ? 'next' : 'skip';
  }

  public get formsArray(): FormArray {
    return this.form.get('payload') as FormArray;
  }

  public next(): void {
    const lastStep: IStep = this.steps[this.steps.length - 1];
    if (this.count <= lastStep.page) {
      this.addSelectedKeywords();
      this.rebuildSteps();

      this.count++;
      const nextPage: IStep = this.findStep(this.count);
      this.addForm(nextPage.options);
      this.breadCrumbLabels.push(nextPage);
      this.choicesTracker();
      if (!this.isEmpty(nextPage)) {
        this.isBtnDisabled = this.checkCondition(nextPage.options, 'isRequired');
        this.btnTxt =
          this.isBtnDisabled || this.checkCondition(nextPage.options, 'isChecked')
            ? 'next'
            : 'skip';
      }
    }
  }

  public addSelectedKeywords(): void {
    this.steps[this.count].options.map((item) => {
      if (item.isChecked && item.key) {
        this.keywords.push(item.key);
      }
    });
  }

  public rebuildSteps(): void {
    this.steps = this.clone.reduce((acc, item) => {
      return this.buildStepsAndSetPageIndex(item, acc);
    }, []);
  }

  public prev(): void {
    this.dropCurrentPage();
    this.count--;
    this.resetCurrentPageKeywords();
    this.breadCrumbLabels.pop();
    const currentStep: IStep = this.findStep(this.count);

    this.isBtnDisabled = this.checkCondition(currentStep.options, 'isRequired');
    this.btnTxt =
      this.isBtnDisabled || this.checkCondition(currentStep.options, 'isChecked') ? 'next' : 'skip';
    const isCheckedAtLeastOne = !!currentStep.options.some((item) => item.isChecked);
    if (isCheckedAtLeastOne) {
      this.isBtnDisabled = false;
    }
  }

  public resetCurrentPageKeywords(): void {
    this.steps[this.count].options.map((item: IStepOption) => {
      if (item.key) {
        this.removeKeyFromKeywords(item.key);
      }
    });
  }

  public handleChange(current: IStepOption, formGroup: FormGroup): void {
    const currentPage = this.findStep(this.count);
    if (current.type === 'radio') {
      this.setRadioStatus(current, formGroup);
      this.isBtnDisabled = !formGroup.valid;
      this.btnTxt =
        this.isBtnDisabled && !this.checkCondition(currentPage.options, 'isRequired')
          ? 'skip'
          : 'next';
    }

    if (current.type === 'checkbox') {
      current.isChecked = !current.isChecked;
      this.checkboxTracker(current);
      this.setPropValue(current.name, current.isChecked, formGroup);
      this.toggleDisabledAttribute(currentPage);
    }
  }

  public navigateToStep(targetIndex: number): void {
    // calculate how many steps backwards to take
    const stepsBackwards: number = Math.abs(targetIndex - this.count);
    // execute this.prev() for each step back
    new Array(stepsBackwards).fill('').map(() => this.prev());
  }

  public reset(): void {
    this.steps = [];
    this.count = 0;
    this.optionsRecap = [];
    this.keywords = [];
    this.breadCrumbLabels = [];
    this.getSteps();
    this.steps.forEach((step: IStep) => {
      step.optionsSelected = [];
      step.options.forEach((option: IStepOption) => {
        option.isChecked = false;
      });
    });
  }

  public getProductCards(): void {
    // data returned from muleSoft API...
    this.productCards = [card, card, card, card, card, card, card, card];
    this.setCarouselData();
  }

  private setCarouselData(): void {
    this.carouselData.collection = this.productCards;
    this.carouselData.delay = 3000;
    this.carouselData.itemsPerSlide = 3;
  }

  private checkCondition(options, key: string): boolean {
    return !!options.filter((item: IStepOption) => item[key]).length;
  }

  private toggleDisabledAttribute(currentPage: IStep) {
    if (this.checkCondition(currentPage.options, 'isRequired')) {
      this.isBtnDisabled = this.checkCondition(currentPage.options, 'isChecked') ? false : true;
    } else {
      this.isBtnDisabled = false;
      this.btnTxt = this.checkCondition(currentPage.options, 'isChecked') ? 'next' : 'skip';
    }
  }

  private checkboxTracker(currentOption: IStepOption): void {
    const currentStep: IStep = this.findStep(this.count);
    if (currentStep.isTracking) {
      if (currentOption.isChecked) {
        currentStep.optionsSelected.push(currentOption);
      } else {
        currentStep.optionsSelected = currentStep.optionsSelected.filter(
          (item: IStepOption) => item.id !== currentOption.id
        );
      }
    }
  }

  private findStep(count): IStep {
    return this.steps.find((item) => item.page === count) || ({} as IStep);
  }

  private choicesTracker(): void {
    const lastStep = this.steps[this.steps.length - 1].page;
    if (this.count > lastStep) {
      this.steps.forEach((element: IStep) => {
        const { optionsSelected } = element;
        if (optionsSelected.length) {
          let label: string;
          if (optionsSelected.length < 3) {
            label = `light ${optionsSelected[0].finalRecommendationLabel}`;
          } else if (optionsSelected.length >= 3 && optionsSelected.length <= 6) {
            label = `moderate ${optionsSelected[0].finalRecommendationLabel}`;
          } else {
            label = `heavy ${optionsSelected[0].finalRecommendationLabel}`;
          }
          this.optionsRecap.push({
            icon: element.iconStep,
            label,
          });
        }

        element.options.forEach((item: IStepOption) => {
          if (item.type === 'radio' && item.isChecked) {
            const label = `${item.finalRecommendationLabel}: ${item.value}`;
            this.optionsRecap.push({
              icon: element.iconStep,
              label,
            });
          }
        });
      });
    }
  }

  private dropCurrentPage(): void {
    this.steps[this.count].options.forEach((item) => {
      item.isChecked = false;
      if (item.key) {
        this.removeKeyFromKeywords(item.key);
      }
    });
    const formGroupIndex = this.count;
    this.formsArray.removeAt(formGroupIndex);
  }

  private removeKeyFromKeywords(keyToRemove: string): void {
    this.keywords = this.keywords.filter((item: string) => item !== keyToRemove);
  }

  private buildStepsAndSetPageIndex(item: any, acc: any) {
    if (!item.categories.length || this.keywordsSatisfyCategories(item)) {
      acc.push({ ...item, page: acc.length });
    }
    return acc;
  }

  private keywordsSatisfyCategories(item: any): boolean {
    return item.categories.every((key) => this.keywords.includes(key));
  }

  private setRadioStatus(current, formGroup: FormGroup): void {
    const currentPage = this.findStep(this.count);

    currentPage.options.filter((el) => el !== current).forEach((item) => (item.isChecked = false));
    current.isChecked = !current.isChecked;

    formGroup.reset();
    this.setPropValue(current.name, current.value, formGroup);
  }

  private formInit(array): void {
    this.form = new FormGroup({
      payload: new FormArray([]),
    });
    this.addForm(array);
  }

  private addForm(array): void {
    this.formsArray.push(this.formMaker(array));
  }

  private setPropValue(key, value, formGroup): void {
    formGroup.controls[key].setValue(value);
  }

  private formMaker(keys): FormGroup {
    let obj;
    if (!keys) {
      obj = {}; // this is needed for unit test;
    } else {
      obj = Object.assign(
        {},
        ...keys.map((key) => ({
          [key.name]: new FormControl('', [
            key.isRequired ? Validators.required : Validators.nullValidator,
          ]),
        }))
      );
    }
    return new FormGroup(obj);
  }

  private handleMobileView(): void {
    this.isBreakpointActive = window.innerWidth < 767 ? true : false;
  }

  private isEmpty(obj): boolean {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  private setStyles(): void {
    const purple = '#5f2778';
    const gray97 = '#f7f7f7';
    const lineHeight = '60px';

    this.chipStyle = {
      color: purple,
      background: gray97,
      'line-height': lineHeight,
    };

    this.chipStyleHover = {
      background: purple,
      color: 'white',
      'line-height': lineHeight,
    };
  }
}
