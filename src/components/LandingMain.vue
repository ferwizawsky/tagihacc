<template>
<div class="bg-gray-100">

    <!-- Page Wrapper -->
    <div id="wrapper" >

        <!-- Sidebar -->
        <ul class="navbar-nav bg-gray-100 sidebar sidebar-light p-4 " :class="{collapse:side==0}">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh text-biasa"></i>
                </div>
                <div class="sidebar-brand-text mx-3 text-left text-biasa"><sup>FIoEP</sup>&nbsp; Tagihacc </div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item card border-0 mt-4 p-0 shadow" :class="{active:menu==1}">
                <a class="nav-link" href="#" @click="menu = 1">                    
                    <button class="btn btn-sm rounded border-0 bg-primary py-2 mr-3 shadow-sm"><i class="fa fa-home text-white"></i></button>
                    <span class="text-biasa">Dashboard</span></a>
            </li> 

            <!-- Nav Item - Charts -->
            <li class="nav-item" :class="{active:menu==2}">
                <a class="nav-link" href="#"  @click="menu = 2">
                    <span class="rounded border-0 bg-white p-2 mr-3 shadow-sm text-center"><i class="fas  fa-chart-area text-biasa"></i></span>
                    <span>Customer</span></a>
            </li> 
             
        </ul>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column bg-gray-100">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow-sm rounded mx-2 my-1"> 
                    <button id="sidebarToggleTop" @click="side=!side" class="btn btn-link rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button> 
                       <div class="d-sm-flex align-items-center justify-content-between m-0">
                        <h1 class="h3 mb-0 text-biasa">Dashboard</h1> 
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
            <footer class="sticky-footer bg-gray-100">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; 2021</span>
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
      side: true,
      menu:1,
    }
  },
  methods: {  
     
    
  },


}
</script> 
<style>
    #accordionSidebar {  
      overflow-x: hidden;
      transition: 0.5s;
    }
</style>