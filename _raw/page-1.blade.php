@extends('layout')

@section('content')
<div class="page-content bg-black">
    <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="vid-container text-white text-center">
            <img src="/public/assets/hamburger.png" class="menu-button menu-button-page" width="100px">
            <video autoplay loop>
                <source src="/public/assets/Tangled Mind_2_1.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
            </video>
            <h5>I'm not sure if I can still remember</h5>
        </div>
        <img class="img-fluid vh-100" src="@asset('/public/assets/TangledMind3.png')" alt="" width="500px">
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

<script type="text/javascript">
    $('.view-now-wrapper').hide();
</script>

@endsection
