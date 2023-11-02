<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Seeder;
use Faker\Factory as FakerFactory;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $faker = FakerFactory::create();

        for ($i = 0; $i < 1; $i++) {
            Branch::create([
                'branch' => $faker->word,
            ]);
        }
    }
}