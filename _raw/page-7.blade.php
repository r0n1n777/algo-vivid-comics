@extends('layout')

@section('content')
<div class="page-content">
    <div class="d-flex flex-column justify-content-center align-items-center ">
        <div class="vid-container text-white text-center">
            <video autoplay >
                <source src="./Assets/Page7-Final_1.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
            </video>
            <a href="#toBottom"><img src="./assets/Scroll.png" alt="" width="50px" class="scroll cursor-pointer"></a>
            
        </div>

        <h3 class="text-danger font-weight-bold end">THE END</h3>

        <img src="./assets/Cover.png" alt="" class="img-fluid">
        <div class="pagination text-primary" id="toBottom">
            <a href="page-1" class="mx-2 nav-link">1</a>
            <a href="page-2" class="mx-2 nav-link">2</a>
            <a href="page-3" class="mx-2 nav-link">3</a>
            <a href="home" class="mx-2"><img src="./assets/Home Button.png" width="50px"  alt=""></a>
            <a href="page-5" class="mx-2 nav-link">5</a>
            <a href="page-6" class="mx-2 nav-link">6</a>
            <a href="page-7" class="mx-2 nav-link">7</a>
        </div>
    </div>
</div>
@endsection