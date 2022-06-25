## composer require laravel/ui
## php artisan ui react
## npm install
## npm install
## npm run dev
## php artisan serve


## to register user use POST http://localhost:8000/api/register in postman
````
```
{
    "name" : "artyom developer",
    "password" : "tutofox123",
    "password_confirmation" : "tutofox123",
    "email" : "artyom@developer.com"
}
```
````

## login POST http://localhost:8000/api/login

````
```
{
    "email" : "artyom@developer.com",
    "password" : "tutofox123"
}
```
````

## consulta user POST http://localhost:8000/api/user

````
```
Authorization: Bearer <TOKEN>
```
````