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
        $users = User::all();

        return Inertia::render('Admin/Management/User/Index', [
            'users' => $users,
        ]);
    }
}
