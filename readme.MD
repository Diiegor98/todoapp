
# TO DO APP 📝

La función del proyecto fué crear una To Do App, donde el cliente puede agregar tareas, marcarlas como realizadas y ordenarlas para que las pendientes queden primero.

### 🛠 SKILLS
Se utilizó:
 - HTML
 - CSS flexbox
 - JavaScript
 - Bootstrap

### 📋DESARROLLO

En el comienzo de la aplicación se puede observar la manipulación del objeto **Date** con distintos métodos para obtener la fecha actual y el día de la semana para obtener una mejor experiencia.

Se observa un input donde el usuario puede ingresar la tarea, un botón para agregar y un botón para ordenar pendientes primero y realizadas útilmas.

Al enviar el input si se encuentra vacío lo considera como un error y no retorna nada, si está completo se crea un nuevo div con el value del input, con estilos y un escuchador de click para poder marcarlo como realizado o desmarcarlo.

Para ordenar las tareas se realiza un método forEach en los nodos del contenedor de tareas, las que tienen la clase 'done' se pushean a un array  las que no lo tienen se pushean a otro, luego se crea un nuevo array a partir de los 2 anteriores donde los 'To Do' van primero y los 'donde' últimos

### ✒️AUTOR
Diego Rodríguez.

LinkedIn: https://www.linkedin.com/in/diiegorodriguez/
