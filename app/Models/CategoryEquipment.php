<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class CategoryEquipment extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'category_equipment';
    protected $fillable = [
        'name',
        'category',
        'created_by',
        'updated_by',
    ];

    public function categories(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category', 'id');
    }

    public function inventories(): HasMany
    {
        return $this->hasMany(Inventory::class, 'id');
    }
}
