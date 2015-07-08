<?php

use App\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    public function run()
    {
        // creating the first user
        User::create([
            'name' => 'Amitav Roy',
            'email' => 'amitav.roy@focalworks.in',
            'password' => Hash::make('pass'),
            'status' => 1,
            'type' => 'normal',
        ]);
    }
}
