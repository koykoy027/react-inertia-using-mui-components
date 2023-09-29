<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Qrcode extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    //  i use fillable in my item that i need to be populated
    protected $fillable = [
        'productName',
        'productId',
        'branch',
        'status',
        'qrDescription',
        // 'status',
        // 'productDescription',

    ];
}
