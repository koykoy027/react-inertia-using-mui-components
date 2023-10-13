<?php

namespace Database\Seeders;

use App\Models\Borrowed_item;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as FakerFactory;

class Borrowed_itemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $faker = FakerFactory::create();

        for ($i = 0; $i < 1; $i++) {
            Borrowed_item::create([
                'borrowed_item' => $faker->word,
            ]);
        }
    }
}
