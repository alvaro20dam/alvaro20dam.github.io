---
layout: post
date: "2024-10-23"
title: "Customer Segmentation and Consumption Behavior Analysis in the Entertainment Industry (Cinema)"
---

In the dynamic entertainment industry, understanding customer behavior is crucial for designing effective marketing strategies, improving user experience, and optimizing profitability. This project focuses on the cinema sector, utilizing transactional ticket data to identify consumption patterns.

## The Problem / Business Question

The primary goal was to innovate product offerings and generate recurring revenue, by proposing an optimal price for a new annual subscription. Segment customers based on their annual ticket expenditure to identify different consumption profiles and, from there, understand their habits related to monthly visits and bar spending. The key question was: "Based on our customers' current spending habits and visit frequency, what is the optimal pricing strategy for a new **annual cinema subscription** that offers value to our patrons while generating recurring revenue?"

## Dataset introduction

The core of this analysis relies on a dataset (represented by the tickets table) which consolidates key behavioral metrics for each customer. Below is an explanation of the critical columns used:

### Understanding the tickets Table

The tickets table serves as the foundation for our customer segmentation and financial impact modeling. Each row in this table typically corresponds to a single customer, providing a summarized view of their interactions with the cinema over a period (e.g., a year).






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
      <th>user_id</th>
      <th>monthly_visits</th>
      <th>annual_ticket_expense</th>
      <th>annual_bar_expense</th>
      <th>annual_total_expense</th>
      <th>bar_expense_per_visit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2.0</td>
      <td>192.0</td>
      <td>100.2650</td>
      <td>292.265</td>
      <td>4.17770</td>
    </tr>
    <tr>
      <td>2</td>
      <td>6.0</td>
      <td>576.0</td>
      <td>191.8550</td>
      <td>767.855</td>
      <td>2.66466</td>
    </tr>
    <tr>
      <td>3</td>
      <td>3.0</td>
      <td>288.0</td>
      <td>157.6870</td>
      <td>445.687</td>
      <td>4.38020</td>
    </tr>
    <tr> 
      <td>4</td>
      <td>3.0</td>
      <td>288.0</td>
      <td>165.9810</td>
      <td>453.981</td>
      <td>4.61059</td>
    </tr>
    <tr>  
      <td>5</td>
      <td>1.0</td>
      <td>96.0</td>
      <td>54.7175</td>
      <td>150.717</td>
      <td>4.55979</td>
    </tr>
    <tr>   
      <td>6</td>
      <td>1.0</td>
      <td>96.0</td>
      <td>60.9694</td>
      <td>156.969</td>
      <td>5.08078</td>
    </tr>
    <tr>  
      <td>7</td>
      <td>1.0</td>
      <td>96.0</td>
      <td>58.0071</td>
      <td>154.007</td>
      <td>4.83392</td>
    </tr>
     <tr>    
      <td>8</td>
      <td>5.0</td>
      <td>480.0</td>
      <td>267.5510</td>
      <td>747.551</td>
      <td>4.45918</td>
    </tr>
    <tr>    
      <td>9</td>
      <td>3.0</td>
      <td>288.0</td>
      <td>141.4740</td>
      <td>429.474</td>
      <td>3.92983</td>
    </tr>
    <tr>    
      <td>10</td>
      <td>3.0</td>
      <td>288.0</td>
      <td>84.2054</td>
      <td>372.205</td>
      <td>2.33904</td>
    </tr>
  </tbody>
</table>
</div>

***

This command opens up our `cinema` database and then asks for a full display of every single customer entry in our `tickets` table. It's like spreading out all our customer files on a big table, getting a feel for the breadth and depth of the information we have. We see columns like `user_id`, `monthly_visits`, `annual_ticket_expense`, `annual_bar_expense`, `annual_total_expense`, and `bar_expense_per_visit` – each a piece of the puzzle about our patrons.

#### Defining Our Strategic Boundaries:

```sql
SET @P = 400.0;
SET @R = 1.0;
```

