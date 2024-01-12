---
layout: post
title: "Otra historia acerca del Titanic"
---

Ya todos sabemos el cuento del titanic, en esta oportunidad vamos a contarle otra historia, una historia basada en datos recopilados acerca de los pasajeros del Titanic y de como salieron de esta aventura en el mar Atlántico

## Data

La data a continuacion fue recopilada por \*\* y procederemos a desglosarla y a `detallarla` con argumentos dentro de `R` para esto utilizaremos los paquetes **ddplyr** y **ggplot** disponibles en link

```r
titanic <- read.csv("titanic.csv", header= TRUE)
str(titanic)
```

```
## 'data.frame': 891 obs. of  12 variables:
##  $ PassengerId: int  1 2 3 4 5 6 7 8 9 10 ...
##  $ Survived   : int  0 1 1 1 0 0 0 0 1 1 ...
##  $ Pclass     : int  3 1 3 1 3 3 1 3 3 2 ...
##  $ Name       : chr  "Braund, Mr. Owen Harris" "Cumings, Mrs. John Bradley (Florence Briggs Thayer)" "Heikkinen, Miss. Laina" "Futrelle, Mrs. Jacques Heath (Lily May Peel)" ...
##  $ Sex        : chr  "male" "female" "female" "female" ...
##  $ Age        : num  22 38 26 35 35 NA 54 2 27 14 ...
##  $ SibSp      : int  1 1 0 1 0 0 0 3 0 1 ...
##  $ Parch      : int  0 0 0 0 0 0 0 1 2 0 ...
##  $ Ticket     : chr  "A/5 21171" "PC 17599" "STON/O2. 3101282" "113803" ...
##  $ Fare       : num  7.25 71.28 7.92 53.1 8.05 ...
##  $ Cabin      : chr  "" "C85" "" "C123" ...
##  $ Embarked   : chr  "S" "C" "S" "S" ...
```

Los datos los obtuvimos de una famosa competencia de kaggle (link) donde los participantes compiten para ver quien puede predecir la posibilidad de que un pasajero sobreviva. Los datos se describen por si mismo:

- `PassengerID` se refiere al numero de la persona encuestada, son 891 personas.
- `Survived` 0 significa que no sobrevivió 1 que si sobrevivió.
- `Pclass`
- `Name`
- `Sex`

### Primer analisis

La primera pregunta que se nos viene es cuantos pasajeros sobrevivieron de esa muestra y cuantos no sobrevivieron

![Chart](/assets/img/unnamed-chunk-3-1.png)

```r
dplyr::count(titanic, Survived)
```

```
##   Survived   n
## 1        0 549
## 2        1 342
```

```r
ggplot(titanic, aes(Age)) + geom_histogram()
```

![hist](/assets/img/histogram1-1.png)

```r
ggplot(titanic, aes(Fare)) + geom_histogram(bins = 50) 
```

![chunk](/assets/img/unnamed-chunk-5-1.png)

```r
summary(titanic$Fare)
```

```
##    Min. 1st Qu.  Median    Mean 3rd Qu.    Max. 
##    0.00    7.91   14.45   32.20   31.00  512.33
```
