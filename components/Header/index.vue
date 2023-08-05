<template>
   <!---header-and-banner-section-->
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
                                 src="https://res.cloudinary.com/dzyvt6pim/image/upload/v1691141894/fisvoektoyrsfzq0t5yg.png" 
                                 class="img-fluid" 
                              />
                           </b-navbar-brand>

                           <b-navbar-toggle target="nav-collapse">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
                           </b-navbar-toggle>

                      <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="ml-auto">
                                 <b-nav-item class="nav-link pr-3">
                                    <nuxt-link to="/">
                                        Home<span class="sr-only">(current)</span>
                                    </nuxt-link>
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
                                 <b-nav-item class="nav-link pr-3">
                                    <nuxt-link to="/testimonials">
                                       Testimonials
                                    </nuxt-link>
                                 </b-nav-item>
                                 <b-nav-item class="nav-link pr-3">
                                    <nuxt-link to="/blog">
                                       Blog
                                    </nuxt-link>
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