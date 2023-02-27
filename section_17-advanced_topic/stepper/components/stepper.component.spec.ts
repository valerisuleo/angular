import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { StepperComponent } from './stepper.component';
import { StepperModule } from '../stepper.module';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import stepTestData from '../mocks/test-data.mock';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StepperModule],
      providers: [FormBuilder, { provide: ComponentFixtureAutoDetect, useValue: true }],
    });

    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;

    const getStepsSpy = jest.spyOn(component, 'getSteps');

    getStepsSpy.mockImplementation(() => {
      component.clone = [...stepTestData];
      component.steps = stepTestData;

      const startPage = component.steps.find((item) => item.page === 0) || ({} as any);

      component.form = new FormGroup({
        payload: new FormArray([]),
      });

      const obj = Object.assign(
        {},
        ...startPage.options.map((key) => ({
          [key.name]: new FormControl('', [key.isRequired ? Validators.required : Validators.nullValidator]),
        }))
      );

      component.formsArray.push(new FormGroup(obj));
    });

    component.getSteps();

    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('shoud create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.form).toBeTruthy();
  });

  it('should create 2 radio buttons on the opening view', () => {
    const radios = de.queryAll(By.css('input[type="radio"]'));
    expect(radios.length).toEqual(2);
  });

  it('handleChange should be called', () => {
    jest.spyOn(component, 'handleChange');

    const radios = de.queryAll(By.css('input[type="radio"]'));
    radios[0].nativeElement.click();
    radios[1].nativeElement.click();
    radios[1].nativeElement.click();

    expect(component.form.value.payload[0].adultGroupLarge).toBe(true);
    expect(component.handleChange).toBeCalledTimes(2);
  });

  it('should only be next button in view', () => {
    const buttons = de.queryAll(By.css('vm-button button'));
    expect(buttons.length).toBe(1);
  });

  it('should navigate to next view and display checkboxes', () => {
    jest.spyOn(component, 'rebuildSteps');
    const buttons = de.queryAll(By.css('vm-button button'));

    component.isBtnDisabled = false;

    if (component.isBtnDisabled) {
      buttons[0].nativeElement.click();

      expect(component.rebuildSteps).toBeCalledTimes(1);

      const checkboxes = de.queryAll(By.css('input[type="checkbox"]'));
      const radios = de.queryAll(By.css('input[type="radio"]'));

      expect(checkboxes.length).toBe(4);
      expect(radios.length).toBe(0);
    }
  });

  it('should skip keyword questions', () => {
    jest.spyOn(component, 'rebuildSteps');

    const radios = de.queryAll(By.css('input[type="radio"]'));

    radios[1].nativeElement.click();
    component.next();
    fixture.detectChanges();

    const checkboxes = de.queryAll(By.css('input[type="checkbox"]'));
    checkboxes[0].nativeElement.click();
    component.next();
    fixture.detectChanges();

    const pageTitle = de.query(By.css('#pageTitle'));

    expect(pageTitle.nativeElement.innerHTML).not.toContain('Keyword Question');
    expect(component.form.value.payload[1].checkboxOne).toBe(true);
    expect(checkboxes.length).toBe(4);
    expect(component.rebuildSteps).toHaveBeenCalledTimes(2);
  });

  it('should display questions for matching keyword', () => {
    jest.spyOn(component, 'rebuildSteps');
    const radios = de.queryAll(By.css('input[type="radio"]'));

    radios[0].nativeElement.click();
    component.next();

    fixture.detectChanges();

    const checkboxes = de.queryAll(By.css('input[type="checkbox"]'));

    checkboxes[2].nativeElement.click();

    component.next();

    fixture.detectChanges();

    const pageTitle = de.query(By.css('#pageTitle'));

    expect(pageTitle.nativeElement.innerHTML).toContain('Keyword Question');
    expect(component.rebuildSteps).toHaveBeenCalledTimes(2);
    expect(component.form.value.payload[1].checkboxThree).toBe(true);
    expect(component.keywords[0]).toBe('keyword');
  });

  it('should undo keyword selection', () => {
    jest.spyOn(component, 'rebuildSteps');
    jest.spyOn(component, 'resetCurrentPageKeywords');

    const radios = de.queryAll(By.css('input[type="radio"]'));

    radios[1].nativeElement.click();
    component.next();

    fixture.detectChanges();
    const checkboxes = de.queryAll(By.css('input[type="checkbox"]'));

    checkboxes[2].nativeElement.click();
    checkboxes[2].nativeElement.click();

    component.next();
    fixture.detectChanges();

    expect(component.keywords[0]).toBe('keyword');

    component.prev();

    expect(component.keywords[0]).toBeFalsy();
    expect(component.rebuildSteps).toHaveBeenCalledTimes(2);
    expect(component.resetCurrentPageKeywords).toHaveBeenCalledTimes(1);
  });
});
