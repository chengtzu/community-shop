<template>
  <!--
          作者：chengtzu
          时间：2020年10月21日 14:13:37
          描述：列表
      -->
  <div class="printer" >
    <div class="wrap" style="padding-bottom: 20px">
      <div class="common-form">小票打印机-{{form.printer_name}}</div>
    </div>
    <!--内容-->
    <div class="printer-content" v-loading="loading">
      <el-form size="small" ref="form" :model="form" label-width="180px">
        
        <el-form-item label="打印机名称" :rules="[{ required: true, message: '请输入打印机名称' }]" prop="printer_name">
             <el-input type="text" v-model="form.printer_name" class="max-w460" prop="printer_name"></el-input>
        </el-form-item>
        <el-form-item label="打印机类型"  prop="printer_type">
            <el-select v-model="form.printer_type" placeholder="请选择">
                <el-option
                v-for="item in typeList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
         <el-form-item label="打印联数" :rules="[{ required: true, message: '请输入打印联数' }]" prop="printer_times">
             <el-input type="text" v-model="form.printer_times" class="max-w460" prop="printer_times"></el-input>
             
                <div class="tips">同一订单，打印的次数</div>
        </el-form-item>
        <div v-if="form.printer_type == 'FEI_E_YUN'">
            <el-form-item label="USER"  prop="USER" >
                <el-input type="text" v-model="form.FEI_E_YUN.USER" class="max-w460" prop="USER"></el-input>
                <div class="tips">飞鹅云后台注册用户名</div>
            </el-form-item>
            <el-form-item label="UKEY"  prop="UKEY">
                <el-input type="text" v-model="form.FEI_E_YUN.UKEY" class="max-w460" prop="UKEY"></el-input>
                <div class="tips">飞鹅云后台登录生成的UKEY</div>
            </el-form-item>
            <el-form-item label="编号"  prop="SN">
                <el-input type="text" v-model="form.FEI_E_YUN.SN" class="max-w460" prop="SN"></el-input>
                <div class="tips">打印机编号为9位数字，查看飞鹅打印机底部贴纸上面的编号</div>
            </el-form-item>
            
            <el-form-item label="飞蛾云申请">
                <a href="https://admin.feieyun.com/" target="_blank"> 开放平台</a>
            </el-form-item>
        </div>
        <!--提交-->
        <div class="common-button-wrapper">
          <el-button
            type="primary"
            size="small"
            @click="onSubmit"
            :loading="loading"
            >修改</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>


<script>
import PrinterApi from '@/api/printer.js';
export default {
  data() {
    return {
      loading: false,
      /*form表单数据*/
      form: {
          printer_id:0,
          printer_name:'',
          printer_type:'FEI_E_YUN',
          printer_times:1,
          FEI_E_YUN:{
          }
      },
      typeList:[
          {
              label:'飞鹅云打印',
              value:'FEI_E_YUN'
          }
      ]
    };
  },
  
    created() {
        this.loading = true;
      if(this.$route.query.printer_id!=null){
         this.form.printer_id=this.$route.query.printer_id;
      }
      this.detailPrinter(this.form.printer_id);
    },
  methods: {
      detailPrinter(printer_id){
           let self = this;
           PrinterApi.detailPrinter({printer_id:printer_id}, true)
                .then(res => {
                      this.loading = false;
                    let data = res.data.detail;
                    self.form.printer_name = data.printer_name;
                    self.form.printer_type = data.printer_type;
                    self.form.printer_times = data.printer_times;
                    self.form.FEI_E_YUN = JSON.parse(data.printer_config);
                    // console.log(self.form)
                })
                .catch(error => {

                   self.loading = false;
                    
            });
      },
      onSubmit(){
        //   console.log(this.form)
          this.$refs['form'].validate((valid) => {
          if (valid) {
               PrinterApi.printeredit(this.form, true)
                .then(res => {
                     self.loading = false;
                     self.$message({
                      message: '修改成功',
                      type: 'success'
                    });
                    self.$router.push('/setting/printer/index?type=printerlist');
                })
                .catch(error => {

                   self.loading = false;
                    
                  });
            // alert('submit!');
          } else {
            
            return false;
          }
        });
      }
  }
};
</script>