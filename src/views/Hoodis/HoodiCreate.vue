<template> 
    <div>
        <h1>Create new</h1>
        <form @submit.prevent="createItem">
         
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

            <button type="submit">Create</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            newItem: {
                title: ''
            }
        }
    },
    methods: {
        createItem() {
            // Send the data to the server
            axios.post(`http://localhost:3002/Hoodis/`, this.newItem).then(response => {
                // Clear the form
                console.log(response)
                this.newItem.title = ''
                this.newItem.price=''
                this.newItem.thumbnail_url=''
                this.newItem.quantity = ''
              
               
            })
        }
    }
}
</script>