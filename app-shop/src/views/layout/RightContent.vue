<template>
  <!--
    	作者：luoyiming
    	时间：2019-10-24
    	描述：后台系统内容区域
    -->
  <div class="right-content pr">
    
    <el-alert
    type="warning"
    description="技术支持（BUG反馈） QQ/WX：5036744 电话：15548906781">
  </el-alert>
    <!--头部-->
    <Head></Head>
    <!--内容区域-->
    <div class="right-content-box">
      <div class="subject-wrap">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  import Head from '@/views/layout/Head.vue';
  export default {
    components: {
      Head
    },
    data() {
      return {};
    },
    created() {},
    methods: {}
  };
</script>

<style>
</style>
