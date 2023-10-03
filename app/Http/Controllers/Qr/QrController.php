<?php

namespace App\Http\Controllers\Qr;

use App\Http\Controllers\Controller;
use App\Models\Qrcode;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QrController extends Controller
{
    public function index()
    {
        $qrcodes = Qrcode::all();

        return Inertia::render('Admin/Qr/Index', [
            'qrcodes' => $qrcodes,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Qr/Create');
    }

    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'productName' => 'required',
            'productId' => 'required',
            'branch' => 'required',
            'status' => 'required',
            'qrDescription' => 'required',
            'fileUpload' => 'required',
            'qrcode' => 'required',
        ]);

        // Create the Qrcode model with the validated data
        $product = Qrcode::create($validatedData);

        return redirect()->route('qr.index')->with('success', 'Category created successfully');
    }
}