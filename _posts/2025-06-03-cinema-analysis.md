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

```sql
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

***

1. `monthly_visits`: This column indicates the average number of times a customer visits the cinema per month. It's a crucial indicator of customer frequency. High monthly_visits suggest a highly engaged customer who might benefit significantly from an annual subscription. It also helps estimate the potential increase in footfall that could lead to more bar sales.
2. `annual_ticket_expense`: This column represents the total amount of money a customer spends on cinema tickets over a full year. It's a direct measure of a customer's loyalty and engagement with the cinema's core offering. This is the primary metric used for segmenting customers (high vs. low spenders) and is critical for assessing the potential revenue shift with an annual subscription.
3. `annual_bar_expense`:
4. `annual_total_expense`:
5. `bar_expense_per_visit`: This column represents the average amount of money a customer spends at the cinema's bar (or concession stand) during a single visit. This is a vital metric for understanding secondary revenue streams. While the annual subscription might fix ticket revenue, increased visits (driven by the subscription) could directly boost bar sales, which often have higher profit margins.
6. `monthly_visits_m0`:
7. `monthly_visits_m6`:

***

### Setting the Stage – Getting to Know Our Audience for the Annual Pass

As we embark on the exciting journey of pricing our brand-new Annual Cinema Subscription, the first crucial step is to truly understand our existing audience. Who are they? How do they engage with our cinema? And, most importantly, how do their spending habits differ?

To answer these questions, we turn to our trusty database, specifically our `tickets` table – the heart of our customer behavior data.

#### The First Glance at Our Data:

Before diving into complex analysis, it’s always wise to take a peek at the raw material. My first SQL command is simple yet essential:

```sql
USE cinema;
SELECT * FROM tickets;
```

This command opens up our `cinema` database and then asks for a full display of every single customer entry in our `tickets` table. It's like spreading out all our customer files on a big table, getting a feel for the breadth and depth of the information we have. We see columns like `user_id`, `monthly_visits`, `annual_ticket_expense`, `annual_bar_expense`, `annual_total_expense``, and `bar_expense_per_visit` – each a piece of the puzzle about our patrons.

#### Defining Our Strategic Boundaries:

```sql
SET @P = 400.0;
SET @R = 1.0;
```

Here, `@P` becomes our pivot point – a critical threshold set at `400.0` (perhaps indicating $400 or €400 in annual ticket spending). This number is more than just a figure; it represents our idea of what constitutes a "high-spending" customer, or perhaps even a potential target price for our annual subscription. The `@R` variable, set at 1.0, is currently a placeholder for a future mathematical nuance, ready to influence how we model subscription adoption later on.

***

### Unveiling the Segments – Who Are Our Customers, Really?

Now that we've glimpsed our data and set our key thresholds, it's time for the magic of segmentation. We want to categorize our customers based on their annual ticket spending, creating distinct groups that we can then analyze in detail. This is where our first **Common Table Expression (CTE)** comes into play – a powerful SQL tool that helps us organize complex queries into logical, readable steps.

#### Building Our Customer Segments: The `segmented_users` CTE

Our first CTE, aptly named segmented_users, is all about classifying each individual customer:

```sql
WITH segmented_users AS (
    SELECT *,
        CASE
            WHEN annual_ticket_expense < @P THEN 'Segment 1'
            ELSE 'Segment 2'
        END AS segment
    FROM tickets t
)
```

Think of this as establishing our core customer profiles. For every single customer in our `tickets` table, we're performing a simple check:

* If their `annual_ticket_expense` falls below our `@P` threshold of `400.0`, they are gently placed into `Segment 1`. These are our foundational customers, perhaps those who visit occasionally or spend moderately.
* If their `annual_ticket_expense` is equal to or above `@P`, they join `Segment 2`. These are our higher-value patrons, those who already show significant engagement.

This `segmented_users` CTE doesn't change our original data; it simply creates a temporary, organized view of our customers, each now clearly labeled with their segment type. This setup is fundamental, as it provides the framework for all our subsequent analysis.

