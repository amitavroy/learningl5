<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class GlobalController extends Controller {
    
    public function getCSRFToken()
    {
        return response(csrf_token(), 200);
    }

}
