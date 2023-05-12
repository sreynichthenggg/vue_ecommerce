<template>
   <h1>SWIMSUIT</h1>
      <h6>FREE STYLE WITH US</h6>
    <div class="Swimsuits">
     
      <div class="container">
        <div class="item-box" v-for="item in Swimsuits" :key="item.id">
          <div class="img-box">
            <div class="discout">10%</div>
            <img :src="item.thumbnail_url" />
          </div>
          <div class="txt-box">
            <!-- <h1>{{item.title}}</h1> -->
  
            <router-link class="nav-link" :to="'/Swimsuits/' + item.id">{{
              item.title
            }}</router-link>
  
            <p>{{ item.price }}</p>
            <p><a href="/cartItem" class="shop">🛒</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="foo1">
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import Footer from "../components/Footer.vue"
  export default {
    components:{
      Footer
    },
    name: "TodoList",
    data() {
      return {
        Swimsuits: [],
      };
    },
    created() {
      this.fetchItems();
    },
    methods: {
      fetchItems() {
        axios.get("http://localhost:3002/Swimsuits").then((response) => {
          this.Swimsuits = response.data;
        });
      },
    },
  };
  </script>
  <style scoped>
    .foo1{
      margin-top: 90vh;
    }
  a{
  color: black;
}
  .Swimsuits{
    margin-left: 11%;
  }
.item-box{
    border: 5px solid rgb(248, 248, 248);
  }

  p {
      margin-top: 3px !important;
      margin-bottom: 0rem;
  }
  .container-img {
    height: auto;
  }
  .cart-a {
    margin-right: 0px;
    font-size: 20px !important;
    color: rgb(135, 9, 9) !important;
  }
  .shop{
    font-size: 40px;
  }
  @import "../css/homepage.css";
  @import "../css/product.css";
</style>
  