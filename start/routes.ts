/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database';

Route.group( () =>{
  Route.get('proyectos', 'ProyectosController.index').middleware('auth:web,api');
  Route.post('proyectos', 'ProyectosController.create').middleware('auth:web.api');
  Route.delete('proyectos/:id', 'ProyectosController.destroy').middleware('auth:web.api');
  Route.post('usuarios/registro', 'UsersController.store');
  Route.get('usuarios', async () => {
    return Database.from('auths').select('*')
  });
  Route.post('login', 'UsersController.login');
  Route.post('logout', 'UsersController.logout');
}).prefix('api/v1');


