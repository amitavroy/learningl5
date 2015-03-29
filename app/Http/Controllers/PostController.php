<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Post;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller {

    /**
     * The number of post which the query will take by default.
     *
     * @var int
     */
    private $take = 2;

    /**
     * The number of post which the query will skip by default.
     *
     * @var int
     */
    private $skip = 0;

    /**
     * The current logged in user.
     *
     * @var
     */
    private $user;

    /**
     * The constructor for the class.
     */
    public function __construct()
    {
        $this->user = Auth::loginUsingId(1);
    }


    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        if ($request->input('skip') && is_numeric($request->input('skip'))) {
            $this->skip = $request->input('skip');
        }

        if ($request->input('take') && is_numeric($request->input('take'))) {
            $this->take = $request->input('take');
        }

        $post = Post::take($this->take)->skip($this->skip)->get();

        return $post;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $user = $this->user;

        $postData = $request->input();
        $post = new Post;
        $post->title = $postData['title'];
        $post->body = $postData['body'];
        $post->user_id = $user->id;
        if ($post->save(['user' => User::find(1), 'post' => $post])) {
            return response([
                'message' => 'Post saved successfully.',
                'data' => $post
            ], 201);
        } else {
            return response([
                'message' => 'Post was not saved. Try again.',
                'data' => $post
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $user = $this->user;
        $post = Post::find($id);

        /**
         * Checking if the logged in user is the owner of the post.
         */
        if ($post->user_id != $user->id) {
            return response([
                'message' => 'You are not the owner of this article',
                'data' => $post
            ], 403);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $user = Auth::loginUsingId(1);
        $post = Post::find($id);

        /**
         * Checking if the logged in user is the owner of the post.
         */
        if ($post->user_id != $user->id) {
            return response([
                'message' => 'You are not the owner of this article',
                'data' => $post
            ], 403);
        }

        Post::destroy($id);
    }
}