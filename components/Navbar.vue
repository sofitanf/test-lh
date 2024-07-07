<template>
    <nav class="border-bottom">
        <div class="container  d-flex justify-content-center align-items-center position-relative"
            :class="[isProduct ? 'py-5' : 'pt-3 pb-4']">
            <h2 class="mb-0">{{ isProduct ? 'TokoKu' : 'MyBlog' }}</h2>
            <div v-if="!isProduct" class="d-flex align-items-center gap-4 pt-2">
                <NuxtLink to="/">HOME</NuxtLink>
                <NuxtLink to="/about">ABOUT</NuxtLink>
                <NuxtLink to="/">ARTICLES</NuxtLink>
                <NuxtLink to="/">CONTACT</NuxtLink>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()

const isProduct = computed(() => {
    return route.name === 'product'
})
</script>
<style scoped>
h2 {
    font-weight: 800;
    position: absolute;
    left: 0;
}

a {
    color: var(--Text-color-text-neutral-primary) !important;
    text-decoration: none;
}
</style>