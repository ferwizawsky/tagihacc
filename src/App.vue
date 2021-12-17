<template>
  <div id="app"> 
    
   <link
        href="https://fonts.googleapis.com/css?family=Poppins:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">
    <LandingDashboard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import LandingDashboard from './components/LandingMain.vue'

export default {
  name: 'App',
  components: {
    LandingDashboard
  }
}
</script>
 
