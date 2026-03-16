<?php

use App\Http\Controllers\ContactMessageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');
});
Route::get('/Aboutme', function () {
    return Inertia::render('AboutMe/aboutme');
})->name('aboutme');
Route::get('/MyProjects', function () {
    return Inertia::render('MyProjects/myproject');
})->name('myproject');
Route::get('/TechStack', function () {
    return Inertia::render('TechStack/techstack');
})->name('techstack');
Route::get('/WorkExperience', function () {
    return Inertia::render('WorkExperience/workexperience');
})->name('workexperience');
Route::get('/ContactUs', function () {
    return Inertia::render('ContactUs/contactus');
})->name('contactus');
Route::post('/contact-messages', ContactMessageController::class)->name('contact-messages.store');

require __DIR__.'/settings.php';
