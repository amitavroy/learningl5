<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    /**
     * Define the columns which can be mass assigned
     *
     * @var array
     */
    protected $fillable = ['file_name', 'mime_type', 'file_size', 'file_path', 'status', 'type'];
}
