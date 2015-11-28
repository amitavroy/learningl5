<?php

namespace App\Http\Controllers;

use App\File;
use App\Gallery;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Gallery::where('user_id', Auth::user()->id)->with('user')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validaor = Validator::make($request->all(), [
            'name' => 'required|min:3',
        ]);

        if ($validaor->fails()) {
            return response($validaor->errors()->all(), 422);
        }

        $gallery = Gallery::create([
            'name' => $request->input('name'),
            'user_id' => Auth::user()->id,
        ]);

        return response($gallery, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Gallery::with('user')->where('id', $id)->first();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function uploadImage(Request $request)
    {
        $galleryId = $request->input('galleryId');

        // check if the file exist
        if (!$request->hasFile('file')) {
            return response('No file sent.', 400);
        }

        // check if the file is valid file
        if (!$request->file('file')->isValid()) {
            return response('File is not valid.', 400);
        }

        // validation rules
        $validator = Validator::make($request->all(), [
            'galleryId' => 'required|integer',
            'file' => 'required|mimes:jpeg,jpg,png|max:8000',
        ]);

        // if validation fails
        if ($validator->fails()) {
            return response('There are errors in the form data', 400);
        }

        $fileObj = new File;
        $fileUpload = $fileObj->uploadThumbAndMainImage($request);
        return response($fileUpload, 201);
    }
}
