export interface IStep {
  page: number;
  pageSubTitle: string;
  columns: string;
  pageTitle: string;
  iconStep: string;
  categories: string[];
  options: IStepOption[];
  breadcrumbLabel: string;
  optionsSelected: IStepOption[];
  isTracking: boolean;
}

export interface IStepOption {
  type: string;
  label: string;
  name: string;
  isChecked: boolean;
  isRequired: boolean;
  icon: string;
  key: string;
  finalRecommendationLabel: string;
  value: string | boolean;
  id: number;
}
