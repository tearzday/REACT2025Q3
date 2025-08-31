export const defaultColumns = [
  { label: 'Population', value: 'population', checked: true },
  { label: 'Year', value: 'year', checked: true },
  { label: 'CO2', value: 'co2', checked: true },
  { label: 'CO2 per Capita', value: 'co2_per_capita', checked: true },
  {
    label: 'Oil CO2',
    value: 'oil_co2',
    checked: false,
  },
  {
    label: 'Temperature Change from CO2',
    value: 'temperature_change_from_co2',
    checked: false,
  },
  {
    label: 'Gas CO2',
    value: 'gas_co2',
    checked: false,
  },
  {
    label: 'Methane',
    value: 'methane',
    checked: false,
  },
];

export const sortedData = [
  { label: 'Population: High to Low', value: 'pop-high' },
  { label: 'Population: Low to High', value: 'pop-low' },
  { label: 'Name: A → Z', value: 'name-a' },
  { label: 'Name: Z → A', value: 'name-z' },
];

export const newColumns = [
  {
    label: 'Oil CO2',
    value: 'oil_co2',
  },
  {
    label: 'Temperature Change from CO2',
    value: 'temperature_change_from_co2',
  },
  {
    label: 'Gas CO2',
    value: 'gas_co2',
  },
  {
    label: 'Methane',
    value: 'methane',
  },
];
