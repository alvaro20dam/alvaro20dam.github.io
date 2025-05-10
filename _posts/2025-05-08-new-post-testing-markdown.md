---
layout: post
title: "Unlocking Housing Insights: A Statistical Journey Through California Real Estate"
---

The California housing market is a complex beast, with prices that can leave you breathless and trends that shift like the sands. But fear not! In this lesson, we'll use the power of statistics to make sense of it all. Did you know, for example, that the median house value in our dataset is $206,855? But what does that really mean? Let's dive in...

## Unpacking the concepts

### Key Descriptive Statistics

- To start, it's crucial to understand the basic characteristics of our housing data. The `head()` function in Pandas gives us a fantastic overview:

```python
housing = load_housing_data()
housing.head()
```

<div class="dataframe-container">
<style scoped>
    .dataframe-container {
        overflow-x: auto;
        max-width: 100%;
        margin-right: auto;
    }

    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: right;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>longitude</th>
      <th>latitude</th>
      <th>housing_median_age</th>
      <th>total_rooms</th>
      <th>total_bedrooms</th>
      <th>population</th>
      <th>households</th>
      <th>median_income</th>
      <th>median_house_value</th>
      <th>ocean_proximity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>-122.23</td>
      <td>37.88</td>
      <td>41.0</td>
      <td>880.0</td>
      <td>129.0</td>
      <td>322.0</td>
      <td>126.0</td>
      <td>8.3252</td>
      <td>452600.0</td>
      <td>NEAR BAY</td>
    </tr>
    <tr>
      <th>1</th>
      <td>-122.22</td>
      <td>37.86</td>
      <td>21.0</td>
      <td>7099.0</td>
      <td>1106.0</td>
      <td>2401.0</td>
      <td>1138.0</td>
      <td>8.3014</td>
      <td>358500.0</td>
      <td>NEAR BAY</td>
    </tr>
    <tr>
      <th>2</th>
      <td>-122.24</td>
      <td>37.85</td>
      <td>52.0</td>
      <td>1467.0</td>
      <td>190.0</td>
      <td>496.0</td>
      <td>177.0</td>
      <td>7.2574</td>
      <td>352100.0</td>
      <td>NEAR BAY</td>
    </tr>
    <tr>
      <th>3</th>
      <td>-122.25</td>
      <td>37.85</td>
      <td>52.0</td>
      <td>1274.0</td>
      <td>235.0</td>
      <td>558.0</td>
      <td>219.0</td>
      <td>5.6431</td>
      <td>341300.0</td>
      <td>NEAR BAY</td>
    </tr>
    <tr>
      <th>4</th>
      <td>-122.25</td>
      <td>37.85</td>
      <td>52.0</td>
      <td>1627.0</td>
      <td>280.0</td>
      <td>565.0</td>
      <td>259.0</td>
      <td>3.8462</td>
      <td>342200.0</td>
      <td>NEAR BAY</td>
    </tr>
  </tbody>
</table>
</div>

---
Our first five entries in the dataset offer a fascinating initial glimpse into the geographical spread of our housing districts. Notice how the 'longitude' values hover around -122 degrees and the 'latitude' around 37-38 degrees. This immediately suggests that these initial data points are likely clustered within a specific region of California – likely the Bay Area, given these coordinates. This geographical concentration reminds us that location is a fundamental aspect of housing and will likely play a significant role in our analysis.

Even within this seemingly close geographical range, we can already observe significant variability in other housing characteristics. For example, 'housing_median_age' ranges from a relatively young 21 years to a more mature 52 years within these first five entries. Similarly, the 'total_rooms' vary dramatically, from a modest 880 to a much larger 7099. This early observation underscores the diversity within the housing market, even within relatively close proximity, and hints at the complex interplay of factors that influence housing.

---

#### Dissecting the Dataset: A Concise Overview

