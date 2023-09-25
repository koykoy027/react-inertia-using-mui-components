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

        for ($i = 0; $i < 10; $i++) {
            DB::table('qrcodes')->insert([
                'productName' => $faker->word(),
                'productId' => $faker->randomNumber(),
                'itemName' => $faker->word(),
                'quantity_need' => $faker->randomNumber(),
                'qrcode' => $faker->word(),
                'barcode' => $faker->word(),
                'status' => true,
            ]);
        }
    }
}
