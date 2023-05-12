<template>
    <div className="container mt-3">
        <div className="row">

          <img :src="sneakers.thumbnail_url">
            <div className="col">
                <p>ID: {{ sneakers.id }}</p>
                <p>Title: {{ sneakers.title }}</p>
                <p>Price: {{ sneakers.price }}</p>
                <p>Description: {{ sneakers.description }}</p>
               
                <p>{{sneakers.count}}</p>
                <button @click="sneakers.dispatch('increment')">+</button>
                <button @click="sneakers.dispatch('decrementBy',10 )">-</button>
            </div>
            
        </div>
        
</div>
        <!-- <div className="row">
            <div className="col-back">
                <router-link className="btn btn-success ms-3" to="/products">Back</router-link>
               
                <button @click="addItem" :disabled="products.quantity === 0" class="btn btn-success">
                            Add to cart
         </button>
            </div>
        </div> -->
        <p class="pull-right">
                    <button  class="btn btn-success"> 
                            Add to cart
            </button>
        </p>
  

</template>

<script>

import axios from "axios";

export default {
    name: "TodoDetail",
    components: {},
    data: function () {
        return {
            sneakers: {}
        };
    },
    created: async function () {

        if (this.$route.params.id) {
            //console.log(`http://localhost:3001/items/${this.$route.params.id}`)
            axios.get(`http://localhost:3002/sneakers/${this.$route.params.id}`).then(response => {
                this.sneakers = response.data;
            });
        }
    },
};
</script>

<style scoped>
.pull-right{
    margin-top: -12px;
    margin-left: 109px;
}
div.col{
  margin-right: 20px;
}
.row>* {
    max-width: 38%;
    padding-left:0px;
 
}
.ms-3 {
    margin-left: 22rem!important;

}
.img{
    height: 100%;
    width: 100;
}
.div.col{
    padding: 2px;
    justify-content: center;
}
</style>