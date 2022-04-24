<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Testc;
use App\Http\Controllers\Testtarun;

Route::post("/stdins",[Testc::class,'insstd']);

Route::post("/customarin",[Testtarun::class,'customarin']);

Route::get("/ho",[Testc::class,'home']);
Route::get("/about",[Testtarun::class,'taruntext']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
