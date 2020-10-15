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
      <el-button
        size="small"
        icon="el-icon-plus"
        type="primary"
        @click="addClick"
        v-auth="'/setting/address/add'"
        >添加</el-button
      >
    </div>

    <!--内容-->
    <div class="product-content">
      <el-tree
        :data="data"
        node-key="value"
       
        :expand-on-click-node="false"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <el-button type="text" size="mini" @click="() => append(data)" v-if="node.children">
              添加
            </el-button>
            <el-button
              type="text"
              size="mini"
              @click="() => remove(node, data)"
              v-if="node.children"
            >
             删除
            </el-button>
            
            <el-button
              type="text"
              size="mini"
              @click="() => edit(node, data)"
            >
              编辑 
            </el-button>
          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
import SettingApi from "@/api/setting.js";
let id = 1000;
export default {
  data() {
    return {
        form: {
          delivery_id: 0,
        },
      data:[],
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
        SettingApi.deliveryDetail({
            delivery_id:0
        },
            true
          )
          .then(data => {
            //   console.log(data)
            this.data = data.data.arr;
          })
          .catch(error => {
            console.log(error);
          });
      },
    addClick(){

    },
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

<style></style>