The `housing.info()` output provides a valuable snapshot of our California housing dataset. It reveals that we are working with a DataFrame containing 20,640 entries, each representing a distinct housing district. These entries are indexed from 0 to 20,639.



    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 20640 entries, 0 to 20639
    Data columns (total 10 columns):
     #   Column              Non-Null Count  Dtype  
    ---  ------              --------------  -----  
     0   longitude           20640 non-null  float64
     1   latitude            20640 non-null  float64
     2   housing_median_age  20640 non-null  float64
     3   total_rooms         20640 non-null  float64
     4   total_bedrooms      20433 non-null  float64
     5   population          20640 non-null  float64
     6   households          20640 non-null  float64
     7   median_income       20640 non-null  float64
     8   median_house_value  20640 non-null  float64
     9   ocean_proximity     20640 non-null  object 
    dtypes: float64(9), object(1)
    memory usage: 1.6+ MB

The dataset comprises a total of 10 columns, each representing a specific attribute of these housing districts. Let's take a closer look at the data types and the presence of missing values:

- Numerical Features: The majority of our columns are numerical, stored as float64 data types. These include essential features like:

- - `longitude` and `latitude`: Indicating the geographical location of each district.
housing_median_age: Representing the median age of houses within each district.
- - `total_rooms`, `total_bedrooms`, `population`, and `households`: Describing the size and occupancy of housing units.
- - `median_income`: Indicating the median income level in each district.
- - `median_house_value`: Our target variable, representing the median value of houses in each district.
- Categorical Feature: We also have one categorical column:
- - `ocean_proximity`: This column, with the object data type (typically strings in Pandas), likely contains information about the proximity of the housing district to the ocean. This will be interesting to explore for potential relationships with housing values.

Crucially, the 'Non-Null Count' column reveals that most of our features have a complete set of 20,640 non-null values, indicating no missing data. However, the `total_bedrooms` column shows a slightly lower count of 20,433 non-null entries. This means we have a small number of missing values in this particular feature, which will need to be addressed during our data preprocessing steps to ensure the integrity of our analysis.

Finally, the output indicates that the DataFrame utilizes approximately 1.6+ MB of memory. This gives us a sense of the dataset's size, which is relatively manageable for analysis.

In summary, this initial inspection tells us we have a moderately sized dataset with a mix of numerical and categorical features. The presence of a few missing values in `total_bedrooms` is a key point to note as we move forward with our exploration and modeling.

---

```python
housing.describe()
```




<div class="dataframe-container">

<style scoped>
    .dataframe-container {
        overflow-x: auto;
        max-width: 100%;
        margin-right: auto;
    }

    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>longitude</th>
      <th>latitude</th>
      <th>housing_median_age</th>
      <th>total_rooms</th>
      <th>total_bedrooms</th>
      <th>population</th>
      <th>households</th>
      <th>median_income</th>
      <th>median_house_value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>20640.000000</td>
      <td>20640.000000</td>
      <td>20640.000000</td>
      <td>20640.000000</td>
      <td>20433.000000</td>
      <td>20640.000000</td>
      <td>20640.000000</td>
      <td>20640.000000</td>
      <td>20640.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>-119.569704</td>
      <td>35.631861</td>
      <td>28.639486</td>
      <td>2635.763081</td>
      <td>537.870553</td>
      <td>1425.476744</td>
      <td>499.539680</td>
      <td>3.870671</td>
      <td>206855.816909</td>
    </tr>
    <tr>
      <th>std</th>
      <td>2.003532</td>
      <td>2.135952</td>
      <td>12.585558</td>
      <td>2181.615252</td>
      <td>421.385070</td>
      <td>1132.462122</td>
      <td>382.329753</td>
      <td>1.899822</td>
      <td>115395.615874</td>
    </tr>
    <tr>
      <th>min</th>
      <td>-124.350000</td>
      <td>32.540000</td>
      <td>1.000000</td>
      <td>2.000000</td>
      <td>1.000000</td>
      <td>3.000000</td>
      <td>1.000000</td>
      <td>0.499900</td>
      <td>14999.000000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>-121.800000</td>
      <td>33.930000</td>
      <td>18.000000</td>
      <td>1447.750000</td>
      <td>296.000000</td>
      <td>787.000000</td>
      <td>280.000000</td>
      <td>2.563400</td>
      <td>119600.000000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>-118.490000</td>
      <td>34.260000</td>
      <td>29.000000</td>
      <td>2127.000000</td>
      <td>435.000000</td>
      <td>1166.000000</td>
      <td>409.000000</td>
      <td>3.534800</td>
      <td>179700.000000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>-118.010000</td>
      <td>37.710000</td>
      <td>37.000000</td>
      <td>3148.000000</td>
      <td>647.000000</td>
      <td>1725.000000</td>
      <td>605.000000</td>
      <td>4.743250</td>
      <td>264725.000000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>-114.310000</td>
      <td>41.950000</td>
      <td>52.000000</td>
      <td>39320.000000</td>
      <td>6445.000000</td>
      <td>35682.000000</td>
      <td>6082.000000</td>
      <td>15.000100</td>
      <td>500001.000000</td>
    </tr>
  </tbody>
