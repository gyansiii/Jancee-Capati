<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'Welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');
});
Route::get('/Aboutme', function () {
    return Inertia::render('AboutMe/aboutme');
})->name('aboutme');

require __DIR__.'/settings.php';
