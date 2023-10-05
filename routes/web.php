<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CategoryEquipmentController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\Library\LibraryController;
use App\Http\Controllers\library\SettingController;
use App\Http\Controllers\ProfileController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::prefix('administrator')->group(function () {

    Route::middleware('auth')->group(function () {

        Route::get('/', function () {
            $users = User::all();
            return Inertia::render('Admin/Dashboard/Index', [
                'users' => $users,
            ]);
        })->name('dashboard');





        Route::resource('/categories', CategoryController::class)
            ->only(['index', 'create', 'store']);
        Route::resource('/categories-equipment', CategoryEquipmentController::class)
            ->only(['index', 'create', 'store']);
        Route::resource('/inventories', InventoryController::class)
            ->only(['index']);

        // Route::resource('/library', LibraryController::class);
        Route::resource('/settings', SettingController::class);


        // Route::resource('/profile', ProfileController::class);
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
});





require __DIR__ . '/auth.php';
