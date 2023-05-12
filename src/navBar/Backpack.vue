<template>
   <h1>BACKPACK</h1>
    <h6>FREE STYLE WITH US</h6>
  <div class="backpack">
   
    <div class="container">
      <div class="item-box" v-for="item in backpacks" :key="item.id">
        <div class="img-box">
          <div class="discout">10%</div>
          <img :src="item.thumbnail_url" />
        </div>
        <div class="txt-box">
          <!-- <h1>{{item.title}}</h1> -->

          <router-link class="nav-link" :to="'/backpacks/' + item.id">{{
            item.title
          }}</router-link>

          <p>{{ item.price }}</p>
          <p><a href="/cart" class="shop">🛒</a></p>
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
      backpacks: [],
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      axios.get("http://localhost:3002/backpacks").then((response) => {
        this.backpacks= response.data;
      });
    },
  },
};
</script>

<style scoped>
.foo1{
  margin-top: 100vh;
}
a{
  color: black;
}
  .backpack{
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
