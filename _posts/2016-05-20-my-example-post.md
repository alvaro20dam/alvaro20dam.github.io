---
layout: post
author: "Alvaro Gonzalez"
---


```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
library(tidyverse)
library(ggplot2)
```

## R Markdown

In this chapter, we’ll mostly use one data set that’s bundled with ggplot2: mpg. It includes information about the fuel economy of popular car models in 1999 and 2008, collected by the US Environmental Protection Agency, <http://fueleconomy.gov>. You can access the data by loading ggplot2:

# mpg data

```{r mpg, echo=FALSE}
data()
head(mpg)
```

The variables are mostly self-explanatory:

cty and hwy record miles per gallon (mpg) for city and highway driving.

displ is the engine displacement in litres.

drv is the drivetrain: front wheel (f), rear wheel (r) or four wheel (4).

model is the model of car. There are 38 models, selected because they had a new edition every year between 1999 and 2008.

class is a categorical variable describing the “type” of car: two seater, SUV, compact, etc.

This dataset suggests many interesting questions. How are engine size and fuel economy related? Do certain manufacturers care more about fuel economy than others? Has fuel economy improved in the last ten years? We will try to answer some of these questions, and in the process learn how to create some basic plots with ggplot2.

## Including Plots

Podemos utilizar la gramatica de las graficas (ggplot2)

```{r pressure, echo=FALSE}
ggplot(mpg, aes(x = displ, y = hwy, colour = class, size = cyl)) + 
  geom_point()
```

Esta grafica esta interesante

``` {r temperature, echo=FALSE}
ggplot(diamonds, aes(reorder(cut, price), price)) + geom_violin()
```

Grafica de manufacturer de carros, cual es la mas rendidora en displ

``` {r manufacturer, echo=FALSE}
ggplot(mpg, aes(displ, hwy)) + 
  geom_point() + 
  facet_wrap(~manufacturer)
```

Incluimos tambien

``` {r tumadre, echo=TRUE}
cars
```

# Otro Grafico

```{r desplazamiento}
ggplot(mpg, aes(displ, hwy)) + 
  geom_point() + 
  geom_smooth(span = 0.2)
```

## Pregunta No 1

What’s the problem with the plot created by ggplot above? Which of the geoms described above is most effective at remedying the problem?

```{r Respuesta1, echo=FALSE}

ggplot(mpg, aes(cty, hwy)) + geom_point()


ggplot(mpg, aes(cty, hwy)) + 
  geom_point() + 
  geom_smooth(method = "lm")
#> `geom_smooth()` using formula = 'y ~ x'
```