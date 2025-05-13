---
layout: post
title:  "Analisis de datos MPG"
date:   2024-01-04 07:44:27 -0400
categories: data analisis
---
Comenzamos observando los datos, aqui una muestra de ellos.

![data-snipp](/assets/img/mpgDataPic.png)

## Descripcion

Esta data incluye informacion acerca de la econonia en combustible de los vehiculos mas populares en 1999 y 2008,
esta data es recopilada por la US Environmental Protection Agency, [http://fueleconomy.gov.](http://fueleconomy.gov.)

- `cty` y `hwy`, se refieren al consumo de combustible tanto en autopista como en la ciudad y está medida en millas por galón de combustible
- `displ` es el desplazamiento de la máquina medido en litros consumidos de combustible
- `drv` nos menciona la tracción del vehiculo, (f) tracción delantera, (r) tracción trasera, (4) es tracción 4x4
- `model` es obviamente el modelo del carro, asi como `manufacturer` es la marca
- `class` es una variable que describe el tipo de vehículo: dos asientos, SUV, compacto, etc.

Esta base de datos ofrece varias preguntas interesantes. ¿Como se relacionan el tamaño de la máquina y la economia de combustible?. ¿Existen marcas de fabrica que se preocupan mas por el ambiente que otras? Ha mejorado el ahorro de combustible en el periodo desde 1999 a 2008. A continuacion trataremos de dar respuesta a esa y otras preguntas con un análisis gráfico de los datos.

## Primer ejercicio

Despues de conocer un poco acerca de los datos vamos a observar como estan distribuidos

- Para empezar utilizaremos una grafica de barras para observar la cantidad de vehiculos que pertenecen a las distintas marcas en el estudio

![manufacturer](/assets/img/imagen1.png)

Falta una **pequeña reseña**

- Ademas si queremos conocer como estan distribuidos estos vehiculos por marca y tipo de traccion, podemos observar esta grafica de barras apiladas a continuacion

![man-tracc](/assets/img/imagen2.png)

Falta una **pequeña reseña**

- Otra observacion que podemos hacer con grafico de barras, es saber como estan distribuidos estos vehiculos por año, para esto analizamos la clase de vehiculos en el estudio segregado por cada uno de los años en el estudio

![class-year](/assets/img/imagen3.png)

Falta una **pequeña reseña**

- Ahora podemos comenzar con el analisis estadisticos de las variables de nuestra base de datos, por ejemplo a continuacion generaremos un histograma de la variable `hwy`

![hist1](/assets/img/hist1.png)

De el grafico de arriba podemos extraer solo que la cantidad de millas promedio es aproximadamente de **25 millas por litro de combustible**

- Podemos mejorar este analisis si segregamos los vehiculos por **Tracción**

![hist2](/assets/img/hist2.png)
