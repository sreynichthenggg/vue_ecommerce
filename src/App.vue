<template>
  <!-- <div id="nav">

 <h1 class="logo">CLOTHES SHOP</h1>
<div>
  <i class="fa fa-home text-success fa-3x"></i>
</div>
  <router-link to="/HomePage">Home</router-link> 
  <router-link to="/about">About</router-link>
  <router-link to="/item">Item</router-link>
  <router-link to="/contact">Contact</router-link>
  <router-link to="/todos">Todos</router-link>
  <div><i class="fa-solid fa-cart-shopping manu"></i></div>


</div>  -->

<!-- <router-link to="/todos">Todos</router-link> -->

<Header></Header>
<slider></slider>
<Menu></Menu>



<br>


<router-view />



</template>

<script>




// import about from './views/AboutPage.vue';
// import AboutPageVue from './views/AboutPage.vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import slider from './components/slider.vue'






export default {
  name: "App",
  components: {
    Header,
    Menu,
    slider,

   
       
 

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #05315c;
  margin-top: 0px;
  /* justify-content: center;
  display: flex;
  text-decoration: none; */
}
</style>
