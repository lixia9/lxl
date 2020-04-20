<template>
    <div class="container">
        <div class="footer">
          <van-footer></van-footer>
        </div>
    </div>
</template>

<script>
import Footer from '../components/footer.vue';

export default {
    name: 'orders',
    data () {
        return {

        }
    },
    components: {
      'van-footer':Footer,
    },
}
</script>