<template>
  <div className="container mt-2">
    <div className="row">
      <img :src="products.thumbnail_url" />
    </div>
    <div class="col-md-6">
      <h2>
        <strong>{{ products.title }}</strong>
      </h2>
      <p>Description: {{ products.description }}</p>
      <hr />
      <h4>
        price :
        <strong>{{ products.price }}</strong>
      </h4>
      <form @submit.prevent="createItem">
        <div class="form-group">
          <label for="Amountbooking">Amount</label>
          <input type="number" class="form-control" v-model="newItem.Amount" />
        </div>
        <div class="form-group">
          <label for="cart">imformation</label>
          <textarea
            v-model="newItem.description"
            class="form-control"
            placeholder="imformation for products"
          ></textarea>
        </div>
        <br>
       <br>
        <button type="submit">Add to Cart</button>
      </form>
    </div>


    <div className="row">
    <!-- <div className="col-back">
      <router-link className="btn btn-success ms-3" to="/detailProduct"
        >Add to Cart</router-link
      >
    </div> -->
  </div>
  </div>
 
</template>

<script>
import axios from "axios";

export default {
  name: "TodoDetail",

  data: function () {
    return {
      products: {},
      card: {},
      newItem: {},
    };
  },
  createItem() {
    // Send the data to the server
    axios.post(`http://localhost:3002/carts/`, this.newItem).then((response) => {
      // Clear the form
      console.log(response);

      this.newItem.Amount = "";
      this.newItem.description = "";
    });
  },
  created: async function () {
    if (this.$route.params.id) {
      
      axios
        .get(`http://localhost:3002/products/${this.$route.params.id}`)
        .then((response) => {
          this.products = response.data;
        });
    }
  },
};
</script>

<style scoped>


div.col {
  margin-right: -378px;
}
div.row > * {
  max-width: 38%;
  padding-left: 0px;
  margin-left: 2% !important;
}

.img {
 
  height: 100%;
  width: 100;
}
.div.col {
  padding: 2px;
  justify-content: center;
}
.btn {
  margin-right: 2%;
}
.col-back {
  margin-left: 27%;
}

.col-md-6[data-v-101462d4] {
  margin-left: -8%;
    float: right;
    margin-top: -462px;
}

</style>
