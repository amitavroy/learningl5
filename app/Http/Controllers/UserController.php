<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{
    /**
     * This is the login screen url
     *
     * @var string
     */
    protected $loginScreen = 'user';

    /**
     * This is the url for the user dashboard
     *
     * @var string
     */
    protected $dashboard = 'user/dashboard';

    /**
     * The change password screen
     *
     * @var string
     */
    protected $changePasswordScreen = 'user/change-password';

    /**
     * This is the construvtor for the Controller
     */
    public function __construct()
    {
        // set which methods will be authenticated
        // and which are not
        $this->middleware('auth', [
            'except' => ['getLoginPage', 'doLogin'],
        ]);
    }

    /**
     * This is the page where the user will get
     * the login form.
     *
     * @return void
     */
    public function getLoginPage()
    {
        return view('user.user-login');
    }

    /**
     * This is where the user credentials are matched
     * and if validation passed, he will be taken
     * to the dashboard, or else back to login
     * screen with error messages.
     *
     * @param  Illuminate\Http\Request
     * @return void
     */
    public function doLogin(Request $request)
    {
        $credentials = [
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'status' => 1,
        ];

        if (!Auth::attempt($credentials)) {
            // if the user credentials are not correct we
            // will redirect user to the login page with
            // message that the credentials were wrong
            Session::flash('flash_error', 'Something went wrong with the username and / or password');
            return redirect($this->loginScreen);
        }

        Session::flash('flash_message', 'You have logged in successfully');

        return redirect($this->dashboard);
    }

    /**
     * This is the method which returns the dashboard.
     *
     * @return view dashboard
     */
    public function getUserDashboard()
    {
        return view('user.user-dashboard');
    }

    /**
     * This is the form to change password by the user.
     *
     * @return view user change password
     */
    public function getChangeUserPassword()
    {
        return view('user.user-changepasswd');
    }

    /**
     * Check current password and then change
     * the new password set by the user.
     *
     * @param  Illuminate\Http\Request
     * @return redirect to change password
     */
    public function saveNewPassword(Request $request)
    {
        $currentUser = Auth::user();

        // checking if the current password is correct
        if (!Hash::check($request->input('current_password'), $currentUser->password)) {
            Session::flash('flash_error', 'Current password is wrong.');
            return redirect($this->changePasswordScreen);
        }

        // check if the two password match
        if ($request->input('new_password') != $request->input('confirm_new_password')) {
            Session::flash('flash_error', 'The two passwords are not matching.');
            return redirect($this->changePasswordScreen);
        }

        // change password and send back
        $currentUser->password = Hash::make($request->input('new_password'));
        $currentUser->save();

        Session::flash('flash_message', 'Password changed.');
        return redirect($this->changePasswordScreen);
    }

    /**
     * This is the user profile edit page.
     *
     * @return view user profile edit.
     */
    public function getUserProfileEditPage()
    {
        return view('user.user-editprofile')
            ->with('user', Auth::user());
    }

    /**
     * Saving the user profile data on save.
     *
     * @param  Illuminate\Http\Request
     * @return redirect back
     */
    public function saveUserProfileData(Request $request)
    {
        $user = User::find(Auth::user()->id);

        $user->name = $request->input('name');
        $user->save();

        Session::flash('flash_message', 'Profile data changed.');
        return redirect()->back();
    }

    /**
     * This page will log out the user
     * destroy his session and take
     * him back to login screen.
     *
     * @return redirect
     */
    public function getUserLogout()
    {
        Auth::logout();
        Session::flash('flash_message', 'You have logged out.');
        return redirect($this->loginScreen);
    }
}
