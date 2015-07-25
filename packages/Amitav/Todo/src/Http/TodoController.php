<?php

namespace Amitav\Todo\Http;

use App\Http\Controllers\Controller;

class TodoController extends Controller
{
    public function getUserTodoList()
    {
        return "This is my todo list from the controller";
    }
}
