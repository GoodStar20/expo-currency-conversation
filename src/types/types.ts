export interface ICurrency {
  code: string;
  currency: string;
  rate: number;
  date: string;
}

export type CountriesFlag = {
  [key: string]: string;
};
