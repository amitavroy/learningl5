<?php namespace App\Http\Controllers;

use Facebook\FacebookRedirectLoginHelper;
use Facebook\FacebookRequest;
use Facebook\FacebookSession;
use Facebook\GraphUser;
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
        session_start();
//        dump($request->input());
        $code = $request->input('code');
        $user_data = [];

        FacebookSession::setDefaultApplication(env('FB_APP_ID'), env('FB_APP_SECRET'));
        $helper = new FacebookRedirectLoginHelper(env('FB_URL'));
        $session = $helper->getSessionFromRedirect();
//        dump($session);

        if ($session) {
            try {
                $user_profile = (new FacebookRequest(
                    $session, 'GET', '/me'
                ))->execute()->getGraphObject(GraphUser::className());
//                dump($user_profile);
                $user_data['id'] = $user_profile->getProperty('id');
                $user_data['email'] = $user_profile->getProperty('email');
                $user_data['first_name'] = $user_profile->getProperty('first_name');
                $user_data['gender'] = $user_profile->getProperty('gender');
                $user_data['last_name'] = $user_profile->getProperty('last_name');
                $user_data['name'] = $user_profile->getProperty('name');

            } catch (FacebookRequestException $e) {
                echo "Exception occured, code: " . $e->getCode();
                echo " with message: " . $e->getMessage();
            }
        }

        return response([
            'code' => $code,
            'user_data' => $user_data
        ], 201);
    }

}
