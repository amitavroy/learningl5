<?php namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use OAuth2\HttpFoundationBridge\Request as OAuthRequest;

class OAuthVerificationMiddleWare {
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // check if the access token is present
        if (!$request->input('access_token'))
        {
            return abort(422, 'Token not found');
        }

        $req = \Symfony\Component\HttpFoundation\Request::createFromGlobals();
        $bridgedRequest  = OAuthRequest::createFromRequest($req);
        $bridgedResponse = new \OAuth2\HttpFoundationBridge\Response();

        /** To Return error codes for access token expired **/
        if (!$token = App::make('oauth2')->getAccessTokenData($bridgedRequest, $bridgedResponse)) {
            $response = App::make('oauth2')->getResponse();
            /*Log::info('RESPONSE === '. print_r($response, true));*/
            if ($response->isClientError() && $response->getParameter('error')) {
                if($response->getParameter('error') == 'expired_token') {
                    return response('The access token provided has expired', 401);
                }
                return response('Invalid Token.', 422);
            }
        }
        else {
            Log::info('TOKEN === '. print_r($token, true));
            $request['user_id'] = $token['user_id'];
        }
        /*Log::info('RESPONSE === '. print_r($request->input(), true));*/
        return $next($request);
    }
}