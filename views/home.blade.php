@extends('layout')

@section('content')
<div class="container-fluid" id="content">
    <div class="wrapper d-flex justify-content-center align-items-center flex-column">
        
        <div class="panel my-5 panel-watch d-flex">
            @guest
            <a href="#start-cue" class="view-now-wrapper">
                <div class="view-now-left rounded-circle" style="top: -160px; left: 30px;">
                    View Now.
                </div>
                <img src="@asset('/public/assets/view-now-tail.png')" class="view-now-tail" style="top: -20px; left: 40px;">
            </a>
            @endguest

            <div class="wrapper m-4">
                <h3 class="bold">01</h3>
                <h3 class="bold">WATCH</h3>  
                <p style="color: rgb(200, 200, 200);">How to navigate through vivid</p>
            </div>
            <a href="#start-cue"> <img src="/public/assets/Play.png" alt="" width="100px"> </a>
        </div>
    
        <div class="panel my-5 d-flex justify-content-start align-items-center panel-navigate w-100">
            <div class="wrapper m-5 text-white">
                <h1 class="bold">HOW TO</h1>
                <p class="text-muted bold" style="font-size: 8px !important;">NAVIGATE THROUGH VIVID EXPANDED COMICS</p>
            </div>
        </div>
    </div>
</div>

<div class="vid-container" id="start-cue">
    <video class="start-cue cursor-pointer">
        <source src="/public/assets/1 Start_Visual Cues.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>
</div>

<a href="/home">
    <img class="mt-5 mb-3 home-button cursor-pointer" src="/public/assets/Home Button.png" alt="" width="70px">
</a>

<script type="text/javascript">
    $(".menu").hide();
    
    function menu(){
        $("#content").hide();
        $("#main").hide();
        $("#start-cue").hide();
        $(".home-button").hide();
        $(".menu").show();
        $('.view-now-wrapper').hide();
    }

    function features(){
        $(".menu").hide();
        $("#start-cue").show();
    }

    let clicked = false;
    $(".start-cue").click(function(){
        if(!clicked){
            this.play();
            clicked = true;
        }
        else{
            window.location.replace("/navigate-vivid");
        }
    });
</script>
@endsection