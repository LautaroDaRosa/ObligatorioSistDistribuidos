# ObligatorioSistDistribuidos

## Como iniciar el programa
Para poder inicializar el docker compose es necesario ejecutar en la ruta del proyecto los siguientes comandos 
1. ``docker compose build``
2. ``docker compose up``
3. En caso de querre reiniciar el sistema se puede correr ``docker compose down``

Existen 3 endpoints expuestos en el sistema

- /get_token

En el body de este EP se debe pasar usuario y contraseña

- /get_data

- /insert

Estos dos EP necesitan que se pase el Bearer token de JWT

### Ejemplos de Request

#### Get Token
curl --location 'localhost/get_token' \
--header 'Content-Type: application/json' \
--data '{
    "username": "Nicolas",
    "password": "contraNico"
}'

#### Get Data
curl --location 'localhost/get_data' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODM4NDE3NTUsImlhdCI6MTY4MzgzOTk1NSwic3ViIjoiTmljb2xhcyJ9.je0YN3eFVrJYW4m1tIPtcq4zgJRp8BKlq_5iUkLeE0YCDPu8tuZ2UVWE3mAoZBXHZ_yAcGQqyWua2ahVI6cWpuyom_bCdz8JHrSUK-zYXgyoZ0RVsWRbgGLV6Mxbm0eeDokY2p6kaR60BkXKvcBHZru8ZV-kLyB6bF7ATWfT3A-xOx0b6BgEHTN155vquwUNkJAsYj0BsyzepfaLoLLHRyVdPob1ZvsviMfpfoIT5myhGBi8vVYZ6Hwk2Kx7bzEkCxpiIw-rkpfiOVOmwd5hE29XUKlI5arPKkU8AgKia4kYkFbg5pgFdQrrLAPWTmQBqio0BXucsPFFKNQXEz11iA'

#### Insert

curl --location 'localhost/insert' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODM4NDE3NTUsImlhdCI6MTY4MzgzOTk1NSwic3ViIjoiTmljb2xhcyJ9.je0YN3eFVrJYW4m1tIPtcq4zgJRp8BKlq_5iUkLeE0YCDPu8tuZ2UVWE3mAoZBXHZ_yAcGQqyWua2ahVI6cWpuyom_bCdz8JHrSUK-zYXgyoZ0RVsWRbgGLV6Mxbm0eeDokY2p6kaR60BkXKvcBHZru8ZV-kLyB6bF7ATWfT3A-xOx0b6BgEHTN155vquwUNkJAsYj0BsyzepfaLoLLHRyVdPob1ZvsviMfpfoIT5myhGBi8vVYZ6Hwk2Kx7bzEkCxpiIw-rkpfiOVOmwd5hE29XUKlI5arPKkU8AgKia4kYkFbg5pgFdQrrLAPWTmQBqio0BXucsPFFKNQXEz11iA' \
--data '{
    "sensor_id": 2,
    "date_time": "2023-05-10 12:00:00",
    "value": 12
}'
