
```js
Crear un nuevo usuario.<br />**Nota:** La contraseña del usuario debe estar encriptada al momento de registrar un nuevo usuario en la base de datos. Los datos de prueba no tienen la contraseña encriptada. Se recomienda utilizar la librería mencionada en las clases para realizar la encriptación su validación.

http://localhost:3000/user/usuarios

{
  "nombre_usuario": "davidR10Dev",
  "email": "developer_one@gmail.com",
  "contrasena_hash": "$2a$10$7EetJllCTiiz3AffiuxN7.xf.OQe2ZZQ0kxTLkt6iF5JLfEgt9TJa",
  "_id": "671b44b4f6bb9b8c132ab8c5",
  "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T07:11:48.506Z",
  "createdAt": "2024-10-25T07:11:48.506Z",
  "updatedAt": "2024-10-25T07:11:48.506Z",
  "__v": 0
}

If it does not works: 
"message": "Error saving user"

```

```js
Obtener la información del usuario excluyendo **contrasena_hash** y el campo **fecha_de_creacion**, debe devolver la fecha y hora actual del inicio de sesión. Además, se debe cambiar el nombre del campo a **fecha_y_hora_de_inicio_de_sesion**.

http://localhost:3000/user/usuarios/iniciarSesion
{ expiresIn: '15m' }

body:
{
  "nombre_usuario": "juanR",
  "contrasena_hash": "hiphopOperator"
}
returns:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY3MWFlNTRmZjUyZGRmNjY1Y2YwMzhlZiIsIm5vbWJyZV91c3VhcmlvIjoianVhblIiLCJlbWFpbCI6ImRqZ29iZXJuYUBob3RtYWlsLmNvbSIsImNvbnRyYXNlbmFfaGFzaCI6IiQyYSQxMCRGOW80NVZGTUFLdXJzVXNHWkpDWW0uMzAvQmpmc1FZemxldlR4ZkJpdmZaeS5GREZhNk5kcSIsImZlY2hhX3lfaG9yYV9kZV9pbmljaW9fZGVfc2VzaW9uIjoiMjAyNC0xMC0yNVQwNTo1OTo0NS43NjdaIiwidXBkYXRlZEF0IjoiMjAyNC0xMC0yNVQwNTo1OTo0OC44MzFaIiwiX192IjowfSwiaWF0IjoxNzI5ODM1OTg1LCJleHAiOjE3Mjk4MzY4ODV9.71scU0J7_dsa3YZ7W_k_VsP03ev1UnTJY8Ak3oX0_jM",
  "timestamps": {
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T05:59:45.767Z",
    "updatedAt": "2024-10-25T05:59:48.831Z"
  }
}

If it does not works: 
status: 401, message: 'No Authorized'

```



