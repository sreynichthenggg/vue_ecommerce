<template>
    <div className="container mt-3">
        <div className="row">

          <img :src="Hoodis.thumbnail_url">
            <div className="col">
                <p>ID: {{ Hoodis.id }}</p>
                <p>Title: {{ Hoodis.title }}</p>
                <p>Price: {{ Hoodis.price }}</p>
                <p>Description: {{ Hoodis.description }}</p>
                
                <p>{{Hoodis.count}}</p>
                <button @click="Hoodis.dispatch('increment')">-</button>
                <button @click="Hoodis.dispatch('incrementBy',10 )">+</button>
            </div>
            <p class="pull-right">
                    <button  class="btn btn-success"> 
                            Add to cart
            </button>
        </p>
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
            Hoodis: {}
        };
    },
    created: async function () {

        if (this.$route.params.id) {
            //console.log(`http://localhost:3001/items/${this.$route.params.id}`)
            axios.get(`http://localhost:3002/Hoodis/${this.$route.params.id}`).then(response => {
                this.Hoodis = response.data;
            });
        }
    },
};
</script>

<style scoped>
.pull-right{
    margin-top: 29vh;
    margin-left: -17vh;
}

div.col{
    margin-right: -378px;
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