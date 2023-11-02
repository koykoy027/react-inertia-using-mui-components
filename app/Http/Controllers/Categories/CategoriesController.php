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
        // $product = Product::all();
        // return Inertia::render('Admin/Management/Products/Index', compact('product'));

        $categories = Categories::all();

        return Inertia::render('Admin/Categories/Index', [
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Categories/Create');
    }

    public function store(Request $request)
    {
        $categories = categories::create([

            // create a variable that will coordinated in my frontend form
            'categories' => $request->categories,
        ]);

        // You can optionally return a response or redirect the user
        // For example, redirect them to the index page or return a success message
        return redirect()->route('categories.index')->with('success', 'Category created successfully');
    }
}