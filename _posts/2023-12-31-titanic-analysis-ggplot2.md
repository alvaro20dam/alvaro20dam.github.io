---
layout: post
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

| Pclass | Survived | Sex | Embarked |
| ----------- | ----------- | ----- | --------- |
| Primer | Yes | Male | Yes |
| Second | No | Female | No |

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

<div class='tableauPlaceholder' id='viz1749768201586' style='position: relative'><noscript><a href='#'><img alt='KingCountyHouseSells ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;44&#47;445JJ968Q&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='shared&#47;445JJ968Q' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;44&#47;445JJ968Q&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1749768201586');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.minWidth='420px';vizElement.style.maxWidth='100%';vizElement.style.minHeight='587px';vizElement.style.maxHeight=(divElement.offsetWidth*0.75)+'px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.minWidth='420px';vizElement.style.maxWidth='100%';vizElement.style.minHeight='587px';vizElement.style.maxHeight=(divElement.offsetWidth*0.75)+'px';} else { vizElement.style.width='100%';vizElement.style.height='1777px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>