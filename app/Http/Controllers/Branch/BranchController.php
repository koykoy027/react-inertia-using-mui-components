<?php

namespace App\Http\Controllers\Branch;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BranchController extends Controller
{
    public function Index()
    {
        $branch = Branch::all();

        return Inertia::render('Admin/Branch/Index', [
            'branch' => $branch,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Branch/Create');
    }

    public function store(Request $request)
    {
        $branch = Branch::create([

            // create a variable that will coordinated in my frontend form
            'branch' => $request->branch,
        ]);

        // You can optionally return a response or redirect the user
        // For example, redirect them to the index page or return a success message
        return redirect()->route('branch.index')->with('success', 'Category created successfully');
    }
}
