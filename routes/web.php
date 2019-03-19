<?php

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

Auth::routes();

Route::group(['middleware' => 'auth'], function () {


    //    Route::get('/link1', function ()    {
//        // Uses Auth Middleware
//    });

    //Please do not remove this if you want adminlte:route and adminlte:link commands to works correctly.
    #adminlte_routes

    Route::get('/', 'DashboardController@index')->name('dashboard.index');
    Route::get('/dashboard', 'DashboardController@index')->name('dashboard.index');

    Route::get('client', 'ClientController@index')->name('client.index');
    Route::get('client/create', 'ClientController@create')->name('client.create');
    Route::get('client/edit/{id}', 'ClientController@edit')->name('client.edit');
    Route::put('client/update/{id}', 'ClientController@update')->name('client.update');;
    Route::post('client/store', 'ClientController@store')->name('client.store');;
    Route::delete('client/delete/{id}', 'ClientController@destroy')->name('client.destroy');

    Route::get('product', 'ProductController@index')->name('product.index');
    Route::get('product/all', 'ProductController@all')->name('product.all');
    Route::get('product/create', 'ProductController@create')->name('product.create');
    Route::get('product/edit/{id}', 'ProductController@edit')->name('product.edit');
    Route::put('product/update/{id}', 'ProductController@update')->name('product.update');;
    Route::post('product/store', 'ProductController@store')->name('product.store');;
    Route::delete('product/delete/{id}', 'ProductController@destroy')->name('product.destroy');

    Route::get('order', 'OrderController@index')->name('order.index');
    Route::get('order/create', 'OrderController@create')->name('order.create');
    Route::get('order/edit/{id}', 'OrderController@edit')->name('order.edit');
    Route::put('order/update/{id}', 'OrderController@update')->name('order.update');;
    Route::post('order/store', 'OrderController@store')->name('order.store');;
    Route::delete('order/delete/{id}', 'OrderController@destroy')->name('order.destroy');

    Route::group(['middleware' => ['role:root|administrator']], function () {

        Route::get('user', 'UserController@index')->name('user.index');
        Route::get('user/create', 'UserController@create')->name('user.create');
        Route::get('user/edit/{id}', 'UserController@edit')->name('user.edit');
        Route::put('user/update/{id}', 'UserController@update')->name('user.update');;
        Route::post('user/store', 'UserController@store')->name('user.store');;
        Route::delete('user/delete/{id}', 'UserController@destroy')->name('user.destroy');

        Route::group(['middleware' => ['role:root']], function () {

            Route::get('company', 'CompanyController@index')->name('company.index');
            Route::get('company/create', 'CompanyController@create')->name('company.create');
            Route::get('company/edit/{id}', 'CompanyController@edit')->name('company.edit');
            Route::put('company/update/{id}', 'CompanyController@update')->name('company.update');;
            Route::post('company/store', 'CompanyController@store')->name('company.store');;
            Route::delete('company/delete/{id}', 'CompanyController@destroy')->name('company.destroy');

        });

    });

    Route::get("cep/{cep}", function ($cep) {
        return cep($cep)->toJson()->result();
    });

    Route::get('cities/{id}', function ($id) {
        return \App\Models\City::orderBy('name')->where('state_id', '=', $id)->get(['id', 'name']);
    });

});
