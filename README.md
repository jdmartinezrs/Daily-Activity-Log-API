
to run this proyect start by:
```js
npm i
```

then 

```js
npm run dev
```

version

```js
10.8.2
```



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

"Los datos de prueba no tienen la contraseña encriptada."

Get all users.
http://localhost:3000/user/usuarios

[
  {
    "_id": "670951c4100ec33685ed6793",
    "nombre_usuario": "johndoe",
    "email": "johndoe@example.com",
    "contrasena_hash": "123",
    "fecha_de_creacion": "2024-01-01T10:00:00Z",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T18:06:59.537Z"
  },
  {
    "_id": "670951c4100ec33685ed6794",
    "nombre_usuario": "janedoe",
    "email": "janedoe@example.com",
    "contrasena_hash": "123",
    "fecha_de_creacion": "2024-01-02T12:00:00Z",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T18:06:59.537Z"
  },
  {
    "_id": "670951c4100ec33685ed6795",
    "nombre_usuario": "user123",
    "email": "user123@example.com",
    "contrasena_hash": "123",
    "fecha_de_creacion": "2024-01-03T14:00:00Z",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T18:06:59.537Z"
  },
  {
    "_id": "671ab605f8a57dd1b4ab1d70",
    "nombre_usuario": "david",
    "email": "azrojas123@gmail.com",
    "contrasena_hash": "ilovecod1in2g",
    "createdAt": "2024-10-24T21:03:01.162Z",
    "updatedAt": "2024-10-24T21:03:01.162Z",
    "__v": 0,
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T18:06:59.537Z"
  },
  {
    "_id": "671ab9980b46ffa19f1b4677",
    "nombre_usuario": "mach",
    "email": "jucorreo123@hotmail.com",
    "contrasena_hash": "ilovedj",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-24T21:18:16.076Z",
    "updatedAt": "2024-10-24T21:18:16.076Z",
    "__v": 0
  },
  {
    "_id": "671ad35ddeaa46e23e39441c",
    "nombre_usuario": "machin",
    "email": "azrojas123@hotmail.com",
    "contrasena_hash": "$2a$10$xH2jZPcg2LxGSyCpj0RMjek4p4br3xfUZWNgchHlLU1ANJ.M1zsRy",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-24T23:08:13.787Z",
    "updatedAt": "2024-10-24T23:08:13.787Z",
    "__v": 0
  },
  {
    "_id": "671ad487deaa46e23e39441e",
    "nombre_usuario": "juan",
    "email": "djgobernador@hotmail.com",
    "contrasena_hash": "$2a$10$6aWIXU82S5Etmp7Q3hI2P.cujaWt1PEp1PSBkwMA4/8ByBsqJyrUa",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-24T23:13:11.700Z",
    "updatedAt": "2024-10-24T23:13:11.700Z",
    "__v": 0
  },
  {
    "_id": "671ae54ff52ddf665cf038ef",
    "nombre_usuario": "juanR",
    "email": "djgoberna@hotmail.com",
    "contrasena_hash": "$2a$10$F9o45VFMAKursUsGZJCYm.30/BjfsQYzlevTxfBivfZy.FDFa6Ndq",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T06:53:57.726Z",
    "updatedAt": "2024-10-25T06:54:00.859Z",
    "__v": 0
  },
  {
    "_id": "671b3eb33354081e8ecc9976",
    "nombre_usuario": "DVD",
    "email": "martinezrojas@gmail.com",
    "contrasena_hash": "$2a$10$RXPSNky0Y.geqUik/d8WM.hzp86xTy6CbqSeUHW1xlRYlAal/lE.O",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T06:46:11.251Z",
    "updatedAt": "2024-10-25T06:46:11.256Z",
    "__v": 0
  },
  {
    "_id": "671b43d6613f3a1c971a534e",
    "nombre_usuario": "davidR10",
    "email": "developerxl@gmail.com",
    "contrasena_hash": "$2a$10$isq4kAnzbwEduexvanj3x.nljl1fr3Q6YgC7dyF9CJYPP8CUDAm1K",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T07:09:37.795Z",
    "updatedAt": "2024-10-25T07:09:40.921Z",
    "__v": 0
  },
  {
    "_id": "671b444cf6bb9b8c132ab8c3",
    "nombre_usuario": "davi",
    "email": "develop@gmail.com",
    "contrasena_hash": "$2a$10$cKBX.Iml9VN40t1pl4BKL.Lbnik9r4umab2qAglkLmwgi/l//8IkC",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T07:10:04.202Z",
    "createdAt": "2024-10-25T07:10:04.203Z",
    "updatedAt": "2024-10-25T07:10:04.203Z",
    "__v": 0
  },
  {
    "_id": "671b44b4f6bb9b8c132ab8c5",
    "nombre_usuario": "davidR10Dev",
    "email": "developer_one@gmail.com",
    "contrasena_hash": "$2a$10$7EetJllCTiiz3AffiuxN7.xf.OQe2ZZQ0kxTLkt6iF5JLfEgt9TJa",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T07:25:41.876Z",
    "createdAt": "2024-10-25T07:11:48.506Z",
    "updatedAt": "2024-10-25T07:25:45.015Z",
    "__v": 0
  },
  {
    "_id": "671b4992f6bb9b8c132ab8db",
    "nombre_usuario": "dav",
    "email": "dev_one@gmail.com",
    "contrasena_hash": "$2a$10$KWrS8Of/XR4S0scIV7X50eduoEJMzhK6Y2bNzKpjnNyp3hvQpdYrq",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T07:32:34.818Z",
    "createdAt": "2024-10-25T07:32:34.818Z",
    "updatedAt": "2024-10-25T07:32:34.818Z",
    "__v": 0
  },
  {
    "_id": "671b4c1464768fb2b12653b6",
    "nombre_usuario": "davf",
    "email": "dev_onfe@gmail.com",
    "contrasena_hash": "$2a$10$PuVCgRITP/RSDpSJPyUPsuAyMk0EH9LSD/tnQOnzjEfpxUr87w5be",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T07:45:19.828Z",
    "createdAt": "2024-10-25T07:43:16.750Z",
    "updatedAt": "2024-10-25T07:45:22.985Z",
    "__v": 0
  },
  {
    "_id": "671b4cd19014f6c79f7ecb11",
    "nombre_usuario": "davidR10Developer",
    "email": "dev_david@gmail.com",
    "contrasena_hash": "$2a$10$jpOpnSrTVOajFoDthu6ER.yRDszKWbuZEM1/wW9JJU4Gw3T9c0KZW",
    "fecha_y_hora_de_inicio_de_sesion": "2024-10-25T08:13:53.260Z",
    "createdAt": "2024-10-25T07:46:25.578Z",
    "updatedAt": "2024-10-25T08:13:56.438Z",
    "__v": 0
  }
]

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
