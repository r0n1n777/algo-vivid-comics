@extends('layout')

@section('content')
<div class="page-content">
    <div class="d-flex flex-column justify-content-center align-items-center ">
        <div class="vid-container text-white text-center">
            <video autoplay>
                <source src="Assets/Page2_1.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
            </video>
        </div>
        <div class="pagination text-primary">
            <a href="page-1" class="mx-2 nav-link">1</a>
            <a href="page-2" class="mx-2 nav-link">2</a>
            <a href="page-3" class="mx-2 nav-link">3</a>
            <a href="page-4" class="mx-2 nav-link">4</a>
            <a href="page-5" class="mx-2 nav-link">5</a>
            <a href="page-6" class="mx-2 nav-link">6</a>
            <a href="page-7" class="mx-2 nav-link">7</a>
        </div>
    </div>
</div>
@endsection
