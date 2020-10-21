<template>
  <!--
          作者：chengtzu
          时间：2020年10月21日 14:13:37
          描述：列表
      -->
  <div class="printer">
      <div class="wrap" style="padding-bottom:20px;">
            <div class="common-form">打印机管理</div>
            <div>
                <el-button size="small" type="primary" icon="el-icon-plus" @click="addClick" v-auth="'/setting/printer/add'">添加打印机</el-button>
            </div>
      </div>
    <!--内容-->
    <div class="printer-content">
      <div class="table-wrap">
        <el-table :data="tableData" size="small" border style="width: 100%" v-loading="loading">
          
           <el-table-column prop="printer_id" label="打印机ID" width="150"></el-table-column>
           <el-table-column prop="printer_name" label="打印机名称"></el-table-column>
           <el-table-column prop="printer_type" label="打印机类型"></el-table-column>
           <el-table-column prop="printer_status" label="状态" width="150">
            <template slot-scope="scope">
              <el-switch
                    v-model="scope.row.printer_status"
                    :active-value="1"
                    :inactive-value="0"
                    active-color="#02538C"
                    inactive-color="#B9B9B9"
                    @change="switchDB(scope.row)"
              />
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="50">
            <template slot-scope="scope">
              <el-button @click="deleteClick(scope.row)" type="text" size="small" v-auth="'/member/member/delete'">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!--分页-->
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          background
          :current-page="curPage"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="totalDataNumber"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import PrinterApi from '@/api/printer.js';
export default {
  components: {},
  data() {
    return {
      /*是否加载完成*/
      loading: true,
      /*列表数据*/
      tableData: [],
      /*一页多少条*/
      pageSize: 20,
      /*一共多少条数据*/
      totalDataNumber: 0,
      /*当前是第几页*/
      curPage: 1,
      /*横向表单数据模型*/
      formInline: {
        nick_name: '',
        value1: ''
      },
      /*时间*/
      value1: ''
    };
  },
  created() {
    /*获取列表*/
    this.getTableList();
  },
  methods: {
    /*选择第几页*/
    handleCurrentChange(val) {
      let self = this;
      self.curPage = val;
      self.loading = true;
      self.getTableList();
    },

    /*每页多少条*/
    handleSizeChange(val) {
      this.curPage = 1;
      this.pageSize = val;
      this.getTableList();
    },

    /*获取列表*/
    getTableList() {
      let self = this;
      let Params = self.formInline;
      Params.page = self.curPage;
      Params.list_rows = self.pageSize;
      PrinterApi.printerlist(Params, true)
        .then(data => {
          self.loading = false;
          self.tableData = data.data.list.data;
          self.totalDataNumber = data.data.list.total;
        })
        .catch(error => {
          self.loading = false;
        });
    },

    /*搜索查询*/
    onSubmit() {
      let self = this;
      self.loading = true;
      let Params = self.formInline;
      self.getTableList();
    },

    /*删除用户*/
    deleteClick(row) {
      let self = this;
      self
        .$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
          self.loading = true;
          PrinterApi.deleteuser(
            {
              user_id: row.user_id
            },
            true
          )
            .then(data => {
              self.loading = false;
              if (data.code == 1) {
                self.$message({
                  message: '恭喜你，用户删除成功',
                  type: 'success'
                });
                self.getTableList();
              } else {
                self.loading = false;
              }
            })
            .catch(error => {
              self.loading = false;
            });
        })
        .catch(() => {
          self.loading = false;
        });
    },
    //配送
    switchDB(res){
      //  console.log(res)
      let Params = {
        'user_id':res.user_id,
        'is_db':res.is_db
      };
       PrinterApi.userdeliveryboy(Params, true)
        .then(data => {
          
        })
        .catch(error => {
          
        });
    },
    
    /*打开添加*/
    addClick() {
      this.$router.push('/setting/printer/add');
    },

    /*打开编辑*/
    editClick(row) {
      this.$router.push({
        path: '/setting/printer/edit',
        query: {
          product_id: row.printer_id,
          scene: 'edit'
        }
      });
    },
  }
};
</script>
<style scoped="">
  .user-photo{ width: 30px; height: 30px; border-radius: 50%;}
</style>
