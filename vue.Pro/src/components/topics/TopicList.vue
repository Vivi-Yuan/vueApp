<template>
  <div class="topiclist">
		<!-- loading 组件 -->
		<loading v-if="!items.length"></loading>
    <!-- 栏目列表 -->
		<ul class="items">
			<li v-for="item in items">
				<img v-lazy="item.author.avatar_url" alt="">
				<div class="tab">
					<div class="top" v-if="item.top">置顶</div>
					<div class="top" v-else-if="item.good">精华</div>
					<div class="mo" v-else>{{tab[ item.tab ]}}</div>
				</div>
				<router-link :to="'/index/details/'+item.id" tag="div" class="title">{{item.title}}</router-link>
			</li>
		</ul>
  </div>
</template>

<script>
// 引入 Loading 组件
import Loading from '@/components/public/Loading';

export default {
	name: 'Topiclist',
	data () {
		return {
			// 主题分类对象
			tab:{
				dev: '测试',
				share: '分享',
				ask: '问答',
				job: '招聘',
			}
		}
	},

	// 加载组件
	components:{
		// Loading 组件
		Loading
	},

	// 接收父级组件传递过来的数据(栏目列表的数据)
	props:['items']
}
</script>

<style scoped lang="scss">
  // 引入 公共的 样式
  @import '../../assets/sass/base.scss';

	.topiclist{
		margin-top: rem(80px);
	}

	// 栏目列表
	.items{
		width: 100%;
		li{
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: rem(80px);
			border-bottom: 1px solid #ccc;
			margin-top: rem(10px);
			img{
				width: rem(60px);
				height: rem(60px);
				border-radius: rem(6px);
			}
			.tab{
				width: rem(60px);
				height: rem(35px);
				font-size: rem(22px);
				text-align: center;
				line-height: rem(35px);
				/*padding: rem(5px) rem(10px);*/
				.top{
					background: #80BD01;
					color: #fff;
					border-radius: rem(5px);
				}
				.mo{
					background: #e5e5e5;
					color: #999;
					border-radius: rem(5px);
				}
			}
			.title{
				width: rem(550px);
				height: rem(100px);
				line-height: rem(100px);
				font-size: rem(28px);
				color: #333;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>