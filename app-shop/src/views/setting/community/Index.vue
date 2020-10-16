<template>
  <!--
    	作者：wangxw
    	时间：2019-10-26
    	描述：设置-退货地址
    -->
  <div class="community">
    <div class="common-form">社区管理</div>
    <!--退货地址-->
    <div class="common-level-rail">
      <el-button-group>
        <el-button
          size="small"
          icon="el-icon-plus"
          type="primary"
          @click="communityFormVisible = true"
          >添加</el-button
        >
        <el-button
          size="small"
          icon="el-icon-open"
          type="primary"
          @click="ustatus(1)"
          >启用</el-button
        >
        <el-button
          size="small"
          icon="el-icon-turn-off"
          type="primary"
          @click="ustatus(0)"
          >禁用</el-button
        >
      </el-button-group>
    </div>

    <!--内容-->
    <div class="community-content">
      <el-tree
        :data="data"
        node-key="value"
        :expand-on-click-node="false"
        show-checkbox
        ref="tree"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <el-button type="text" size="mini" @click="() => edit(node, data)">
              <i class="el-icon-edit"></i>
            </el-button>
            <el-button
              type="text"
              size="mini"
              @click="() => remove(node, data)"
            >
              <i class="el-icon-delete"></i>
            </el-button>
          </span>
        </span>
      </el-tree>
    </div>
    <el-dialog title="社区" :visible.sync="communityFormVisible">
      <el-form :model="form">
        <el-form-item label="区/小区" :label-width="formLabelWidth">
          <el-select v-model="form.pid" placeholder="请选择区/社区">
            <el-option label="区域" :value="0" :key="0"></el-option>
            <el-option
              v-for="item in data"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="communityFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="communityFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import SettingApi from "@/api/setting.js";
let id = 1000;
export default {
  data() {
    return {
      form: {
        id: 0,
        pid: '',
        name: "",
        level: 1,
      },
      communityFormVisible: false,
      formLabelWidth: '120px',
      data: [],
      //   data: data,
    };
  },
  created() {
    /*获取列表*/
    this.getData();
  },
  methods: {
    getData() {
      let self = this;
      SettingApi.deliveryDetail(
        {
          delivery_id: 0,
        },
        true
      )
        .then((res) => {
          let data = res.data.arr;
          this.data = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ustatus(status) {
      let idArr = this.$refs.tree.getCheckedKeys();
      let ids = idArr.join(",");

      console.log(status, ids);
    },
    addClick() {},
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },

    edit(node, data) {
        const checkdata = node.data;
        const parent = node.parent;
        this.communityFormVisible = true;
        if(node.level==1){
            this.form.pid = 0;
        }else{
            this.form.pid=parent.data.value;
        }
        this.form.id=checkdata.value;
        this.form.name=checkdata.label;
        this.form.level=node.level;
        console.log(this.form)
        // console.log(this.form)
      //   const parent = node.parent;
      //   const children = parent.data.children || parent.data;
      //   const index = children.findIndex((d) => d.id === data.id);
      //   children.splice(index, 1);
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(data)}
            >
              Append
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              Delete
            </el-button>
          </span>
        </span>
      );
    },
  },
};
</script>

<style>
.community-content {
  width: 300px;
}
.community-content button {
  margin-right: 10px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