</table>
</div>

---

### Visualizing the Landscape: A Peek into Our Housing Data

Beyond the summary statistics, visual representations often provide a more intuitive grasp of our data's nuances. Here, we have a series of histograms, each offering a unique perspective on the distribution of different features within our California housing dataset.

```python
%matplotlib inline
import matplotlib.pyplot as plt
housing.hist(bins=50, figsize=(20,15))
plt.show()
```

![graph1](/assets/img/output_9_0.png)Histogramas

- **Longitude and Latitude: Mapping the Geographic Spread.** The histograms for `longitude` and `latitude` immediately highlight the geographical clustering of our data points within California. Notice the dense bands in the longitude distribution, reflecting the concentration of housing districts along the coastline and in more populated inland areas. Similarly, the latitude histogram shows a primary cluster, indicative of the latitudinal range where most of the housing data is located.
- **Housing Median Age: A Spectrum of Eras.** The `housing_median_age` histogram reveals a fascinating distribution of property ages. We see a significant number of newer homes (skewed towards the lower end), but also a notable presence of older housing stock, with peaks in the mid-range. The spike at the far right suggests a cap or categorization of the age for the oldest properties in the dataset.
- **Total Rooms and Total Bedrooms: Sizing Up the Housing Units.** Looking at `total_rooms` and `total_bedrooms`, we observe distributions heavily skewed towards the lower end. This indicates that the majority of housing districts contain a larger number of smaller to medium-sized dwellings, with a long tail extending towards districts with exceptionally large properties. The shape of these histograms gives us an idea of the typical scale of housing units in our sample.
- **Population: Density Across Districts.** The `population` histogram illustrates the varying population densities across the housing districts. The strong peak at the lower end signifies that many districts have relatively smaller populations, while the long tail indicates the presence of some highly populated urban or metropolitan areas within our dataset.
- **Households: Grouping within Dwellings.** "The distribution of 'households' mirrors that of 'population' to some extent, with a concentration towards smaller household sizes. This is expected, as population is directly related to the number of households. The shape further reinforces the prevalence of less densely populated districts."
- **Median Income: The Economic Engine.** "The 'median_income' histogram presents a more bell-shaped distribution, albeit slightly skewed to the right. This suggests a central tendency in income levels across the districts, with a gradual decrease as income moves towards the higher and lower ends. This distribution is crucial as income is often a strong predictor of housing values."
- **Median House Value: The Target Variable.** "Finally, the 'median_house_value' histogram, our target variable, shows a distribution with a primary peak in the lower to middle price range, followed by a decreasing frequency as prices increase. The noticeable spike at the far right might indicate a cap or a grouping of very high-value properties. Understanding this distribution is central to any predictive modeling or analysis we might undertake."

