<?php

namespace App\Http\Controllers;

use App\Repositories\TodoInterface;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class TodoController extends Controller
{
    /**
     * @var TodoInterface
     */
    private $todo;

    /**
     * TodoController constructor.
     */
    public function __construct(TodoInterface $todo)
    {
        $this->todo = $todo;
    }

    public function showTodoList()
    {
        return $this->todo->getAll();
    }
}
