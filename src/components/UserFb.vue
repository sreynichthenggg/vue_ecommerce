<template>
  <br>
  <div><h1>INFORMATION CONTACT</h1></div>
    <div>
      
       
        <div class="Main">
            <div class="A">ID</div>
            <div class="B">NAME</div>
            <div class="C">EMAIL</div>
          
            <div class="E">PHONE</div>
            <div class="D">MESSAGE</div>
        </div>
        <table>
            <tr v-for="item in contacts" :key="item.id">
                <td>{{ item.id }}</td>
                <td><router-link :to="'/contacts/' + item.id">{{item.title}}</router-link></td>
                <td>{{ item.price }}</td>
                <td>{{ item.thumbnail_url }}</td>
                <td>{{ item.description }}</td>
               
               
                <td>
                  
                    <button @click="deleteItem(item.id)">Delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "UserFb",
    data() {
        return {
            contacts: []
        };
    },
    created() {
        this.fetchItems();
    },
    methods: {
        fetchItems() {
            axios.get("http://localhost:3002/contacts").then(response => {
                this.contacts = response.data;
            });
        },
        deleteItem(id){
            axios.delete(`http://localhost:3002/contacts/${id}`).then(()=>{
                this.fetchItems();
            })
        },
       

    }
};
</script>
<style scoped>


nav{
    justify-content: space-around;
    margin: auto;
     
  }
  div#nav{
    background-color: rgb(252, 149, 202);
    width:100%;
    height: 55px;
    font-size: 20px;
    align-items: center;
    /* justify-content: center; */
    display: flex;
    overflow: hidden;
      /* position: fixed; */
      z-index: 100;
      justify-content: center;
     
  
    
  
  
    
  }
  a{
  
    height: 50px;
    
    text-decoration: none;
    font-family: system-ui;
    margin-left: 44px;
    text-transform: uppercase;
    margin-top:20px;
    font-weight: bolder;
    color: #ac0909;
  }
  a.active,a:hover{
    background-color: rgb(158, 194, 237);
    transition: 2s;
    margin-top: 0px;
    height: 50px;
    font-size: 21px;
   
  
  } 

 form.edit{
    margin-top: 30px;
    background-color: rgb(11, 52, 52);
    height: 150px;
    margin-left: 40%;
    margin-right: 40%;
    color: #dddddd!important;
    border-radius: 5px;
    padding-bottom: 2px;
    padding: 27px;
  
    justify-content: center;
    display: block;
 }
  input{
    padding: 4px;
    background-color: bisque;
    margin: 5px;
 }
.create{
  padding: 3px;
    background-color: bisque;
    margin: 1px;
}

 form{
  margin-top: 30px;
  background-color: rgb(11, 52, 52);
  height: 170px;
  margin-left: 40%;
  margin-right: 40%;
  color: #dddddd!important;
  border-radius: 5px;
  padding-bottom: 2px;

  justify-content: center;
  display: block;
}
table {
    margin-top: 51px;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    color: #000!important;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }



  div.row{
    background-color: aqua;
    
  }
  .row-back.col{
    display: block;
    width: 100px;
    justify-content: center;
    display: flex;
    margin-left: 40%;
    margin-right: 30%;
    text-align: center;
  }

.Main{
  background-color: aqua;
  width: 100%;
  height: 50px;
  margin-top: 29px;
  margin-bottom: -48px;
  color: #dddddd;
  font-weight: bold;

 
}.A,.B,.C,.D,.E{
  display: flex;
  justify-content: center;
  align-items: center;
}
.A{
  float: left;
  background-color: rgb(78, 165, 241);
  width: 4.5%;
  height: 50px;
}
.B{

  float: left;
  background-color: rgb(153, 186, 215);
  width: 27.6%;
  height: 50px;
   
}

.C{
  float: left;
  background-color: cadetblue;
  width: 29.8%;
  height: 50px;
}
.D{
  float: left;
  background-color: rgb(98, 104, 104);
  width: 11.3%;
  height: 50px;
}
.E{
  
  float: left;
  background-color: rgb(60, 99, 99);
  width: 17.1%;
  height: 50px;

}


</style>