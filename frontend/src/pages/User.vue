<template>
    <p>Hello Users</p>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useAuthStore } from '@/stores/auth.js'
export default {
    methods: {
        ...mapActions(useAuthStore, ['getUsers'])
    },
    mounted() {
        this.getUsers()
    }
}
</script>