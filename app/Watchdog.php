<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Watchdog extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'watchdog';

    /**
     * The columns which are directly fillable.
     *
     * @var array
     */
    protected $fillable = ['message', 'level', 'variables', 'incident_time'];

    /**
     * This table does not have timestamps.
     *
     * @var boolean
     */
    public $timestamps = false;

    /**
     * The maximum number of records in the table
     * before cron deletes the last record.
     *
     * @var integer
     */
    protected $maxRecords = 100;
}
