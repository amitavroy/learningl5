<?php
use App\Post;
use App\User;
use Illuminate\Database\Seeder;

/**
 * Created by PhpStorm.
 * User: amitav
 * Date: 17/3/15
 * Time: 12:01 AM
 */

class PostSeeder extends Seeder {
    
    public function run()
    {
        // first truncate the table
        DB::table('posts')->truncate();

        // create the instance of faker
        $faker = Faker\Factory::create();

        // run the loop for inserts
        for ($i = 0; $i < 50; $i++)
        {
            $userId = rand(1,10);
            $user = User::find($userId);
            $post = new Post;
            $post->title = $faker->sentence(6);
            $post->body = $faker->text;
            $post->user_id = $userId;
            $post->save([
                'user' => $user,
                'post' => $post
            ]);
        }
    }
}