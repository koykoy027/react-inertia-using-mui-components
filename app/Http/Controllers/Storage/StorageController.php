<?php

namespace App\Http\Controllers\Storage;

use App\Http\Controllers\Controller;
use App\Models\Storage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StorageController extends Controller
{
    public function index()
    {
        // return Inertia::render('Admin/Storage/Index');


        $storage = Storage::all();

        return Inertia::render('Admin/Storage/Index', [
            'storages' => $storage,
        ]);
    }
}
