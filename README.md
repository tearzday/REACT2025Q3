# First render (before receiving the data)

| Before                                                                                                |                       After                       |
| :---------------------------------------------------------------------------------------------------- | :-----------------------------------------------: |
| ![BeforeFirstRender](./docs/before/first-open.png)                                                    | ![AfterFirstRender](./docs/before/first-open.png) |
| **Render**: 21.9ms<br>**Committed at:** 0.7s<br>**Passive effects**: 1s<br>**Layout effects**: <0.1ms |                         -                         |

# Rerender after receiving data

| Before                                                                                                 |                   After                    |
| :----------------------------------------------------------------------------------------------------- | :----------------------------------------: |
| ![BeforeData](./docs/before/first-data.png)                                                            | ![AfterData](./docs/before/first-data.png) |
| **Render**: 264.5ms<br>**Committed at:** 1s<br>**Passive effects**: 33.6s<br>**Layout effects**: 0.3ms |                     -                      |

# Use sorting

| Before                                                                                                     |                  After                   |
| :--------------------------------------------------------------------------------------------------------- | :--------------------------------------: |
| ![BeforeSored](./docs/before/sorted.png)                                                                   | ![AfterSorted](./docs/before/sorted.png) |
| **Render**: 225.5ms<br>**Committed at:** 2.3s<br>**Passive effects**: 29.2ms<br>**Layout effects**: <0.1ms |                    -                     |

# Use filter year

| Before                                                                                                     |                      After                      |
| :--------------------------------------------------------------------------------------------------------- | :---------------------------------------------: |
| ![BeforeFilter](./docs/before/selected-year.png)                                                           | ![AfterFilter](./docs/before/selected-year.png) |
| **Render**: 241.2ms<br>**Committed at:** 2.9s<br>**Passive effects**: 55.2ms<br>**Layout effects**: <0.1ms |                        -                        |

# Use search (value = "f" )

| Before                                                                                                     |                    After                    |
| :--------------------------------------------------------------------------------------------------------- | :-----------------------------------------: |
| ![BeforeSearchF](./docs/before/search-f.png)                                                               | ![AfterSearchF](./docs/before/search-f.png) |
| **Render**: 226.4ms<br>**Committed at:** 2.8s<br>**Passive effects**: 28.9ms<br>**Layout effects**: <0.1ms |                      -                      |

# Add new column for table

| Before                                                                                                   |                   After                   |
| :------------------------------------------------------------------------------------------------------- | :---------------------------------------: |
| ![BeforeNewCol](./docs/before/new-col.png)                                                               | ![AfterNewCol](./docs/before/new-col.png) |
| **Render**: 211.6ms<br>**Committed at:** 0.8s<br>**Passive effects**: 27ms<br>**Layout effects**: <0.1ms |                     -                     |
