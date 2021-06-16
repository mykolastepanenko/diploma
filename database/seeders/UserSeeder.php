<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $name = ['admin', 'user'];
        $email = ['admin@admin.com', 'user@user.com'];
        $password = [Hash::make('123123123'), Hash::make('123123123')];
        $isAdmin = [1, 0];

        $users = [];

        for ($i = 0; $i < count($name); $i++) {
            $users[] = [
                'name' => $name[$i],
                'email' => $email[$i],
                'password' => $password[$i],
                'isAdmin' => $isAdmin[$i],
            ];
        }

        DB::table('users')->insert($users);

        // DB::table('users')->insert([
        //     'name' => "admin",
        //     'email' => "admin@admin.com",
        //     'password' => Hash::make('123123123'),
        //     'isAdmin' => true,
        // ]);
    }
}
