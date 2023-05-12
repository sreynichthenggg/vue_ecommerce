<template> 
    <div>
        <h1>Create new</h1>
        <form @submit.prevent="createItem">
            <input v-model="newItem.title" placeholder="Title" />
            <br><br>
            <input v-model="newItem.price" placeholder="Price" />
            <br><br>
            <input v-model="newItem.thumbnail_url" placeholder="Photos Link" />
            <br><br>
            <input v-model="newItem.description" placeholder="description" />
            <br><br>
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
            axios.post(`http://localhost:3002/products/`, this.newItem).then(response => {
                // Clear the form
                console.log(response)
                this.newItem.title = ''
                this.newItem.price=''
                this.newItem.thumbnail_url=''
                this.newItem.description = ''
              
               
            })
        }
    }
}
</script>