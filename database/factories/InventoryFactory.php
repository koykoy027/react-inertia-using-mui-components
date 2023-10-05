<?php

namespace Database\Factories;

use App\Models\CategoryEquipment;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Inventory>
 */
class InventoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'serial_number'      => $this->faker->unique()->uuid(),
            'bar_code'           => $this->faker->unique()->uuid(),
            'qr_code'            => $this->faker->unique()->uuid(),
            'category_equipment' => CategoryEquipment::factory(),
            'name'               => $this->faker->name(),
            'status'             => $this->faker->numberBetween(1, 5),
            'created_by'         => 1,
            'updated_by'         => 2,
        ];
    }
}
