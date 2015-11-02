<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    /**
     * Fields which can be mass assigned
     * @var array
     */
    protected $fillable = ['name', 'user_id'];

    public function getCreatedAtAttribute($value)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
