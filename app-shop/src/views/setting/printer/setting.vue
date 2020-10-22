<template>
<!-- 
      作者 chengtzu
      时间：2020年10月21日 10:32:38
      描述：设置-打印设置-设置
 -->
<div class="print">
     <!--form表单-->
    <el-form size="small" ref="form" :model="form" label-width="200px" v-loading="loading">
      <!--文件上传设置-->
      <div class="common-form">打印设置</div>

      <el-form-item label="是否开启">
        <div>
          <el-radio v-model="form.is_open" :label="0" @change="getRadio">不开启</el-radio>
          <el-radio v-model="form.is_open" :label="1" @change="getRadio">开启</el-radio>
        </div>
      </el-form-item>
      <el-form-item label="打印机">
        
            <el-select v-model="form.printer_id" placeholder="请选择">
                <el-option
                v-for="item in printlist"
                :key="item.printer_id"
                :label="item.printer_name"
                :value="item.printer_id"
                :disabled="item.disabled">
                </el-option>
            </el-select>
      </el-form-item>
      <el-form-item label="打印方式">
        <div>
         <el-checkbox-group v-model="form.order_status">
            <el-checkbox :label="10">下单</el-checkbox>
            <el-checkbox :label="20">付款</el-checkbox>
         </el-checkbox-group>
        </div>
      </el-form-item>
      <!--提交-->
      <div class="common-button-wrapper"><el-button size="small" type="primary" @click="onSubmit" :loading="loading">提交</el-button></div>
    </el-form>
</div>
</template>

<script>
import SettingApi from '@/api/setting.js';

export default {
  data() {
    return {
      /*切换菜单*/
      // activeIndex: '1',
      /*form表单数据*/
      printlist:[],
      form: {
        is_open: 0,
        printer_id:null,
        order_status:[20]
        
      },
      loading: false
    };
  },
  created() {
    this. loading =  true;
    this.getData();
  },

  methods: {
    getData() {
      let self = this;
      SettingApi.printDetail({}, true)
        .then(data => {
          let vars = data.data.vars.values;
          let print = data.data.print.data;
          self.form.is_open = vars.is_open;
          self.form.printer_id = vars.printer_id;
          self.form.order_status = vars.order_status;
          self.printlist = print;
           self. loading =  false;
        })
        .catch(error => {
           self. loading =  false;
        });
    },
    //提交表单
    onSubmit() {
      let self = this;
      self.$refs.form.validate((valid) => {
        if (valid) {
          self.loading = true;
          let params = this.form;
          SettingApi.printedit(params, true)
            .then(data => {
              self.loading = false;
              self.$message({
                message: '恭喜你，设置成功',
                type: 'success'
              });
              // self.$router.push('/setting/Storage');
            })
            .catch(error => {
              self.loading = false;
            });
        }
     });

    },
    //监听单选按钮
    getRadio(val) {}
  }
};
</script>


<style>

</style>