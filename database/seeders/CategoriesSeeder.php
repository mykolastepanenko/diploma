<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        $name = [
            'Насіння',
            'Сажанці',
            'Добрива',
            'Садовий інвентар',
            'Продукти харчування',
        ];

        $img = [
            '/img/seeds.jpg',
            '/img/seedlings.jpg',
            '/img/fertilizers.jpg',
            '/img/inventory.jpg',
            '/img/food.jpg',
        ];

        $categories = [];

        for ($i = 0; $i < count($name); $i++) {
            $categories[] = [
                'name' => $name[$i],
                'img' => $img[$i]
            ];
        }

        DB::table('categories')->insert($categories);
    }
}
