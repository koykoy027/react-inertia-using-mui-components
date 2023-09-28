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

        $product = Product::create([
            'productName' => $request->productName,
            'productId' => $request->productId,
        ]);
    }
}
