<?php

namespace App\Http\Controllers\Storage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StorageController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Storage/Index');
    }
}
