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
            Qrcode::create([
                'productName' => $faker->word(),
                'productId' => $faker->randomNumber(),
                'branch' => $faker->word(),
                'status' => true,
                'qrDescription' => $faker->word(),
                'fileUpload' => $faker->imageUrl($width = 640, $height = 480),
                'qrcode' => $faker->imageUrl($width = 640, $height = 480), // Generate a fake image URL
            ]);
        }
    }
}
