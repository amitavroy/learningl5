<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller {

    public function __construct()
    {
        $this->middleware('oauth');
    }

    public function getAllPosts(Request $request)
    {
        $data = [1,2,3,4];
        return response([$data, 201]);
    }
}