<template>
    <div >
        <div class="containernav">

        </div>
    <header class="header">
        <nav class="nav">
            <ul class="nav-links">
                <li class="link">
                    <router-link to="/hoodi"><img class="HV">HOODI</router-link>
                </li>
                <li class="link">
                    <router-link to="/sneaker"><img class="HV">SNEAKER</router-link>
                </li>
                <li class="link">
                    <router-link to="/backpack"><img class="HV"  >BACKPACK</router-link>
                </li>
                <li class="link">
                    <router-link to="/dress"><img class="HV"  >DRESS</router-link>
                </li>
                <li class="link">
                    <router-link to="/Swimsuit"><img class="HV"  >SWIMSUIT</router-link>
                </li>
                
            </ul>
        </nav>
        <!-- ============================================== -->
       
    </header>
</div>
</template>

<script>



export default {
};
</script>

<style scoped>


.header {
    width: 100%;
    height: 70px;
    background-color: #433e3e;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: -webkit-sticky !important;
   top: 0%!important;
   z-index: 100;
}

.nav {
    width: 100%;
    
}

.nav-links {
    position: sticky;
    margin-top: 2vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    padding-inline-start: 0 !important;

}

.link {
    list-style: none;
    padding-left:50px ;
    
}
.HV:hover{
    -webkit-transform: scale(1);
  transform: scale(1);

    -webkit-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
    
}
.link a {
    color: #fff;
    text-decoration: none;
}
</style>