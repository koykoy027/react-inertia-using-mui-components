<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('office_equipments', function (Blueprint $table) {
            $table->id();
            $table->string('qr_code')->unique();
            $table->string('bar_code')->unique();
            $table->string('name');
            $table->foreignId('category')->constrained('office_equipments_categories');
            $table->string('purchase_date');
            $table->decimal('cost', 10, 2);
            $table->foreignId('location')->constrained('office_equipments_locations');
            $table->foreignId('status')->constrained('statuses');
            $table->string('condition');

            $table->boolean('is_active')->default(true);
            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('updated_by')->constrained('users');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('office_equipments');
    }
};
