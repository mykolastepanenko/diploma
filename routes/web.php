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
    return view('pages.frontend');
});

Route::get('/product', function(){
    return view('pages.frontend');
});

Route::get('/product/1', function(){
    return view('pages.frontend');
});

Route::get('/product/1', function(){
    return view('pages.frontend');
});
Route::get('/product/2', function(){
    return view('pages.frontend');
});
Route::get('/product/3', function(){
    return view('pages.frontend');
});
Route::get('/product/4', function(){
    return view('pages.frontend');
});
Route::get('/product/5', function(){
    return view('pages.frontend');
});

Route::get('category/1', function(){
    return view('pages.frontend');
});

Route::get('category/2', function(){
    return view('pages.frontend');
});

Route::get('category/3', function(){
    return view('pages.frontend');
});

Route::get('category/4', function(){
    return view('pages.frontend');
});

Route::get('category/5', function(){
    return view('pages.frontend');
});
