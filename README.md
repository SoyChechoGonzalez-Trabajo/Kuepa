# PRUEBA DESARROLLADOR FRONT-END KUEPA
		Los 3 componentes principales del dashboard se distribuyeron con display flex para poner separarlos entre ellos 
		con space-between

### 1. LateralRightSide
> En Este primer componente he creado en la parte visual un contenedor principal llamado **_'LateralRightSide'_** en el 
> que se añadieron los estilos para que su altura fuese igual a la de la pantalla y se mantuviese fija. Así mismo, 
> dentro de este se ha generado otro contenedor llamado **_'LateralRightSide_Content'_** en el que se añadieron los 
> estilos para que el contenido se pudiese scrollear.\
> Se programó la API haciendo uso de los algunos Hooks y redux, finalmente se usa .map sobre json para luego 
> realizar la iteración respectiva del componente '**_ProspectCardContact_**'
> 
> **_ProspectCardContact:_** Componente tipo Card que contiene la información de los contactos de los prospectos. En 
> este componente se hizo uso de las props y a su vez de PropTypes para que se pudiese realizar la validación de los 
> datos que se reciben.\

### 2. LateraLeftSide
> Es el segundo componente en haber sido creado, se divide en dos partes representadas también como componentes, son 
> el Head y Foot del componente principal '**_LateralRightSide_**'.\
> En Head está el logo de la empresa y algunas secciones del dashboard.\
> En Foot está una representación de la información del usuario y el icono de chat.

### 3. Main
> Es el tercer componente en haber sido creado, se divide en otros dos componentes, el Head donde solo está una 
> barra de búsqueda y una fecha y el Body donde se encuentra el contenido principal del dashboard.\
> 
> **_Main_Body:_** Componente que contiene el contenido principal del dashboard. En este componente se hizo uso de 
> un paquete de npm llamado **_CircularProgressbar_** para poder mostrar una barra de progreso circular para simular 
> las estadísticas de los datos. También se utilizó la librería **_react-progressbar_** para poder mostrar una barra 
> horizontal de progreso, todo esto fue creado dentro de otros componentes de react. Finalmente en la última sección 
> se realizó nuevamente el llamado a la API con redux para mostrar el nombre dentro del componente, sobre este mismo 
> se realizó una iteración para multiplicar la tarjeta por el número de datos que se encuentran en la API, en cuanto 
> el diseño se trabajó en el overflow-y: scroll para que pudiésemos scrollear sobre el contenido que trae la API. 
