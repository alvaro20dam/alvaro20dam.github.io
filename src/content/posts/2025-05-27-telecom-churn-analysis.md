---
layout: post
date: "2023-11-03"
title: "The Silent Exodus: Unmasking and Halting Churn at Telecom"
---
Imagine Telecom, a vibrant telecommunications company, suddenly noticing a quiet but steady trickle of customers slipping away. Each departure isn't just a lost number; it's lost revenue, increased acquisition costs, and a subtle erosion of market share. This phenomenon is known as customer churn, and for Telecom, it was becoming an urgent whisper that threatened to become a roar. Our mission: to understand why customers were leaving and, more importantly, how to keep them.

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

## The Investigation: What the Data Revealed

We embarked on a deep dive into our customer data, analyzing every touchpoint, service, and interaction. Our goal was to identify the tell-tale signs of churn and pinpoint the factors driving customers away.


### Initial Data Exploration

```python
df.info()
```

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
    

```python
df.head()
```

<div class="dataframe-container">

<style scoped>

       .dataframe-container {
        overflow-x: auto; /* Add horizontal scroll if the table is wider than the container */
        max-width: 100%; /* Ensure it doesn't exceed the parent container's width */
        margin-right: auto; /* Adjust right margin if needed */
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

#### The Scale of the Problem: A Leaky Bucket

Our very first step was to quantify the problem. We looked at how many customers were staying versus how many were leaving. As you can see from this initial snapshot:

```python
churn = df['Churn'].value_counts()
plt.title('Count of Customer Churn')
plt.bar(churn.index, churn.values)
```

![png](/assets/img/churn/output_8_1.png)

Out of our total customer base, roughly **5,174 customers are loyal and staying with us** (the 'No' bar). However, a significant **1,869 customers have chosen to leave** (the 'Yes' bar). This isn't just a handful; it represents a churn rate of approximately **26.5%**. To put that into perspective, almost one in every four customers is walking out the door. This visual confirms that TelcoX is indeed facing a 'leaky bucket' scenario – we're gaining customers, but losing a substantial portion almost simultaneously. This imbalance isn't just a number; it's a direct threat to our revenue growth and market stability.

```python
pct_churn = df['Churn'].value_counts(normalize=True)
plt.pie(pct_churn, labels=pct_churn.index, autopct='%1.1f%%')
```

![png](/assets/img/churn/output_9_1.png)

### Understanding the data that causes churn

With the scale of the problem now clear, our next phase of investigation focused on understanding who these churning customers were and what common characteristics they shared. We began by examining our core numerical metrics: how long customers stay, how much they pay monthly, and their total spending with us.


```python
numerical_features = ['tenure', 'MonthlyCharges', 'TotalCharges']
fig, axes = plt.subplots(1, 3, figsize=(15, 5)) 
for i, feature in enumerate(numerical_features):
    if feature == 'TotalCharges':
        df[feature] = pd.to_numeric(df[feature], errors='coerce')  # Convert to numeric
    sns.histplot(data=df, x=feature, hue='Churn', multiple="stack", ax=axes[i])
    axes[i].set_title(f'Distribution of {feature}')
```

![png](/assets/img/churn/output_12_0.png)

1. **The "Here Today, Gone Tomorrow" (Tenure)**: Our tenure analysis revealed a critical pain point: new customers are highly susceptible to churn. As you can see in this first graph, the largest group of churned customers (the orange segment) are those who have been with us for less than a few months. This suggests that the initial onboarding experience, early service issues, or attractive competitor offers are quickly leading to departures. Conversely, customers who stay with us for longer, particularly beyond 60 months, show remarkable loyalty.

**Key Takeaway**: The first few months are critical; failure to solidify the customer relationship early on leads to significant losses.

2. **The "Expensive Disappointment" (Monthly Charges)**: Next, we looked at how monthly charges relate to churn. We observed that while customers with very low monthly bills tend to be quite sticky, a significant portion of churn is concentrated among those paying higher monthly charges, especially in the 70 USD to 100 USD range. This indicates that customers paying a premium might not be perceiving enough value for their money, or they might be facing unresolved service issues commensurate with their higher spend. They become prime targets for competitors offering seemingly better value.

**Key Takeaway**: Value perception is crucial; higher charges must be consistently justified by superior service or unique benefits to retain customers.

3. **The "Loyalty Pays Off" (Total Charges)**: Finally, when we examined total charges – a proxy for overall customer lifetime value – a clear trend emerged. The bulk of our churn comes from customers who have accumulated very low total charges with us. This is naturally linked to low tenure. Conversely, customers with significantly higher total charges are overwhelmingly stable and loyal. This reinforces the idea that as customers invest more time and money with us, their loyalty solidifies.

**Key Takeaway**: Long-term, high-value customers are our most loyal segment; efforts should be focused on extending customer tenure and increasing their lifetime value to minimize churn.

These numerical distributions give us a compelling glimpse into when and at what cost level churn is happening. But to fully understand the 'why,' we also need to explore the specific services and demographic characteristics that influence these trends...

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

#### Demographic Tendencies: Who's More Likely to Leave?

First, we examined if **gender** plays a role in churn. As we saw, the churn rate for both male and female customers is remarkably similar (around 26-27%), suggesting that gender, on its own, is not a significant differentiator for churn in our customer base. This tells us that our retention strategies do not need to be gender-specific; rather, we should focus on factors that impact all customers more broadly.

However, when we looked at Senior Citizen status, a far more striking and significant pattern emerged.

Customers who are **Senior Citizens** (1 on the Y-axis) are churning at an alarming rate of **41.7%**. This is nearly double the churn rate of **non-senior citizens** (0 on the Y-axis), who churn at a much lower rate of **23.6%**. This significant disparity suggests that our senior customers might be facing unique challenges – perhaps difficulty navigating complex services, a need for simpler plans, or specific support requirements that are not currently being met. This demographic group is clearly a high-risk segment."

**Key Takeaway**: Senior citizens represent a highly vulnerable segment with a significantly elevated churn rate. Our current offerings or support might not be adequately serving their specific needs. This calls for targeted investigation and tailored retention strategies.

![png](/assets/img/churn/output_13_0.png)

Continuing our dive into household composition, we analyzed the impact of a customer having a Partner. And here, we found another clear trend:

Customers who do not have a partner (No on the Y-axis) are significantly more likely to churn, with a churn rate of **33.0%**. In stark contrast, customers who do have a partner (Yes on the Y-axis) exhibit a much lower churn rate of **19.7%**. This suggests that households with shared responsibilities or multiple users might have a stronger dependence on our services, making them inherently more stable and less prone to switching providers. Perhaps our services are more integrated into their daily family life, or the decision to switch carries a higher collective hurdle.

**Key Takeaway**: Single-person households or those without a partner are a higher churn risk. Marketing and loyalty programs could explore benefits for multi-user households or ways to increase service integration for single customers to enhance stickiness.

This observation about household composition is further reinforced and amplified when we examine the presence of **Dependents**:

The data is even more compelling here: customers who do not have dependents (No on the Y-axis) churn at a rate **of 31.3%**. In stark contrast, customers who do have dependents (Yes on the Y-axis) show an impressively low churn rate of **15.5%**. This is nearly half the churn rate of those without dependents! It strongly indicates that when multiple family members rely on our services, the decision to switch becomes a much higher hurdle, contributing significantly to customer stability."

**Key Takeaway**: Households with dependents are our most stable customer segment regarding familial structure. Our retention efforts should leverage this by promoting family-friendly plans, multi-user benefits, and ensuring seamless service for all household members. For customers without dependents, we may need to find alternative ways to increase their reliance and integration with our services.

**Phone Service**: A Baseline, Not a Differentiator

Our analysis of Phone Service revealed that its presence or absence doesn't significantly influence churn. With a churn rate of 26.7% for those with phone service and 24.9% for those without, it's clear that this foundational service, by itself, is not a primary driver for customer departure. This suggests our phone service is meeting basic expectations, but it's not a 'sticky' feature on its own.

**Key Takeaway**: Phone service is a hygiene factor; focus on other areas for churn reduction.

**Internet Service**: A Double-Edged Sword

Here, the picture becomes far more nuanced and critical. Our Internet Service offerings show a striking disparity in churn rates:

* Customers with no internet service are our most stable segment, churning at a remarkably low **7.4%**. These are likely customers with very basic needs.
* DSL customers churn at a moderate rate of **19.0%**.
* However, the most alarming finding is for our Fiber Optic customers. Despite being a premium service, they churn at an exceptionally high rate of **41.9%!** This is a significant red flag. It suggests that while Fiber Optic attracts customers seeking high performance, there may be underlying issues – be it inconsistent speeds, unresolved technical problems, or a perceived lack of value for the higher price – that are driving these customers away at an alarming rate."

**Key Takeaway**: While fiber is a growth area, its high churn rate demands immediate investigation into service quality, value proposition, and competitive benchmarking.

1. Contract Type: The Ultimate Loyalty Anchor

Finally, we arrive at arguably the single most impactful factor influencing churn: the Contract Type. The difference in loyalty across contract lengths is staggering:

* Customers on Two-year contracts are incredibly loyal, with a minimal churn rate of just **2.8%**.
* Those on One-year contracts show a moderate churn rate of **11.3%**.
* But the highest risk group are customers on Month-to-month contracts, who churn at an alarming **42.7%!** This highlights that a commitment from the customer, driven by longer contract terms, is the strongest predictor of retention."

**Key Takeaway**: Encouraging customers to move from month-to-month to longer-term contracts should be a cornerstone of our churn reduction strategy. This might involve attractive incentives, clear communication of long-term value, or loyalty bonuses.

### Some more detailed analysis

Earlier, we saw that customers with Fiber Optic internet service churn at an exceptionally high rate of **41.9%**, significantly higher than **DSL** or no internet service. To understand the full implications of this, we must also consider their spending patterns.

```python

plt.figure(figsize=(10, 6))
sns.scatterplot(data=df, x='MonthlyCharges', y='TotalCharges', hue='InternetService')
plt.title('Scatter plot of Monthly Charges based on Internet Service type')
plt.xlabel('Monthly Charges')
plt.ylabel('Total Charges')
plt.show()
```

This scatter plot provides crucial context:

![png](/assets/img/churn/output_15_0.png)

As you can observe, customers with **no internet service** (green dots) pay very low monthly charges.**DSL customers** (blue dots) fall into a mid-range. But it's our **Fiber Optic customers** (orange dots) who consistently represent our highest-paying segment on a monthly basis, reaching up to **$120**. They also accumulate the largest total charges over time, indicating longer tenures for many.

This reveals a critical challenge: Our highest-revenue generating customer segment – Fiber Optic users – is also our most prone to churn. This isn't just about losing a customer; it's about losing a significant portion of our potential recurring revenue. It signals a major disconnect between the premium price they pay and the value or experience they receive, making them highly vulnerable to competitive offers or dissatisfaction.

**Key Takeaway**: The high churn among **Fiber Optic** users is not merely a numbers game; it directly impacts our top line. We must urgently investigate the underlying issues (e.g., service consistency, customer support for fiber, feature parity with competitors) to justify the premium price and retain these valuable customers. This segment represents both a major opportunity and a significant threat if ignored.

#### Contract Type: The Ultimate Loyalty Anchor

Earlier, we highlighted that Contract Type is arguably the most impactful factor in churn, with month-to-month customers churning at an alarming **42.7%**, significantly higher than those on one-year (**11.3%**) or two-year (**2.8%**) contracts. The difference in loyalty across contract lengths is staggering.

```python
plt.figure(figsize=(10, 6))
sns.scatterplot(data=df, x='Contract', y='MonthlyCharges', hue='Contract')
plt.title('Scatter plot of Monthly Charges based on Contract type')
plt.xlabel('Contract Type')
plt.ylabel('Monthly Charges')
plt.show()
```

To further understand this phenomenon, we explored if these contract types were simply tied to different spending habits. This scatter plot helps clarify:

![png](/assets/img/churn/output_16_0.png)

What this visualization shows is that customers on Month-to-month, One year, and Two year contracts all span a full range of monthly charges. We have customers paying as little as **20 USD** and as much as **120 USD** on any contract type. This is crucial: it means the higher churn rate for month-to-month customers isn't simply because they pay less or get fewer services. Instead, it strongly indicates that the contract itself – the level of commitment – is an independent and profoundly powerful driver of loyalty."

Customers who commit to longer contracts, regardless of their monthly bill, demonstrate a far greater intention to stay. This commitment acts as a powerful anchor, significantly reducing their likelihood of exploring competitor offers.

**Key Takeaway**: The power of the contract length transcends monthly spending. Encouraging customers to move from month-to-month to longer-term contracts should be a cornerstone of our churn reduction strategy, as it directly fosters stickiness and commitment, independent of service tier or price.

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

##### The "High-Risk, Always Active" (Month-to-month Contracts):

This first graph shows the churn percentage for our month-to-month customers across their tenure. The pattern is stark:

```python
plot_churn_by_tenure(monthly, 'Month-to-month')
```

![png](/assets/img/churn/output_18_1.png)

We see an extremely high churn spike in the very early months, often exceeding [X]% in the 0-2 month bin. This highlights a critical 'first impression' or 'early value' challenge. Customers are quick to leave if their initial experience or perceived value doesn't meet expectations.

* While the churn rate somewhat stabilizes after this initial period, it remains elevated across the entire customer lifecycle, significantly higher than for customers on longer contracts. Even a customer who has been with us for 1-2 years on a month-to-month plan still presents a tangible churn risk because of the low friction to switch."

**Key Takeaway for Month-to-month**: The urgent priority is proactive onboarding and early engagement to reduce immediate churn. For established month-to-month customers, constant vigilance and value reinforcement are critical, as they perpetually remain in a 'switch-ready' state.

##### The "Mid-Term Stability" (One-year Contracts):

```python
plot_churn_by_tenure(one_year, 'One year')
```

In contrast, when we look at customers on one-year contracts, the picture shifts dramatically. Their churn rates across tenure are significantly lower than month-to-month customers. We might observe a subtle increase in churn likelihood as they approach their contract renewal date (e.g., around 10-12 months or 22-24 months, for those renewing), but the overall stability is much greater.

![png](/assets/img/churn/output_19_1.png)

**Key Takeaway for One-year**: These customers represent a much more stable segment. Retention efforts should focus on timely and attractive renewal offers to secure their commitment for another term, preempting competition.

##### The "Loyalty Cornerstone" (Two-year Contracts):

```python
plot_churn_by_tenure(two_year, 'Two year')  
```

Finally, our two-year contract customers are truly the cornerstone of our stable customer base. Their churn rates are remarkably low across virtually all tenure bins, often remaining in the single digits. These customers are highly committed and likely deeply integrated with our services.

![png](/assets/img/churn/output_20_1.png)

**Key Takeaway for Two-year**: While these customers are highly loyal, we must not take them for granted. Continuous appreciation, exclusive long-term benefits, and seamless renewal processes are essential to maintain this invaluable segment.

### The Verdict: A Clear Path Forward

Our deep dive into the silent exodus of customers has painted a vivid picture. We've moved beyond simply knowing that customers are leaving, to precisely understanding who they are, what services drive their dissatisfaction, and when they are most likely to churn.

The evidence is clear:

Month-to-month contracts are our Achilles' heel, acting as a perpetual churn risk, especially in the crucial early months of a customer's journey.
Our Fiber Optic service, despite its premium nature, is a hidden churn hotbed, indicating a critical disconnect between perceived value and actual experience for our highest-paying customers.
Key demographics like Senior Citizens and customers without partners or dependents are significantly more vulnerable, revealing unaddressed needs within these segments.
Conversely, long-term contracts and the adoption of value-added services act as powerful anchors, fostering deep loyalty.
This isn't a random outflow; it's a series of identifiable patterns. We now possess the intelligence to transform this 'leaky bucket' into a well-sealed reservoir of loyal customers. The time for passive observation is over. The data not only highlights our vulnerabilities but also illuminates the precise pathways to intervention. Our next step is to translate these insights into a targeted, proactive 'Rescue Plan' that secures our customer base and propels TelcoX towards sustainable growth.
