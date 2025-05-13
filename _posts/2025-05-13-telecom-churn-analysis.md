---
layout: post
title: "Telecom Churn Analysis"
echo: false
---

### Import necessary libraries & load data

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from pathlib import Path
```

```python
file = Path("__file__").parent / "telco-customer-churn.csv"
df = pd.read_csv(file)

# plt.style.use('seaborn-v0_8-talk')
```

## Initial Data Exploration


```python
df.info()
```

    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 7043 entries, 0 to 7042
    Data columns (total 21 columns):
     #   Column            Non-Null Count  Dtype  
    ---  ------            --------------  -----  
     0   customerID        7043 non-null   object 
     1   gender            7043 non-null   object 
     2   SeniorCitizen     7043 non-null   int64  
     3   Partner           7043 non-null   object 
     4   Dependents        7043 non-null   object 
     5   tenure            7043 non-null   int64  
     6   PhoneService      7043 non-null   object 
     7   MultipleLines     7043 non-null   object 
     8   InternetService   7043 non-null   object 
     9   OnlineSecurity    7043 non-null   object 
     10  OnlineBackup      7043 non-null   object 
     11  DeviceProtection  7043 non-null   object 
     12  TechSupport       7043 non-null   object 
     13  StreamingTV       7043 non-null   object 
     14  StreamingMovies   7043 non-null   object 
     15  Contract          7043 non-null   object 
     16  PaperlessBilling  7043 non-null   object 
     17  PaymentMethod     7043 non-null   object 
     18  MonthlyCharges    7043 non-null   float64
     19  TotalCharges      7043 non-null   object 
     20  Churn             7043 non-null   object 
    dtypes: float64(1), int64(2), object(18)
    memory usage: 1.1+ MB
    


```python
df.head()
```




<div>
<style scoped>
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
      <th>customerID</th>
      <th>gender</th>
      <th>SeniorCitizen</th>
      <th>Partner</th>
      <th>Dependents</th>
      <th>tenure</th>
      <th>PhoneService</th>
      <th>MultipleLines</th>
      <th>InternetService</th>
      <th>OnlineSecurity</th>
      <th>...</th>
      <th>DeviceProtection</th>
      <th>TechSupport</th>
      <th>StreamingTV</th>
      <th>StreamingMovies</th>
      <th>Contract</th>
      <th>PaperlessBilling</th>
      <th>PaymentMethod</th>
      <th>MonthlyCharges</th>
      <th>TotalCharges</th>
      <th>Churn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>7590-VHVEG</td>
      <td>Female</td>
      <td>0</td>
      <td>Yes</td>
      <td>No</td>
      <td>1</td>
      <td>No</td>
      <td>No phone service</td>
      <td>DSL</td>
      <td>No</td>
      <td>...</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>Month-to-month</td>
      <td>Yes</td>
      <td>Electronic check</td>
      <td>29.85</td>
      <td>29.85</td>
      <td>No</td>
    </tr>
    <tr>
      <th>1</th>
      <td>5575-GNVDE</td>
      <td>Male</td>
      <td>0</td>
      <td>No</td>
      <td>No</td>
      <td>34</td>
      <td>Yes</td>
      <td>No</td>
      <td>DSL</td>
      <td>Yes</td>
      <td>...</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>One year</td>
      <td>No</td>
      <td>Mailed check</td>
      <td>56.95</td>
      <td>1889.5</td>
      <td>No</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3668-QPYBK</td>
      <td>Male</td>
      <td>0</td>
      <td>No</td>
      <td>No</td>
      <td>2</td>
      <td>Yes</td>
      <td>No</td>
      <td>DSL</td>
      <td>Yes</td>
      <td>...</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>Month-to-month</td>
      <td>Yes</td>
      <td>Mailed check</td>
      <td>53.85</td>
      <td>108.15</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>3</th>
      <td>7795-CFOCW</td>
      <td>Male</td>
      <td>0</td>
      <td>No</td>
      <td>No</td>
      <td>45</td>
      <td>No</td>
      <td>No phone service</td>
      <td>DSL</td>
      <td>Yes</td>
      <td>...</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>One year</td>
      <td>No</td>
      <td>Bank transfer (automatic)</td>
      <td>42.30</td>
      <td>1840.75</td>
      <td>No</td>
    </tr>
    <tr>
      <th>4</th>
      <td>9237-HQITU</td>
      <td>Female</td>
      <td>0</td>
      <td>No</td>
      <td>No</td>
      <td>2</td>
      <td>Yes</td>
      <td>No</td>
      <td>Fiber optic</td>
      <td>No</td>
      <td>...</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>Month-to-month</td>
      <td>Yes</td>
      <td>Electronic check</td>
      <td>70.70</td>
      <td>151.65</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>
<p>5 rows × 21 columns</p>
</div>



### High-level overview of the data


```python
churn = df['Churn'].value_counts()
plt.title('Count of Customer Churn')
plt.bar(churn.index, churn.values)
```




    <BarContainer object of 2 artists>




    
![png](output_8_1.png)
    



```python
pct_churn = df['Churn'].value_counts(normalize=True)
plt.pie(pct_churn, labels=pct_churn.index, autopct='%1.1f%%')
```




    ([<matplotlib.patches.Wedge at 0x263cea084d0>,
      <matplotlib.patches.Wedge at 0x263cea10f50>],
     [Text(-0.7393678277834757, 0.8144539368428056, 'No'),
      Text(0.7393677515287918, -0.8144540060674139, 'Yes')],
     [Text(-0.4032915424273503, 0.44424760191425755, '73.5%'),
      Text(0.4032915008338864, -0.4442476396731348, '26.5%')])




    
![png](output_9_1.png)
    


### Understanding the data that causes churn

#### Numeric Features


```python
#| column: body-outset-left
#| out-width: 100%
#| fig-align: center
#| width: 100%
#| fig-caption: Distribution of numerical features
numerical_features = ['tenure', 'MonthlyCharges', 'TotalCharges']
fig, axes = plt.subplots(1, 3, figsize=(15, 5)) 
for i, feature in enumerate(numerical_features):
    if feature == 'TotalCharges':
        df[feature] = pd.to_numeric(df[feature], errors='coerce')  # Convert to numeric
    sns.histplot(data=df, x=feature, hue='Churn', multiple="stack", ax=axes[i])
    axes[i].set_title(f'Distribution of {feature}')
