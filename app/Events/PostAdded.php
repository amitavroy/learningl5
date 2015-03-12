<?php namespace App\Events;

use App\Events\Event;

use Illuminate\Queue\SerializesModels;

class PostAdded extends Event {

	use SerializesModels;

	public $user;
	public $post;

	/**
	 * Create a new event instance.
	 *
	 * @return void
	 */
	public function __construct($user, $post)
	{
		$this->user = $user;
		$this->post = $post;
	}

}
