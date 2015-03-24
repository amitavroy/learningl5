<?php
use App\User;
use Illuminate\Database\Seeder;

/**
 * Created by PhpStorm.
 * User: amitav
 * Date: 18/3/15
 * Time: 8:41 PM
 */

class UserTableSeeder extends Seeder {
    
    public function run()
    {
        // first truncate the table
        DB::table('users')->truncate();

        // create the instance of faker
        $faker = Faker\Factory::create();

        // run the loop for inserts
        for ($i = 0; $i < 10; $i++)
        {
            $user = new User;
            $user->name = $faker->name;
            $user->email = $faker->email;
            $user->password = Hash::make($faker->password);
            $user->save();
        }
    }
}