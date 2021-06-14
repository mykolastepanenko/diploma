<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Admin extends Controller
{
    public function addCategory(Request $request)
    {
        DB::table('categories')->insert([
            'name' => $request->name,
            'img' => "null",
        ]);

        return redirect('/admin-panel');
    }

    public function deleteCategory(Request $request)
    {
        DB::table('categories')->where('id', '=', $request->id)->delete();

        // return redirect('/admin-panel');
    }
}
