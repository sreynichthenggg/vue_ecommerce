<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">NLVN-SHOP</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="
            
            
            ">
              <a

                class="nav-link active"
                aria-current="http://localhost:8080/home"
                href="/"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="/products">Admin</a>
            </li> -->
            
          </ul>
        </div>
      </div>
    </nav>
    <div class="nav1">
      <form class="d-flex srun">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="search1"
        />
        <button class="btn btn-outline-warning" @click="search1"  type="submit">Search</button>
      </form>
      <!-- <div class="control">
        <input class="input"  type="Text" placeholder="Find"  v-model="search1" />      <Button class="btn btn-primary btn-sm" @click="search" ><i class="fa fa-search" aria-hidden="true"></i></button>
      </div> -->
      <router-link class="srun nich" to="/cart"
        ><button class=" position-relative">
          🛒
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            99+
            <span class="visually-hidden">unread messages</span>
          </span>  
           <!-- <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Shop</span>
      <span class="navbar-brand mb-0 h1">
        Cart <span class="badge badge-primary">{{ totalQty }}</span>
      </span>
    </nav>  -->
        </button></router-link
      >
      <!-- Add to cart button -->

       <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="" class="d-block w-100" />
          </div>
        </div>
      </div> 
    </div>
  </header>
</template>

<script>
export default {

data(){
  return{
    products:'',
    search1:''
  }
},
create(){

},
methods:{
  search(){
    // this.$router.push(`/${this.search1}`)
location.assign(`/${this.search1}`)

     

   
  }
}

}
</script>

<style scoped>

.nav1{
  margin-left: 69vh;
  display: flex;
}
.srun {
  margin-right: 1vh;
}
.nich {
  margin-bottom: 1vh;
}
.header {
  width: 100%;
  height: 70px;
  background-color: #584d4d;
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  align-items: center;
  position: sticky;
   top: 0%!important;
   z-index: 100;
}

.nav {
  width: 100%;
}

.nav-links {
 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline-start: 0 !important;
}
.nav-link:hover{
   color: #13e3f2;
   font-size: 29px;
   
}



a {
  color: #ffffff;
  text-decoration: none;
  font-size: 25px !important;
  font-family: "Gill Sans", sans-serif;;
  font-size: 27px;
}


.srun {
  margin-right: 2vh;
}

.mengsrun {
  margin-left: 2vh;
}
.btn.btn-outline-warning{
border-color: #242222;
color: #fffcfc;
}
</style>
