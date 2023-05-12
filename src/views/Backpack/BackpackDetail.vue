<template>
    <div className="container mt-3">
        <div className="row">

          <img :src="backpacks.thumbnail_url">
            <div className="col">
                <p>ID: {{ backpacks.id }}</p>
                <p>Title: {{ backpacks.title }}</p>
                <p>Price: {{backpacks.price }}</p>
                <p>Description: {{ backpacks.descriptionquantity }}</p>
            
                <p>{{backpacks.count}}</p>
                <button @click="backpacks.dispatch('increment')">Increment</button>
                <button @click="backpacks.dispatch('incrementBy',10 )">Increment by 10</button>
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
    
  

</template>

<script>

import axios from "axios";

export default {
    name: "TodoDetail",
    components: {},
    data: function () {
        return {
            backpacks: {}
        };
    },
    created: async function () {

        if (this.$route.params.id) {
            //console.log(`http://localhost:3001/items/${this.$route.params.id}`)
            axios.get(`http://localhost:3002/backpacks/${this.$route.params.id}`).then(response => {
                this.backpacks = response.data;
            });
        }
    },
};
</script>

<style scoped>
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