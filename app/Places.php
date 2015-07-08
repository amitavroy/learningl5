<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Places extends Model
{
    /**
     * The database table used by the mode
     *
     * @var string
     */
    protected $table = 'places';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'type', 'latitude', 'longitude', 'user_id'];

    /**
     * Get the user who went to this place.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
