<?php
/**
 * Created by PhpStorm.
 * User: amitav
 * Date: 8/2/15
 * Time: 4:20 PM
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    /**
     * Binding table with model.
     *
     * @var string
     */
    protected $table = 'photos';
}