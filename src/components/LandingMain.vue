<template>
<div>

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" :class="{collapse:side==0}">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh"></i>
                </div>
                <div class="sidebar-brand-text mx-3 text-left"><sup>FIoEP</sup>&nbsp; Tagihacc </div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item" :class="{active:menu==1}">
                <a class="nav-link" href="#" @click="menu = 1">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li> 

            <!-- Nav Item - Charts -->
            <li class="nav-item" :class="{active:menu==2}">
                <a class="nav-link" href="#"  @click="menu = 2">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Customer</span></a>
            </li> 
             
        </ul>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow-sm"> 
                    <button id="sidebarToggleTop" @click="showSide()" class="btn btn-link rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button> 
                       <div class="d-sm-flex align-items-center justify-content-between m-0">
                        <h1 class="h3 mb-0 text-gray-600">Dashboard</h1> 
                    </div>
                </nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">
            <Dashboard v-if="menu == 1" />
            <Customer v-if="menu == 2" />

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->
            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; FIoEP Tagihacc By Ferry S. F. 2021</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>
 


</div>
</template>

<script>
import Dashboard from '@/components/pages/Dashboard.vue'
import Customer from '@/components/pages/Customer.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Dashboard,Customer
  },
  data(){
    return{
      side: 0,
      menu:1,
    }
  },
  methods: {
    showSide(){
      switch(this.side){
         case 0:this.side = 1
         break;
         case 1:this.side = 0
         break;
      }
    },
     
    
  },


}
</script> 