---
layout: post
date: "2023-10-03"
title: Data analysis of titanic passenger data
---
We'll start our visual analysis of the data focusing on questions
related to survival rates. Specifically, these questions will use
the factor (i.e., categorical) variables in the data. Factor data
is very common in the business context and ggplot2 offers many
powerful features for visualizing factor data.

## Load Titanic data for analysis. Open in spreadsheet view

{% highlight r %}
titanic <- read.csv("titanic.csv", stringsAsFactors = FALSE)
View(titanic)
{% endhighlight %}

## Set up factors

{% highlight r %}
titanic$Pclass <- as.factor(titanic$Pclass)
titanic$Survived <- as.factor(titanic$Survived)
titanic$Sex <- as.factor(titanic$Sex)
titanic$Embarked <- as.factor(titanic$Embarked)
{% endhighlight %}

## Titanic Data

| Pclass | Survived | Sex    | Embarked |
| ------ | -------- | ------ | -------- |
| Primer | Yes      | Male   | Yes      |
| Second | No       | Female | No       |

## First question - What was the survival rate?

As Survived is a factor (i.e., categorical) variable, a bar chart
is a great visualization to use

![First question graph](/assets/img/Rplot1Titanic.png) "footnote"

## Second question - What was the survival rate by gender?

We can use color to look at two aspects (i.e., dimensions)
of the data simultaneously

{% highlight r %}
ggplot(titanic, aes(x = Survived, fill = Sex)) +
  theme_bw() +
  geom_bar() +
  labs(y = "Passenger Count",
       title = "Titanic Survival Rates by Sex")
{% endhighlight %}

![Second question graph](/assets/img/Rplot2Titanic.png)"footnote2"

## From tableau

![tableau db](/assets/img/Dashboard%202.png)
