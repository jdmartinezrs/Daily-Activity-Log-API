
```js
Crear un nuevo usuario.**Nota:** La contraseña del usuario debe estar encriptada al momento de registrar un nuevo usuario en la base de datos. Los datos de prueba no tienen la contraseña encriptada. Se recomienda utilizar la librería mencionada en las clases para realizar la encriptación su validación.

Post http://localhost:3000/user/usuarios

Body:
{
  "nombre_usuario": "davidR10Developer",
  "email": "dev_david@gmail.com",
  "contrasena_hash": "campusLandsChangeLives*"
}

Returns:

{
  "nombre_usuario": "davidR10Developer",
  "email": "dev_david@gmail.com",
  "contrasena_hash": "$2a$10$jpOpnSrTVOajFoDthu6ER.yRDszKWbuZEM1/wW9JJU4Gw3T9c0KZW",
  "_id": "671b4cd19014f6c79f7ecb11",
  "createdAt": "2024-10-25T07:46:25.578Z",
  "updatedAt": "2024-10-25T07:46:25.578Z",
  "__v": 0
}

If it does not works: 
"message": "Error saving user"

```

```js
Obtener la información del usuario excluyendo **contrasena_hash** y el campo **fecha_de_creacion**, debe devolver la fecha y hora actual del inicio de sesión. Además, se debe cambiar el nombre del campo a **fecha_y_hora_de_inicio_de_sesion**.

Post http://localhost:3000/user/usuarios/iniciarSesion
{ expiresIn: '15m' }

Body:
{
  "nombre_usuario": "juanR",
  "contrasena_hash": "hiphopOperator"
}
Returns:
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

```js
Descifrar la sesión proporcionada en el **header Authorization: Bearer <token>** y retornar la información que incluye.

Post http://localhost:3000/user/usuarios/validarSesion

List of steps to desencrypt 
1.Auth
2.Bearer
3.Bearer 
4.you send the Token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY3MWI0Y2QxOTAxNGY2Yzc5ZjdlY2IxMSIsIm5vbWJyZV91c3VhcmlvIjoiZGF2aWRSMTBEZXZlbG9wZXIiLCJlbWFpbCI6ImRldl9kYXZpZEBnbWFpbC5jb20iLCJjb250cmFzZW5hX2hhc2giOiIkMmEkMTAkanBPcG5TclRWT2FqRm9EdGh1NkVSLnlSRHN6S1didVpFTTEvd1c5SkpVNEd3M1Q5YzBLWlciLCJmZWNoYV95X2hvcmFfZGVfaW5pY2lvX2RlX3Nlc2lvbiI6IjIwMjQtMTAtMjVUMDg6MTM6NTMuMjYwWiIsImNyZWF0ZWRBdCI6IjIwMjQtMTAtMjVUMDc6NDY6MjUuNTc4WiIsInVwZGF0ZWRBdCI6IjIwMjQtMTAtMjVUMDg6MTM6NTYuNDM4WiIsIl9fdiI6MH0sImlhdCI6MTcyOTg0NDAzMywiZXhwIjoxNzI5ODQ0OTMzfQ.9jp7UQmYvLrGAqzowLe3KMWDd0yqLUVzoL7htCsMtOk

Returns:
{
  "user": {
    "_id": "671b4cd19014f6c79f7ecb11",
    "nombre_usuario": "davidR10Developer",
    "email": "dev_david@gmail.com",
    "contrasena_hash": "$2a$10$jpOpnSrTVOajFoDthu6ER.yRDszKWbuZEM1/wW9JJU4Gw3T9c0KZW",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T08:13:53.260Z",
    "createdAt": "2024-10-25T07:46:25.578Z",
    "updatedAt": "2024-10-25T08:13:56.438Z",
    "__v": 0
  },
  "token_info": {
    "issued_at": "2024-10-25T08:13:53.000Z",
    "expires_at": "2024-10-25T08:28:53.000Z",
    "is_expired": false
  }
}
```
