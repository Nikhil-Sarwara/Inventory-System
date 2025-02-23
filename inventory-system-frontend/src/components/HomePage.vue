<template>
    <div class="container mt-5 text-center">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main page of the application.</p>
        <InventoryList />
        <InventoryForm />
        <router-link to="/auth" class="btn btn-primary">Go to Authentication</router-link>
    </div>
</template>

<script setup>
import InventoryList from '../components/InventoryList.vue'
import InventoryForm from '../components/InventoryForm.vue'
</script>

<style scoped>
</style>

