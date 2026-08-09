<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

//* Libraries Imports
use Illuminate\Support\Facades\Route;

Route::post('/register', RegisterController::class);

Route::post('/login', LoginController::class);