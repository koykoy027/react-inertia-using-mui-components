<?php

namespace Database\Seeders;

use App\Models\Qrcode;
use App\Models\User;
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
        $createdByUser = User::find(1);
        $updatedByUser = User::find(2);

        for ($i = 0; $i < 10; $i++) {
            DB::table('qrcodes')->insert([
                'productName' => $faker->word(),
                'productId' => $faker->unique()->uuid(),
                'itemName' => $faker->word(),
                'quantity_need' => $faker->randomNumber(),
                'qrcode' => $faker->word(),
                'barcode' => $faker->word(),
                'created_by' => $createdByUser->id,
                'updated_by' => $updatedByUser->id,
            ]);
        }
    }
}
