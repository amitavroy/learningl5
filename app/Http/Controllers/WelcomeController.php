<?php namespace App\Http\Controllers;

use Facebook\FacebookRedirectLoginHelper;
use Facebook\FacebookSession;
use Illuminate\Http\Request;

class WelcomeController extends Controller {

    /*
    |--------------------------------------------------------------------------
    | Welcome Controller
    |--------------------------------------------------------------------------
    |
    | This controller renders the "marketing page" for the application and
    | is configured to only allow guests. Like most of the other sample
    | controllers, you are free to modify or remove it as you desire.
    |
    */

    /**
     * Create a new controller instance.
     *
     */
    public function __construct()
    {
//        $this->middleware('guest');
    }

    /**
     * Show the application welcome screen to the user.
     *
     * @return Response
     */
    public function index()
    {
        session_start();
        FacebookSession::setDefaultApplication(env('FB_APP_ID'), env('FB_APP_SECRET'));
        $helper = new FacebookRedirectLoginHelper(env('FB_URL'));
        $fb_loginUrl = $helper->getLoginUrl(array(
            'scope' => 'email'
        ));

        return view('pages.home')->with('fb_loginUrl', $fb_loginUrl);
    }

    public function getFBPostData(Request $request)
    {
        dump($request->input());
    }

}
