<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use Faker\Factory as FakerFactory;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()

    {
        $faker = FakerFactory::create();

        for ($i = 0; $i < 1; $i++) {
            Product::create([
                'productName' => $faker->word(),
                'productId' => $faker->randomNumber(),
                'branch' => $faker->word(),
                'status' => true,
                'productDescription' => $faker->word(),
                'productFileUpload' => $faker->imageUrl($width = 640, $height = 480),
            ]);
        }



        // \App\Models\User::factory()->create([
        //     'productName' => 'Product 1',
        //     'productId' => 'PROD001',
        //     'itemName' => 'Item 1',
        //     'status' => true,
        // ]);
    }
}
