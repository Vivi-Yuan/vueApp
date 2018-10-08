<template>
  <div class="details">
    <h1>{{title}}</h1>
    <div class="author">
        作者：<span>{{author}}</span>
    </div>
    <div class="content">
        <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
// 引入获取栏目数据的模块
import { getArticleData } from "@/getdata/getTopic.js";

export default {
  name: 'Details',
  data () {
    return {
      title:'',
      author:'',
      content:''
    }
  },
  // 钩子函数
  mounted:function(){
    // 请求文章的详细信息
    getArticleData(this.$route.params.id).then((data)=>{
        // 把查询到数据 绑定到 vue 的数据里
        this.title = data.data.data.title;
        this.author = data.data.data.author.loginname;
        this.content = data.data.data.content;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // 引入样式表重置
	@import '../../assets/sass/base.scss';
	.details{
		margin-top: rem(100px);
        h1{
            color:#333;
            font-size: rem(35px);
            text-align: center;
        }
        .author{
            font-size: rem(30px);
            text-align: center;
            line-height: rem(80px);
            color:#999;
        }
        .content{
            width: 90%;
            margin: rem(10px) auto;
            font-size:rem(30px);
            line-height: rem(45px);
            img{
                width: rem(750px);
            }
        }
        .markdown-text p img{
            width: rem(750px);
        }
	}
</style>
