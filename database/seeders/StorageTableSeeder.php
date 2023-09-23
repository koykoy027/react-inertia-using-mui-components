<?php

namespace Database\Seeders;

use App\Models\Storage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StorageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 10; $i++) {
            DB::table('storages')->insert([
                'productName' => \Faker\Factory::create()->word(),
                'productId' => \Faker\Factory::create()->randomNumber(),
                'itemName' => \Faker\Factory::create()->word(),
                'status' => true,
            ]);
        }
    }
}