In essence, these histograms provide a valuable visual summary of the characteristics of our California housing dataset. They reveal the geographic spread, the age of properties, the size of units, population densities, income levels, and the distribution of our target variable – median house value. This visual exploration sets the stage for deeper statistical analysis and modeling.

---

#### Dividing the Land: Creating Training and Testing Sets

In the realm of machine learning, our data is our most valuable resource.  This code snippet showcases a fundamental step in preparing that resource for a learning journey.

- First, we begin with our dataset, which we can imagine as a vast territory.  To properly train our predictive model (think of it as a wise explorer), we need to divide this territory into two distinct regions: a training region and a testing region.

```python
import numpy as np

def split_train_test(data, test_ratio):
    shuffled_indices = np.random.permutation(len(data))
    test_set_size = int(len(data) * test_ratio)
    test_indices = shuffled_indices[:test_set_size]
    train_indices = shuffled_indices[test_set_size:]
    return data.iloc[train_indices], data.iloc[test_indices]
```

- - The `split_train_test` function is our territory divider.  It takes the entire dataset and a `test_ratio` (in this case, 0.2, meaning 20%) as input.  It then performs the following actions:

- - Shuffling: It randomly shuffles the data points, ensuring that the division isn't based on any pre-existing order. This is like randomly mixing up the terrain to ensure both regions have a fair representation of different landscapes.
- - Division: It splits the shuffled data into two parts based on the `test_ratio`. The first 20% becomes the `test_set` (the territory our explorer will use to validate its findings), and the remaining 80% becomes the `train_set` (the territory where the explorer will learn and build its knowledge).

```python
housing["income_cat"] = pd.cut(housing["median_income"], 
                               bins=[0., 1.5, 3.0, 4.5, 6., np.inf], 
                               labels=[1, 2, 3, 4, 5])
```

- - Income Categorization: To ensure our explorer is well-versed in all aspects of the territory, we further categorize it based on income. The `pd.cut` function divides the `median_income` into five categories, creating a new column called `income_cat`. This is crucial for stratified sampling in the next step to ensure that both the training and testing sets have a representative sample from each income category.

```python
housing["income_cat"].hist()
```

- - Visualization: The hist() function then provides a visual representation of the distribution of these income categories. This histogram allows us to see how the income levels are distributed across the territory, giving us valuable insights into its socio-economic makeup.

![png](/assets/img/output_15_1.png)

In essence, this code carves out a balanced training and testing ground and prepares the data for effective model training and evaluation.

---

##### Stratified Sampling for Income Category

As we've categorized the median income into distinct categories `income_cat`, the next crucial step is to ensure that our training and testing sets accurately represent the distribution of these income categories. This technique is known as stratified sampling.
Stratified sampling helps prevent sampling bias, which could occur if we relied solely on random sampling. For example, a purely random split might result in the test set having a disproportionately high number of high-income districts, which could skew our model's evaluation.

```python
from sklearn.model_selection import StratifiedShuffleSplit
split = StratifiedShuffleSplit(n_splits=1, test_size=0.2, random_state=42)
for train_index, test_index in split.split(housing, housing["income_cat"]):
    strat_train_set = housing.loc[train_index]
    strat_test_set = housing.loc[test_index]
```

Scikit-learn's `StratifiedShuffleSplit` class is perfect for this task. It ensures that each income category is represented in the training and testing sets in the same proportion as in the original dataset. This results in more robust model training and evaluation.

```python
strat_test_set["income_cat"].value_counts() / len(strat_test_set)
```

    income_cat
    3    0.350533
    2    0.318798
    4    0.176357
    5    0.114341
    1    0.039971
    Name: count, dtype: float64


After creating the stratified samples, it's good practice to remove the `income_cat` column, as it was only used for the stratified sampling process.

```python
for set_ in (strat_train_set, strat_test_set):
    set_.drop("income_cat", axis=1, inplace=True)
```

##### Exploratory Data Analysis (EDA)

With our training and testing sets now properly prepared, the next vital phase is Exploratory Data Analysis (EDA).

