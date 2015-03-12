<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::dropIfExists('posts');

		Schema::create('posts', function(Blueprint $table)
		{
			$table->increments('id')->comment('Unique identifier');
			$table->string('title', 128)->comment('Title of the post');
			$table->text('body')->comment('The entire content of the post');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('posts');
	}

}
