<template>
    <div class="A1"><button class="btn btn-primary" @click="newItem()">Create new</button>
  <a href="/UserFb" class="btn btn-primary">UserFeedback</a>
</div>
<h1>List Products</h1>
  <div class="header">
  <div>
    
  
    

    <!-- <tr v-for="item in products" :key="item.id">
        <td>
          <router-link :to="'/products/' + item.id">{{ item.title }}</router-link>
        </td>
        <td>{{ item.price }}</td>
        <img
          :src="item.thumbnail_url"
          alt=""
          class="grow thumbnail-image card-img-top intrinsic-item p-3"
        /> -->

    <div class="item-box" v-for="item in products" :key="item.id">
      <div class="img-box">
        <div class="discout">10%</div>
        <img :src="item.thumbnail_url" />
      </div>
      <div class="txt-box">
        <!-- <h1>{{item.title}}</h1> -->

        <router-link class="nav-link" :to="'/products/' + item.id">{{
          item.title
        }}</router-link>
        <td class="container-1">
      <button @click="editItem(item.id)">Edit</button>
      <button @click="deleteItem(item.id)">Delete</button>
    </td>
        <p>{{ item.price }}</p>
        <a href="./Popupcart.vue" class="btn btn-primary">🛒</a>
        <btn btnColor="btn btn-large btn-sucess"
          :cartIcon="true"
          @click="addProductToCart(products)">
        Add to cart
      </btn>
      </div>
    </div>
    

  </div>
  <a href="/hoodi" class="btn btn-primary1" ><h1>HOODIS LIST</h1></a>

 
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "products",
  data() {
    return {
      products: [],
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
    editItem(id) {
      this.$router.push({ name: "TodoEdit", params: { id } });
    },
    deleteItem(id) {
      axios.delete(`http://localhost:3002/products/${id}`).then(() => {
        this.fetchItems();
      });
    },
    newItem() {
      this.$router.push({ name: "TodoCreate", params: {} });
    },
  },
};


</script>

<style scoped>
.btn.btn-primary{
  margin-right: 2%;
}
.header{
  margin-left: 11%;
}

.item-box{
    border: 5px solid rgb(248, 248, 248);
  }
  .srun {
    padding-right: 2px;
  }
  p {
      margin-top: 10px !important;
  }
  .container-img {
    height: auto;
  }
  .cart-a {
    margin-right: 0px;
    font-size: 20px !important;
    color: rgb(135, 9, 9) !important;
  }
  /* @import "../css/homepage.css";
  @import "../css/product.css"; */
</style>
