export interface CustomDatePickerInterface {
  showDropDown: boolean;
  setShowDropDown: Function;
  modalTitle: string;
  data: DatePeriodInterface;
  minDate?: string;
  onChange: Function;
}

export interface DatePeriodInterface {
  startDate?: string;
  endDate?: string;
  period?: PeriodBy;
}

export enum PeriodBy {
  BY_DAY,
  BY_WEEK,
}
