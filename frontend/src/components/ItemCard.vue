<template>
<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src="https://picsum.photos/800" alt="Image" class="img-fluid">
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h3>{{ description }}</h3>
                        <router-link :to="`/course/${link}`">View more</router-link>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">{{title}}</span>
                    <span>{{price}} $</span>
                </div>
            </div> 
</template>
<script>
export default{
    props: ["storename", "storeaddress", "storelogo", "storebanner", "storeurl","category"],
};
</script>