EDA involves delving deeper into the training data to uncover patterns, relationships, and insights that can inform our model selection and feature engineering.

This is where we ask questions like:

How are different features distributed? (e.g., histograms)  
Are there any correlations between features and the median house value? (e.g., correlation matrices, scatter plots)
How does location (latitude and longitude) influence housing prices? (e.g., geographical plots)

Visualizing geographical data:

```python
housing = strat_train_set.copy()
```

```python
housing.plot(kind="scatter", x="longitude", y="latitude", alpha=0.4,
s=housing["population"]/100, label="population", figsize=(10,7),
c="median_house_value", cmap=plt.get_cmap("jet"), colorbar=True,
)
plt.legend()
```

![png](/assets/img/output_20_1.png)

---

```python
from pandas.plotting import scatter_matrix

attributes = ["median_house_value", "median_income", "total_rooms", 
              "housing_median_age"]
scatter_matrix(housing[attributes], figsize=(12, 8))
```

---

##### Unveiling Relationships: Calculating the Correlation Matrix

To gain deeper insights into how different numerical attributes relate to each other within our housing dataset, we employ a powerful tool: the correlation matrix. This matrix quantifies the strength and direction of linear relationships between pairs of numerical features.

The code achieves this in two clear steps:

```python
numerical_housing = housing.select_dtypes(include=np.number)
corr_matrix = numerical_housing.corr()
```





1. Selecting Numerical Attributes:
First, we isolate the numerical columns from our `housing` DataFrame. This is crucial because correlation is only meaningful for numerical data. The select_dtypes(include=np.number) function efficiently filters out any non-numerical columns, creating a new DataFrame called numerical_housing that contains only the numerical features.
2. Computing the Correlation Matrix:
Next, we use the `.corr()` method on the `numerical_housing` DataFrame. This method calculates the Pearson correlation coefficient between every pair of numerical columns. The result is stored in the `corr_matrix` variable.



The resulting `corr_matrix` is a square table where:

```python
corr_matrix["median_house_value"].sort_values(ascending=False)
```

```
    median_house_value    1.000000
    median_income         0.687151
    total_rooms           0.135140
    housing_median_age    0.114146
    households            0.064590
    total_bedrooms        0.047781
    population           -0.026882
    longitude            -0.047466
    latitude             -0.142673
    Name: median_house_value, dtype: float64
```

**Key Correlations with Median House Value:**

*The Strongest Predictor:* Median Income Reigns Supreme. Looking at the correlation values, `median_income` stands out with a strong positive correlation of approximately 0.69 with `median_house_value`. This suggests a significant relationship: as the median income in a district tends to increase, the median house value in that district also tends to increase considerably. This makes intuitive sense, as affordability plays a crucial role in housing prices.

*Size Matters (Somewhat):* Total Rooms Show a Modest Positive Link. `total_rooms'` exhibits a weak positive correlation of around 0.14 with `median_house_value`. This implies that larger houses (in terms of total rooms) tend to be associated with slightly higher values. However, the correlation isn't very strong, suggesting that other factors likely have a more significant impact on price.

*Age and Value:* A Weak Positive Connection. The `housing_median_age` shows a very weak positive correlation of about 0.11 with `median_house_value`. This suggests a slight tendency for older houses to have somewhat higher values, but this relationship is not very pronounced. There could be various reasons for this, such as the location or the historical significance of older properties."

*Household Dynamics:* A Very Weak Positive Influence. `households` and `total_bedrooms` show very weak positive correlations (around 0.065 and 0.048 respectively) with `median_house_value`. These suggest a minimal direct linear relationship between the number of households or bedrooms and the median house value."

*Location, Location...* Weak Negative Correlations. `longitude` and `latitude` exhibit weak negative correlations (around -0.047 and -0.14 respectively) with `median_house_value`. This implies a slight tendency for houses in certain geographical locations (as defined by these coordinates) to have lower median values. This could be due to various regional economic or environmental factors, but the correlation is not strong."

