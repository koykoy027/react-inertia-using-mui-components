<?php

namespace App\Http\Controllers\Categories;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    public function index()
    {
        $categories = Categories::all();

        return Inertia::render('Admin/Categories/Index', [
            'categories' => $categories,
        ]);
    }
}
