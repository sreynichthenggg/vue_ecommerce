<template>
  <div class="container2">
    <div class="items">
      <div class="box-1">
        <div class="img-box">
          <img
            src="https://www.vineyardvines.com/on/demandware.static/-/Sites-vineyardvines-master/default/dw956ab83d/images/1V1018.100.a.zoom.jpg"
            alt=""
            width="100%"
          />
        </div>
        <div class="txt-box">
          <a class="nav-link" href="#ho1"><h3>HOODI</h3></a>
        </div>
      </div>
      <div class="box-1">
        <div class="img-box">
          <img
            src="https://www.thearmoury.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1583%2F4911%2Fproducts%2Fbbrynoou1f9ofncdvk3u_35d473d9-e9ab-4ab7-b1ea-6bdf99306b72.jpg%3Fv%3D1661966085&w=384&q=75"
            alt=""
            width="100%"
          />
        </div>
        <div class="txt-box">
          <a class="nav-link" href="#ho1"><h3>SNEAKER</h3></a>
        </div>
      </div>
      <div class="box-1">
        <div class="img-box">
          <img
            src="https://cf.shopee.co.id/file/7dac9de623b89d21f5189012c56a1f43"
            alt=""
            width="100%"
          />
        </div>
        <div class="txt-box">
          <a class="nav-link" href="#ho1"><h3>BACKPACK</h3></a>
        </div>
      </div>
      <div class="box-1">
        <div class="img-box">
          <img
            src="https://dimg.dillards.com/is/image/DillardsZoom/zoom/sl-fashions-beaded-neck-tiered-jacket-dress/04913437_zi_fig.jpg"
            alt=""
            width="100%"
          />
        </div>
        <div class="txt-box">
          <a class="nav-link" href="/dress"><h3>DRESS</h3></a>
        </div>
      </div>
      <div class="box-1">
        <div class="img-box">
          <img
            src="https://cdn-r.fishpond.co.nz/0166/311/094/482272720/6.jpeg"
            alt=""
            width="100%"
          />
        </div>
        <div class="txt-box">
          <a class="nav-link" href=""><h3>SWIM SUIT</h3></a>
        </div>
      </div>
    </div>
  </div>
<!-- ====================================== -->

  <!-- //note=========================== -->

  <br>
  <h1>MAKE NEW STYLE WITH US</h1>
  <h6>best websites to buy</h6>
  <div class="Container">
    <div class="item-box" v-for="item in products" :key="item.id">
      <div class="img-box">
        <div class="discout">10%</div>
        <img :src="item.thumbnail_url" />
      </div>
      <div class="txt-box">
        <!-- <h1>{{item.title}}</h1> -->

         <router-link class="nav-link" :to="'/products/' + item.id">
        {{item.title}}</router-link> 
        <!-- <button @click="editItem(item.id)">  {{item.title}}</button> -->

        <p>{{ item.price }}</p>
        <!-- <button @click="editItem(item.id)" class="shop">🛒</button> -->
        <!-- <a href="/products/cart" class="shop">🛒</a> -->
        <!-- <button type="submit">Create</button> -->

      
        <router-link class="btn btn-primary" :to="'/keranjangs/' + item.id">
         Add to cart </router-link> 
       
    </div>
  </div>
</div>
  
  <div class="ho1" id="ho1">
    <hoodi></hoodi>
</div>
<div class="foo1"><Footer></Footer></div>

<!-- ========================== -->

</template>
<script>
import axios from "axios";
import Hoodi from './Hoodi.vue';
import Footer from '../components/Footer.vue'
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Hoodi,
    Footer

  },
  
  
  data() {
    return {
      products: [],
      cart:[],
     
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      axios.get("http://localhost:3002/products").then((response) => {
        this.products = response.data;
      });
    },
    // editItem(id) {
    //   this.$router.push({ name: "TodoEdit", params: { id } });
    // },
    // updateItem() {
    //         let id = this.$route.params.id
    //         // Send the data to the server
    //         axios.put(`http://localhost:3002/cart/${id}`, this.editItem).then(response => {
    //             // Clear the form
    //             // console.log(response)
    //             this.cart= response.data;
    //         })
    //     },

        mounted() {
    this.getProducts();
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["addItemToCart", "getProducts"]),
  }, 
  },
};


</script>
<style scoped>
.foo1 {
    padding-top: 3rem!important;
    padding-bottom: 3rem!important;
    margin-top: 120vh;
}
a{
  color: black;
}
.Container {
  margin-left: 11%;
  height: auto !important;
}
.item-box {
  border: 5px solid rgb(248, 248, 248);
  margin-left: 2%;
}
.srun {
  padding-right: 2px;
}

h1, h2, h3, h4, h5, h6 {
    margin-top: 389px;
    margin-bottom: -11.5rem;
    font-weight: 500;
    line-height: 1.2;
    text-decoration: none !important;
}
.container-img {
  height: auto;
}
.cart-a {
  margin-right: 0px;
  font-size: 20px !important;
  color: rgb(135, 9, 9) !important;
}
.shop {
  font-size: 40px;
}


.img-box {
  z-index: 1 !important;
}
.txt-box {
  z-index: 49;
}

.cart-a {
  margin-right: 0px;
  font-size: 20px !important;
  color: rgb(135, 9, 9) !important;
}
@import "../css/homepage.css";
@import "../css/product.css";
.ho1{
  margin-top: 300vh;
  height: auto;
  display: block;
}
</style>
