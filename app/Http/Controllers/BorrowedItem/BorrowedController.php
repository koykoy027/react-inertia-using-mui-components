<?php

namespace App\Http\Controllers\BorrowedItem;

use App\Http\Controllers\Controller;
use App\Models\Borrowed_item;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BorrowedController extends Controller
{
    public function Index()
    {
        $borrowedItem = Borrowed_item::all();

        return Inertia::render('Admin/Borrowed_item/Index', [
            'BorrowedItem' => $borrowedItem,
        ]);
    }
}
