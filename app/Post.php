<?php namespace App;

use App\Events\PostAdded;
use Illuminate\Database\Eloquent\Model;

class Post extends Model {

    protected $table = 'posts';

    public function save(array $options = array())
    {
        parent::save($options);

        $user = $options['user'];
        $post = $options['post'];

        \Event::fire(new PostAdded($user, $post));

        return true;
    }
}