*Population:* A Negligible Negative Link. The `population` shows a very weak negative correlation (around -0.027) with `median_house_value`, suggesting virtually no linear relationship between the population of a district and its median house value."

Correlation coefficients range from -1 to 1:
1 indicates a perfect positive linear relationship (as one variable increases, the other increases strongly).
-1 indicates a perfect negative linear relationship (as one variable increases, the other decreases strongly).
0 indicates no linear relationship.
"By examining this corr_matrix, we can identify key relationships, such as the correlation between 'median_income' and 'median_house_value', which can provide valuable insights for our subsequent modeling efforts."

---

```python
from pandas.plotting import scatter_matrix

attributes = ["median_house_value", "median_income", "total_rooms", 
              "housing_median_age"]
scatter_matrix(housing[attributes], figsize=(12, 8))
```

Each row and column represents a numerical feature.
The value at the intersection of a row and a column indicates the correlation coefficient between those two features.

![png](/assets/img/output_23_1.png)

To further explore the relationships between key numerical attributes, we generated a scatter matrix. This visual tool allows us to examine the pairwise relationships between `median_house_value`, `median_income`, `total_rooms`, and `housing_median_age`.

As anticipated from our correlation analysis, the scatter plot between `median_income` and `median_house_value` reveals a clear positive trend, visually confirming that higher incomes are generally associated with higher home values. In contrast, the scatter plots involving `total_rooms` and `housing_median_age` with `median_house_value` show much more scattered patterns, corroborating their weak correlations.

The histograms along the diagonal provide insights into the distribution of each variable. For instance, we can see the right-skewed nature of `median_house`_value and `total_rooms`, as well as the more varied distribution of `housing_median_age`.

Overall, this scatter matrix provides a valuable visual confirmation of the linear relationships we quantified with the correlation matrix, highlighting the importance of `median_income` as a predictor while suggesting that other factors might have more complex or non-linear relationships with housing prices.

---

##### Visualizing the Income-Price Relationship: A Scatter Plot

This code generates a scatter plot that visually represents the relationship between the median income and the median house value for different housing districts. The transparency is adjusted to help visualize the density of data points and reveal underlying trends in the data. This plot is crucial for understanding how income influences housing prices.

```python
housing.plot(kind="scatter", x="median_income", y="median_house_value",
alpha=0.1)
```
![png](/assets/img/output_24_1.png)

Here's a breakdown:

1. **Selecting the Data and Plot Type:**

- - `housing.plot(...)`: This calls the plot method on your housing DataFrame, indicating that you want to create a plot from the data in this DataFrame.
- - `kind="scatter"`: This specifies that you want to create a scatter plot. In a scatter plot, each data point is represented as a dot.

2. **Mapping Variables to Axes:**

- - `x="median_income"`: This assigns the `median_income` column to the x-axis of the plot. The x-axis will represent the median income of each housing district.
- - `y="median_house_value"`: This assigns the `median_house_value` column to the y-axis of the plot. The y-axis will represent the median house value of each housing district.

3. **Setting Transparency (Alpha):**

- - `alpha=0.1`: This sets the transparency (alpha) of the data points to 0.1. Alpha values range from 0 to 1, where 0 is completely transparent (invisible) and 1 is completely opaque. A value of 0.1 makes the points very transparent.

**Why is `alpha=0.1` important?**

In datasets with many data points, like housing datasets, using a high alpha value (e.g., 1) can result in a plot where the points overlap so much that it's difficult to see the underlying patterns. Setting alpha to a lower value makes the points more transparent, allowing you to see the density of the data and identify trends more clearly. Areas with a high concentration of points will appear darker, while sparse areas will appear lighter.

---

##### Creating New Features: Deriving Insights from Existing Data

```python
housing["rooms_per_household"] = housing["total_rooms"]/housing["households"]
housing["bedrooms_per_room"] = housing["total_bedrooms"]/housing["total_rooms"]
housing["population_per_household"]=housing["population"]/housing["households"]
```