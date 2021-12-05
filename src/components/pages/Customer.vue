<template>  
<div class="row"> 

                    <div class="col-lg-8 mb-4  border-0" > 
                     <div class="table-responsive card shadow-sm mb-4 border-0">
                                   <table class="table table-borderless border-0"   id="dataTable" width="100%" cellspacing="0">
                                    <thead class="card-header py-3 bg-primary border-0 text-light">
                                        <tr>
                                        <th class="text-center"><label>NO</label></th> 
                                        <th><label>Name</label></th> 
                                        <th><label>Bulanan</label></th> 
                                        <th><label></label></th>  
                                        </tr>
                                    </thead>
   

                            <!--- GET DATA NOT FIRST TIME -->
                                <tbody class="card-body text-biasa border-0">
                                     <tr v-for="(post, index) in customer" :key="index" :class="{ 'border-top' : index != 0 }">         
                                    <td class="text-center">{{ index +1 }}</td>           
                                    <td @click="setcustomer(index)"  data-toggle="modal" data-target="#exampleModalCenter">{{ post.nama }} </td>                
                                    <td>{{ post.bulanan }}</td>       
                                    <td> 
                                        <div class="dropdown show">
                                          <a class="btn btn-primary btn-sm" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                           <i class="fas fa-th"></i>
                                          </a>

                                          <div class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                          </div>
                                        </div>

                                    </td> 
                                </tr>  
                            </tbody> 
                            <!--- GET DATA NOT FIRST TIME --> 
                                </table>

                            </div>
                          </div>

<div class="col-lg-4 mb-4 border-0" > 
<div class="card shadow-sm mb-4 h-100">
    <div class="px-4 pt-3 h5 font-weight-bold ">List Customer</div>
    <div class="row px-4 pt-2 d-flex fomtea">
        <div class="col-10">1. Jumados Krastos</div>
        <div class="col-2"><button class="btn btn-sm btn-primary"><i class="fas fa-th"></i></button></div>


    </div> 
</div>
</div> 


<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header bg-primary text-light">
        <h5 class="modal-title" id="exampleModalLongTitle">{{customerget.nama}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Bulanan : {{customerget.bulanan}}<br>
        Bayar : {{customerget.bayar}}<br>
        PPN : {{customerget.ppn}}<br>
        Keterangan : {{customerget.keterangan}}<br>
      </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
export default { 
    created(){
          document.title = "Tagihacc - Customer"
    }, 
data(){
    return{
        customer:[
        {
            nama : "Jumados Krastos",
            bulanan : 50000,
            bayar : '50000',
            ppn : 0,
            keterangan : 'Lunas'
        }, 
               {
            nama : "Jumados Krastos",
            bulanan : 50000,
            bayar : '50000',
            ppn : 0,
            keterangan : 'Lunas'
        },
               {
            nama : "Jumados Krastos",
            bulanan : 50000,
            bayar : '50000',
            ppn : 0,
            keterangan : 'Lunas'
        },
               {
            nama : "Jumados Krastos",
            bulanan : 50000,
            bayar : '50000',
            ppn : 0,
            keterangan : 'Lunas'
        },

        ],
        customerget: [], 
    }
},
methods: {
    setcustomer(e){
        this.customerget = this.customer[e]
    }
},

}
</script> 