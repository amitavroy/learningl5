<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    /**
     * Define the fields which are fillable
     * @var array
     */
    protected $fillable = ['email', 'invite_code', 'inviter_id', 'status'];
}
