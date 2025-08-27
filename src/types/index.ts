export type CountryData = {
  year: number;
  population: number;
  cement_co2: number;
  cement_co2_per_capita: number;
  cumulative_cement_co2: number;
};

export type CountryInfo = {
  iso_code?: string;
  data: CountryData[];
};

export type Data = {
  [key: string]: CountryInfo;
};
