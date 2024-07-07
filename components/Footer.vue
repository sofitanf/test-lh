<template>
    <footer id="footer" class="mx-4 mb-4">
        <div class="container-fluid">
            <div class="row justify-content-between">
                <div class="col-12 col-md-4 custome-width">
                    <h2>MyBlog</h2>
                    <p class="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus voluptate maxime in
                        In, aperiam
                    </p>
                </div>
                <div class="col-6 col-md-2 link_footer">
                    <h6>Quick Link</h6>
                    <ul class="list-unstyled mt-3">
                        <li v-for="(quickLink, i) in quickLinks" :key="i" class="mb-2">
                            <NuxtLink :to="quickLink.link">{{ quickLink.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-md-2 link_footer">
                    <h6>Category</h6>
                    <ul class="list-unstyled mt-3">
                        <li v-for="(categorie, i) in categories" :key="i" class="mb-2">
                            <a href="#">{{ categorie }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- medsoc & copyright -->
            <div class="d-flex justify-content-md-between justify-content-end margin-top-custome align-items-end">
                <div class="socials-media d-none d-md-flex">
                    <a target="_blank" href="#" class="d-flex align-items-center justify-content-center"><img
                            src=" /icons/TwitterLogo.svg" alt="" /></a>
                    <a target="_blank" href="#" class="d-flex align-items-center justify-content-center"><img
                            src=" /icons/InstagramLogo.svg" alt="" /></a>
                    <a target="_blank" href="#" rel="norefferer noopener"
                        class="d-flex align-items-center justify-content-center"><img src=" /icons/FacebookLogo.svg"
                            alt="" /></a>
                </div>
                <p class="mb-0">
                    © {{ new Date().getFullYear() }} — Copyright All Rights reserved
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
const quickLinks = ref([{ link: '/', name: 'Home' }, { link: '/about', name: 'About' }])
const categories = ref(['Lifestyle', 'Technology', 'Sports'])
</script>
<style scoped>
#footer {
    background: var(--Black-black-100);
    padding: 3.5rem 0;
    color: var(--text-white-primary);
    overflow: hidden;
}

.container-fluid {
    max-width: 100%;
    padding-right: 5rem;
    padding-left: 5rem;
}

h2,
h6 {
    color: var(--Text-color-text-neutral-primary);
    font-weight: 800;
}

p,
li a {
    color: var(--Text-color-text-neutral-secondary);
    font-size: 1rem;
    font-weight: 200;
    text-decoration: none;
}

.text-title {
    color: var(--Text-color-text-white-primary);
}

.custome-width {
    max-width: 23rem;
}

.color-secondary {
    color: var(--Text-color-text-white-secondary);
}

.img_icon {
    height: 1rem;
    width: 1rem;
    margin-top: 0.25rem;
}

.mb-075 {
    margin-bottom: 0.75rem;
}

/* medsoc */
.margin-top-custome {
    margin-top: 3.88rem;
}

.socials-media {
    padding: 0.5rem;
    gap: 1.5rem;
}

.socials-media>a {
    border-radius: var(--Border-Radius-border-radius-full);
    background: var(--Black-black-300);
    height: 2.5rem;
    width: 2.5rem;
    transition: background 0.3s;
}

.name_web {
    color: var(--Text-color-text-white-primary);
    font-size: 10.5rem;
    font-weight: 700;
    line-height: 10rem;
    /* 95.238% */
    opacity: 0.8;
    mix-blend-mode: overlay;
}

/* end style */
.socials-media>a>img {
    width: 1.25rem;
    height: 1.25rem;
}

@media only screen and (max-width: 575.98px) {
    #footer {
        padding: 2.5rem 0 0;
    }

    .container-fluid {
        padding-right: 1.25rem;
        padding-left: 1.25rem;
    }

    #footer .text-sm {
        font-size: var(--Font-Size-SM, 1rem) !important;
        line-height: var(--Font-Line-Height-SM, 1.5rem) !important;
        /* 150% */
        letter-spacing: -0.04rem !important;
    }

    .image_logo {
        height: 4.5rem;
        margin-bottom: 1.5rem;
    }

    .text-title {
        font-size: var(--Font-Size-M, 1.25rem) !important;
        line-height: var(--Font-Line-Height-M, 1.75rem) !important;
        /* 140% */
        letter-spacing: -0.05rem !important;
    }

    .custome-width {
        max-width: 23rem;
    }

    .color-secondary {
        color: var(--Text-color-text-white-secondary);
    }

    .img_icon {
        height: 1rem;
        width: 1rem;
        margin-top: 0.25rem;
    }

    .mb-075 {
        margin-bottom: 0.75rem;
    }

    .mt-25,
    .margin-top-custome {
        margin-top: 2rem !important;
    }

    .name_web {
        font-size: 3.375rem;
        line-height: var(--Font-Line-Height-2XL, 3.375rem);
        /* 100% */
        letter-spacing: -0.16875rem;
        font-weight: 900;
    }

    .socials-media {
        padding-left: 0;
        margin-bottom: 2rem;
    }
}
</style>