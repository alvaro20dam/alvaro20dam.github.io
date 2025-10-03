---
layout: post
date: "2024-10-03"
title: "Retail Sales Analysis SQL Project"
---

This project is designed to demonstrate SQL skills and techniques typically used by data analysts to explore, clean, and analyze retail sales data. The project involves setting up a retail sales database, performing exploratory data analysis (EDA), and answering specific business questions through SQL queries. This project is ideal for those who are starting their journey in data analysis and want to build a solid foundation in SQL.

## Project Overview

**Project Title**: Retail Sales Analysis  
**Level**: Beginner  
**Database**: `p1_retail_db`

## Objectives

1. **Set up a retail sales database**: Create and populate a retail sales database with the provided sales data.
2. **Data Cleaning**: Identify and remove any records with missing or null values.
3. **Exploratory Data Analysis (EDA)**: Perform basic exploratory data analysis to understand the dataset.
4. **Business Analysis**: Use SQL to answer specific business questions and derive insights from the sales data.

## Project Structure

### 1. Database Setup

- **Database Creation**: The project starts by creating a database named `p1_retail_db`.
- **Table Creation**: A table named `retail_sales` is created to store the sales data. The table structure includes columns for transaction ID, sale date, sale time, customer ID, gender, age, product category, quantity sold, price per unit, cost of goods sold (COGS), and total sale amount.

    ```sql
    CREATE DATABASE p1_retail_db;

    CREATE TABLE retail_sales
    (
        transactions_id INT PRIMARY KEY,
        sale_date DATE,
        sale_time TIME,
        customer_id INT,
        gender VARCHAR(10),
        age INT,
        category VARCHAR(35),
        quantity INT,
        price_per_unit FLOAT,
        cogs FLOAT,
        total_sale FLOAT
    );
    ```

### 2. Data Exploration & Cleaning

- **Record Count**: Determine the total number of records in the dataset.
- **Customer Count**: Find out how many unique customers are in the dataset.
- **Category Count**: Identify all unique product categories in the dataset.
- **Null Value Check**: Check for any null values in the dataset and delete records with missing data.

    ```sql
    SELECT COUNT(*) FROM retail_sales;
    SELECT COUNT(DISTINCT customer_id) FROM retail_sales;
    SELECT DISTINCT category FROM retail_sales;

    SELECT * FROM retail_sales
    WHERE 
        sale_date IS NULL OR sale_time IS NULL OR customer_id IS NULL OR 
        gender IS NULL OR age IS NULL OR category IS NULL OR 
        quantity IS NULL OR price_per_unit IS NULL OR cogs IS NULL;

    DELETE FROM retail_sales
    WHERE 
        sale_date IS NULL OR sale_time IS NULL OR customer_id IS NULL OR 
        gender IS NULL OR age IS NULL OR category IS NULL OR 
        quantity IS NULL OR price_per_unit IS NULL OR cogs IS NULL;
    ```

### 3. Data Analysis & Findings

The following SQL queries were developed to answer specific business questions:

