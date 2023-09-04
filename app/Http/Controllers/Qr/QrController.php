<?php

namespace App\Http\Controllers\Qr;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QrController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Qr/Index');
    }
}
