<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public $name;
    public $img;
    public $count;
    public $category;

    function __construct($name, $img, $count, $category)
    {
        $this->name = $name;
        $this->img = $img;
        $this->count = $count;
        $this->category = $category;
    }
}