Here, `@P` becomes our pivot point – a critical threshold set at `$400.0`. This number is more than just a figure; it represents our idea of what constitutes a "high-spending" customer, or perhaps even a potential target price for our annual subscription. The `@R` variable, set at 1.0, **`is currently a placeholder for a future mathematical nuance, ready to influence how we model subscription adoption later on`**.

***

### Unveiling the Segments – Who Are Our Customers, Really?

Now that we've glimpsed our data and set our key thresholds, it's time for the magic of segmentation. We want to categorize our customers based on their annual ticket spending, creating distinct groups that we can then analyze in detail. This is where our first **Common Table Expression (CTE)** comes into play – a powerful SQL tool that helps us organize complex queries into logical, readable steps.

#### Building Our Customer Segments: The `segmented_users` CTE

Our first CTE, aptly named `segmented_users`, is all about classifying each individual customer:

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
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Segment 1</td>
      <td>847</td>
    </tr>
        <tr>
      <td>Segment 2</td>
      <td>153</td>
    </tr>
  </tbody>
</table>
</div>

***

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

Having segmented our customers and profiled their general spending habits, the next vital step is to understand how well our potential annual subscription price (represented by `@P`) aligns with their current spending. How "ready" are they, on average, for a fixed annual fee? This is where a crucial metric, which I've called `avg_incentive`, comes into play.

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

***

#### Deconstructing the `annual_ticket_expense` Metric

This part of the query is quite elegant in how it distills complex behavior into a single, telling number for each segment:

1. `AVG(annual_ticket_expense)`: First, for each segment (`Segment 1` and `Segment 2`), we calculate their average annual ticket expenditure. This gives us the typical spending behavior of customers within that group.

2. `/ @P`: We then divide that average annual spending by our `@P` threshold (which is set at **400.0**). This division directly answers: "On average, what percentage of our target subscription price does this segment already spend annually?"

3. `LEAST(..., 1)`: This is the clever part. The `LEAST` function ensures that the result of the division is never greater than 1.

    * If a segment's average spending is, say, $300, and `@P` is $400, then $300/$400 = 0.75. Their  `avg_incentive` is 0.75.
    * If a segment's average spending is $500, and `@P` is $400, then $500/$400 = 1.25. The `LEAST(1.25, 1)` function caps this at 1.00.
    * **Why cap it at 1?** This makes `avg_incentive` behave like a "completion rate" or "fit score" towards the subscription price. A value of 1 means, on average, the segment either meets or exceeds the proposed subscription price with their current spending, suggesting a very strong alignment. A value less than 1 indicates they are currently spending less than the proposed price.

4. `ROUND(..., 3)`: Finally, we `ROUND` the result to three decimal places for clarity and conciseness in our output.

**What Does `avg_incentive` Tell Us for Pricing?**

When we `GROUP BY segment` and look at the `avg_incentive` for each segment, we gain critical insight:

* For `Segment 1` (**Lower/Medium Spenders**): Their `avg_incentive` will likely be a value less than 1. This tells us, on average, how far below the `@P` threshold their current spending lies. This insight is crucial for understanding the "value proposition" needed for this segment. If their average is, say, 0.50, it means they spend half of what the subscription costs. The annual pass would need to offer substantial perceived value (e.g., unlimited visits, discounts) to bridge that gap and encourage them to increase their spending to `@P`.
* For `Segment 2` (**Higher Spenders**): Their `avg_incentive` will likely be capped at 1.00. This indicates that, on average, these customers already spend at or above our potential subscription price. For this segment, the annual pass isn't about increasing their spend to reach a threshold, but rather about retention and potentially offering convenience or exclusive benefits to maintain their loyalty and ensure they continue to choose our cinema.

This `avg_incentive` metric is a powerful analytical tool. It quantifies the "gap" or "alignment" between current customer behavior and the proposed annual subscription price, directly informing our strategies for attracting and retaining each segment.

***

### The Financial Balancing Act – Projecting Ticket Revenue Impact

As we edge closer to setting a price for our annual subscription, one of the most critical questions we must answer is: how will this new product affect our core ticket revenue? Will we gain more from new subscribers than we might lose from converting existing high-spenders? This next piece of our SQL puzzle is designed to give us that crucial insight, calculating what I've termed `tickets_impact` – the projected impact on ticket revenue for each customer segment.

