<?php

namespace App\Http\Controllers\Warranty;

use App\Http\Controllers\Controller;
use App\Models\Warranty;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WarrantyController extends Controller
{
    public function index()
    {
        // $product = Product::all();
        // return Inertia::render('Admin/Management/Products/Index', compact('product'));

        $warranty = Warranty::all();

        return Inertia::render('Admin/Warranty/Index', [
            'warranty' => $warranty,
        ]);
    }
}