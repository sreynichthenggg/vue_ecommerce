<template>
    <div>
      <h1>sneakers List</h1>
      <div><button @click="newItem()">Create new</button></div>
      
  
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
  
      <div class="item-box" v-for="item in sneakers" :key="item.id">
        <div class="img-box">
          <div class="discout">10%</div>
          <img :src="item.thumbnail_url" />
        </div>
        <div class="txt-box">
          <!-- <h1>{{item.title}}</h1> -->
  
          <router-link class="nav-link" :to="'/sneakers/' + item.id">{{
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
            @click="addProductToCart(cart)">
          Add to cart
        </btn>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "sneakers",
    data() {
      return {
        sneakers: [],
      };
    },
    created() {
      this.fetchItems();
    },
    methods: {
      fetchItems() {
        axios.get("http://localhost:3002/sneakers").then((response) => {
          this.sneakers= response.data;
        });
      },
      updateItem() {
            let id = this.$route.params.id
            // Send the data to the server
            axios.put(`http://localhost:3002/cart/${id}`, this.editItem).then(response => {
                // Clear the form
                console.log(response)
            })
        },
      editItem(id) {
        this.$router.push({ name: "TodoEdit", params: { id } });
      },
      deleteItem(id) {
        axios.delete(`http://localhost:3002/sneakers/${id}`).then(() => {
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
  .container-1 {
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 5vh;
    margin-bottom: 2vh;
  }
  div.card {
    height: 100%;
  }
  
  .card-text {
    font-size: 0.875rem;
  }
  
  .remain {
    color: #d17581;
  }
  
  .grow {
    transition: all 0.2s ease-in-out;
  }
  
  .grow:hover {
    transform: scale(1.1);
  }
  
  .list-group-item {
    float: none;
    width: 100%;
    background-color: #fff;
    margin-bottom: 30px;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 1rem;
    border: 0;
  
    @media (max-width: 767.98px) {
      .img-event {
        width: 30%;
        float: left;
        padding: 0 !important;
        margin: 0;
      }
  
      .card-body {
        float: left;
        width: 70%;
        margin: 0;
      }
    }
  }
  
  .item.list-group-item:before,
  .item.list-group-item:after {
    display: table;
    content: " ";
  }
  
  .item.list-group-item:after {
    clear: both;
  }
  </style>
  