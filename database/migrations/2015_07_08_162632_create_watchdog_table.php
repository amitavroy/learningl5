<?php

use Illuminate\Database\Migrations\Migration;

class CreateWatchdogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('watchdog', function ($table) {
            $table->increments('id')->comment('Unique identifier');
            $table->string('message', 255)->comment('The message which needs to be passed');
            $table->string('level', 20)->comment('The level of the watchdog entry');
            $table->text('variables')->comment('The context variable');
            $table->timestamp('incident_time')->comment('When this incident happened');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('watchdog');
    }
}
