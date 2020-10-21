<template>
  <!--
      作者 Chengtzu
      时间：2020年10月21日 10:17:17
      描述：设置-打印设置-设置
  -->
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="设置" name="first">
      </el-tab-pane>
      <el-tab-pane label="打印机管理" name="second">
      </el-tab-pane>
    </el-tabs>

    <Setting v-if="activeName=='first'" ></Setting>
    <Printlist v-if="activeName=='second'" ></Printlist>

  </div>
</template>
<script>
  import Setting from './setting';
  import Printlist from './printlist';
  export default {
    components: {
      /*编辑组件*/
      Printlist,
      Setting
    },
    data() {
      return {
        /*参数*/
        // message_to: 10,
        /*当前选中*/
        activeName: 'first'
      };
    },
    created() {
      if(this.$route.query.type!=null){
        this.activeName=this.$route.query.type;
      }

    },
    methods: {

    }
  };
</script>
