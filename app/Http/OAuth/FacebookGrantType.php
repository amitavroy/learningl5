<?php namespace App\Http\OAuth;

use App\User;
use Exception;
use Facebook\FacebookRequest;
use Facebook\FacebookRequestException;
use Facebook\FacebookSession;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use OAuth2\GrantType\GrantTypeInterface;
use OAuth2\RequestInterface;
use OAuth2\ResponseInterface;
use OAuth2\ResponseType\AccessTokenInterface;

class FacebookGrantType implements GrantTypeInterface
{

    protected $user;

    public function getQuerystringIdentifier()
    {
        return 'facebook';
    }

    public function validateRequest(RequestInterface $request, ResponseInterface $response)
    {
        $code = $request->request('code');
        FacebookSession::setDefaultApplication(env('FB_APP_ID'), env('FB_APP_SECRET'));
        $session = new FacebookSession($code);
        try {
            $session->validate();
            $response = (new FacebookRequest($session, 'GET', '/me'))->execute();
            $object = $response->getGraphObject();
        } catch (FacebookRequestException $ex) {
            Log::info('Session not valid, Graph API returned an exception with the reason.');
            return false;
        } catch (Exception $ex) {
            Log::info('Graph API returned info, but it may mismatch the current app or have expired.');
            return false;
        }

        if ($object) {
            $facebookUserObject = [
                'id' => $object->getProperty('id'),
                'email' => $object->getProperty('email'),
                'first_name' => $object->getProperty('first_name'),
                'gender' => $object->getProperty('gender'),
                'last_name' => $object->getProperty('last_name'),
                'link' => $object->getProperty('link'),
                'locale' => $object->getProperty('locale'),
                'name' => $object->getProperty('name'),
                'timezone' => $object->getProperty('timezone'),
                'updated_time' => $object->getProperty('updated_time'),
                'verified' => $object->getProperty('verified'),
            ];
            // set up the user object properties
            $this->user['user_id'] = $facebookUserObject['name'];
            $this->user['facebook_id'] = $facebookUserObject['id'];
            $this->user['email'] = $facebookUserObject['email'];
            $this->user['first_name'] = $facebookUserObject['first_name'];
            $this->user['last_name'] = $facebookUserObject['last_name'];
            $this->user['name'] = $facebookUserObject['name'];
            $this->user['verified'] = $facebookUserObject['verified'];
        }

        // checking if the user is already present in the system
        if ($this->checkIfUserExist()) {
            // update profile
            $this->updateProfile($facebookUserObject);
        } else {
            // create profile
            $this->createdUserProfile($facebookUserObject);
        }

        return true;
    }

    public function getClientId()
    {
        return null;
    }

    public function getUserId()
    {
        return $this->user['facebook_id'];
    }

    public function getScope()
    {
        return null;
    }

    public function createAccessToken(AccessTokenInterface $accessToken, $client_id, $user_id, $scope)
    {
        return $accessToken->createAccessToken($client_id, $user_id, $scope);
    }

    private function checkIfUserExist()
    {
        $user = User::where('email', $this->user['email'])->first();
        if ($user) {
            $this->user['id'] = $user->id;
            return true;
        } else {
            return false;
        }
    }

    private function updateProfile($facebookUserObject)
    {
        DB::table('users_profile')
            ->where('user_id', $this->user['id'])
            ->update([
                'data' => serialize($facebookUserObject),
            ]);
    }

    private function createdUserProfile($facebookUserObject)
    {
        $user = new User;
        $user->name = $this->user['name'];
        $user->email = $this->user['email'];
        $user->save();

        DB::table('users_profile')->insert([
            'user_id' => $user->id,
            'uid' => $facebookUserObject['id'],
            'user_type' => 'facebook',
            'data' => serialize($facebookUserObject),
        ]);

        $this->user['id'] = $user->id;
    }
}