<?php

namespace Database\Seeders;

use App\Models\Qrcode;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as FakerFactory;

class QrcodeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = FakerFactory::create();

        for ($i = 0; $i < 1; $i++) {
            Qrcode::create(['productName' => fake()->word(), 'productId' => fake()->randomNumber(), 'branch' => fake()->word(), "status" => true, 'qrDescription' => fake()->word(), "fileUpload" => fake()->word()]);
        }
    }
}
