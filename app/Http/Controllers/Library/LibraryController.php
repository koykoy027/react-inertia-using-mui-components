<?php

namespace App\Http\Controllers\Library;

use App\Http\Controllers\Controller;
use App\Models\Library\Gender;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LibraryController extends Controller
{
    public function index()
    {
        $gender = Gender::orderBy('name', 'ASC')->get();
        return Inertia::render('Admin/Library/Index', compact(
            'gender',
        ));
    }
}
