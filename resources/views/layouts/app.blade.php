<?php

use Illuminate\Support\Facades\DB;

$categories = DB::select('select * from categories');
$products = DB::select('select * from products');

$seeds = DB::select('select * from products where category = "Насіння"');
$planes = DB::select('select * from products where category = "Сажанці"');
$inventory = DB::select('select * from products where category = "Добрива"');
$fertilizers = DB::select('select * from products where category = "Садовий інвентар"');
$food = DB::select('select * from products where category = "Продукти харчування"');
$users = DB::select('select * from users');

?>

<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    @yield('content')

    @guest
    <div 
        id="app" 
        data-categories="{{json_encode($categories)}}" 
        data-products="{{json_encode($products)}}" 
        data-seeds="{{json_encode($seeds)}}" 
        data-planes="{{json_encode($planes)}}"
        data-fertilizers="{{json_encode($fertilizers)}}"
        data-inventory="{{json_encode($inventory)}}"
        data-food="{{json_encode($food)}}"
    >
    @else
    <div 
        id="app" 
        data-categories="{{json_encode($categories)}}" 
        data-products="{{json_encode($products)}}" 
        data-seeds="{{json_encode($seeds)}}" 
        data-planes="{{json_encode($planes)}}"
        data-fertilizers="{{json_encode($fertilizers)}}"
        data-inventory="{{json_encode($inventory)}}"
        data-food="{{json_encode($food)}}"
        data-user="{{Auth::user()}}"
        data-users="{{json_encode($users)}}"
    >
    @endguest

    </div>
</body>

<script>
    var csrf_token = '<?php echo csrf_token() ?>';
</script>

</html>