```


    
![png](output_12_0.png)
    



```python
categorical_features = ['gender', 'SeniorCitizen', 'Partner', 'Dependents', 'PhoneService', 'InternetService', 'Contract']
fig, axes = plt.subplots(7, 1, figsize=(8, 20))
axes = axes.flatten()

plt.rcParams.update({'font.size': 12})  # Increase base font size

for i, feature in enumerate(categorical_features):
    # Calculate percentages
    percentages = (df.groupby(feature)['Churn']
                    .value_counts(normalize=True)
                    .unstack()
                    .mul(100))
    
    # Create horizontal stacked bars
    percentages.plot(kind='barh', 
                    stacked=True,
                    ax=axes[i],
                    legend=False,
                    width=0.6)  # Changed from height to width
    
    # Customize the plot
    axes[i].set_title(f'Churn Distribution by {feature}', fontsize=14, pad=-30)
    axes[i].set_ylabel(feature, fontsize=12)
    
    # Add percentage labels on the bars
    for c in axes[i].containers:
        axes[i].bar_label(c, fmt='%.1f%%', label_type='center', fontsize=11)
    
    # Remove x-axis percentage labels
    axes[i].set_xticks([])
    
    # Add border around the subplot
    for spine in axes[i].spines.values():
        spine.set_visible(True)
    
    # Make tick labels larger
    axes[i].tick_params(axis='both', which='major', labelsize=11)
    
    # Adjust plot to reduce white space
    axes[i].margins(y=0.15)  # Reduce vertical margins

