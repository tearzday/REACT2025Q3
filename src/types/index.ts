export type CountryInfo = {
  year: number;
  population: number;
  cement_co2: number;
  cement_co2_per_capita: number;
  cumulative_cement_co2: number;
};

export type Data = {
  [key: string]: {
    iso_code: string;
    data: CountryInfo[];
  };
};
