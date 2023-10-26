https://medium.com/@ripoche.b/create-a-spa-with-role-based-authentication-with-laravel-and-vue-js-ac4b260b882f

laravel new laravel-vue-spa

cd laravel-vue-spa

php artisan migrate --seed

composer require tymon/jwt-auth

php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"

php artisan jwt:secret

php artisan make:middleware CheckIsAdmin

php artisan make:middleware CheckIsAdminOrSelf

npm install

npm install --save-dev @vitejs/plugin-vue

npm install vue-router@4

npm install vue-axios axios

npm install es6-promise

npm install @websanova/vue-auth

npm install bootstrap

https://websanova.com/docs/vue-auth/guides/startup
https://websanova.com/docs/vue-auth/methods/core#references-4
https://github.com/websanova/vue-auth/tree/master/demos/3.x
https://websanova.com/posts/vue-auth-vue-3-support
https://stackoverflow.com/questions/72759640/websanova-vue-auth-not-set-bearer-token-vue-3
