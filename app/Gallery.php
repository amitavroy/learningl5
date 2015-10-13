<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    /**
     * Mapping the model with the db column
     *
     * @var string
     */
    protected $table = 'galleries';

    /**
     * Fillables table columns
     * @var array
     */
    protected $fillable = ['name', 'user_id'];

    public function getCreatedAtAttribute($value)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
    }

    /**
     * Relation between Gallery and user
     *
     * @return Eloquent relation
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
