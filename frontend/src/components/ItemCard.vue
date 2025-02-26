<template>
  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mb-5 tm-item">
    <figure class="effect-ming tm-video-item" @click="showLightbox">
      <div class="image-container">
        <img :src="getImageUrl(itemimage)" alt="Image" class="img-fluid">
      </div>                
    </figure>
    <div class="d-flex justify-content-between tm-text-gray">
      <span class="tm-text-gray-light">{{ title }}</span>
      <span>{{ price }} $</span>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="isLightboxVisible" class="lightbox-overlay" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <img :src="getImageUrl(itemimage)" alt="Image" class="img-fluid lightbox-image">
        <div class="lightbox-caption">
          <div class="row">
            <div class="col-12 col-md-6 mb-2">
              <p>{{ title }}</p>
            </div>
            <div class="col-12 col-md-6 mb-2">
              <p>{{ description }}</p>
            </div>
            <div class="col-12 col-md-6 mb-2">
              <a v-if="store?.storecontact" :href="`tel:${store.storecontact}`"><p>Tel: {{ store.storecontact }}</p></a>
            </div>
            <div class="col-12 col-md-6 mb-2">
              <a v-if="store?.storetelegram" :href="store.storetelegram" target="_blank"><p>Telegram / Link: {{ store.storetelegram }}</p></a>
            </div>
            <div class="col-12 mb-2">
              <h4><router-link :to="`/stores/${store?.storeurl}`">Visit Store</router-link></h4>
            </div>
          </div>
        </div>
        <button class="lightbox-close" @click="closeLightbox">✖</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getImageUrl } from '@/utils/imageHelper';
import axios from "axios";

export default {
  props: ["id", "price", "title", "category", "page", "description", "cover", "itemimage", "storeid"],
  data() {
    return {
      isLightboxVisible: false,
      store: null,  // Add store as null initially
    };
  },
  async mounted() {
    // Fetch store data when the component is mounted
    await this.fetchStoreData();
  },
  methods: {
    async fetchStoreData() {
      const storeId = this.storeid;  // Use the prop 'storeid' passed to the component
      try {
        const storeResponse = await axios.get(`/v1/stores/${storeId}`);
        this.store = storeResponse.data;  // Set store data after fetching
        console.log('Store data:', this.store);  // Check the fetched data in console
      } catch (error) {
        console.error('Error fetching store data:', error.response?.data || error.message);
      }
    },
    getImageUrl,
    showLightbox() {
      this.isLightboxVisible = true;
    },
    closeLightbox() {
      this.isLightboxVisible = false;
    },
  },
};
</script>

<style>
/* Image Container */
.image-container {
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b3b3b3;
}

.image-container img {
  height: 100%;
  width: auto;
}

/* Lightbox Overlay */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto; /* Allows scrolling for long content */
  padding: 20px;
  box-sizing: border-box;
}

/* Lightbox Content */
.lightbox-content {
  position: relative;
  background: #fff;
  padding: 20px;
  max-width: 90%;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  animation: fadeIn 0.3s ease-in-out;
}

/* Scrollable content inside Lightbox */
.lightbox-content {
  overflow-y: auto; /* Enables vertical scrolling for long text */
}

/* Lightbox Image */
.lightbox-image {
  width: 100%;
  max-height: 60vh; /* Limits height but keeps it responsive */
  object-fit: contain;
  border-radius: 8px;
}

/* Caption */
.lightbox-caption {
  width: 100%;
  padding: 15px;
  color: #333;
  text-align: left;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  margin-top: 10px;
  overflow-y: auto; /* Ensures scrolling on long descriptions */
  max-height: 30vh; /* Prevents overflow on small screens */
}

/* Close Button */
.lightbox-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff3b3b;
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.lightbox-close:hover {
  background: #d32f2f;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .lightbox-content {
    max-width: 95%;
    max-height: 95vh;
    padding: 15px;
  }

  .lightbox-caption {
    font-size: 0.9rem;
    max-height: 35vh; /* Adjusts caption size for mobile */
  }

  .lightbox-image {
    max-height: 50vh; /* Ensures mobile-friendly scaling */
  }
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

</style>
