<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Branch;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Jhunriz',
            'email' => 'jhunriz14@gmail.com',
            'password' => '123456789'
        ]);

        $this->call([
            ProductsTableSeeder::class,
        ]);

        $this->call([
            StorageTableSeeder::class,
        ]);

        $this->call([
            QrcodeTableSeeder::class,
        ]);
        $this->call([CategoriesSeeder::class,]);
        $this->call([EquipmentSeeder::class,]);
        $this->call([BranchSeeder::class,]);
        $this->call([WarrantySeeder::class,]);
    }
}