<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use Faker\Factory as Faker;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()

    {
        for ($i = 0; $i < 100; $i++) {
            Product::create(['productName' => fake()->word(), 'productId' => fake()->randomNumber(), 'itemName' => fake()->word(), "status" => true]);
        }



        // \App\Models\User::factory()->create([
        //     'productName' => 'Product 1',
        //     'productId' => 'PROD001',
        //     'itemName' => 'Item 1',
        //     'status' => true,
        // ]);
    }
}