1. **Write a SQL query to retrieve all columns for sales made on '2022-11-05**:

    ```sql

    SELECT *
    FROM retail_sales
    WHERE sale_date = '2022-11-05';
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
      <th>transactions_id</th>
      <th>sale_date</th>
      <th>sale_time</th>
      <th>customer_id</th>
      <th>gender</th>
      <th>age</th>
      <th>category</th>
      <th>quantiy</th>
      <th>price_per_unit</th>
      <th>cogs</th>
      <th>total_sale</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>180</td>
      <td>2022-11-05</td>
      <td>10:47:00</td>
      <td>117</td>
      <td>Male</td>
      <td>41.0</td>
      <td>Clothing</td>
      <td>3.0</td>
      <td>300.0</td>
      <td>129.00</td>
      <td>900.0</td>
    </tr>
    <tr>
      <th>190</th>
      <td>240</td>
      <td>2022-11-05</td>
      <td>11:49:00</td>
      <td>95</td>
      <td>Female</td>
      <td>23.0</td>
      <td>Beauty</td>
      <td>1.0</td>
      <td>300.0</td>
      <td>123.00</td>
      <td>300.0</td>
    </tr>
    <tr>
      <th>259</th>
      <td>1256</td>
      <td>2022-11-05</td>
      <td>09:58:00</td>
      <td>29</td>
      <td>Male</td>
      <td>23.0</td>
      <td>Clothing</td>
      <td>2.0</td>
      <td>500.0</td>
      <td>190.00</td>
      <td>1000.0</td>
    </tr>
    <tr>
      <th>895</th>
      <td>1587</td>
      <td>2022-11-05</td>
      <td>20:06:00</td>
      <td>140</td>
      <td>Female</td>
      <td>40.0</td>
      <td>Beauty</td>
      <td>4.0</td>
      <td>300.0</td>
      <td>105.00</td>
      <td>1200.0</td>
    </tr>
    <tr>
      <th>929</th>
      <td>1819</td>
      <td>2022-11-05</td>
      <td>20:44:00</td>
      <td>83</td>
      <td>Female</td>
      <td>35.0</td>
      <td>Beauty</td>
      <td>2.0</td>
      <td>50.0</td>
      <td>13.50</td>
      <td>100.0</td>
    </tr>
    <tr>
      <th>1575</th>
      <td>943</td>
      <td>2022-11-05</td>
      <td>19:29:00</td>
      <td>90</td>
      <td>Female</td>
      <td>57.0</td>
      <td>Clothing</td>
      <td>4.0</td>
      <td>300.0</td>
      <td>318.00</td>
      <td>1200.0</td>
    </tr>
    <tr>
      <th>1647</th>
      <td>1896</td>
      <td>2022-11-05</td>
      <td>20:19:00</td>
      <td>87</td>
      <td>Female</td>
      <td>30.0</td>
      <td>Electronics</td>
      <td>2.0</td>
      <td>25.0</td>
      <td>30.75</td>
      <td>50.0</td>
    </tr>
    <tr>
      <th>1752</th>
      <td>1137</td>
      <td>2022-11-05</td>
      <td>22:34:00</td>
      <td>104</td>
      <td>Male</td>
      <td>46.0</td>
      <td>Beauty</td>
      <td>2.0</td>
      <td>500.0</td>
      <td>145.00</td>
      <td>1000.0</td>
    </tr>
    <tr>
      <th>1794</th>
      <td>856</td>
      <td>2022-11-05</td>
      <td>17:43:00</td>
      <td>102</td>
      <td>Male</td>
      <td>54.0</td>
      <td>Electronics</td>
      <td>4.0</td>
      <td>30.0</td>
      <td>9.30</td>
      <td>120.0</td>
    </tr>
    <tr>
      <th>1879</th>
      <td>214</td>
      <td>2022-11-05</td>
      <td>16:31:00</td>
      <td>53</td>
      <td>Male</td>
      <td>20.0</td>
      <td>Beauty</td>
      <td>2.0</td>
      <td>30.0</td>
      <td>8.10</td>
      <td>60.0</td>
    </tr>
    <tr>
      <th>1888</th>
      <td>1265</td>
      <td>2022-11-05</td>
      <td>14:35:00</td>
      <td>86</td>
      <td>Male</td>
      <td>55.0</td>
      <td>Clothing</td>
      <td>3.0</td>
      <td>300.0</td>
      <td>111.00</td>
      <td>900.0</td>
    </tr>
  </tbody>
</table>
</div>

2. **Write a SQL query to retrieve all transactions where the category is 'Clothing' and the quantity sold is more than 4 in the month of Nov-2022**:

    ```sql

    SELECT 
    *
    FROM retail_sales
    WHERE 
        category = 'Clothing'
        AND 
        TO_CHAR(sale_date, 'YYYY-MM') = '2022-11'
        AND
        quantity >= 4
    ```

| transactions_id | sale_date  | sale_time | customer_id | gender |  age | category | quantity | price_per_unit | cogs | total_sale |
| --------------: | :--------- | :-------- | ----------: | :----- | ---: | :------- | -------: | -------------: | ---: | ---------: |
|            1484 | 2022-11-23 | 09:29:00  |          22 | Female |   19 | Clothing |        4 |            300 |  147 |       1200 |
|              64 | 2022-11-15 | 06:34:00  |           7 | Male   |   49 | Clothing |        4 |             25 |  8.5 |        100 |
|             284 | 2022-11-12 | 09:17:00  |         129 | Male   |   43 | Clothing |        4 |             50 | 20.5 |        200 |
|            1885 | 2022-11-09 | 07:32:00  |         148 | Female |   52 | Clothing |        4 |             30 | 10.8 |        120 |
|             547 | 2022-11-14 | 07:36:00  |           3 | Male   |   63 | Clothing |        4 |            500 |  250 |       2000 |
|             159 | 2022-11-10 | 21:30:00  |          42 | Male   |   26 | Clothing |        4 |             50 | 23.5 |        200 |
|             699 | 2022-11-21 | 22:21:00  |         129 | Female |   37 | Clothing |        4 |             30 | 16.2 |        120 |
|            1259 | 2022-11-03 | 17:31:00  |         105 | Female |   45 | Clothing |        4 |             50 |   21 |        200 |
|             146 | 2022-11-10 | 22:01:00  |          74 | Male   |   38 | Clothing |        4 |             50 |   49 |        200 |
|            1476 | 2022-11-11 | 22:27:00  |         130 | Female |   27 | Clothing |        4 |            500 |  555 |       2000 |
|            1296 | 2022-11-26 | 20:42:00  |          45 | Female |   22 | Clothing |        4 |            300 |  342 |       1200 |
|            1696 | 2022-11-21 | 17:59:00  |          24 | Female |   50 | Clothing |        4 |             50 |   55 |        200 |
|            1497 | 2022-11-19 | 21:44:00  |         109 | Male   |   41 | Clothing |        4 |             30 | 32.4 |        120 |
|             735 | 2022-11-26 | 21:38:00  |         153 | Female |   64 | Clothing |        4 |            500 |  515 |       2000 |
|             943 | 2022-11-05 | 19:29:00  |          90 | Female |   57 | Clothing |        4 |            300 |  318 |       1200 |
|             965 | 2022-11-27 | 21:45:00  |          84 | Male   |   22 | Clothing |        4 |             50 |   13 |        200 |
|            1615 | 2022-11-17 | 13:43:00  |          82 | Female |   61 | Clothing |        4 |             25 | 13.5 |        100 |

3. **Write a SQL query to calculate the total sales (total_sale) for each category.**:

    ```sql
    SELECT 
        category,
        SUM(total_sale) as net_sale,
        COUNT(*) as total_orders
    FROM retail_sales
    GROUP BY 1
    ```

| category    | net_sale | total_orders |
| :---------- | -------: | -----------: |
| Electronics |   311445 |          678 |
| Clothing    |   309995 |          698 |
| Beauty      |   286790 |          611 |

4. **Write a SQL query to find the average age of customers who purchased items from the 'Beauty' category.**:

    ```sql
    SELECT
        ROUND(AVG(age), 2) as avg_age
    FROM retail_sales
    WHERE category = 'Beauty'
    ```

5. **Write a SQL query to find all transactions where the total_sale is greater than 1000.**:

    ```sql
    SELECT * FROM retail_sales
    WHERE total_sale > 1000
    ```

6. **Write a SQL query to find the total number of transactions (transaction_id) made by each gender in each category.**:

    ```sql
    SELECT 
        category,
        gender,
        COUNT(*) as total_trans
    FROM retail_sales
    GROUP 
        BY 
        category,
        gender
    ORDER BY 1
    ```

7. **Write a SQL query to calculate the average sale for each month. Find out best selling month in each year**:

    ```sql
    SELECT 
        year,
        month,
        avg_sale
    FROM 
    (    
    SELECT 
        EXTRACT(YEAR FROM sale_date) as year,
        EXTRACT(MONTH FROM sale_date) as month,
        AVG(total_sale) as avg_sale,
        RANK() OVER(PARTITION BY EXTRACT(YEAR FROM sale_date) ORDER BY AVG(total_sale) DESC) as rank
    FROM retail_sales
    GROUP BY 1, 2
    ) as t1
    WHERE rank = 1
    ```

8. **Write a SQL query to find the top 5 customers based on the highest total sales**:

    ```sql
    SELECT 
        customer_id,
        SUM(total_sale) as total_sales
    FROM retail_sales
    GROUP BY 1
    ORDER BY 2 DESC
    LIMIT 5
    ```

9. **Write a SQL query to find the number of unique customers who purchased items from each category.**:

    ```sql
    SELECT 
        category,    
        COUNT(DISTINCT customer_id) as cnt_unique_cs
    FROM retail_sales
    GROUP BY category
    ```

10. **Write a SQL query to create each shift and number of orders (Example Morning <12, Afternoon Between 12 & 17, Evening >17)**:

    ```sql
    WITH hourly_sale
    AS
    (
    SELECT *,
        CASE
            WHEN EXTRACT(HOUR FROM sale_time) < 12 THEN 'Morning'
            WHEN EXTRACT(HOUR FROM sale_time) BETWEEN 12 AND 17 THEN 'Afternoon'
            ELSE 'Evening'
        END as shift
    FROM retail_sales
    )
    SELECT 
        shift,
        COUNT(*) as total_orders    
    FROM hourly_sale
    GROUP BY shift
    ```

## Findings

- **Customer Demographics**: The dataset includes customers from various age groups, with sales distributed across different categories such as Clothing and Beauty.
- **High-Value Transactions**: Several transactions had a total sale amount greater than 1000, indicating premium purchases.
- **Sales Trends**: Monthly analysis shows variations in sales, helping identify peak seasons.
- **Customer Insights**: The analysis identifies the top-spending customers and the most popular product categories.

## Reports

- **Sales Summary**: A detailed report summarizing total sales, customer demographics, and category performance.
- **Trend Analysis**: Insights into sales trends across different months and shifts.
- **Customer Insights**: Reports on top customers and unique customer counts per category.

## Conclusion

This project serves as a comprehensive introduction to SQL for data analysts, covering database setup, data cleaning, exploratory data analysis, and business-driven SQL queries. The findings from this project can help drive business decisions by understanding sales patterns, customer behavior, and product performance.

---

## How to Use

1. **Clone the Repository**: Clone this project repository from GitHub.
2. **Set Up the Database**: Run the SQL scripts provided in the `database_setup.sql` file to create and populate the database.
3. **Run the Queries**: Use the SQL queries provided in the `analysis_queries.sql` file to perform your analysis.
4. **Explore and Modify**: Feel free to modify the queries to explore different aspects of the dataset or answer additional business questions.

## Author - Zero Analyst

This project is part of my portfolio, showcasing the SQL skills essential for data analyst roles. If you have any questions, feedback, or would like to collaborate, feel free to get in touch!

### Stay Updated and Join the Community

For more content on SQL, data analysis, and other data-related topics, make sure to follow me on social media and join our community:

- **YouTube**: [Subscribe to my channel for tutorials and insights](https://www.youtube.com/@zero_analyst)
- **Instagram**: [Follow me for daily tips and updates](https://www.instagram.com/zero_analyst/)
- **LinkedIn**: [Connect with me professionally](https://www.linkedin.com/in/najirr)
- **Discord**: [Join our community to learn and grow together](https://discord.gg/36h5f2Z5PK)

Thank you for your support, and I look forward to connecting with you!