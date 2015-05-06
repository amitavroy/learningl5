<?php

use Illuminate\Database\Seeder;

/**
 * Created by PhpStorm.
 * User: amitav
 * Date: 17/3/15
 * Time: 12:01 AM
 */

class OAuthUsersSeeder extends Seeder {
    
    public function run()
    {
        DB::table('oauth_users')->insert(array(
            'username' => "bshaffer",
            'password' => sha1('brent123'),
            'first_name' => "Brent",
            'last_name' => "Shaffer",
        ));
    }
}