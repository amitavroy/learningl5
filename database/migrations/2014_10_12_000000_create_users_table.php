<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->comment('The display name of the user');
            $table->string('email')->unique()->comment('The user email address');
            $table->string('password', 60)->comment('Hashed password');
            $table->smallInteger('status')->comment('The user status 0: blocked 1: active');
            $table->string('type', 25)->comment('The type of user');
            $table->rememberToken();
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
        Schema::drop('users');
    }
}
