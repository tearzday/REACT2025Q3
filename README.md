# First render (before receiving the data)

| Before                                                                                                |                       After                       |
| :---------------------------------------------------------------------------------------------------- | :-----------------------------------------------: |
| ![BeforeFirstRender](./docs/before/first-open.png)                                                    | ![AfterFirstRender](./docs/after/first-open.png) |
| **Render**: 21.9ms<br>**Committed at:** 0.7s<br>**Passive effects**: 1s<br>**Layout effects**: <0.1ms | **Render**: 44.5ms<br>**Committed at:** 0.6s<br>**Passive effects**: 1s<br>**Layout effects**: <0.1ms |

# Rerender after receiving data

| Before                                                                                                 |                   After                    |
| :----------------------------------------------------------------------------------------------------- | :----------------------------------------: |
| ![BeforeData](./docs/before/first-data.png)                                                            | ![AfterData](./docs/after/first-data.png) |
| **Render**: 264.5ms<br>**Committed at:** 1s<br>**Passive effects**: 33.6s<br>**Layout effects**: 0.3ms | **Render**: 292.3ms<br>**Committed at:** 1s<br>**Passive effects**: 22.5s<br>**Layout effects**: 0.1ms |

# Use sorting

| Before                                                                                                     |                  After                   |
| :--------------------------------------------------------------------------------------------------------- | :--------------------------------------: |
| ![BeforeSored](./docs/before/sorted.png)                                                                   | ![AfterSorted](./docs/after/sorted.png) |
| **Render**: 225.5ms<br>**Committed at:** 2.3s<br>**Passive effects**: 29.2ms<br>**Layout effects**: <0.1ms | **Render**: 129.4ms<br>**Committed at:** 2.3s<br>**Passive effects**: 28.9ms<br>**Layout effects**: <0.1ms  |

# Use filter year

| Before                                                                                                     |                      After                      |
| :--------------------------------------------------------------------------------------------------------- | :---------------------------------------------: |
| ![BeforeFilter](./docs/before/selected-year.png)                                                           | ![AfterFilter](./docs/after/selected-year.png) |
| **Render**: 241.2ms<br>**Committed at:** 2.9s<br>**Passive effects**: 55.2ms<br>**Layout effects**: <0.1ms | **Render**: 239ms<br>**Committed at:** 2.9s<br>**Passive effects**: 39.6ms<br>**Layout effects**: <0.1ms  |

# Use search (value = "f" )

| Before                                                                                                     |                    After                    |
| :--------------------------------------------------------------------------------------------------------- | :-----------------------------------------: |
| ![BeforeSearchF](./docs/before/search-f.png)                                                               | ![AfterSearchF](./docs/after/search-f.png) |
| **Render**: 226.4ms<br>**Committed at:** 2.8s<br>**Passive effects**: 28.9ms<br>**Layout effects**: <0.1ms |  **Render**: 10.2ms<br>**Committed at:** 2.7s<br>**Passive effects**: 1.6ms<br>**Layout effects**: <0.1ms    |

# Add new column for table

| Before                                                                                                   |                   After                   |
| :------------------------------------------------------------------------------------------------------- | :---------------------------------------: |
| ![BeforeNewCol](./docs/before/new-col.png)                                                               | ![AfterNewCol](./docs/after/new-col.png) |
| **Render**: 211.6ms<br>**Committed at:** 0.8s<br>**Passive effects**: 27ms<br>**Layout effects**: <0.1ms |  **Render**: 166.2ms<br>**Committed at:** 0.8s<br>**Passive effects**: 36.6ms<br>**Layout effects**: <0.1ms  |
