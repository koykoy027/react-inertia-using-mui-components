<?php

namespace App\Http\Controllers\Management;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductManagementController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Management/Products/Index');
    }
}
