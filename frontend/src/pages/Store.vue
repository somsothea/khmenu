<template>
  <Hero/>
  <Store/>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Store from '@/components/Store.vue';

export default {
  name: 'App',
  components: {
    Hero,
    Store,
  }
}
</script>
