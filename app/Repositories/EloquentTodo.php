<?php
/**
 * Created by PhpStorm.
 * User: amitav
 * Date: 4/9/16
 * Time: 3:00 PM
 */

namespace App\Repositories;


use App\Todo;

class EloquentTodo implements TodoInterface
{
    /**
     * @var Todo
     */
    private $model;

    /**
     * EloquentTodo constructor.
     * @param Todo $model
     */
    public function __construct(Todo $model)
    {
        $this->model = $model;
    }

    public function getAll()
    {
        return $this->model->all();
    }

    public function getById($id)
    {
        return $this->model->findOrFail($id);
    }

    public function create(array $attributes)
    {
        return $this->model->create($attributes);
    }

    public function update($id, array $attributes)
    {
        $todo = $this->getById($id);

        $todo->update($attributes);

        return $todo;
    }

    public function delete($id)
    {
        $this->getById($id)->delete();

        return true;
    }
}
