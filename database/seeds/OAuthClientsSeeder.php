<?php

use Illuminate\Database\Seeder;

/**
 * Created by PhpStorm.
 * User: amitav
 * Date: 17/3/15
 * Time: 12:01 AM
 */

class OAuthClientsSeeder extends Seeder {
    
    public function run()
    {
        DB::table('oauth_clients')->insert(array(
            'client_id' => "testclient",
            'client_secret' => "testpass",
            'redirect_uri' => "http://fake/",
        ));
    }
}