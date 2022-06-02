@extends('layout')

@section('content')
<div class="container vh-100" id="start" style="z-index: 2000;">
    <div id="vivid-navigate" class="carousel slide carousel-fade" data-bs-interval="false">
  
        <!-- The slideshow -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <video id="1" autoplay>
                    <source src="/public/assets/Panel 1.mp4" type="video/mp4">
                    Your browser does not support HTML5 video.
                </video>
            </div>

            <div class="carousel-item">
                <video class="cursor-pointer" id="2" onclick="Next()">
                    <source src="/public/assets/2.mp4" type="video/mp4">
                    Your browser does not support HTML5 video.
                </video>
            </div>

            <div class="carousel-item">
                <video class="cursor-pointer" id="3" onclick="Next()" >
                    <source src="/public/assets/Page Cues 3b.mp4" type="video/mp4">
                    Your browser does not support HTML5 video.
                </video>
            </div>

            <div class="carousel-item">
                <video class="cursor-pointer" id="4" onclick="goHome()">
                    <source src="/public/assets/Home - Scroll.mp4" type="video/mp4">
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </div>
        
        <!-- Left and right controls -->
        <a class="carousel-control-next" href="#vivid-navigate" data-bs-slide="next" onclick="videoPlay()"></a>
    </div>  
</div>

<script type="text/javascript">
    let vidId = 2;
    function videoPlay(){
        $("#" + vidId).trigger('play');
        console.log(vidId);
        vidId++;
    }

    function goHome(){
        window.location.replace("home?tutorial=true");
    }

    function Next(){
        console.log("fd");
        $('.carousel').carousel("next");
        videoPlay();
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $('#start').offset().top
    }, 100);
</script>
@endsection
