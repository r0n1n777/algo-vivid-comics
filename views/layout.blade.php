<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=0.7, user-scalable=no">
        <meta name="theme-color" content="#77226E" media="(prefers-color-scheme: light)">
        
        <title>Home</title>

        <link href="@asset('public/css/app.css')" rel="stylesheet">
        <link href="@asset('resources/css/style.css')" rel="stylesheet">

        <script src="@asset('public/js/app.js')" type="text/javascript"></script>
    </head>
    <body>
        <div class="home container d-flex flex-column justify-content-center align-items-center p-0">
            <div class="landing-page w-100">
                <!--Navbar-->
                <div class="navbar w-100 mb-5 d-flex justify-content-around align-items-center py-4 fixed-top">
                    <div class="brand d-flex justify-content-center align-items-center">
                        <p class="mb-0 small">Keith Dela Cruz</p>
                    </div>
                    <div class="links d-flex justify-content-center align-items-center">
                        <a class="nav-link fw-bold" href="/home">
                            HOME @if ($request == 'home') <i class="bi bi-caret-down-fill"></i> @endif
                        </a>
                        <a class="nav-link fw-bold" href="/home#start-cue" onclick="features()">FEATURES</a>
                        <a class="nav-link fw-bold menu-link" @guest style="color: #B5763F !important;" @else href="#menu" @endguest>VIVID</a>

                        @auth
                        <a href="#start-cue" class="view-now-wrapper">
                            <img src="@asset('/public/assets/view-now-tail.png')" class="view-now-tail" style="top: 60px; right: 40px; transform: rotate(180deg); z-index: 6000;">
                            <div class="view-now-left rounded-circle" style="top: 100px; right: 60px;">
                                View Now.
                            </div>
                        </a>
                        @endauth
                    </div>
                </div>
                
                <!--Menu-->

                <div class="menu border border-light m-3 p-3 bg-black">
                    <img src="/public/assets/hamburger.png" class="menu-button" width="100px">
                    <div class="row">
                        <div class="col-6 my-3 d-flex justify-content-center align-items-center">
                            <div class="option text-white">
                                <div class="page-number d-flex justify-content-start align-items-start">
                                    <h1>01 </h1>
                                    <p>PAGE</p>
                                </div>
                                <a href="page-1"><img src="/public/assets/Page1_q.png" alt="" width="200px"></a>
                            </div>
                        </div>
                        <div class="col-6 my-3 d-flex justify-content-center align-items-center">
                            <div class="option text-white">
                                <div class="page-number d-flex">
                                    <h1>02 </h1>
                                    <p>PAGE</p>
                                </div>
                                <a href="page-2"><img src="/public/assets/Page2_o.png" alt="" width="200px"></a>
                                
                            </div>
                        </div>
                        <div class="col-6 my-3 d-flex justify-content-center align-items-center">
                            <div class="option text-white">
                                <div class="page-number d-flex">
                                    <h1>03 </h1>
                                    <p>PAGE</p>
                                </div>
                                <a href="page-3"> <img src="/public/assets/Page3_p.png " alt="" width="200px"> </a>
                            </div>
                        </div>
                        <div class="col-6 my-3 d-flex justify-content-center align-items-center">
                            <div class="option text-white">
                                <div class="page-number d-flex">
                                    <h1>04 </h1>
                                    <p>PAGE</p>
                                </div>
                                <a href="page-4"> <img src="/public/assets/Page4_q.png" alt="" width="200px"> </a>
                            </div>
                        </div>
                        <div class="col-6 my-3 d-flex justify-content-center align-items-center">
                            <div class="option text-white">
                                <div class="page-number d-flex">
                                    <h1>05 </h1>
                                    <p>PAGE</p>
                                </div>
                                <a href="page-5"> <img src="/public/assets/Page5_r.png " alt="" width="200px"> </a>
                            </div>
                        </div>
                        <div class="col-6 my-3 d-flex justify-content-center align-items-center">
                            <div class="option text-white">
                                <div class="page-number d-flex">
                                    <h1>06</h1>
                                    <p>PAGE</p>
                                </div>
                                <a href="page-6"> <img src="/public/assets/Page6_s.png" alt="" width="200px"> </a>
                            </div>
                        </div>
                        <div class="col-3 d-flex justify-content-center align-items-center" >
                            <div class="circle d-flex justify-content-center align-items-center">
                                <span class="mb-0 text-white" style="margin-left: 70px">Enjoy!</span>
                            </div>
                        </div>
                        <div class="col-6 my-3 d-flex justify-content-center align-items-center">
                            <div class="option text-white">
                                <div class="page-number d-flex">
                                    <h1>07</h1>
                                    <p>PAGE</p>
                                </div>
                                <a href="page-7"> <img src="/public/assets/Page7_w.png" alt="" width="200px"> </a>
                            </div>
                        </div>
                        <div class="col-3 d-flex justify-content-center align-items-center" >
                            <div class="circle d-flex justify-content-center align-items-center">
                                <p class="mb-0 mt-5 text-white">Expanded Comics</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <!--Main-->
                <div class="container-fluid" id="main">
                    <div class="main d-flex justify-content-between align-items-center mt-4">
                        <div class="title d-flex flex-column justify-content-evenly align-items-start text-white align-self-end align-self-md-center" >
        
                            <!-- Exapnded Comics-->
        
                            @auth
                            <div class="circle d-flex justify-content-center align-items-center">
                                <p class="mb-0 mt-5 text-white">Expanded Comics</p>
                            </div>
                            @endauth
        
                            <div class="wrapper m-4 mt-5">
                                <h1 class="text-white display-1 text-nowrap" style="font-family: SinkinBold;">VIVID</h1>
                                <p>A hybird form of animations and comics</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            @yield('content')
        </div>

        <script type="text/javascript">
            $(".menu").hide();
            $(".page-navbar-wrapper").hide();

            $('.menu-button, .menu-link').click(function(){
                $(".menu").toggle();
                $(".page-navbar-wrapper").toggle();
                $(".page-content").toggle();
                $(".home-button-page").toggle();
                $('.view-now-wrapper').hide();
            });
        </script>
    </body>
</html>