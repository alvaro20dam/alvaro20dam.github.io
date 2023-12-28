# Alvaro Gonzalez Portfolio

 This R source code file corresponds to the Data Science Dojo webinar

 titled "An Introduction to Data Visualization with R and ggplot2"

```{r}
setwd("C:/Users/admin/Desktop/R/tutorials-master-bf6747a8360fa0082fe8fd1cf68a99103c9862d0/Introduction to Data Visualization with R and ggplot2")
install.packages("ggplot2")
install.packages("dplyr")
library(dplyr)
library(ggplot2)
```

We'll start our visual analysis of the data focusing on questions
related to survival rates. Specifically, these questions will use
the factor (i.e., categorical) variables in the data. Factor data
is very common in the business context and ggplot2 offers many
powerful features for visualizing factor data

First question - What was the survival rate?

As Survived is a factor (i.e., categorical) variable, a bar chart
is a great visualization to use

![Barchart]/SurvivedBarChart.png)
