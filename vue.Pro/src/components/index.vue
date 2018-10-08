<template>
  <div class="index">
    <!-- 顶部导航 -->
		<nav class="top">
			<ul>
				<router-link to="/index/" tag="li" :class="(resPath=='' || resPath== undefined)?'default':''">全部</router-link>
				<router-link to="/index/good" tag="li" :class="resPath=='good'?'default':''">精华</router-link>
				<router-link to="/index/share" tag="li" :class="resPath=='share'?'default':''">分享</router-link>
				<router-link to="/index/ask" tag="li" :class="resPath=='ask'?'default':''">问答</router-link>
				<router-link to="/index/job" tag="li" :class="resPath=='job'?'default':''">招聘</router-link>
				<router-link to="/index/dev" tag="li" :class="resPath=='dev'?'default':''">测试</router-link>
			</ul>
		</nav>
		<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      msg: ""
    };
	},
  // 计算属性
  computed:{
    resPath: function(){
      // 用 '/' 把路径分割成数组
      var array = this.$route.path.split('/');
			// 把能够表示当前 组件的 字符串 返回出去
      return array[2];
    }
  }
};
</script>

<style scoped lang="scss">
  // 引入样式表重置
  @import '../assets/sass/base.scss';

	// 顶部导航
	nav.top{
		position: fixed;
		top:0;
		left:0;
		width: 100%;
		height: rem(80px);
		background: #f6f6f6;
		ul{
			display: flex;
			height: rem(80px);
			align-items: center;
			justify-content: space-around;
			li{
				font-size: rem(28px);
				width: rem(80px);
				height: rem(50px);
				line-height: rem(50px);
				color:#80BD01;
				text-align: center;
			}
			li.default{
				border-radius: rem(8px);
				color:#fff;
				background: #80BD01;
			}
		}
	}
</style>
