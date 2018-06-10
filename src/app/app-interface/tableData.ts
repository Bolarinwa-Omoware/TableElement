export interface PeriodicElement {
    name: string;
    position: number;
    detail: string;
  }

export interface IllegalExtData{

  ESTATE: string;
  BLOCK_ID: string;
  Ex_PLOT_NO: string;
  STREET_NAM: string;
  ADDRESS: string;
  EX_SIZE: string;
  ADM_CHARGE: number;
  ANN_GRent: number;
  CAP_CONB: number;
  LandCharge: number;
  NOR_PREMIU: number;
  RATE_PSqM: number;
  STAMP_DUTY: number;
  RegConvFee: number;
  SURVEY_FEE: number;
  AMT_PAYABL: number;
  DELIV_STAT: string;
  REMARK: string;

}

export interface FieldSorter {
  _id: string;
  fieldName: string;
}