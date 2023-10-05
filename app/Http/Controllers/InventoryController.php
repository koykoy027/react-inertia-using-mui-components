<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InventoryController extends Controller
{
    public function index()
    {

        // Load an Inventory record with its categoriesEquipment relationship
        $inventories = Inventory::with('equipment')->get();
        // Inspect the loaded data
        // $inventories->toArray();


        // Debugging: Check if data is retrieved correctly
        // dd($inventories);

        return Inertia::render('Admin/Inventory/Index', compact('inventories'));
    }
}