```sql
SET @P = 400.0; -- Our potential subscription price/segmentation threshold
SET @R = 1.0;   -- Our adoption rate sensitivity factor
```

And we continue to build upon our `segmented_users` CTE, which has already sorted our customers into `Segment 1` (lower-to-medium spenders) and `Segment 2` (higher spenders) based on their `annual_ticket_expense` relative to `@P`.

Now, for the main event – calculating the `tickets_impact`:

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
    CASE
        WHEN segment = 'Segment 1' THEN COUNT(*) *
            POW(LEAST(AVG(annual_ticket_espense) / @P, 1), @R) *
            (@P - AVG(annual_ticket_espense))
        WHEN segment = 'Segment 2' THEN - COUNT(*) *
            POW(LEAST(AVG(annual_ticket_espense) / @P, 1), @R) *
            (AVG(annual_ticket_espense) - @P)
    END AS tickets_impact
FROM segmented_users
GROUP BY segment;
```

#### Understanding `tickets_impact`: A Tale of Two Segments

This query performs a sophisticated calculation, broken down by our two customer segments, to estimate the financial shift in ticket revenue:

1. **The Common Foundation: Estimated Adopters**
For both segments, a key component is COUNT(*) * POW(LEAST(AVG(annual_ticket_expense) / @P, 1), @R). This is essentially our modeled number of adopters within each segment.
    * `COUNT(*)`: Represents the total number of users in that segment.
    * `LEAST(AVG(annual_ticket_expense) / @P, 1)`: As we explored with `incentivo_medio`, this calculates how much a segment's average spending aligns with or exceeds our `@P` threshold (capped at 1.00). This effectively acts as a "fit score".
    * `POW(..., @R)`: This applies our `@R` factor (currently 1.0, meaning the adoption rate is directly proportional to the "fit score") to model the percentage of users in that segment we expect to purchase the annual subscription.
    * `Multiplying COUNT(*)`: by this result gives us the estimated number of customers from that segment who will become annual subscribers.

2. **`Segment 1` Impact: The Potential Gain**

    * (`@P` - `AVG(annual_ticket_expense`)): For customers in `Segment 1` (those currently spending less than `@P`), this calculates the difference between the annual subscription price (`@P`) and what they currently spend on tickets annually. This is a positive value, representing the additional revenue per customer we'd gain if they convert to the subscription.
    * The total impact for `Segment 1` is positive: It multiplies the estimated number of adopters in this segment by this per-customer gain. This tells us the total projected increase in ticket revenue from converting lower-spending customers into subscribers.

3. **`Segment 2` Impact: The Potential Loss**

      * `(AVG(annual_ticket_expense) - @P)`: For customers in `Segment 2` (those already spending more than or equal to @P), this calculates the difference between their current higher annual spending and the subscription price (`@P`). This results in a negative value when multiplied because if these high-spenders switch to the subscription, they will now be paying a fixed `@P` instead of their higher previous variable spend.
      * The total impact for `Segment 2` is negative: It multiplies the estimated number of adopters in this segment by this per-customer "loss." This tells us the total projected reduction in ticket revenue from our highest-spending customers if they adopt the annual pass. The negative sign explicitly indicates a revenue cannibalization.

***

#### The Story These Numbers Tell

| segment   | tickets_impact |
| --------- | -------------- |
| Segment 1 | 84,696.35      |
| Segment 2 | -22,512.00     |

(Results from our SQL query, rounded for readability)

Let's unpack these numbers, which are the projected shifts in our annual ticket revenue if we launch the subscription at our `@P` price of $400.0.

1. `Segment 1`: The Growth Engine (+$84,696.35)

    * For `Segment 1`, our lower-to-medium spending customers, `the tickets_impact` is a significant positive value of $84,696.35.
    * What this means: This is the projected gain in annual ticket revenue stemming from this segment. It suggests that by offering the annual subscription at 400, we anticipate converting a portion of these customers. These new subscribers, who previously spent less than 400 per year on tickets, will now be contributing the full $400 annually. This represents a substantial increase in predictable revenue from a segment that wasn't previously maximizing their ticket expenditure with us. This is the upside of the subscription model – expanding our revenue base by upgrading casual spenders.

2. `Segment 2`: The Cannibalization Factor (-$22,512.00)

    * Conversely, for `Segment 2`, our high-spending, most loyal customers, the `tickets_impact` is a negative value of -$22,512.00.
    * What this means: This represents the projected reduction or cannibalization of our annual ticket revenue from this segment. These customers already spend significantly more than $400 per year on tickets. If they opt for the $400 annual subscription, we will now receive a fixed $400 from them, instead of their previous higher variable spending. This is the downside – a trade-off where we sacrifice a portion of our existing high-value revenue for the predictability and loyalty benefits of a subscription model.

**The Net Impact: A Positive Outlook (+62,184.35)**
To get the full picture, we simply sum the impacts from both segments:
$$84,696.35 (Segment 1) - 22,512.00 (Segment 2) = 62,184.35$$

This calculation reveals a net positive projected impact on our annual ticket revenue of approximately 62,184.35 if we introduce the subscription at the 400 price point.

**Business Implications and Next Steps**:
These numbers provide powerful insights for our pricing decision:

* Overall Profitability: At this @P of $400, our model suggests that the gains from converting lower-to-medium spenders significantly outweigh the losses from our highest spenders. This is a very encouraging sign for the direct financial viability of the annual subscription.
* Strategic Trade-off: While there's a revenue dip from Segment 2, it's important to remember that the subscription also offers benefits beyond just ticket revenue, such as increased customer loyalty, more predictable cash flow, and (crucially) potentially higher bar sales due to increased visits (which we'll model next!).
* Validation: This analysis provides a data-driven justification for pursuing the annual subscription at a price point around $400, showing that it could be a net positive for ticket revenue.
* Further Refinement: These are projections based on our current assumptions (especially the adoption rate model). The next steps would involve deeper analysis, perhaps refining our @R factor, considering the total impact on bar revenue, and eventually, A/B testing different price points in a real-world scenario.

This quantitative look at `tickets_impact` is a cornerstone of our recommendation, providing solid financial grounding for our strategic move.

### Unlocking Hidden Value – Projecting Bar Revenue Impact

While the annual subscription directly impacts ticket revenue, its true power often lies in encouraging more frequent visits. More visits mean more opportunities for customers to grab popcorn, drinks, or a snack from our bar – a significant secondary revenue stream for any cinema. Our next SQL query is designed to quantify this "ripple effect," calculating what I've termed `bar_impact`.

We'll continue to use our familiar parameters:

```sql
SET @P = 400.0; -- Our potential subscription price/segmentation threshold
SET @R = 1.0;   -- Our adoption rate sensitivity factor
```

And, as always, we build upon our `segmented_users` Common Table Expression, which has already sorted our customers into `Segment 1` and `Segment 2` based on their annual ticket expenditure.

Here's the powerful query that estimates the `bar_impact`:

```sql
WITH segmented_users AS (
    SELECT *,
        CASE
            WHEN annual_ticket-expense < @P THEN 'Segment 1'
            ELSE 'Segment 2'
        END AS Segment
    FROM entradas
)

SELECT
    Segment,
    CASE
        WHEN Segment = 'Segment 1' THEN COUNT(*) *
            POW(LEAST(AVG(annual_ticket-expense) / @P, 1), @R) *
            12 * AVG(bar_expense_per_visit)
        WHEN Segment = 'Segment 2' THEN COUNT(*) *
            POW(LEAST(AVG(annual_ticket-expense) / @P, 1), @R) *
            (AVG(monthly_visits * 12) * 0.1) * AVG(bar_expense_per_visit)
    END AS bar_impact`
FROM segmented_users
GROUP BY Segment;
```

***

#### Understanding `bar_impact`: The Boost from the Bar

This query estimates the total projected change in our annual bar revenue, broken down by how each segment is expected to behave once they become subscribers:

1. **The Common Foundation: Estimated Adopters & Bar Spending Per Visit**
Just like with ticket impact, the calculation for both segments begins with the modeled number of adopters within each group (COUNT(*) * POW(LEAST(AVG(annual_ticket-expense) / @P, 1), @R)). This part remains consistent, representing the expected number of people from each segment who will buy the annual pass.
We then multiply this by AVG(bar_expense_per_visit), which is the average amount a customer spends at the bar during a single visit. The key difference here is how we project their total annual visits once they're subscribers.

2. **`Segment 1` Impact: Encouraging More Visits (The Fixed Increase)**

    * `12 * AVG(bar_expense_per_visit)`: For our `Segment 1` customers (the lower-to-medium spenders who are less frequent visitors), the model assumes that once they buy an annual subscription, they will significantly increase their visits to a base of 12 times a year (representing an average of once a month). This is a strong assumption, but it's a common goal for subscription models: to boost engagement and frequency from this segment.
    * The total impact for `Segment 1` is positive: It multiplies the estimated number of `Segment 1` adopters by their bar spending per visit, projected over 12 annual visits. This quantifies the anticipated increase in bar revenue from a segment that will now likely visit more often.

3. **`Segment 2` Impact: Nudging Already Frequent Visitors (The Proportional Increase)**

    * (AVG(`monthly_visits` $* 12) * 0.1) * $AVG(`bar_expense_per_visit`): For `Segment 2` customers (our existing high-frequency visitors), we apply a more nuanced approach. We take their existing AVG(`monthly_visits`), annualize it (* 12), and then multiply it by a 0.1 (or 10%) factor.
    * What this 0.1 means: This implies that even for our already frequent visitors, the unlimited access offered by the annual subscription might lead to a modest increase (e.g., 10%) in their annual visits. Even a small proportional increase from a high base of visits can translate into significant additional bar sales.
    * The total impact for `Segment 2` is positive: It multiplies the estimated number of `Segment 2` adopters by their average bar spending per visit, applied to their (slightly increased) projected annual visits.

#### Why This Matters for Pricing

The `bar_impact` calculation is absolutely crucial because:

* **Holistic Profitability**: It reminds us that ticket sales are only one part of the revenue equation. Bar sales often boast higher profit margins, and a subscription that drives foot traffic can significantly boost overall profitability, even if ticket revenue changes.
* **True Value of Subscription**: For `Segment 1`, the subscription's value is not just in ticket access, but in encouraging a new habit of visiting and spending more at our concessions. For `Segment 2`, it's about capitalizing on their existing loyalty and converting small increases in visits into substantial additional bar revenue.
* **Informing the Price**: The combined `tickets_impact` and `bar_impact` will give us the full picture of the projected financial health of our annual subscription at our chosen price point. A price might result in a slight ticket revenue loss from Segment 2 but be more than offset by significant gains in bar revenue across both segments.

This detailed projection of bar revenue highlights the interconnectedness of our cinema's revenue streams and provides essential context for making an informed, profit-maximizing decision on the annual subscription price.

#### The Sweet Spot – Boosting Bar Revenue and Finding Overall Profitability

We've explored the direct ticket revenue impact of our proposed annual subscription, noting potential gains from `Segment 1` (lower spenders) and potential losses from `Segment 2` (high spenders). But for a cinema, tickets are only part of the story. The bar and concession stand are crucial revenue drivers, and a subscription that encourages more frequent visits can significantly boost these sales.

Our latest SQL query, which calculates ``bar_impact``, provides us with these vital projections.

Here's what the results look like:

| segment   | bar_impact |
| --------- | ---------- |
| Segment 1 | 20,769.42  |
| Segment 2 | 4,202.38   |

Alright, let's bring our financial modeling to a thrilling conclusion by examining the projected impact on our highly valuable bar revenue! This is where the magic of encouraging more visits through an annual subscription truly shines.

Chapter 7: The Sweet Spot – Boosting Bar Revenue and Finding Overall Profitability
We've explored the direct ticket revenue impact of our proposed annual subscription, noting potential gains from Segment 1 (lower spenders) and potential losses from Segment 2 (high spenders). But for a cinema, tickets are only part of the story. The bar and concession stand are crucial revenue drivers, and a subscription that encourages more frequent visits can significantly boost these sales.

Our latest SQL query, which calculates `bar_impact`, provides us with these vital projections.

Here's what the results look like:

| Segment   | bar_impact |
| --------- | ---------- |
| Segment 1 | 20,769.42  |
| Segment 2 | 4,202.38   |

(Results from our SQL query, as shown in the image, rounded for readability)

Let's interpret these positive figures and understand the powerful story they tell about our new annual pass.

#### Understanding the Bar's Contribution

1. **`Segment 1`: The New Bar Enthusiasts (+$20,769.42)**

    * For `Segment 1`, our lower-to-medium spending customers, the `bar_impact` is a healthy positive $20,769.42.
    * What this means: This projected gain arises from the assumption that these new subscribers, once they have "free" tickets, will increase their visit frequency (e.g., to an average of 12 times a year). Each of those increased visits is an opportunity for them to spend at the bar, adding significant new revenue that wasn't there before. This is a direct benefit of the subscription enticing them to engage more deeply with our entire cinema experience.

2. **`Segment 2`: Leveraging Existing Loyalty (+$4,202.38)**

    * For `Segment 2`, our already high-frequency and high-spending customers, the `bar_impact` is also a positive $4,202.38.
    * What this means: While these customers are already frequent visitors, our model (with the 10% visit increase factor) suggests that the unlimited access of the subscription might nudge them to visit just a little bit more often. Even a small proportional increase from an already high base of visits, combined with their consistent bar spending per visit, translates into a valuable boost to our bar revenue. It's about maximizing the value from our most loyal patrons.

#### The Combined Force: Unlocking Overall Profitability

| segment     | tickets_impact   | bar_impact    | total_impact   |
| ----------- | ---------------- | ------------- | -------------- |
| Segment 1   | 84,696.35        | 20,769.42     | 105,465.77     |
| Segment 2   | -22,512.00       | 4,202.38      | -18,309.62     |
| ----------- | ---------------- | ------------- | -------------- |
| **TOTAL**   | **62,184.35**    | **24,971.79** | **87,156.14**  |

When we combine these bar revenue gains:
\$20,769.42 (from Segment 1) + $4,202.38 (from Segment 2) = **\$24,971.80**

This shows a net positive projected impact on our annual bar revenue of approximately $24,971.80 if we introduce the subscription at the \$400 price point.

Now, let's put it all together. From our previous analysis, we saw a net positive impact on ticket revenue of approximately $62,184.35. Adding the bar impact:

Total Projected Annual Impact = Ticket Impact + Bar Impact
Total Projected Annual Impact = $62,184.35 + $24,971.80 = $87,156.15

#### The Grand Conclusion: A Strong Case for the Annual Subscription

This comprehensive modeling paints a compelling picture:

* **Positive Net Revenue:** At the `@P` price of \$400, our analysis projects a significant overall positive impact on our annual revenue – approximately \$87,156.15. This strong financial projection makes a powerful case for launching the annual subscription.
* **Beyond Tickets:** It underscores that the value of an annual pass isn't just about the direct ticket revenue, but also about its ability to drive foot traffic, increase engagement, and, crucially, boost high-margin secondary sales like those from the bar.
* **Strategic Growth:** The subscription model acts as a strategic tool to convert occasional visitors into loyal, frequent patrons (`Segment 1`), while potentially deepening engagement even with our already dedicated audience (`Segment 2`).

Based on this data-driven financial modeling, the introduction of an annual cinema subscription at a price point around $400 appears to be a highly viable and potentially very profitable venture for our business. It's a strategic move that leverages our customer data to foster loyalty and unlock new revenue streams.

[Link to Tableau Dashboard](https://public.tableau.com/views/AirBnbNYC_17025892098900/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link)

[Another Link this time in Power BI](https://netorgft6656994-my.sharepoint.com/:u:/g/personal/alexander_grotool_com/EQnTmfqbmvhJvUlJuZkq4s0BjWvC_VImK5iBUlU9MfmyVQ?e=YUpGM8)

![power bi png](/assets/img/cinema/graphic-data.PNG)
"foto"
