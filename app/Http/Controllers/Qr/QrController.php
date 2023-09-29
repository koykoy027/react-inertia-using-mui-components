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
        // return Inertia::render('Admin/Qr/Index');

        $qrcodes = Qrcode::all();

        return Inertia::render('Admin/Qr/Index', [
            'qrcodes' => $qrcodes,
        ]);
    }

    public function store(Request $request)
    {

        // i create a variable located my model named product same as the user

        $product = Qrcode::create([

            // create a variable that will coordinated in my frontend form
            'productName' => $request->productName,
            'productId' => $request->productId,
            'branch' => $request->branch,
            'status' => $request->status,
            'qrDescription' => $request->qrDescription,
            'fileUpload' => $request->fileUpload,
            'qrcode' => $request->qrcode,
        ]);
    }
}