***

### Profiling Our Segments – What Do These Groups Look Like?

Once our customers are neatly categorized into `Segment 1` and `Segment 2`, the natural next question is: "What are the typical characteristics of each group?" To answer this, we need to summarize their collective behaviors. This is where our main `SELECT` statement comes in, leveraging the power of aggregation.

#### Summarizing Behavior: The Final SELECT Statement

This final part of the query takes the segmented data and crunches the numbers:

```sql
SELECT
    segment,
    COUNT(*) AS num_users,
    ROUND(AVG(annual_ticket_expense), 2) AS avg_annual_ticket_expense,
    ROUND(AVG(monthly_visits), 2) AS avg_monthly_visits,
    ROUND(AVG(bar_expense_per_visit), 2) AS avg_bar_expense_per_visit
FROM segmented_users
GROUP BY segment;
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
      <th>segment</th>
      <th>num_users</th>
      <th>avg_annual_ticket_expense</th>
      <th>avg_monthly_visits</th>
      <th>avg_bar_expense_per_visit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Segment 1</td>
      <td>847</td>
      <td>198.9</td>
      <td>2.07</td>
      <td>4.11</td>
    </tr>
        <tr>
      <td>Segment 2</td>
      <td>153</td>
      <td>547.14</td>
      <td>5.7</td>
      <td>4.02</td>
    </tr>
  </tbody>
</table>
</div>

***

Here's how we're breaking it down:

* We're selecting the `segment` type itself, so we can see the results for each group.
* `num_users`: This simply counts how many customers fall into each segment. It tells us the size of each audience group.
* `avg_annual_ticket_expense`: For each segment, we calculate the average amount customers spend on tickets annually. This is crucial for understanding the current value of each segment and for informing how attractive a subscription price might be to them.
* `avg_monthly_visits`: We then look at the average number of times customers in each segment visit the cinema per month. This helps us gauge their frequency and potential engagement levels.
* `avg_bar_expense_per_visit`: Finally, we determine the average amount customers in each segment spend at the bar or concession stand during a single visit. This is vital for understanding non-ticket revenue potential.

The `GROUP BY segment` clause ensures that all these average calculations are performed separately for 'Segment 1' and 'Segment 2', giving us distinct profiles for each.

#### Why This Matters for Pricing:

This output is incredibly valuable. It paints a clear picture:

* We can see how many customers we have in each spending tier.
* We immediately get a sense of their typical annual ticket spend – a direct reference point for our subscription price.
* Their visit frequency and bar spending habits give us insights into their overall engagement and the potential for secondary revenue gains if they adopt an annual pass.

By understanding these fundamental differences, we're well-equipped to start thinking about a subscription price that appeals to our "Segment 1" by offering perceived savings, and provides continued value (or prevents churn) for our "Segment 2" top spenders. This is the first crucial step in data-driven pricing!

### Gauging the "Fit" – Understanding Customer Incentive for the Annual Pass

Having segmented our customers and profiled their general spending habits, the next vital step is to understand how well our potential annual subscription price (represented by `@P`) aligns with their current spending. How "ready" are they, on average, for a fixed annual fee? This is where a crucial metric, which I've called `incentivo_medio`, comes into play.

We reuse our established variables and the `segmented_users` framework from our previous analysis:

```sql

WITH segmented_users AS (
    SELECT *,
        CASE
            WHEN annual_ticket_expense < @P THEN 'Segment 1'
            ELSE 'Segment 2'
        END AS segment
    FROM tickets
)

SELECT
    segment,
    ROUND(LEAST(AVG(annual_ticket_expense) / @P, 1), 3) AS avg_incentive
FROM segmented_users
GROUP BY segment;

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
        text-align: middle;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>segment</th>
      <th>avg_incentive</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Segment 1</td>
      <td>0.497</td>
    </tr>
        <tr>
      <td>Segment 2</td>
      <td>1.0</td>
    </tr>
  </tbody>
</table>
</div>