# Remove empty subplots
for j in range(i+1, len(axes)):
    fig.delaxes(axes[j])

plt.tight_layout()
plt.show()
```


    
![png](output_13_0.png)
    


### Some more detailed analysis


```python

plt.figure(figsize=(10, 6))
sns.scatterplot(data=df, x='MonthlyCharges', y='TotalCharges', hue='InternetService')
plt.title('Scatter plot of Monthly Charges based on Internet Service type')
plt.xlabel('Monthly Charges')
plt.ylabel('Total Charges')
plt.show()
```


    
![png](output_15_0.png)
    



```python
plt.figure(figsize=(10, 6))
sns.scatterplot(data=df, x='Contract', y='MonthlyCharges', hue='Contract')
plt.title('Scatter plot of Monthly Charges based on Contract type')
plt.xlabel('Contract Type')
plt.ylabel('Monthly Charges')
plt.show()
```


    
![png](output_16_0.png)
    



```python
def plot_churn_by_tenure(data, contract_type):
    # Create the bins
    bins = np.arange(0, data['tenure'].max() + 2, 2)  # +2 to include the last value
    data['tenure_bin'] = pd.cut(data['tenure'], bins=bins)
    
    # Calculate percentage of churned customers in each bin
    churn_by_tenure = (data.groupby('tenure_bin')['Churn']
                          .value_counts(normalize=True)
                          .unstack())
    
    plt.figure(figsize=(12, 8))
    churn_by_tenure['Yes'].multiply(100).plot(kind='bar')
    plt.title(f'Percentage of Churned Customers by Tenure Length\n{contract_type} Contracts')
    plt.xlabel('Tenure (months)')
    plt.ylabel('Churn Percentage')
    plt.axhline(y=50, color='r', linestyle='--', alpha=0.3)
    plt.grid(True, alpha=0.3)
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()
    
    # Print statistics
    # print(f"\nChurn percentage by tenure bins for {contract_type} contracts:")
    # print(churn_by_tenure['Yes'].multiply(100).round(1))

# Create three dataframes
monthly = df[df['Contract'] == 'Month-to-month']
one_year = df[df['Contract'] == 'One year']
two_year = df[df['Contract'] == 'Two year']
```


```python
plot_churn_by_tenure(monthly, 'Month-to-month')
```

    C:\Users\admin\AppData\Local\Temp\ipykernel_5656\642956251.py:4: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame.
    Try using .loc[row_indexer,col_indexer] = value instead
    
    See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy
      data['tenure_bin'] = pd.cut(data['tenure'], bins=bins)
    C:\Users\admin\AppData\Local\Temp\ipykernel_5656\642956251.py:7: FutureWarning: The default of observed=False is deprecated and will be changed to True in a future version of pandas. Pass observed=False to retain current behavior or observed=True to adopt the future default and silence this warning.
      churn_by_tenure = (data.groupby('tenure_bin')['Churn']
    


    
![png](output_18_1.png)
    



```python
plot_churn_by_tenure(one_year, 'One year')
```

    C:\Users\admin\AppData\Local\Temp\ipykernel_5656\642956251.py:4: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame.
    Try using .loc[row_indexer,col_indexer] = value instead
    
    See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy
      data['tenure_bin'] = pd.cut(data['tenure'], bins=bins)
    C:\Users\admin\AppData\Local\Temp\ipykernel_5656\642956251.py:7: FutureWarning: The default of observed=False is deprecated and will be changed to True in a future version of pandas. Pass observed=False to retain current behavior or observed=True to adopt the future default and silence this warning.
      churn_by_tenure = (data.groupby('tenure_bin')['Churn']
    


    
![png](output_19_1.png)
    



```python
plot_churn_by_tenure(two_year, 'Two year')  
```

    C:\Users\admin\AppData\Local\Temp\ipykernel_5656\642956251.py:4: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame.
    Try using .loc[row_indexer,col_indexer] = value instead
    
    See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy
      data['tenure_bin'] = pd.cut(data['tenure'], bins=bins)
    C:\Users\admin\AppData\Local\Temp\ipykernel_5656\642956251.py:7: FutureWarning: The default of observed=False is deprecated and will be changed to True in a future version of pandas. Pass observed=False to retain current behavior or observed=True to adopt the future default and silence this warning.
      churn_by_tenure = (data.groupby('tenure_bin')['Churn']
    


    
![png](output_20_1.png)
    


## Model building


```python
# Prep data

