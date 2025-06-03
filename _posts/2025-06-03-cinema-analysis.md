---
layout: post
title: "Customer Segmentation and Consumption Behavior Analysis in the Entertainment Industry (Cinema)"
---

In the dynamic entertainment industry, understanding customer behavior is crucial for designing effective marketing strategies, improving user experience, and optimizing profitability. This project focuses on the cinema sector, utilizing transactional ticket data to identify consumption patterns.

## The Problem / Business Question

The primary goal was to innovate product offerings and generate recurring revenue, by proposing an optimal price for a new annual subscription. Segment customers based on their annual ticket expenditure to identify different consumption profiles and, from there, understand their habits related to monthly visits and bar spending. The key question was: "Based on our customers' current spending habits and visit frequency, what is the optimal pricing strategy for a new annual cinema subscription that offers value to our patrons while generating recurring revenue?"

## Dataset introduction

The core of this analysis relies on a dataset (represented by the tickets table) which consolidates key behavioral metrics for each customer. Below is an explanation of the critical columns used:

### Understanding the tickets Table

The tickets table serves as the foundation for our customer segmentation and financial impact modeling. Each row in this table typically corresponds to a single customer, providing a summarized view of their interactions with the cinema over a period (e.g., a year).

**Here are the key columns and their interpretations:**

```SQL
SELECT * FROM tickets LIMIT 10;
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
      <th>user_id</th>
      <th>monthly_visits</th>
      <th>annual_ticket_expense</th>
      <th>annual_bar_expense</th>
      <th>annual_total_expense</th>
      <th>bar_expense_per_visit</th>
      <th>monthly_visits_m0</th>
      <th>monthly_visits_m6</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>2.0</td>
      <td>192.0</td>
      <td>100.2650</td>
      <td>292.265</td>
      <td>4.17770</td>
      <td>2.0</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>6.0</td>
      <td>576.0</td>
      <td>191.8550</td>
      <td>767.855</td>
      <td>2.66466</td>
      <td>6.0</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>3.0</td>
      <td>288.0</td>
      <td>157.6870</td>
      <td>445.687</td>
      <td>4.38020</td>
      <td>3.0</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>3.0</td>
      <td>288.0</td>
      <td>165.9810</td>
      <td>453.981</td>
      <td>4.61059</td>
      <td>3.0</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>1.0</td>
      <td>96.0</td>
      <td>54.7175</td>
      <td>150.717</td>
      <td>4.55979</td>
      <td>1.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>6</td>
      <td>1.0</td>
      <td>96.0</td>
      <td>60.9694</td>
      <td>156.969</td>
      <td>5.08078</td>
      <td>1.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>7</td>
      <td>1.0</td>
      <td>96.0</td>
      <td>58.0071</td>
      <td>154.007</td>
      <td>4.83392</td>
      <td>1.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>7</th>
      <td>8</td>
      <td>5.0</td>
      <td>480.0</td>
      <td>267.5510</td>
      <td>747.551</td>
      <td>4.45918</td>
      <td>5.0</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>8</th>
      <td>9</td>
      <td>3.0</td>
      <td>288.0</td>
      <td>141.4740</td>
      <td>429.474</td>
      <td>3.92983</td>
      <td>3.0</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>9</th>
      <td>10</td>
      <td>3.0</td>
      <td>288.0</td>
      <td>84.2054</td>
      <td>372.205</td>
      <td>2.33904</td>
      <td>3.0</td>
      <td>4.0</td>
    </tr>
  </tbody>
</table>
</div>


1. `monthly_visits`: This column indicates the average number of times a customer visits the cinema per month. It's a crucial indicator of customer frequency. High monthly_visits suggest a highly engaged customer who might benefit significantly from an annual subscription. It also helps estimate the potential increase in footfall that could lead to more bar sales.
2. `annual_ticket_expense`: This column represents the total amount of money a customer spends on cinema tickets over a full year. It's a direct measure of a customer's loyalty and engagement with the cinema's core offering. This is the primary metric used for segmenting customers (high vs. low spenders) and is critical for assessing the potential revenue shift with an annual subscription.
3. `annual_bar_expense`:
4. `annual_total_expense`:
5. `bar_expense_per_visit`: This column represents the average amount of money a customer spends at the cinema's bar (or concession stand) during a single visit. This is a vital metric for understanding secondary revenue streams. While the annual subscription might fix ticket revenue, increased visits (driven by the subscription) could directly boost bar sales, which often have higher profit margins.
6. `monthly_visits_m0`:
7. `monthly_visits_m6`:
