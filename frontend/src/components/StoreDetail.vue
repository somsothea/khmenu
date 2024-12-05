<template>
    <div class="container-fluid tm-container-content tm-mt-60">
        <div class="row mb-4">
            <h2 class="col-12 tm-text-primary">{{ id }}</h2>
        </div>
        <div class="row tm-mb-90">            
            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                <img src="https://picsum.photos/600/400?shop" alt="Image" class="img-fluid">
            </div>
            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                <div class="tm-bg-gray tm-video-details">
                    <div class="text-center mb-5">
                        <img src=""/>
                    </div>                    

                    <div class="mb-4">
                        <h3 class="tm-text-gray-dark mb-3">Address</h3>
                        <p>{{id}}</p>
                    </div>
                    <div>
                        <h3 class="tm-text-gray-dark mb-3">Contact</h3>
                        <p>Test</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <h2 class="col-12 tm-text-primary">
                Store's Items
            </h2>
        </div>
        <div class="row mb-3 tm-gallery">
            <ItemCard v-for="(item, index) in items"
                    :key="index"
                    :id="item._id"
                    :title="item.title"
                    :description="item.description"
                    :price="item.price"     
                    :category="item.category">
                </ItemCard>     
        </div> <!-- row -->
    </div> <!-- container-fluid, tm-container-content -->
</template>
<script>
import { useRoute } from 'vue-router'
import ItemCard from '@/components/ItemCard.vue';
import axios from "axios";

export default({
    components: {ItemCard},
    data() {
        const {id} = useRoute().params;
        return{
            items:[],
            id,
            Store:["id","storename", "storeaddress", "storelogo", "storebanner", "storeurl","category"],
        };
    },
    async created(){

        const url= "http://36.37.134.139:4000/v1/items";

        try {
        //promise and async
        const response = await axios.get(url);
        const items = response.data;
        console.log(items);
        this.items = items;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }
    
});


    /*
    async created(){
        const url= "http://36.37.134.139:4000/v1/stores/id";
        console.log(url);
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
    }*/
</script>

