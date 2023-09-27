<?php

namespace App\Http\Controllers\Management;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserManagementController extends Controller
{
    public function index()
    {
        $datas = User::all();

        return Inertia::render('Admin/Management/User/Index', compact('datas'));
    }

    public function store(Request $request)
    {
        $users = User::create([
            'name' => $request->LastName,
            'email' => $request->email,
        ]);

        return 'success';
    }
}
