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
    public function addProduct(Request $request)
    {
        DB::table('products')->insert([
            'name' => $request->name,
            'img' => "null",
            'price' => (int)$request->price,
            'count' => (int)$request->count,
            'category' => $request->category
        ]);

        return redirect('/admin-panel');
    }

    public function editCategory(Request $request)
    {
        DB::table('categories')
            ->where('id', $request->id)
            ->update(['name' => $request->name]);
    }

    public function deleteCategory(Request $request)
    {
        DB::table('categories')->where('id', '=', $request->id)->delete();

        // return redirect('/admin-panel');
    }

    public function deleteProduct(Request $request)
    {
        DB::table('products')->where('id', '=', $request->id)->delete();

        // return redirect('/admin-panel');
    }
}
