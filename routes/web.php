<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layouts.app');
});

Route::get('/cart', function () {
    return view('layouts.app');
});

Route::get('/product', function () {
    return view('layouts.app');
});

Route::get('/product/1', function () {
    return view('layouts.app');
});

Route::get('/product/1', function () {
    return view('layouts.app');
});
Route::get('/product/2', function () {
    return view('layouts.app');
});
Route::get('/product/3', function () {
    return view('layouts.app');
});
Route::get('/product/4', function () {
    return view('layouts.app');
});
Route::get('/product/5', function () {
    return view('layouts.app');
});
Route::get('/product/6', function () {
    return view('layouts.app');
});
Route::get('/product/7', function () {
    return view('layouts.app');
});
Route::get('/product/8', function () {
    return view('layouts.app');
});
Route::get('/product/9', function () {
    return view('layouts.app');
});
Route::get('/product/10', function () {
    return view('layouts.app');
});
Route::get('/product/11', function () {
    return view('layouts.app');
});
Route::get('/product/12', function () {
    return view('layouts.app');
});
Route::get('/product/13', function () {
    return view('layouts.app');
});
Route::get('/product/14', function () {
    return view('layouts.app');
});
Route::get('/product/15', function () {
    return view('layouts.app');
});
Route::get('/product/16', function () {
    return view('layouts.app');
});
Route::get('/product/17', function () {
    return view('layouts.app');
});
Route::get('/product/18', function () {
    return view('layouts.app');
});
Route::get('/product/19', function () {
    return view('layouts.app');
});
Route::get('/product/20', function () {
    return view('layouts.app');
});
Route::get('/product/21', function () {
    return view('layouts.app');
});
Route::get('/product/22', function () {
    return view('layouts.app');
});
Route::get('/product/23', function () {
    return view('layouts.app');
});
Route::get('/product/24', function () {
    return view('layouts.app');
});
Route::get('/product/25', function () {
    return view('layouts.app');
});

Route::get('category/1', function () {
    return view('layouts.app');
});

Route::get('category/2', function () {
    return view('layouts.app');
});

Route::get('category/3', function () {
    return view('layouts.app');
});

Route::get('category/4', function () {
    return view('layouts.app');
});

Route::get('category/5', function () {
    return view('layouts.app');
});

Route::get('admin-panel', function () {
    return view('layouts.app');
});

// Route::get('register', function () {
//     return view('layouts.app');
// });
// Route::get('login', function () {
//     return view('layouts.app');
// });

Route::get('home', function () {
    return redirect('/');
});

Auth::routes(); 

// Route::get('register', function () {
//     return view('auth.register');
// });

// Route::get('register', '\App\Http\Controllers\Auth\RegisterController@showRegistrationForm')->name('register');
// Route::post('register', '\App\Http\Controllers\Auth\RegisterController@register');


// Route::get('login', '\App\Http\Controllers\Auth\LoginController@showLoginForm')->name('login');
// Route::post('login', '\App\Http\Controllers\Auth\LoginController@login');
// Route::post('register', 'Auth\RegisterController@register');

// Route::get('register', '\App\Http\Controllers\Auth\RegisterController@create');

Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');