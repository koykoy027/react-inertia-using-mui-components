<?php

namespace App\Http\Controllers\Management;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductManagementController extends Controller
{
    public function index()
    {
        // $product = Product::all();
        // return Inertia::render('Admin/Management/Products/Index', compact('product'));

        $product = Product::all();

        return Inertia::render('Admin/Management/Products/Index', [
            'products' => $product,
        ]);
    }

    public function store(Request $request) {

        // i create a variable located my model named product same as the user

        $product = Product::create([

            // create a variable that will coordinated in my frontend form
            'productName' => $request->productName, 
            'productId' => $request->productId,
        ]);
    }
}
