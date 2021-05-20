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
        $data = [
            'Насіння',
            'Сажанці',
            'Добрива',
            'Садовий інвентар',
            'Продукти харчування',
        ];

        foreach ($data as $item) {
            DB::table('categories')->insert([
                'name' => $item,
            ]);
        }
    }
}
