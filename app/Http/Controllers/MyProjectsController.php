<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class MyProjectsController extends Controller
{
    public function index()
    {
        return Inertia::render('MyProjects/myproject');
    }
}
