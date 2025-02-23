<template>
    <div class="container mt-5 text-center">
        <h1>Authentication Page</h1>
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" :class="{ active: activeTab === 'login' }"
                        @click="activeTab = 'login'">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ active: activeTab === 'register' }"
                        @click="activeTab = 'register'">Register</a>
                </li>
            </ul>
            <div class="tab-content mt-3">
                <component :is="activeTabComponent" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import LoginTab from '../components/LoginTab.vue'
import RegisterTab from '../components/RegisterTab.vue'

const activeTab = ref('login')

const activeTabComponent = computed(() => {
    return activeTab.value === 'login' ? LoginTab : RegisterTab
})
</script>

<style scoped>
.nav-tabs {
    justify-content: center;
}

.nav-link {
    cursor: pointer;
}
</style>
