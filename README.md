# First render (before receiving the data)

| Before  | After  | 
|:-------|:-------:|
| ![BeforeFirstRender](./docs/before/first-open.png) | ![AfterFirstRender](./docs/before/first-open.png) |
| **Render**: 131.1ms<br>**Committed at:** 1s |  - |

# Rerender after receiving data

| Before  | After  | 
|:-------|:-------:|
| ![BeforeData](./docs/before/first-data.png) | ![AfterData](./docs/before/first-data.png) |
| **Render**: 24.8ms<br>**Committed at:** 0s | -  |

# Use sorting

| Before  | After  | 
|:-------|:-------:|
| ![BeforeSored](./docs/before/sorted.png) | ![AfterSorted](./docs/before/sorted.png) |
| **Render**: 129.1ms<br>**Committed at:** 4.1s<br>**Passive effects**: 5.3ms<br>**Layout effects**: <0.1ms | -  |


# Use filter year

| Before  | After  | 
|:-------|:-------:|
| ![BeforeFilter](./docs/before/selected-year.png) | ![AfterFilter](./docs/before/selected-year.png) |
| **Render**: 126.1ms<br>**Committed at:** 3.1s<br>**Passive effects**: 4.9ms<br>**Layout effects**: <0.1ms | - |


# Use search (value = "f" )

| Before  | After  | 
|:-------|:-------:|
| ![BeforeSearchF](./docs/before/search-f.png) | ![AfterSearchF](./docs/before/search-f.png) |
| **Render**: 124.6ms<br>**Committed at:** 2.7s<br>**Passive effects**: 0.9ms<br>**Layout effects**: <0.1ms | -  |

# Add new column for table

| Before  | After  | 
|:-------|:-------:|
| ![BeforeNewCol](./docs/before/new-col.png) | ![AfterNewCol](./docs/before/new-col.png) |
| **Render**: 123.7ms<br>**Committed at:** 4.2s<br>**Passive effects**: 0.1ms<br>**Layout effects**: <0.1ms | -  |