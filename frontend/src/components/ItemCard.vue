<template>
<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mb-5 tm-item">
                <figure class="effect-ming tm-video-item">
                    <img src="https://picsum.photos/400/250?grocery" alt="Image" class="img-thumbnail" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#imageModal">
                    <!-- Modal -->
<div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="imageModalLabel">Image Preview</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="your-image.jpg" alt="Full Size" class="img-fluid">
      </div>
    </div>
  </div>
</div>
                    <figcaption class="d-flex align-items-center justify-content-center">         
                        <h3>{{ title }}</h3><!--<router-link :to="`/items/${id}`"></router-link>-->
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">{{description}}</span>
                    <span>{{price}} $</span>
                </div>
 </div> 
</template>
<script>
export default{
    props: ["id","price", "title", "category", "page", "description","cover"],
};
</script>