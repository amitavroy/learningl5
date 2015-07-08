<?php

namespace App\Http\Controllers;

use App\Places;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PlacesController extends Controller
{

    /**
     * Defining the constructor
     */
    public function __construct()
    {
        $this->middleware('auth', [
            'except' => ['getMyPlaceJSON'],
        ]);
    }

    /**
     * Get the user's places page where he can add new places
     * and view his current list of places.
     *
     * @return view
     */
    public function getMyPlacesList()
    {
        $places = Places::orderBy('created_at', 'desc')->get();

        return view('places.add-place')->with('places', $places);
    }

    /**
     * This is the HTML for the model coming with the Google MAP.
     *
     * @return view
     */
    public function getMapIframe()
    {
        return view('places.map-partial');
    }

    /**
     * Get the location details and save data to database.
     *
     * @param  Illuminate\Http\Request
     * @return void
     */
    public function saveUserLocation(Request $request)
    {
        Places::create([
            'user_id' => Auth::user()->id,
            'name' => $request->input('address'),
            'type' => $request->input('location_type'),
            'latitude' => $request->input('latitude'),
            'longitude' => $request->input('longitude'),
        ]);
    }

    /**
     * Get the JSON data of the user's places.
     *
     * @return Places object
     */
    public function getMyPlaceJSON()
    {
        return Places::get();
    }
}
