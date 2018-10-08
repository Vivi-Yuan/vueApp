<template>
  <div class="contactUs">
    <img src="../../static/images/contactUs.jpg">
    <h2>公众号：vivi小姐姐</h2>
    <h2>邮箱：<span>893326735@qq.com</span></h2>
    <div class="explain">
      <h3>由于关注人数较多，关注后请直接点击首页了解vue内容。如需联系小姐姐，请在输入框回复“
        <span>小姐姐</span>”，我们将在3个工作日内完成综合评估，挑选问题进行解答。</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // 引入样式表重置
  @import '../assets/sass/base.scss';

  .contactUs{
    h2{
      text-align: center;
      color: blueviolet;
      line-height: rem(60px);
      span{
        color: blue;
        text-decoration: underline;
      }
    }
    div.explain{
      width: 85%;
      margin:0 auto;
      h3{
        margin-top: rem(50px);
        color: blueviolet;
        font-size: rem(30px);
        line-height: rem(50px);
        span{
          font-size: rem(35px);
          color: rgb(88, 10, 160);
        }
      }
    }
    margin-top: rem(100px);
    img{
      width: 50%;
      display: block;
      margin: rem(80px) auto;
    }
  }

</style>