# Convert columns to binary and create new lowercase columns
df['gender_male'] = (df.gender=='Male')
df['senior_citizen'] = (df.SeniorCitizen==1)
df['partner'] = (df.Partner=='Yes')
df['dependents'] = (df.Dependents=='Yes')
df['phone_service'] = (df.PhoneService=='Yes')
df['multiple_lines'] = (df.MultipleLines=='Yes')
df['single_line'] = (df.MultipleLines=='No')

df['fiber_optic'] = (df.InternetService=='Fiber optic')
df['dsl'] = (df.InternetService=='DSL')

df['online_security'] = (df.OnlineSecurity=='Yes')
df['online_backup'] = (df.OnlineBackup=='Yes')
df['device_protection'] = (df.DeviceProtection=='Yes')
df['tech_support'] = (df.TechSupport=='Yes')
df['streaming_tv'] = (df.StreamingTV=='Yes')
df['streaming_movies'] = (df.StreamingMovies=='Yes')

df['month_to_month'] = (df.Contract=='Month-to-month')
df['one_year'] = (df.Contract=='One year')
df['two_year'] = (df.Contract=='Two year')

df['paperless_billing'] = (df.PaperlessBilling=='Yes')
df['electronic_check'] = (df.PaymentMethod=='Electronic check')
df['mailed_check'] = (df.PaymentMethod=='Mailed check')
df['bank_transfer'] = (df.PaymentMethod=='Bank transfer (automatic)')
df['credit_card'] = (df.PaymentMethod=='Credit card (automatic)')

df["total_charges"] = pd.to_numeric(df.TotalCharges, errors='coerce').fillna(0)
df['monthly_charges'] = df.MonthlyCharges
df['tenure'] = df.tenure

df['churn'] = (df.Churn=='Yes')

# Drop all original columns
columns_to_drop = ['customerID', 'gender', 'SeniorCitizen', 'Partner', 'Dependents',
                  'PhoneService', 'MultipleLines', 'InternetService', 'OnlineSecurity',
                  'OnlineBackup', 'DeviceProtection', 'TechSupport', 'StreamingTV',
                  'StreamingMovies', 'Contract', 'PaperlessBilling', 'PaymentMethod',
                  'TotalCharges', 'MonthlyCharges', 'Churn']

df.drop(columns=columns_to_drop, inplace=True)

