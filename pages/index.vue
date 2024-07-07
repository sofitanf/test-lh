<template>
    <section id="home" class="container py-4">
        <div class="position-relative">
            <img class="main" src="/images/article.png" alt="main">
            <div v-if="newsEvent.length > 0" class="card_white item">
                <span>{{ newsEvent[0]?.category }}</span>
                <h4 class="mt-3">{{ newsEvent[0]?.title }}</h4>
                <p class="mb-3">{{ newsEvent[0]?.short_description }}
                </p>
                <div class="d-flex gap-2 align-items-center">
                    <img class="clock" src="/images/icons/Clock.svg" alt="clock">
                    <p v-if="newsEvent[0].created_at">{{ moment(newsEvent[0].created_at).fromNow() }}</p>
                    <div class="circle"></div>
                    <p>By</p>
                    <p class="text-red">Admin</p>
                </div>
            </div>
        </div>
        <h3>Article</h3>
        <div class="row news-items" id="news-items">
            <div v-for="(news, i) in newsEvent" :key="i" class="col-sm-6 col-lg-4 item mb-4">
                <img class="mb-3 w-100" :src="$url(news?.image)" alt="berita">
                <span>{{ news?.category }}</span>
                <h4 class="mt-3">{{ news?.title }}</h4>
                <p class="mb-3">{{ news?.short_description }}
                </p>
                <div class="d-flex gap-2 align-items-center">
                    <img class="clock" src="/images/icons/Clock.svg" alt="clock">
                    <p v-if="news.created_at">{{ moment(news.created_at).fromNow() }}</p>
                    <div class="circle"></div>
                    <p>By</p>
                    <p class="text-red">Admin</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import moment from 'moment'
useHead({
    title: 'Home',
})

const { $url } = useNuxtApp();
const newsEvent = ref([])

const getNews = async () => {
    try {
        const { data } = await useMyFetch('v2/news-event');
        newsEvent.value = data.news_event.data
    } catch (error) {
        console.log(error)
    }
};

onMounted(() => {
    getNews()
})

</script>
<style scoped>
img.main {
    height: 600;
    border-radius: 0.75rem;
    object-fit: cover;
    width: 100%;
}

a {
    text-decoration: none;
}

h3 {
    color: var(--Text-color-text-neutral-primary);
    font-weight: 800;
    margin: 6rem 0 2rem;
}

.card_white {
    background: var(--Text-color-text-white-primary);
    padding: 1.6rem;
    max-width: 500px;
    position: absolute;
    top: 60%;
    left: 5%;
    border-radius: 0.875rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

/* item news */
.item img:not(.clock) {
    height: 16.5rem;
    object-fit: cover;
}

span {
    text-transform: uppercase;
    color: var(--Text-color-text-white-primary);
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: var(--Border-Radius-border-radius-300);
    background: var(--Oyster-Bay-oysterbay-500);
    padding: 0.25rem 0.5rem;
}

.item h4 {
    color: var(--Text-color-text-neutral-primary);
    font-size: 1.25rem;
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.item p {
    color: var(--Text-color-text-neutral-secondary);
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 0;
    font-weight: 200;
}

.item .circle {
    background-color: var(--Icon-color-icon-disabled, #9E9E9E);
    width: 4px;
    height: 4px;
    border-radius: 50%;
}

.item p.text-red {
    color: var(--Bg-color-bg-button-danger-default);
}

/* end item news */
</style>