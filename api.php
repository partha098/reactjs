<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Testc;

Route::get("/demo/{key}",[Testc::class,'demo']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
