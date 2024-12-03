<template>
    <div class="container-fluid tm-container-content tm-mt-60">
        <div class="row mb-4">
            <h2 class="col-12 tm-text-primary">{{ storename }}</h2>
        </div>
        <div class="row tm-mb-90">            
            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                <img src="{{ storebanner }}" alt="Image" class="img-fluid">
            </div>
            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                <div class="tm-bg-gray tm-video-details">
                    <div class="text-center mb-5">
                        <img src="{{ storelogo }}"/>
                    </div>                    

                    <div class="mb-4">
                        <h3 class="tm-text-gray-dark mb-3">Address</h3>
                        <p>{{ storeaddress }}</p>
                    </div>
                    <div>
                        <h3 class="tm-text-gray-dark mb-3">Contact</h3>
                        <p>{{ storecategory }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <h2 class="col-12 tm-text-primary">
                Related Stores
            </h2>
        </div>
        <div class="row mb-3 tm-gallery">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src="@/assets/img/img-01.jpg" alt="Image" class="img-fluid">
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>Hangers</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">16 Oct 2020</span>
                    <span>12,460 views</span>
                </div>
            </div>     
        </div> <!-- row -->
    </div> <!-- container-fluid, tm-container-content -->
</template>

<script>
import { useRoute } from 'vue-router'
import axios from "axios"

export default {
    data(){
        const {id} = useRoute().params;
        return{
            id, stores:["id","storename", "storeaddress", "storelogo", "storebanner", "storeurl","category"],

        }

    }
    ,
    async created(){
        const url= "http://localhost:4000/v1/stores/id";

        try {
            //promise and async
            const response = await axios.get(url);
            const store = response.data;
            console.log(store);
            this.store = store;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }
}

</script>