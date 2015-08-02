<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePhotosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('file_name')->comment('The name of the file');
            $table->string('file_size', 10)->comment('File size as fetched from the api');
            $table->string('file_mime', 50)->comment('The image mime type');
            $table->string('path')->comment('Where th file is stored');
            $table->integer('created_by')->comment('The user who created the gallery');
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
        Schema::drop('photos');
    }
}
