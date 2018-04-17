<template>
    <div>
       <h2>广告创意</h2>
       <h4>落地页</h4>
       <div>着陆页地址
           <input type="text" v-model="value">
           <span>预览</span>
       </div>
       <h4>上传创意</h4>
        <div style="margin-bottom: 20px;">

</div>
<el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
  <el-tab-pane
    v-for="(item, index) in editableTabs2"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </el-tab-pane>
  <el-tab-pane>
    <el-button
    size="small"
    @click="addTab(editableTabsValue2)"
  >
    add tab
  </el-button>
  </el-tab-pane>
</el-tabs>
       <el-upload
        action="http://localhost:8000/dsp-creative/creative/upload"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-success='success'
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>    
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      dialogImageUrl: "",
      dialogVisible: false,
      editableTabsValue2: '2',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
    };
  },
  methods: {
    success(file) {
      console.log(file.data.value);
      this.dialogImageUrl = "http://localhost:8000/" + file.data.value;
      this.dialogVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      //     console.log(file.url)
      //   this.dialogImageUrl = file.url;
      //   this.dialogVisible = true;
    },
    addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
  }
};
</script>

<style scoped>

</style>