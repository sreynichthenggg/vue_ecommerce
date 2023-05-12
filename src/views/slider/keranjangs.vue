<template>
  <div class="keranjang">
    <narbar :updateKeranjang="card" />
    <div class="container">
      <!-- breadcrumb -->
  

      <div class="row">
        <div class="col">
          <h2>
            My
            <strong>cards</strong>
          </h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Photo</th>
                 
                  <th scope="col">imformation</th>
                  <!-- <th scope="col">Amount</th> -->
                  <th scope="col">price</th>
                  <th scope="col">Total price</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, index) in card" :key="keranjang.id">
                  <th>{{index+1}}</th>
                  <td>
                    <img
                      :src=" 'thumbnail_url' + keranjang.products.thumbnail_url "
                      class="img-fluid shadow"
                      width="250"
                    />
                  </td>
                  <td>
                    <strong>{{ keranjang.products.title }}</strong>
                  </td>
                  <td>{{ keranjang.description ? keranjang.description : "-" }}</td>
                  <td>{{ keranjang.price }}</td>
                  <!-- <td align="right">$ {{ keranjang.products.price }}</td> -->
                  <td align="right">
                    <strong>$ {{ keranjang.products.price*keranjang.Amount }}</strong>
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon-trash @click="hapusKeranjang(keranjang.id)"></b-icon-trash>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Price :</strong>
                  </td>
                  <td align="right">
                    <strong>$ {{ totalprice }}</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Form Checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="name">Name :</label>
              <input type="text" class="form-control" v-model="name.name" />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number :</label>
              <input type="text" class="form-control" v-model="phone.phone" />
            </div>

            <button type="submit" class="btn btn-success float-right" @click="checkout">
              <b-icon-cart></b-icon-cart>Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Keranjangs",

  data() {
    return {
      card: {},
      order: {},
      products:{}
    };
  },
  methods: {
    setcard(data) {
      this.card = data;
    },
    fetchItems() {
      axios.get("http://localhost:3002/products").then((response) => {
        this.products = response.data;
      });
    },
    hapusKeranjang(id) {
        axios
          .delete("http://localhost:3002/card/" + id)
          .then(() => {
            this.$toast.error("Sucess to delate", {
              type: "error",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
  
            // Update Data keranjang
            axios
              .get("http://localhost:3002/products")
              .then((response) => this.setcard(response.data))
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      },
      checkout() {
        if (this.name.name && this.phone.phone) {
          this.phone.card = this.card;
          axios
            .post("http://localhost:3002/order", this.pesan)
            .then(() => {
  
              // Hapus Semua Keranjang 
              this.card.map(function (item) {
                return axios
                  .delete("http://localhost:3002/card/" + item.id)
                  .catch((error) => console.log(error));
              });
  
              this.$router.push({ path: "/pesanan-sukses" });
              this.$toast.success("Success to order", {
                type: "success",
                position: "top-right",
                duration: 3000,
                dismissible: true,
              });
            })
            .catch((err) => console.log(err));
        } else {
          this.$toast.error("plase enter name and phone number", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        }
      },
    },
    mounted() {
      axios
        .get("http://localhost:3002/card")
        .then((response) => this.setcard(response.data))
        .catch((error) => console.log(error));
    },
    computed: {
      totalprice() {
        return this.card.reduce(function (items, data) {
          return items + data.products.price * data.Amount;
        }, 0);
      },
    },
  };
  </script>
  
  <style>
  </style>