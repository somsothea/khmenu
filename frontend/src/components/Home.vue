<template>
<div class="container-fluid tm-container-content tm-mt-60">
        <div class="row mb-4">
            <h2 class="col-6 tm-text-primary">
                Latest Stores
            </h2>
        </div>
        <div class="row tm-mb-90 tm-gallery">
                <StoreCard v-for="(store, index) in stores"
                    :key="index"
                    :storename="store.storename"
                    :storeaddress="store.storeaddress"
                    :storebanner="store.storebanner"
                    :category="store.category">
                </StoreCard>
        </div> <!-- row -->
        <div class="row mb-4">
            <h2 class="col-6 tm-text-primary">
                New Items
            </h2>
        </div>
        <div class="row tm-mb-90 tm-gallery">
            <ItemCard v-for="(item, index) in items"
                    :key="index"
                    :title="item.title"
                    :description="item.description"
                    :price="item.price"     
                    :category="item.category">
            </ItemCard>
        </div> <!-- row -->
    </div> <!-- container-fluid, tm-container-content -->
</template>
<script>
import StoreCard from '@/components/StoreCard.vue';
import ItemCard from '@/components/ItemCard.vue';
import axios from "axios";

export default({
    components: {
        StoreCard,
        ItemCard,
    },
    data() {
        return{stores:[],items:[]
        };
    },
    async created(){
        const storeurl= "http://36.37.134.139:4000/v1/stores";
        const itemurl= "http://36.37.134.139:4000/v1/items";
        try {
            //promise and async
            const store_response = await axios.get(storeurl);
            const stores = store_response.data;
            console.log(stores);
            this.stores = stores;
            const item_response = await axios.get(itemurl);
            const items = item_response.data;
            console.log(items);
            this.items = items;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }
    
});

</script>