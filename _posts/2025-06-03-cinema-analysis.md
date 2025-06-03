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
|user_id|monthly_visits|annual_ticket_expense|annual_bar_expense|annual_total_expense|bar_expense_per_visit|monthly_visits_m0|monthly_visits_m6|
|------:|-------------:|--------------------:|-----------------:|-------------------:|--------------------:|-----------------:|-----------------:|
|1|2.0|192.0|100.265|292.265|4.1777|2.0|2.0|
|2|6.0|576.0|191.855|767.855|2.66466|6.0|5.0|
|3|3.0|288.0|157.687|445.687|4.3802|3.0|4.0|
|4|3.0|288.0|165.981|453.981|4.61059|3.0|3.0|
|5|1.0|96.0|54.7175|150.717|4.55979|1.0|1.0|
|6|1.0|96.0|60.9694|156.969|5.08078|1.0|1.0|
|7|1.0|96.0|58.0071|154.007|4.83392|1.0|1.0|
|8|5.0|480.0|267.551|747.551|4.45918|5.0|4.0|
|9|3.0|288.0|141.474|429.474|3.92983|3.0|4.0|
|10|3.0|288.0|84.2054|372.205|2.33904|3.0|4.0|

1. `monthly_visits`: This column indicates the average number of times a customer visits the cinema per month. It's a crucial indicator of customer frequency. High monthly_visits suggest a highly engaged customer who might benefit significantly from an annual subscription. It also helps estimate the potential increase in footfall that could lead to more bar sales.

2. `annual_ticket_expense`: This column represents the total amount of money a customer spends on cinema tickets over a full year. It's a direct measure of a customer's loyalty and engagement with the cinema's core offering. This is the primary metric used for segmenting customers (high vs. low spenders) and is critical for assessing the potential revenue shift with an annual subscription.

3. `bar_expense_per_visit`: This column represents the average amount of money a customer spends at the cinema's bar (or concession stand) during a single visit. This is a vital metric for understanding secondary revenue streams. While the annual subscription might fix ticket revenue, increased visits (driven by the subscription) could directly boost bar sales, which often have higher profit margins.
