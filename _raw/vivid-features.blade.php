@extends('layout')

@section('content')
<div class="vid-container" id="start-cue">
    <video class="start-cue cursor-pointer">
        <source src="Assets/1 Start_Visual Cues.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>
</div>
<a href="home"><img class="mt-5 mb-3 home-button cursor-pointer" src="./Assets/Home Button.png" alt="" width="70px"></a>

<script type="text/javascript">
let clicked = false;
$(".menu").hide();

function menu(){
    $("#content").hide();
    $("#main").hide();
    $("#start-cue").hide();
    $(".home-button").hide();
    $(".menu").show();
}

function feature(){
    $(".menu").hide();
    $("#start-cue").show();
}

$(".start-cue").click(function(){
    if(!clicked){
        this.play();
        clicked = true;
    }
    else{
        window.location.replace("navigate-vivid");
    }
});
</script>
@endsection