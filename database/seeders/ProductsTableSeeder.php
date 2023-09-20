<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()

    {

        
    \App\Models\User::factory()->create([
        'productName' => 'Product 1',
        'productId' => 'PROD001',
        'ItemName' => 'Item 1',
        'Status' => true,
        'created_at' => now(),
        'updated_at' => now(),
    ]);
    }
}
