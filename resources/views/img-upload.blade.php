@extends('master')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <h1>Image upload</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-md-5">
            <div id="drop-area-div">
                Drag and Drop Files Here<br/>
                or click to add files using the input<br/>
                <input type="file" name="files[]" multiple="multiple" title="Click to add Files">
            </div>
        </div>

        <div class="col-md-7">
            <div id="demo-files">
                <p>Images</p>
            </div>
        </div>
    </div>
@endsection