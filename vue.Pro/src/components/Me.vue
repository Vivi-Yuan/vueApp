<template>
  <div class="me">
    <div class="play">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../static/images/2.jpg"></div>
          <div class="swiper-slide"><img src="../../static/images/3.jpg"></div>
          <div class="swiper-slide"><img src="../../static/images/1.jpg"></div>
          <div class="swiper-slide"><img src="../../static/images/2.jpg"></div>
          <div class="swiper-slide"><img src="../../static/images/3.jpg"></div>
          <div class="swiper-slide"><img src="../../static/images/1.jpg"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-h"></div>
      </div>
    </div>
  </div>
</template>

<script src="swiper/dist/js/swiper.min.js"></script>
<script>
// 引入 swiper 滑动组件
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "Me",
  data() {
    return {
      msg: ""
    };
  },
  // 钩子函数
  mounted: function() {
    // 自己写的 js 代码  钩子函数里
    // 调用 swiper 滑动插件的代码
    var mySwiper = new Swiper('.swiper-container', {
      autoplay:true,
      pagination: {
          el: '.swiper-pagination',
        }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入样式表重置
@import "../assets/sass/base.scss";
// .me {
// }
.play {
  width: 100%;
  margin: 0 auto;
  .swiper-container {
    img {
      width: 100%;
    }
  }
}
</style>