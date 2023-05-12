<template>
    <div>
        <h1>Edit</h1>
        <form @submit.prevent="updateItem">
          <img :src="editItem.thumbnail_url"  >
            <input v-model="editItem.title" placeholder="Item name" />
            <input v-model="editItem.price" placeholder="Item description" />
            <input v-model="editItem.thumbnail_url" placeholder="Item description" />
            
            <br>
         <div><button type="submit">Update</button></div>

        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            editItem: {
                title: '',
                price: '',
                thumbnail_url:''
            }
        }
    },
    created: async function () {
        if (this.$route.params.id) {
            //console.log(`http://localhost:3001/items/${this.$route.params.id}`)
            axios.get(`http://localhost:3002/sneakers/${this.$route.params.id}`).then(response => {
                this.editItem = response.data;
            });
        }
    },
    methods: {
        updateItem() {
            let id = this.$route.params.id
            // Send the data to the server
            axios.put(`http://localhost:3002/sneakers/${id}`, this.editItem).then(response => {
                // Clear the form
                console.log(response)
            })
        },

    }
}
</script>