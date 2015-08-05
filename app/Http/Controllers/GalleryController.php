<?php
/**
 * Created by PhpStorm.
 * User: amitav
 * Date: 8/2/15
 * Time: 3:11 PM
 */

namespace App\Http\Controllers;

use App\Gallery;
use App\Photo;
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

    /**
     * This is the page where all the photos of a gallery
     * will be visible and user can add more photos
     * using the drag and drop interface.
     *
     * @param $id
     * @return $this
     */
    public function viewGalleryPics($id)
    {
        $gallery = Gallery::find($id);

        // If id not valid, throw an error
        // saying the gallery does not exist.
        if (!$gallery) {
            \App::abort(500, 'Gallery with this id does not exist.');
        }

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

        // sanitizing the file name using the helper function
        $fileName = sanitize($postData->getClientOriginalName(), true);

        // moving the file to destination path
        $postData->move('uploads', $fileName);

        // saving the photo details to the DB
        $photo = new Photo;
        $photo->file_name = $fileName;
        $photo->file_size = $postData->getClientSize();
        $photo->file_mime = $postData->getClientMimeType();
        $photo->path = 'uploads/' . $fileName;
        $photo->created_by = 1;
        $photo->save();

        // return the details of the DB entry back to the user
        return $photo;
    }
}