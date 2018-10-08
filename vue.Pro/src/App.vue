<template>
  <div id="app">
    <router-view/>
    <nav class="appNaV">
      <ul>
        <router-link to='/index' tag='li' :class="resPath=='index'?'active':''">首页</router-link>
        <router-link to='/me' tag='li' :class="resPath=='me'?'active':''">我的vue</router-link>
        <router-link to='/contactUs' tag='li' :class="resPath=='contactUs'?'active':''">联系我们</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 计算属性
  computed:{
    resPath: function(){
      // 用 '/' 把路径分割成数组
      var array = this.$route.path.split('/');
      // 把能够表示当前 组件的 字符串 返回出去
      return array[1];
    }
  }
}
</script>

<style lang="scss">
  // 引入 公共的 样式
  @import './assets/sass/base.scss';

  // 底部导航
  nav.appNaV{
    position: fixed;
    bottom: 0;
    left:0;
    width: 100%;
    height: rem(80px);
    background:#444;
    ul{
      display: flex;
      li{
        width: 33.3%;
        line-height: rem(80px);
        text-align: center;
        color:#999;
        font-size: rem(30px);
      }
      li.active{
        color: #ddd;
        background: #333;
      }
    }
  }
</style>
