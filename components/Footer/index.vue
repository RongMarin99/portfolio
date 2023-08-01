<template>
  <div>
     <!-- weight footer section -->
     <div class="w-100 float-left weight-footer-con position-relative">
         <div class="container">
            <div class="weight-footer-content text-center wow fadeInUp" >
               <figure class="">
                  <nuxt-img 
                     width="50"
                     format="webp" 
                     loading="lazy"
                     preload 
                     src="/image/logo.png" 
                     class="img-fluid"
                     alt="footer-logo" 
                  />
               </figure>
               <div class="footer-navbar">
                  <ul class="list-unstyled">
                     <li class="d-inline-block border-left-0 pl-0"><a href="#home">Home</a></li>
                     <li class="d-inline-block"><a href="#about-con">About</a></li>
                     <li class="d-inline-block"><a href="#service-con">Services</a></li>
                     <li class="d-inline-block"><a href="#Portfolio">Portfolio</a></li>
                     <li class="d-inline-block"><a href="#testimonials">Blog</a></li>
                     <li class="d-inline-block pr-0"><a href="#Contact">Contact</a></li>
                  </ul>
               </div>
               <div class="footer-social-icon">
                  <ul class="mb-0">
                     <li class="d-inline-block">
                        <a href="https://www.facebook.com/marin.rong">
                           <i class="fab fa-facebook d-flex 
                              align-items-center justify-content-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"/></svg>
                           </i>
                        </a>
                     </li>
                     <li class="d-inline-block">
                        <a href="https://t.me/SakKaRin9">
                           <i class="fab fa-telegram d-flex 
                              align-items-center justify-content-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.249-3.277"/></svg>   
                           </i>
                        </a>
                     </li>
                     <li class="d-inline-block">
                        <a href="https://www.linkedin.com/in/rong-marin-a97046260/">
                           <i  class="d-flex 
                              align-items-center justify-content-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5ZM3.75 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm-1.5 4A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V8Zm1.5.75v11.5h2.5V8.75h-2.5ZM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.792 7.792 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75V8Zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.31 6.31 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75h-2.5Z" clip-rule="evenodd"/></svg>
                           </i>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="copy-right-content text-center">
               <p class="mb-0">Copyright 2023 Rong Marin | All Rights Reserved.</p>
            </div>
         </div>
      </div>
      <a id="button"></a>
      <div id="modalWPWAF" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <!-- <img src="@/assets/image/portfolio-model-img1.jfif" alt="portfolio-model-img1" class="img-fluid"> -->
                  </figure>
                  <h4>Application UI Design</h4>
                  <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                  <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="modalWPWAF-icon" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <!-- <img src="@/assets/image/portfolio-model-img1.jfif" alt="portfolio-model-img1" class="img-fluid"> -->
                  </figure>
                  <h4>Application UI Design</h4>
                  <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                  <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="modalporfolio2" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <!-- <img src="@/assets/image/portfolio-model-img2.jfif" alt="portfolio-model-img1" class="img-fluid"> -->
                  </figure>
                  <h4>Furni furniture UI Design</h4>
                  <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                  <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="modalporfolio2-icon" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <!-- <img src="@/assets/image/portfolio-model-img2.jfif" alt="portfolio-model-img1" class="img-fluid"> -->
                  </figure>
                  <h4>Furni furniture UI Design</h4>
                  <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                  <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="modalporfolio3" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <!-- <img src="@/assets/image/portfolio-model-img3.jfif" alt="portfolio-model-img1" class="img-fluid"> -->
                  </figure>
                  <h4>Mobile UI Design</h4>
                  <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                  <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="modalporfolio3-icon" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <!-- <img src="@/assets/image/portfolio-model-img3.jfif" alt="portfolio-model-img1" class="img-fluid"> -->
                  </figure>
                  <h4>Mobile UI Design</h4>
                  <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                  <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="modalporfolio4" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <!-- <img src="@/assets/image/portfolio-model-img4.jfif" alt="portfolio-model-img1" class="img-fluid"> -->
                  </figure>
                  <h4>Businesscard UI Design</h4>
                  <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                  <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="modalporfolio4-icon" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <!-- <img src="@/assets/image/portfolio-model-img4.jfif" alt="portfolio-model-img1" class="img-fluid"> -->
                  </figure>
                  <h4>Businesscard UI Design</h4>
                  <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                  <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="modalporfolio5" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <nuxt-img 
                        format="webp" 
                        loading="lazy"
                        preload 
                        src="/image/portfolio-img5.png" 
                        class="img-fluid"
                        alt="portfolio-model-img1" 
                     />
                  </figure>
                  <h4>Real estate UI Design</h4>
                  <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                  <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="modalporfolio5-icon" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <!-- <img src="@/assets/image/portfolio-model-img5.jfif" alt="portfolio-model-img1" class="img-fluid"> -->
                  </figure>
                  <h4>Real estate UI Design</h4>
                  <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                  <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="Ui-Design" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <nuxt-img 
                        format="webp" 
                        loading="lazy"
                        preload 
                        src="/image/ui-ux-model-img.jpg" 
                        class="img-fluid"
                        alt="ui-ux-model-img" 
                     />
                  </figure>
                  <h4>Ui/Ux Design</h4>
                  <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
                     <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="web-design" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <nuxt-img 
                        format="webp" 
                        loading="lazy"
                        preload 
                        src="/image/web-designer-model-img.jpg" 
                        class="img-fluid"
                        alt="web-designer-model-img"
                     />
                  </figure>
                  <h4>Web Design</h4>
                  <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
                     <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="web-development" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <nuxt-img 
                        format="webp" 
                        loading="lazy"
                        preload 
                        src="/image/web-development-model-img.jpg" 
                        class="img-fluid"
                        alt="web-development-model-img.jpg"
                     />
                  </figure>
                  <h4>Web Development</h4>
                  <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
                     <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="app-development" class="modal fade" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body service-model-content">
                  <figure class="mb-0">
                     <nuxt-img 
                        format="webp" 
                        loading="lazy"
                        preload 
                        src="/image/App-development-model-img.JPG" 
                        class="img-fluid"
                        alt="App-development-model-img.JPG"
                     />
                  </figure>
                  <h4>App Development</h4>
                  <p class="mb-md-4 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
                     <ul class="list-unstyled model-list mb-md-3 mb-2">
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                     <li><i class="fas fa-check-circle"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  </ul>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
               </div>
            </div>
         </div>
      </div>
      <div id="blog-model-1" class="modal fade blog-model-con" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body">
                  <div class="blog-box-item mb-0">
                     <div class="blog-img">
                        <figure class="mb-0">
                           <nuxt-img 
                              format="webp" 
                              loading="lazy"
                              preload 
                              src="/image/blog-model-img1.png" 
                              class="img-fluid"
                              alt="blog-model-img1.png"
                           />
                        </figure>
                     </div>
                     <div class="blog-content pl-0 pr-0">
                        <div class="blog-auteher-title">
                           <span>By Elina Parker</span>
                           <span class="float-lg-right">Mar 8, 2022</span>
                        </div>
                        <h4>Quis autem vea eum 
                           iure reprehenderit
                        </h4>
                        <div class="footer-social-icon mb-0">
                           <ul>
                              <li class="d-inline-block">
                                 <a href="https://www.facebook.com/marin.rong">
                                    <i class="fab fa-facebook d-flex 
                                       align-items-center justify-content-center">
                                    </i>
                                 </a>
                              </li>
                              <li class="d-inline-block">
                                 <a href="https://t.me/SakKaRin9">
                                    <i class="fab fa-telegram d-flex 
                                       align-items-center 
                                       justify-content-center">
                                    </i>
                                 </a>
                              </li>
                              <li class="d-inline-block">
                                 <a href="https://www.linkedin.com/in/rong-marin-a97046260/">
                                    <i class="fab fa-linkedin-in d-flex 
                                       align-items-center justify-content-center">
                                    </i>
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <p class="mb-md-4 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.</p>
                        <h4 class="comment-title">LEAVE A COMMENT</h4>
                        <form class="contact-form blog-model-form">
                           <div class="row">
                              <div class="col-lg-6 col-md-6">
                                 <div class="form-group mb-0">    
                                    <input type="text" placeholder="Name" name="name"> 
                                 </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                 <div class="form-group mb-0">
                                    <input type="email" placeholder="Email">
                                    <small class="form-text text-muted"></small>
                                 </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                 <div class="form-group mb-0">    
                                    <input type="tel" placeholder="Phone"> 
                                 </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                 <div class="form-group mb-0">    
                                    <input type="text" placeholder="Subject"> 
                                 </div>
                              </div>
                           </div>
                           <div class="row">
                              <div class="col-lg-12">
                                 <div class=" form-group mb-0">    
                                    <textarea placeholder="Message" rows="3" name="comments"></textarea>
                                 </div>
                              </div>
                           </div>
                           <button type="submit" class="appointment-btn">Submit</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="blog-model-2" class="modal fade blog-model-con" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body">
                  <div class="blog-box-item mb-0">
                     <div class="blog-img">
                        <figure class="mb-0">
                           <nuxt-img 
                              format="webp" 
                              loading="lazy"
                              preload 
                              src="/image/blog-model-img2.png" 
                              class="img-fluid"
                              alt="blog-model-img2.png"
                           />
                        </figure>
                     </div>
                     <div class="blog-content pl-0 pr-0">
                        <div class="blog-auteher-title">
                           <span>By Elina Parker</span>
                           <span class="float-lg-right">Mar 9, 2022</span>
                        </div>
                        <h4>Reprehenderit in vouta
                           velit esse cillum
                        </h4>
                        <div class="footer-social-icon mb-0">
                           <ul>
                              <li class="d-inline-block">
                                 <a href="https://www.behance.net/"><i class="fab fa-behance d-flex align-items-center justify-content-center"></i></a>
                              </li>
                              <li class="d-inline-block">
                                 <a href="https://dribbble.com/"><i class="fab fa-dribbble d-flex align-items-center justify-content-center"></i></a>
                              </li>
                              <li class="d-inline-block">
                                 <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in d-flex align-items-center justify-content-center"></i></a>
                              </li>
                           </ul>
                        </div>
                        <p class="mb-md-4 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.</p>
                        <h4 class="comment-title">LEAVE A COMMENT</h4>
                        <form class="contact-form blog-model-form">
                           <div class="row">
                              <div class="col-lg-6 col-md-6">
                                 <div class="form-group mb-0">    
                                    <input type="text" placeholder="Name" name="name"> 
                                 </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                 <div class="form-group mb-0">
                                    <input type="email" placeholder="Email">
                                    <small class="form-text text-muted"></small>
                                 </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                 <div class="form-group mb-0">    
                                    <input type="tel" placeholder="Phone"> 
                                 </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                 <div class="form-group mb-0">    
                                    <input type="text" placeholder="Subject"> 
                                 </div>
                              </div>
                           </div>
                           <div class="row">
                              <div class="col-lg-12">
                                 <div class=" form-group mb-0">    
                                    <textarea placeholder="Message" rows="3" name="comments"></textarea>
                                 </div>
                              </div>
                           </div>
                           <button type="submit" class="appointment-btn">Submit</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="blog-model-3" class="modal fade blog-model-con" tabindex="-1" style="display: none;" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="far fa-times"></i></span></button>
               </div>
               <div class="modal-body">
                  <div class="blog-box-item mb-0">
                     <div class="blog-img">
                        <figure class="mb-0">
                           <nuxt-img 
                              format="webp" 
                              loading="lazy"
                              preload 
                              src="/image/blog-model-img1.png" 
                              class="img-fluid"
                              alt="blog-model-img2.png"
                           />
                        </figure>
                     </div>
                     <div class="blog-content pl-0 pr-0">
                        <div class="blog-auteher-title">
                           <span>By Elina Parker</span>
                           <span class="float-lg-right">Mar 10, 2022</span>
                        </div>
                        <h4>Soluta nobis ose aligen
                           optio cumue
                        </h4>
                        <div class="footer-social-icon mb-0">
                           <ul>
                              <li class="d-inline-block">
                                 <a href="https://www.facebook.com/marin.rong">
                                    <i class="fab fa-facebook d-flex 
                                       align-items-center justify-content-center">
                                    </i>
                                 </a>
                              </li>
                              <li class="d-inline-block">
                                 <a href="https://t.me/SakKaRin9">
                                    <i class="fab fa-telegram d-flex 
                                       align-items-center justify-content-center">
                                    </i>
                                 </a>
                              </li>
                              <li class="d-inline-block">
                                 <a href="https://www.linkedin.com/in/rong-marin-a97046260/">
                                    <i class="fab fa-linkedin-in d-flex 
                                       align-items-center justify-content-center">
                                    </i>
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <p class="mb-md-4 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.</p>
                        <h4 class="comment-title">LEAVE A COMMENT</h4>
                        <form class="contact-form blog-model-form">
                           <div class="row">
                              <div class="col-lg-6 col-md-6">
                                 <div class="form-group mb-0">    
                                    <input type="text" placeholder="Name" name="name"> 
                                 </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                 <div class="form-group mb-0">
                                    <input type="email" placeholder="Email">
                                    <small class="form-text text-muted"></small>
                                 </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                 <div class="form-group mb-0">    
                                    <input type="tel" placeholder="Phone"> 
                                 </div>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                 <div class="form-group mb-0">    
                                    <input type="text" placeholder="Subject"> 
                                 </div>
                              </div>
                           </div>
                           <div class="row">
                              <div class="col-lg-12">
                                 <div class=" form-group mb-0">    
                                    <textarea placeholder="Message" rows="3" name="comments"></textarea>
                                 </div>
                              </div>
                           </div>
                           <button type="submit" class="appointment-btn">Submit</button>
                        </form>
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- weight footer section -->
  </div>
</template>