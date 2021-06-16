<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name = [
            'Насіння кавуна',
            'Насіння кукурудзи ',
            'Насіння гарбуза',
            'Насіння помідорів',
            'Насіння огірків',

            'Сажанці яблуні',
            'Сажанці вишні',
            "Сажанці абрикоси",
            "Сажанці груши",
            "Сажанці персика",

            "Добриво №1",
            "Добриво №2",
            "Добриво №3",
            "Добриво №4",
            "Добриво №5",

            "Граблі",
            "Лопата",
            "Пила",
            "Електро пила",
            "Кущоріз",

            "Масло гарбузне холодного віджиму",
            "Масло кунжутне холодного віджиму",
            "Цукерки веганські",
            "Пастила яблучна",
            "Пастила яблучно-чорнична"
        ];

        $img = [
            '/img/seeds/watermelon.jpg',
            '/img/seeds/corn.jpg',
            '/img/seeds/pumpkin.jpg',
            '/img/seeds/tomato.jpg',
            '/img/seeds/cucumber.jpg',

            '/img/planes/apples.jpg',
            '/img/planes/cherry.jpeg',
            '/img/planes/apricot.jpg',
            '/img/planes/pear.jpg',
            '/img/planes/peach.jpg',

            '/img/fertilizers/1.jpg',
            '/img/fertilizers/2.jpg',
            '/img/fertilizers/3.jpg',
            '/img/fertilizers/4.jpg',
            '/img/fertilizers/5.jpg',

            '/img/inventory/rake.jpg',
            '/img/inventory/shovel.jpeg',
            '/img/inventory/saw.jpg',
            '/img/inventory/e-saw.jpg',
            '/img/inventory/bosch.jpg',

            '/img/foods/oil.jpg',
            '/img/foods/oil2.jpg',
            '/img/foods/sweet.jpg',
            '/img/foods/bob.jpg',
            '/img/foods/bob2.jpg',
        ];

        $price = [
            10,
            10,
            10,
            10,
            10,

            15,
            15,
            475,
            100,
            342,

            5,
            17,
            42,
            24,
            32,

            1000,
            2000,
            2225,
            4024,
            2341,

            100,
            100,
            100,
            100,
            100,
        ];

        $category = [
            "Насіння",
            "Насіння",
            "Насіння",
            "Насіння",
            "Насіння",

            "Сажанці",
            "Сажанці",
            "Сажанці",
            "Сажанці",
            "Сажанці",

            "Добрива",
            "Добрива",
            "Добрива",
            "Добрива",
            "Добрива",

            "Садовий інвентар",
            "Садовий інвентар",
            "Садовий інвентар",
            "Садовий інвентар",
            "Садовий інвентар",

            "Продукти харчування",
            "Продукти харчування",
            "Продукти харчування",
            "Продукти харчування",
            "Продукти харчування",
        ];

        $count = [
            10,
            10,
            20,
            20,
            30,

            11,
            23,
            212,
            122,
            33,

            45,
            23,
            14,
            76,
            46,

            234,
            563,
            324,
            123,
            3,

            5,
            23,
            223,
            43,
            7,
        ];

        $categories = [];

        for ($i = 0; $i < count($name); $i++) {
            $categories[] = [
                'name' => $name[$i],
                'img' => $img[$i],
                'price' => $price[$i],
                'count' => $count[$i],
                'category' => $category[$i]
            ];
        }

        DB::table('products')->insert($categories);
    }
}
