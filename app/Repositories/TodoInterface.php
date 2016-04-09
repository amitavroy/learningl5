<?php
/**
 * Created by PhpStorm.
 * User: amitav
 * Date: 4/9/16
 * Time: 2:58 PM
 */

namespace App\Repositories;


interface TodoInterface
{
    public function getAll();

    public function getById($id);

    public function create(array $attributes);

    public function update($id, array $attributes);

    public function delete($id);
}
