<?php

namespace App\Http\Controllers\Equipment;

use App\Http\Controllers\Controller;
use App\Models\Equipment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EquipmentController extends Controller
{
    public function index()
    {
        // $product = Product::all();
        // return Inertia::render('Admin/Management/Products/Index', compact('product'));

        $equipments = Equipment::all();

        return Inertia::render('Admin/Equipment/Index', [
            'equipments' => $equipments,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Equipment/Create');
    }

    public function store(Request $request)
    {
        $equipments = Equipment::create([

            // create a variable that will coordinated in my frontend form
            'equipments' => $request->equipments,
        ]);

        // You can optionally return a response or redirect the user
        // For example, redirect them to the index page or return a success message
        return redirect()->route('equipment.index')->with('success', 'Category created successfully');
    }
}