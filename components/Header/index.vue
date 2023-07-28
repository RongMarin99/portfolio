<template>
   <!---header-and-banner-section-->
   <div>
      <div class="header-and-banner-con w-100 float-left position-relative">
         <div class="header-and-banner-inner-con">
            <header class="main-header page-header">
               <!--navbar-start-->
               <div class="container pl-0 pr-0">
                  <div class="header-con">
                     <nav class="navbar navbar-expand-lg navbar-light p-0">
                        <a class="navbar-brand p-0" href="#">
                        <img width="50" src="@/assets/image/logo.png" alt="logo-img" class="img-fluid">
                        </a>
                        <button class="navbar-toggler p-0 collapsed" 
                                type="button" data-toggle="collapse" 
                                data-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                        >
                        <span class="navbar-toggler-icon"></span>
                        <span class="navbar-toggler-icon"></span>
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                           <ul class="navbar-nav ml-auto">
                              <li class="nav-item active pl-0">
                                 <a class="nav-link p-0 is-active" href="#">
                                    Home<span class="sr-only">(current)</span>
                                 </a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link p-0" href="#service-con">Services</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link p-0" href="#about-con">About</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link p-0" href="#Portfolio">Portfolio</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link p-0" href="#testimonials">Testimonials</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link p-0" href="#blog">Blog</a>
                              </li>
                           </ul>
                           <div class="d-inline-block contact">
                              <a href="#Contact">Contact</a>
                           </div>
                        </div>
                     </nav>
                  </div>
               </div>
               <!--navbar-end-->
            </header>
            <section class="banner-main-con" id="home">
               <div class="container pl-0 pr-0">
                  <!--banner-start-->
                  <div class="footer-social-icon banner-social-icon mb-0">
                     <ul class="mb-0 list-unstyled">
                        <li class="">
                           <a href="https://www.behance.net/">
                              <i class="fab fa-facebook d-flex 
                                 align-items-center justify-content-center">
                              </i>
                           </a>
                        </li>
                        <li class="mt-3 mb-3">
                           <a href="https://dribbble.com/">
                              <i class="fab fa-telegram d-flex 
                                 align-items-center justify-content-center ml-0 mr-0 ">
                              </i>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.linkedin.com/in/rong-marin-a97046260/">
                              <i class="fab fa-linkedin-in 
                                 d-flex align-items-center 
                                 justify-content-center"
                              >
                              </i></a>
                        </li>
                     </ul>
                  </div>
                  <div class="banner-con text-lg-left text-center">
                     <div class="row">
                        <div class="col-lg-7 col-sm-12 d-flex justify-content-center flex-column">
                           <div class="banner-left-con wow slideInLeft">
                              <div class="banner-heading">
                                 <h2>Hello, I Am</h2>                                 
                                 <ul class="dynamic-txts">
                                    <li><h1>Rin Developer</h1></li>
                                  </ul>
                                 <p>Don't Tell someone about 
                                    your plan, <br> show them about your result. 
                                 </p>
                              </div>
                              <div class="banner-btn generic-btn d-inline-block">
                                 <a href="#Contact">Hire Me</a>
                              </div>
                              <a href="#Portfolio" class="See-btn">See My Work</a>
                           </div>
                        </div>
                        <div class="col-lg-5 col-sm-12">
                           <div class="banner-right-con position-relative wow slideInRight" id="banner-right-con">
                              <figure class="mb-0">
                                 <img src="@/assets/image/banner-right-img.png" alt="banner-right-img" id="banner-right-img">
                              </figure>
                              <div class="best-award-con d-inline-block wow bounceInUp" data-wow-duration="1s" data-wow-delay="1s">
                                 <div class="best-award-inner-con">
                                    <figure class="mb-0">
                                       <img src="@/assets/image/cup-img.png" alt="cup-img" class="img-fluid">
                                    </figure>
                                    <div class="best-award-title">
                                       <p class="mb-0">Best Design<br>
                                          Award.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="best-award-con d-inline-block happy-con wow bounceInUp " data-wow-duration="1s" data-wow-delay="1s">
                                 <div class="best-award-inner-con text-center">
                                    <figure>
                                       <img src="@/assets/image/admin-icon.png" alt="admin-icon" class="img-fluid">
                                    </figure>
                                    <div class="best-award-title d-inline-block ml-0">
                                       <p class="mb-0 d-inline-block count">2</p>
                                       <p class="mb-0 d-inline-block">+</p><br>
                                       <span>Customers</span>
                                    </div>
                                 </div>
                              </div>
                              <div class="cursor"></div>
                              <div class="cursor2"></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!--banner-end-->
               </div>
            </section>
         </div>
      </div>
      
   </div>
   <!---header-and-banner-section-->
</template>

<script>
export default{
   mounted(){
      const header = document.querySelector(".page-header");
         const toggleClass = "is-sticky";

         window.addEventListener("scroll", () => {
         const currentScroll = window.pageYOffset;
         if (currentScroll > 150) {
            header.classList.add(toggleClass);
         } else {
            header.classList.remove(toggleClass);
         }
      });



   


   }
}
</script>