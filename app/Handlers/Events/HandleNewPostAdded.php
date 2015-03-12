<?php namespace App\Handlers\Events;

use App\Events\PostAdded;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldBeQueued;

class HandleNewPostAdded {

	protected $user;
	protected $post;

	/**
	 * Create the event handler.
	 *
	 * @return void
	 */
	public function __construct()
	{
		//
	}

	/**
	 * Handle the event.
	 *
	 * @param  PostAdded  $event
	 * @return void
	 */
	public function handle(PostAdded $event)
	{
		$this->post = $event->post;
		$this->user = $event->user;
		\Log::info(print_r($event, true));
		$this->sendEmailNotification();
	}

	private function sendEmailNotification()
	{
		$postTitle = $this->post->title;
		\Log::info("An email was sent to notify user that a new post has been added post title {$postTitle}");
	}

}
