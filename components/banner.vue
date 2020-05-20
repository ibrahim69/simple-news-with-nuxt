<template>
    <div>
        <carousel 
            :perPage="1"
            :navigationEnabled="true"
            :autoplay="true"
            :autoplayTimeout="3000"
            :loop="true"
        >
            <slide v-for="banner in banners" :key="banner.key">
                <img :src="banner.src" alt="banner.src">
            </slide>
        </carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            banners: [
                {
                    src: "https://dummyimage.com/800x400/206de0/ffffff"
                },
                {
                    src: "https://dummyimage.com/800x400/206de0/ffffff"
                },
                {
                    src: "https://dummyimage.com/800x400/206de0/ffffff"
                },
                {
                    src: "https://dummyimage.com/800x400/206de0/ffffff"
                },
                {
                    src: "https://dummyimage.com/800x400/206de0/ffffff"
                },
                {
                    src: "https://dummyimage.com/800x400/206de0/ffffff"
                }
            ]
        };
    }
};
</script>

<style scoped>
</style>