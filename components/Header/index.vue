<template>
   <!---header-and-banner-section-->
   <div>
      <div class="header-and-banner-con w-100 float-left position-relative">
         <div class="header-and-banner-inner-con">
            <header class="main-header page-header">
               <!--navbar-start-->
               <div class="container pl-0 pr-0">
                  <div class="header-con">
                     <b-navbar 
                     class="navbar navbar-expand-lg navbar-light" 
                     toggleable="lg" 
                     >
                     
                           <b-navbar-brand class="p-0" href="#">
                              <nuxt-img 
                                 width="50" 
                                 format="webp" 
                                 loading="lazy"
                                 preload 
                                 src="/image/logo.png" 
                                 class="img-fluid" 
                              />
                           </b-navbar-brand>

                           <b-navbar-toggle target="nav-collapse">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
                           </b-navbar-toggle>

                      <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="ml-auto">
                                 <b-nav-item class="nav-link pr-3 active" href="#home">
                                       Home<span class="sr-only">(current)</span>
                                 </b-nav-item>
                                 <b-nav-item class="nav-link pr-3" href="#service-con">
                                    Services
                                 </b-nav-item>
                                 <b-nav-item class="nav-link pr-3" href="#about-con">
                                    About
                                 </b-nav-item>
                                 <b-nav-item class="nav-link pr-3" href="#Portfolio">
                                    Portfolio
                                 </b-nav-item>
                                 <b-nav-item class="nav-link pr-3" href="#testimonials">
                                    Testimonials
                                 </b-nav-item>
                                 <b-nav-item class="nav-link pr-3" href="#blog">
                                    Blog
                                 </b-nav-item>
                        </b-navbar-nav>
                             <div class="d-inline-block contact ">
                                 <a href="#Contact">Contact</a>
                              </div>
                     </b-collapse>
                     </b-navbar>
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
                           <a href="https://www.facebook.com/marin.rong">
                              <i class="d-flex 
                                 align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"/></svg>
                              </i>
                           </a>
                        </li>
                        <li class="mt-3 mb-3">
                           <a href="https://t.me/SakKaRin9">
                              <i class=" d-flex 
                                 align-items-center justify-content-center ml-0 mr-0 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.249-3.277"/></svg>   
                              </i>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.linkedin.com/in/rong-marin-a97046260/">
                              <i class="
                                 d-flex align-items-center 
                                 justify-content-center"
                              >
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5ZM3.75 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm-1.5 4A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V8Zm1.5.75v11.5h2.5V8.75h-2.5ZM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.792 7.792 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75V8Zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.31 6.31 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75h-2.5Z" clip-rule="evenodd"/></svg>
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
                                 <nuxt-img 
                                    format="webp" 
                                    loading="lazy"
                                    preload 
                                    src="/image/banner-right-img.png" 
                                    id="banner-right-img"
                                    alt="banner-right-img"
                                 />
                              </figure>
                              <div class="best-award-con d-inline-block wow bounceInUp" data-wow-duration="1s" data-wow-delay="1s">
                                 <div class="best-award-inner-con">
                                    <figure class="mb-0">
                                       <nuxt-img 
                                          format="webp" 
                                          loading="lazy"
                                          preload 
                                          src="/image/cup-img.png" 
                                          class="img-fluid"
                                          alt="cup-img"
                                       />
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
                                       <nuxt-img 
                                          format="webp" 
                                          loading="lazy"
                                          preload 
                                          src="/image/admin-icon.png" 
                                          class="img-fluid"
                                          alt="admin-icon"
                                       />
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