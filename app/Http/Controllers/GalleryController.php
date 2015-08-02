<?php
/**
 * Created by PhpStorm.
 * User: amitav
 * Date: 8/2/15
 * Time: 3:11 PM
 */

namespace App\Http\Controllers;

use App\Gallery;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    /**
     * This is the page where I will list all the galleries.
     */
    public function viewGalleryList()
    {
        $myGalleries = Gallery::where('created_by', 1)->orderBy('created_at', 'desc')->get();

        return view('gallery.gallery')
            ->with('galleries', $myGalleries);
    }

    /**
     * This is where I am saving the Gallery
     * from the post data.
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function saveGallery(Request $request)
    {
        $postData = $request->all();

        $gallery = new Gallery;
        $gallery->name = $postData['galleryName'];
        $gallery->created_by = 1; // this is now hard coded.
        $gallery->published = 1;
        $gallery->save();

        return redirect()->back();
    }

    public function viewGalleryPics($id)
    {
        $gallery = Gallery::find($id);

        return view('gallery.gallery-full')
            ->with('gallery', $gallery);
    }

    /**
     * This page will show the jquery based image uploader page
     * with multi select, drag and drop with thumbnail view.
     */
    public function getImageUpload()
    {
        return view('gallery.img-upload');
    }

    /**
     * This is where I am going to upload the image.
     *
     * @param Request $request
     * @return array|\Symfony\Component\HttpFoundation\File\UploadedFile
     */
    public function doImageUpload(Request $request)
    {
        $postData = $request->file('file');
        return $postData;
    }
}