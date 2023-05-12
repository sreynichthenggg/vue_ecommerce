<template> 
    <div>
        <h1>Contact Us</h1>
        <form @submit.prevent="createItem">
            <input v-model="newItem.title" placeholder="Full Name" />
            <br><br>
            <input v-model="newItem.price" placeholder="Email" />
            <br><br>
            <input v-model="newItem.thumbnail_url" placeholder="Phone" />
            <br><br>
            <input v-model="newItem.description" placeholder="Message" />
            <br><br>
            <button class="btn btn-success" type="submit">SEND</button>
        </form>
    </div>
    <Footer/>
</template>

<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
export default {
    components: { 
    Footer

  },
     
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
            axios.post(`http://localhost:3002/contacts/`, this.newItem).then(response => {
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