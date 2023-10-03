<?php

use App\Http\Controllers\Branch\BranchController;
use App\Http\Controllers\Categories\CategoriesController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Equipment\EquipmentController;
use App\Http\Controllers\Library\GenderController;
use App\Http\Controllers\Library\LibraryController;
use App\Http\Controllers\library\SettingController;
use App\Http\Controllers\Management\ProductManagementController;
use App\Http\Controllers\Management\UserManagementController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Qr\GenerateQrController;
use App\Http\Controllers\Qr\QrController;
use App\Http\Controllers\Storage\StorageController;
use App\Http\Controllers\Warranty\WarrantyController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

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

        // Route::resource('/Dashboard', DashboardController::class);



        // library
        Route::resource('/library', LibraryController::class);


        // Management
        Route::resource('/management', UserManagementController::class);
        Route::resource("/categories", CategoriesController::class);
        Route::resource('/products', ProductManagementController::class);
        Route::resource('/equipment', EquipmentController::class);
        Route::resource('/branch', BranchController::class);
        Route::resource('/warranty', WarrantyController::class);
        // create a post that located at ProductManagementController

        // Qr code
        Route::resource('/qr', QrController::class);
        Route::resource('/generator', GenerateQrController::class);

        // storage

        Route::resource('/storage', StorageController::class);

        // Setting navigationbar
        Route::resource('/settings', SettingController::class);


        // Route::resource('/profile', ProfileController::class);



        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
});





require __DIR__ . '/auth.php';