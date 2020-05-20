<template>
    <div>
        <!-- Navigation -->
        <Navigation />
        <!-- Content -->
        <div class='container content'>
            <div class='row'>
                <!-- Content -->
                <nuxt />
            </div>
        </div>
        <!-- Footer -->
        <div class="footer">
            Copyright here
        </div>
    </div>
</template>

<script>
import Navigation from '~/components/navigation.vue'
import Banner from '~/components/banner.vue'

export default {
    components: {
        Navigation,
        Banner
    }
}
</script>