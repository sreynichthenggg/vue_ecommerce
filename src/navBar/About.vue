<template>
   
    <!-- ================NarBar========================================= -->
    <main class="flex-shrink-0">
      <!-- Navigation-->
  
      <!-- Header-->
      <header class="py-5">
        <div class="container px-5">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-xxl-6">
              <div class="text-center my-5">
                <h1 class="fw-bolder mb-3">
                  Our mission is to make building websites easier for everyone.
                </h1>
                <p class="lead fw-normal text-muted mb-4">
                  It is our job to bridge the gap for the time being, and make the web as
                  enjoyable for everyone as possible, and to make our clients’ sites look as
                  good as we can, as consistently as we can, across the many platforms that
                  are available. Our main goal is to build consistent websites for everyone.
                </p>
                <a class="btn btn-primary btn-lg" href="#scroll-target">Read our story</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- About section one-->
      <section class="py-5 bg-light" id="scroll-target">
        <div class="container px-5 my-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded mb-5 mb-lg-0"
                src="../assets/Finding.jpg"
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <h2 class="fw-bolder">Our founding</h2>
              <p class="lead fw-normal text-muted mb-0">
                Step #1: Choose Your Website Platform. In order to build a website, we first
                got to decide what platform we’re going to build our website with. We use
                template in bootstrap. Also we research and follow with another but it just
                a few.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- About section two-->
      <section class="py-5">
        <div class="container px-5 my-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-first order-lg-last">
              <img
                class="img-fluid rounded mb-5 mb-lg-0"
                src="../assets/OIP.jpg"
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <h2 class="fw-bolder">Growth &amp; beyond</h2>
              <p class="lead fw-normal text-muted mb-0">
                One of the major advantages of having a website is that it is accessible to
                anyone, anywhere, anytime. Even during non-business hours, customers can
                access your website and avail your services or get the information they
                need, which is one of the key elements of having a business website. The
                website is always at work to ensure that customers are always served with
                the information they need from the comfort of their homes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Team members section-->
      <section class="py-5 bg-light">
        <div class="container px-5 my-5">
          <div class="text-center">
            <h2 class="fw-bolder">Our team</h2>
            <p class="lead fw-normal text-muted mb-5">
              Dedicated to quality and your success
            </p>
          </div>
          <div
            class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center"
          >
            <div class="col mb-5 mb-5 mb-xl-0">
              <div class="text-center">
                <img
                  class="img-fluid rounded-circle mb-4 px-4"
                  src="../assets/nich.jpg"
                  alt="..."
                />
                <h5 class="fw-bolder">THENG SREYNICH</h5>
                <div class="fst-italic text-muted">Founder &amp; CEO</div>
              </div>
            </div>
            <div class="col mb-5 mb-5 mb-xl-0">
              <div class="text-center">
                <img
                  class="img-fluid rounded-circle mb-4 px-4"
                  src="../assets/leak.jpg"
                  alt="..."
                />
                <h5 class="fw-bolder">HEAN LEAKKHENA</h5>
                <div class="fst-italic text-muted">CFO</div>
              </div>
            </div>
            <div class="col mb-5 mb-5 mb-sm-0">
              <div class="text-center">
                <img
                  class="img-fluid rounded-circle mb-4 px-4"
                  src="../assets/Vanda.jpg"
                  alt="..."
                />
                <h5 class="fw-bolder">SOEUN VANDA</h5>
                <div class="fst-italic text-muted">Operations Manager</div>
              </div>
            </div>
            <div class="col mb-5 mb-5 mb-sm-0">
              <div class="text-center">
                <img
                  class="img-fluid rounded-circle mb-4 px-4"
                  src="../assets/Vatna.jpg"
                  alt="..."
                />
  
                <h5 class="fw-bolder">LY VATHANA</h5>
                <div class="fst-italic text-muted">Operations Manager</div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="container">
          <footer class="py-3 my-4">
            <p class="text-center text-muted">&copy; 2022 Company, Inc</p>
          </footer>
        </div>
      </section>
    </main> 
    <div class="foo1"> <Footer></Footer></div>
   
  </template>
  <script>
  import Footer from '../components/Footer.vue'
  export default {
  components: { 
    Footer

  },
}
  </script>
  <style scoped>
  
  .img-fluid.rounded-circle.mb-4.px-4 {
    z-index: 5;
  }
  .fw-bolder {
    z-index: 10;
  }
  .ext-muted {
    color: black !important;
  }
  .h6,
  h6 {
    display: block;
    text-align: center;
  
    justify-content: center;
    width: 150px;
    border-radius: 138px;
    font-size: 1rem;
    height: 20px;
    background-color: aliceblue;
  }
  </style>
  