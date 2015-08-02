<?php
/**
 * Created by PhpStorm.
 * User: amitav
 * Date: 8/2/15
 * Time: 12:39 PM
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    /**
     * This page will show the jquery based image uploader page
     * with multi select, drag and drop with thumbnail view.
     */
    public function getImageUpload()
    {
        return view('img-upload');
    }

    public function doImageUpload(Request $request)
    {
        $postData = $request->file('file');
        return $postData;
    }
}