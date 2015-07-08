<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePlacesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('places', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->comment('The user who added the place');
            $table->string('name')->comment('Name of the place');
            $table->string('type', 50)->comment('Type of place');
            $table->string('latitude')->comment('The geo latitude of the place');
            $table->string('longitude')->comment('The geo longitude of the place');
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
        Schema::drop('places');
    }
}
