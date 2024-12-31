<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <i class="fa fa-th-large" aria-hidden="true"></i> Cloud Menu
            </a>
            
  

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/stores" class="nav-link nav-link-1" :class="{ active: $route.path === '/stores' }">{{$t('Stores')}}</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/items" class="nav-link nav-link-1" :class="{ active: $route.path === '/items' }">{{$t('Items')}}</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link nav-link-1" :class="{ active: $route.path === '/login' }">{{$t('Login')}}</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link nav-link-1" :class="{ active: $route.path === '/contact' }">{{$t('Contact')}}</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link nav-link-1" :class="{ active: $route.path === '/about' }">{{$t('About')}}</router-link>
                </li>
                <li class="navbar-brand"><img src="../assets/img/cambodia.png" @click="changeLocale('khm')" width="25"/></li>
                <li class="navbar-brand"><img src="../assets/img/usa.png" @click="changeLocale('en')" width="25"/></li>
            </ul>
            </div>
        </div>
    </nav>
    
</template>
<script>
export default {
  name: 'App',
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
<style>
.navbar {
    background-color: whitesmoke;
}
</style>