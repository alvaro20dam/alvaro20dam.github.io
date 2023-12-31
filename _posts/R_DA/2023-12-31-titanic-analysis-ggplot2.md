---
layout: post
title: Data analysis of titanic passenger data
---

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

We'll start our visual analysis of the data focusing on questions
related to survival rates. Specifically, these questions will use
the factor (i.e., categorical) variables in the data. Factor data
is very common in the business context and ggplot2 offers many
powerful features for visualizing factor data

## First question - What was the survival rate?

As Survived is a factor (i.e., categorical) variable, a bar chart
is a great visualization to use

![First question graph](/assets/img/Rplot1Titanic.png) "footnote"
