---
layout: post
date: "2025-10-03"
title: "Beyond Linear Growth: Unveiling Economic Cycles with Polynomial Regression"
categories: econometrics
author:
- Alvaro Gonzalez
- gemini
meta: "Regression"
---

In economics, many phenomena don't follow simple linear trends. Business cycles, technology adoption, or even product life cycles often exhibit periods of acceleration, deceleration, and inflection points. This notebook demonstrates how Polynomial Regression can more accurately capture these complex, non-linear relationships compared to traditional linear regression, providing a more nuanced understanding for forecasting and strategic planning.

### Import Libraries

First, let's import all the necessary Python libraries.


```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import r2_score

# Set a style for better visualization
sns.set_style("whitegrid")
plt.rcParams['font.family'] = 'sans-serif'
# plt.rcParams['font.sans-serif'] = ['Inter'] # Using 'Inter' as requested

```

### Generate Synthetic Economic Data

We'll create a synthetic dataset that mimics a non-linear economic cycle. This data will have an underlying polynomial trend with some added sinusoidal oscillation to represent cyclical behavior, plus random noise to simulate real-world variability.


```python
# Define simulation parameters
np.random.seed(42) # for reproducibility
num_points = 100
noise_level = 0.5

# Generate x values (e.g., time periods, scaled from 0 to 10)
x = np.linspace(0, 10, num_points)

# Define the true underlying non-linear economic trend (e.g., a cubic polynomial with oscillation)
# y_true = 0.05 * x^3 - 0.8 * x^2 + 3 * x + 5 + 2 * sin(1.5 * x)
y_true = 0.05 * x**3 - 0.8 * x**2 + 3 * x + 5 + 2 * np.sin(x * 1.5)

# Add random noise to simulate observed data
y_noisy = y_true + (np.random.rand(num_points) - 0.5) * noise_level * 10

# Create a Pandas DataFrame for easier handling
data = pd.DataFrame({'Economic Metric (X)': x, 'True Value (Y)': y_true, 'Observed Value (Y)': y_noisy})

print("First 5 rows of the generated data:")
print(data.head())
```

    First 5 rows of the generated data:
       Economic Metric (X)  True Value (Y)  Observed Value (Y)
    0              0.00000        5.000000            4.372701
    1              0.10101        5.596792            7.850363
    2              0.20202        6.170651            7.330620
    3              0.30303        6.715128            7.208421
    4              0.40404        7.224088            5.504182
    

### Perform Linear Regression

We'll start by fitting a simple linear regression model to our noisy data. This often serves as a baseline to understand the limitations of simpler models for complex relationships.


```python
# Reshape X for sklearn
X = data[['Economic Metric (X)']]
y_obs = data['Observed Value (Y)']

# Create and train the linear regression model
linear_model = LinearRegression()
linear_model.fit(X, y_obs)

# Make predictions
linear_predictions = linear_model.predict(X)

# Calculate R-squared
linear_r2 = r2_score(y_obs, linear_predictions)

print(f"Linear Regression R²: {linear_r2:.3f}")
print(f"Linear Model Equation: Y = {linear_model.coef_[0]:.2f}X + {linear_model.intercept_:.2f}")

```

    Linear Regression R²: 0.282
    Linear Model Equation: Y = -0.48X + 8.33
    

### Perform Polynomial Regression

Now, let's apply polynomial regression. We'll transform our input features into polynomial features (e.g., X2, X3) and then fit a linear model to these transformed features. This allows us to model curves.

For this demonstration, we'll use a 3rd-degree polynomial to match the underlying true function, but in a real project, you would typically use techniques like cross-validation to determine the optimal degree.


```python
# Create polynomial features (e.g., degree 3)
poly_features = PolynomialFeatures(degree=3, include_bias=False)
X_poly = poly_features.fit_transform(X)

# Create and train a linear regression model on the polynomial features
poly_model = LinearRegression()
poly_model.fit(X_poly, y_obs)

# Make predictions using the polynomial model
poly_predictions = poly_model.predict(X_poly)

# Calculate R-squared
poly_r2 = r2_score(y_obs, poly_predictions)

print(f"Polynomial Regression R² (Degree 3): {poly_r2:.3f}")

```

    Polynomial Regression R² (Degree 3): 0.415
    

### Visualize the Results

Visualizing the data and the model fits is crucial for understanding their performance and interpreting the insights.

```python
plt.figure(figsize=(12, 7))

# Plot noisy data points
plt.scatter(data['Economic Metric (X)'], data['Observed Value (Y)'], label='Noisy Data Points', color='#6366f1', s=50, alpha=0.7)

# Plot the true underlying trend
plt.plot(data['Economic Metric (X)'], data['True Value (Y)'], label='True Economic Trend', color='#22c55e', linewidth=3, linestyle='--')

# Plot the Linear Regression line
plt.plot(data['Economic Metric (X)'], linear_predictions, label=f'Linear Regression (R²: {linear_r2:.3f})', color='#ef4444', linewidth=2)

# Plot the Polynomial Regression line
plt.plot(data['Economic Metric (X)'], poly_predictions, label=f'Polynomial Regression (R²: {poly_r2:.3f})', color='#0ea5e9', linewidth=2)


plt.title('Unveiling Non-Linear Economic Cycles with Polynomial Regression', fontsize=16)
plt.xlabel('Economic Metric (e.g., Time / Policy Intensity)', fontsize=12)
plt.ylabel('Value (e.g., GDP Growth / Market Index)', fontsize=12)
plt.legend(fontsize=10)
plt.grid(True, linestyle='--', alpha=0.6)
plt.show()

```

![png](/assets/img/economic-cycles1.png)

### Conclusion

As evident from the visualization and the R-squared values, the Polynomial Regression model provides a significantly better fit to the non-linear, cyclical economic data compared to the simple linear model.

This project demonstrates the critical importance of:

* Understanding the underlying nature of data: Economic phenomena are rarely perfectly linear.

* Selecting appropriate modeling techniques: Polynomial regression allows us to capture the nuances of growth acceleration, deceleration, and inflection points.

* Driving more accurate insights: Better model fit leads to more reliable forecasts and more informed strategic or policy decisions.

This analysis serves as a foundation for deeper exploration into time series analysis and more advanced econometric modeling techniques used to understand and predict complex economic behaviors.


```python

```
