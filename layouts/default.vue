<template>
    <div :class="dark?'dark-mode':''">
      <!-- Start Header -->
      <b-container fluid 
        :class="dark?'dark-mode' : 'bg-white' " 
        class="position-fixed header"
        style="border-bottom:0.1px solid #ededed">
          <b-navbar toggleable="lg">
            <b-container class="p-2">
              <b-navbar-brand to="/">
                <img src="https://pxdraft.com/themeforest/maffei/assets/img/logo.svg" alt="">
              </b-navbar-brand>
  
              <b-navbar-toggle 
                target="nav-collapse" 
                class="ml-auto"
              >
              <span class="material-icons" :class="dark?'text-dark-mode' : 'text-light-mode'">menu</span>
            </b-navbar-toggle>
  
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="m-auto" :class="dark?'text-dark-mode' : 'text-light-mode'">
                  <b-nav-item class="pl-4" to="/" >
                    {{ $t('home') }}
                  </b-nav-item>
                  <b-nav-item class="pl-4">
                    {{ $t('course') }}
                  </b-nav-item>
                  <b-nav-item class="pl-4">
                    {{ $t('article') }}
                  </b-nav-item>
                  <b-nav-item class="pl-4">
                    {{ $t('video') }}
                  </b-nav-item>
                  <b-nav-item class="pl-4">
                    {{ $t('job') }}
                  </b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="m-right">
                  <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" :placeholder="$t('search')+'...'"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0 orange-bg" type="submit">{{ $t('search') }}</b-button>
                  </b-nav-form>
  
                  <b-nav-item-dropdown class="ml-2 mr-1" right>
                    <template #text>
                      <span v-if="$i18n.locale == 'en'">
                        <flag iso="gb" />
                      </span>
                      <span v-else>
                        <flag iso="kh" />
                      </span>
                    </template>
                    <b-dropdown-item :to="switchLocalePath('en')" >
                      <flag iso="gb" /> {{ $t('english') }}
                    </b-dropdown-item>
                    <b-dropdown-item :to="switchLocalePath('kh')">
                      <flag iso="kh" /> {{ $t('khmer') }}
                    </b-dropdown-item>
                  </b-nav-item-dropdown>
  
                  <b-nav-item>
                    <span 
                       @click="dark=!dark" 
                       class="material-icons switchToDark"
                       :class="dark?'text-dark-mode' : 'text-light-mode'"
                    >brightness_4</span>
                  </b-nav-item>
                </b-navbar-nav>
  
              </b-collapse> 
          </b-container>
          </b-navbar>
      </b-container>
      <!-- End Header -->

      <Nuxt />

      <!-- Start Footer -->
      <b-container fluid class="mt-5 p-5" style="border-top:0.1px solid #ededed" :class="dark?'bg-secondary':''">
        <b-container>
          <b-row>
            <b-col cols="12" xl="3" lg="3" md="6" sm="6">
                <img src="https://pxdraft.com/themeforest/maffei/assets/img/logo.svg" alt="">
                <h6 class="mt-3 " :class="dark?'text-dark-mode' : 'text-secondary'">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, beatae.
                </h6>
            </b-col>
            <b-col cols="12" xl="3" lg="3" md="6" sm="6">
              <b-nav vertical class="footer-nav" :class="dark?'text-dark-mode' : 'text-light-mode'">
                <b-nav-item>{{ $t('course') }}</b-nav-item>
                <b-nav-item>{{ $t('article') }}</b-nav-item>
                <b-nav-item>{{ $t('video') }}</b-nav-item>
                <b-nav-item>{{ $t('job') }}</b-nav-item>
              </b-nav>
            </b-col>
            <b-col cols="12" xl="3" lg="3" md="6" sm="6">
              <h6>
                {{ $t('address') }}
              </h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, maiores.
              </p>
            </b-col>
            <b-col cols="12" xl="3" lg="3" md="6" sm="6">
              <h6>
                {{ $t('about_us') }}
              </h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, accusantium?
              </p>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
      <!-- End Footer -->
    </div>
</template>
<script>
export default{
    data(){
        return {
            dark: false,
        }
    }
}
</script>