```


```python
df.head()
```




<div>
<style scoped>
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
      <th>tenure</th>
      <th>gender_male</th>
      <th>senior_citizen</th>
      <th>partner</th>
      <th>dependents</th>
      <th>phone_service</th>
      <th>multiple_lines</th>
      <th>single_line</th>
      <th>fiber_optic</th>
      <th>dsl</th>
      <th>...</th>
      <th>one_year</th>
      <th>two_year</th>
      <th>paperless_billing</th>
      <th>electronic_check</th>
      <th>mailed_check</th>
      <th>bank_transfer</th>
      <th>credit_card</th>
      <th>total_charges</th>
      <th>monthly_charges</th>
      <th>churn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>False</td>
      <td>False</td>
      <td>True</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>True</td>
      <td>...</td>
      <td>False</td>
      <td>False</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>29.85</td>
      <td>29.85</td>
      <td>False</td>
    </tr>
    <tr>
      <th>1</th>
      <td>34</td>
      <td>True</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>...</td>
      <td>True</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>True</td>
      <td>False</td>
      <td>False</td>
      <td>1889.50</td>
      <td>56.95</td>
      <td>False</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2</td>
      <td>True</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>...</td>
      <td>False</td>
      <td>False</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>False</td>
      <td>False</td>
      <td>108.15</td>
      <td>53.85</td>
      <td>True</td>
    </tr>
    <tr>
      <th>3</th>
      <td>45</td>
      <td>True</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>True</td>
      <td>...</td>
      <td>True</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>True</td>
      <td>False</td>
      <td>1840.75</td>
      <td>42.30</td>
      <td>False</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>False</td>
      <td>False</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>False</td>
      <td>False</td>
      <td>151.65</td>
      <td>70.70</td>
      <td>True</td>
    </tr>
  </tbody>
</table>
<p>5 rows × 27 columns</p>
</div>




```python
df.info()
```

    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 7043 entries, 0 to 7042
    Data columns (total 27 columns):
     #   Column             Non-Null Count  Dtype  
    ---  ------             --------------  -----  
     0   tenure             7043 non-null   int64  
     1   gender_male        7043 non-null   bool   
     2   senior_citizen     7043 non-null   bool   
     3   partner            7043 non-null   bool   
     4   dependents         7043 non-null   bool   
     5   phone_service      7043 non-null   bool   
     6   multiple_lines     7043 non-null   bool   
     7   single_line        7043 non-null   bool   
     8   fiber_optic        7043 non-null   bool   
     9   dsl                7043 non-null   bool   
     10  online_security    7043 non-null   bool   
     11  online_backup      7043 non-null   bool   
     12  device_protection  7043 non-null   bool   
     13  tech_support       7043 non-null   bool   
     14  streaming_tv       7043 non-null   bool   
     15  streaming_movies   7043 non-null   bool   
     16  month_to_month     7043 non-null   bool   
     17  one_year           7043 non-null   bool   
     18  two_year           7043 non-null   bool   
     19  paperless_billing  7043 non-null   bool   
     20  electronic_check   7043 non-null   bool   
     21  mailed_check       7043 non-null   bool   
     22  bank_transfer      7043 non-null   bool   
     23  credit_card        7043 non-null   bool   
     24  total_charges      7043 non-null   float64
     25  monthly_charges    7043 non-null   float64
     26  churn              7043 non-null   bool   
    dtypes: bool(24), float64(2), int64(1)
    memory usage: 330.3 KB
    

### Standardize numerical columns


```python
from sklearn.preprocessing import StandardScaler, MinMaxScaler

# Create a StandardScaler instance
scaler = StandardScaler()

# Select the columns to standardize
columns_to_scale = ['tenure', 'monthly_charges', 'total_charges']

# Apply scaling to the selected columns
df[columns_to_scale] = scaler.fit_transform(df[columns_to_scale])
```


```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier
from imblearn.over_sampling import SMOTE

# Define features and target variable
X = df.drop(columns=['churn'])
# X = df.drop(columns=['churn'])

y = df['churn']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

## Balance the training data (roughly equal number of churned and non-churned customers)
smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)

# Create and train the logistic regression model
model = LogisticRegression(max_iter=5000)
# model = XGBClassifier(learning_rate=0.01,max_depth = 3,n_estimators = 1000)
# model = RandomForestClassifier(max_depth=8, n_estimators=200, random_state=42)
model.fit(X_resampled, y_resampled)

# Make predictions
y_pred_orig = model.predict(X_test)
y_pred = model.predict_proba(X_test)

# Play around with the ROC threshold
y_pred = np.where(y_pred[:,0] < 0.70, 1, 0)

print(y_pred_orig[0:10])

# Evaluate the model
print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))
```

    [ True False False  True False False False False False False]
    [[626 410]
     [ 32 341]]
                  precision    recall  f1-score   support
    
           False       0.95      0.60      0.74      1036
            True       0.45      0.91      0.61       373
    
        accuracy                           0.69      1409
       macro avg       0.70      0.76      0.67      1409
    weighted avg       0.82      0.69      0.70      1409
    