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

        $data = [
            new Product(
                "Насіння кавуна",
                "/img/seeds/watermelon.jpg",
                10,
                "vegetables"
            ),
            new Product(
                "Насіння кукурудзи",
                "/img/seeds/corn.jpg",
                10,
                "vegetables"
            ),
            new Product(
                "Насіння гарбуза",
                "/img/seeds/pumpkin.jpg",
                10,
                "vegetables"
            ),
            new Product(
                "Насіння помідорів",
                "/img/seeds/tomato.jpg",
                10,
                "vegetables"
            ),
            new Product(
                "Насіння огірків",
                "/img/seeds/cucumber.jpg",
                10,
                "vegetables"
            ),
        ];

        $name = [
            'Насіння кавуна',
            'Насіння кукурудзи ',
            'Насіння гарбуза',
            'Насіння помідорів',
            'Насіння огірків',
        ];

        $img = [
            '/img/seeds/watermelon.jpg',
            '/img/seeds/corn.jpg',
            '/img/seeds/pumpkin.jpg',
            '/img/seeds/tomato.jpg',
            '/img/seeds/cucumber.jpg',
        ];

        $count = [
            10,
            10,
            10,
            10,
            10,
        ];

        $category = [
            "seeds",
            "seeds",
            "seeds",
            "seeds",
            "seeds"
        ];

        $categories = [];

        for ($i = 0; $i < count($name); $i++) {
            $categories[] = [
                'name' => $name[$i],
                'img' => $img[$i],
                'count' => $count[$i],
                'category' => $category[$i]
            ];
        }

        DB::table('products')->insert($categories);
    }
}
