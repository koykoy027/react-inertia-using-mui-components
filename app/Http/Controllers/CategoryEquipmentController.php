<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\CategoryEquipment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CategoryEquipmentController extends Controller
{
    public function index()
    {
        $categoriesEquipment = CategoryEquipment::with('categories')->get();

        return Inertia::render('Admin/CategoryEquipment/Index', compact(
            'categoriesEquipment',
        ));
    }

    public function create()
    {
        $categories = Category::orderBy('name', 'ASC')->get();

        return Inertia::render('Admin/CategoryEquipment/Create', compact(
            'categories',
        ));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'unique:category_equipment'],
            'category' => ['required'],
        ]);

        $data = $request->all();
        $data['created_by'] = Auth::user()->id;
        $data['updated_by'] = Auth::user()->id;

        CategoryEquipment::create($data);
        return Redirect::route('categories-equipment.index')->with('success', 'Item Has been successfully added!');
    }
}
