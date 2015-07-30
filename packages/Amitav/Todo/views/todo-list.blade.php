<h1>My TODOs</h1>

<ul>
    @foreach ($todos as $todo)
    <li>{{$todo->todo}}</li>
    @endforeach
</ul>
