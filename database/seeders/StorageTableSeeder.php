<?php

namespace Database\Seeders;

use App\Models\Storage;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StorageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $createdByUser = User::find(1);
        $updatedByUser = User::find(2);
        for ($i = 0; $i < 10; $i++) {
            DB::table('storages')->insert([
                'productName' => \Faker\Factory::create()->word(),
                'productId' => \Faker\Factory::create()->unique()->uuid(),
                'itemName' => \Faker\Factory::create()->word(),
                'created_by' => $createdByUser->id,
                'updated_by' => $updatedByUser->id,
            ]);
        }
    }
}
