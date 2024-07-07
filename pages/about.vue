<template>
    <section id="about" class="container py-4 mb-4">
        <div class="row">
            <div class="col-md-6">
                <div class="card_white h-100 d-flex flex-column justify-content-between">
                    <div>
                        <h6 class="mb-4">Let's connect</h6>
                        <h1 class="mb-5">Building Bridges Across Borders with Transformative Media</h1>
                    </div>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis
                        atque
                        reprehenderit ut culpa. Quis dolorem atque qui dignissimos accusamus consequuntur ad rerum
                        consequatur, doloribus deleniti. Laboriosam beatae ut perspiciatis, placeat laudantium autem ex
                        quae cupiditate dolorum at explicabo sunt, tenetur dolore accusamus facilis odio nulla obcaecati
                        aperiam doloremque, in odit esse minima? Illo blanditiis reprehenderit ad, repellat harum hic.
                    </p>
                </div>
            </div>
            <div class="col-md-6">
                <img class="main" src=" /images/article.png" alt="main">
                <div class="card_white mt-3">
                    <div class="row">
                        <div class="col-6 mb-3">
                            <div class="card_grey">
                                <h2>8.5</h2>
                                <p>Years Experience</p>
                            </div>
                        </div>
                        <div class="col-6 mb-3">
                            <div class="card_grey">
                                <h2>80k</h2>
                                <p>Reviews</p>
                            </div>
                        </div>
                        <div class="col-6 mb-3">
                            <div class="card_grey">
                                <h2>10k</h2>
                                <p>Articles Release</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
useHead({
    title: 'About',
})
</script>
<style scoped>
.card_white {
    background: var(--Text-color-text-white-primary);
    padding: 1.6rem;
    border-radius: 0.875rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.card_grey {
    background: var(--Text-color-text-grey, #FAFAFA);
    padding: 1.4rem;
    border-radius: 0.875rem;
}

h6 {
    color: var(--Text-color-text-orange, #FF9447);
    font-weight: 500;
}

h1 {
    color: var(--Text-color-text-neutral-primary);
    font-size: 3rem;
    font-weight: 700;
}

h2 {
    color: var(--Text-color-text-neutral-primary);
    font-size: 2rem;
    font-weight: 800;
}

img.main {
    height: 300px;
    border-radius: 0.75rem;
    object-fit: cover;
    width: 100%;
}
</style>