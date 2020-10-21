<template>
  <!--
          作者：chengtzu
          时间：2020年10月21日 14:13:37
          描述：列表
      -->
  <div class="printer">
    <div class="wrap" style="padding-bottom: 20px">
      <div class="common-form">小票打印机添加</div>
    </div>
    <!--内容-->
    <div class="printer-content">
      <el-form size="small" ref="form" :model="form" label-width="180px">
        
        <el-form-item label="打印机名称" :rules="[{ required: true, message: '请输入打印机名称' }]" prop="printer_name">
             <el-input type="text" v-model="form.printer_name" class="max-w460" prop="printer_name"></el-input>
        </el-form-item>
        <el-form-item label="打印机类型"  prop="printer_type">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in typeList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <!--提交-->
        <div class="common-button-wrapper">
          <el-button
            type="primary"
            size="small"
            @click="onSubmit"
            :loading="loading"
            >发布</el-button
          >
          <el-button
            type="primary"
            size="small"
            @click="Draft"
            :loading="loading"
            >保存为草稿</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      loading: false,
      /*form表单数据*/
      form: {
          printer_name:'',
          printer_type:'F_E_YUN'
      },
      typeList:[
          {
              label:'飞鹅云打印',
              value:''
          }
      ]
    };
  },
};
</script>