export type CountryData = {
  year: number;
  population: number;
  co2: number;
  co2_per_capita: number;
  oil_co2: number;
  temperature_change_from_co2: number;
  gas_co2: number;
  methane: number;
};

export type CountryInfo = {
  iso_code: string;
  data: CountryData[];
};

export type Data = {
  [key: string]: CountryInfo;
};

export type Column<T> = {
  label: T;
  value: T;
  checked?: boolean;
};
