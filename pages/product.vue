<template>
    <section id="product" class="container py-4">
        <div class="d-flex justify-content-start gap-2 breadcrump align-items-center">
            <NuxtLink class="muted fw-500" to="/">Beranda</NuxtLink>
            <img src="/public/images/icons/chevron-right.svg" alt="chevron">
            <NuxtLink class="" to="/product">Produk</NuxtLink>
        </div>
        <div class="d-flex justify-content-center">
            <div class="input-group position-relative w-50 mt-3">
                <img class="me-3" src="/public/images/icons/MagnifyingGlass.svg" alt="search">
                <input v-model="search" type="text" placeholder="Cari produk..">
            </div>
        </div>
        <div class="row mt-5">
            <div v-for="(product, i) in filterProduct" :key="i" class="col-sm-6 col-lg-4 mb-4">
                <img :src="$url(product?.image)" alt="Produk" class="w-100 image-product" />
                <p class="product_category mb-0">MILKY</p>
                <h2 class="text-m product_name mb-1">{{ product?.name }}</h2>
                <p class="text-sm mb-0 fw-bold">
                    {{ price(product?.price) }}
                </p>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
useHead({
    title: 'Produk',
})

const { $url } = useNuxtApp();
const products = ref([])
const search = ref('')

const filterProduct = computed(() => {
    return products.value.filter(product => product.name.toLowerCase().includes(search.value.toLowerCase()))
})

const price = (number) => {
    return 'Rp' + number.toLocaleString('id-ID');
};

const getProduct = async () => {
    try {
        const { data } = await useMyFetch('product');
        products.value = data.value.data.data
    } catch (error) {
        console.log(error)
    }
};

onMounted(() => {
    getProduct()
})
</script>
<style>
.muted {
    color: var(--Black-black-600) !important;
    font-size: 0.875rem;
}

.breadcrump a {
    color: var(--Black-black-900);
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
}

.input-group {
    border-radius: 12px;
    border: 1px solid var(--Black-black-300, #E0E0E0);
    background: var(--Black-black-50, #FFF);
    padding: 0.75rem 1rem;
}


.input-group input,
.input-group input[type=text]:focus {
    border: none !important;
    outline: none;
}

.input-group:focus-within {
    border-radius: 0.75rem;
    border: 2px solid var(--Black-black-950, #0A0A0A);
    background: var(--Black-black-50);
}

.image-product {
    border-radius: 0.5rem;
    height: 16.5rem;
    object-fit: cover;
    margin-bottom: 1rem;
}

.product_name {
    line-height: var(--Font-Line-Height-M, 1.75rem);
    letter-spacing: -0.00019rem;
    font-weight: 200;
    font-size: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.product_category {
    color: var(--Text-color-text-secondary, #2ca2ae);
    font-size: var(--Font-Size-S, 0.875rem);
    font-style: normal;
    font-weight: 800;
    line-height: var(--Font-Line-Height-S, 1.375rem);
    letter-spacing: -0.035rem;
}
</style>
