<template>
  <Hero/>
  <StoreDetail/>
</template>

<script>
import Hero from '@/components/Hero.vue';
import StoreDetail from '@/components/StoreDetail.vue';

export default {
  name: 'App',
  components: {
    Hero,
    StoreDetail,
  }
}
</script>
