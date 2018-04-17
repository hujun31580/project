<template>
    <div>
        <el-container style="height: 600px; border: 1px solid #eee">
    <el-main  class='homemain'>
        <el-header>
             <el-row>
                <el-col :span='12'>
                    <el-dropdown>
                    <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                <el-col :span='6'>
                <el-date-picker
                  v-model="value1"
                  type="month"
                  value-format='yyyy/MM'
                  placeholder="选择月">
                </el-date-picker>
                </el-col>
                 <el-col :span='6'>
                     <el-date-picker
                      v-model="value2"
                      type="month"
                      value-format='yyyy/MM'
                      placeholder="选择月">
                    </el-date-picker>
                </el-col>     
            </el-row>
        </el-header>
    <el-row :gutter="12">
  <el-col :span="8">
    <el-card shadow="always">
      总是显示
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="hover">
      鼠标悬浮时显示
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="never">
      从不显示
    </el-card>
  </el-col>
</el-row>
  <el-row>
       <el-col :span='24'>
         <div class="box" ref='ech' >
         </div>
       </el-col>
  </el-row>
    </el-main>
    </el-container>
    </div>
</template>

<script>
import Echarts, { init } from "echarts";
export default {
  data() {
    return {
      value1: "",
      value2: "",
      arrTime: [],
      option: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value",
          scale: true
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      },
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value6: "",
      value7: ""
    };
  },
  mounted() {
    init(this.$refs.ech).setOption(this.option);
    window.onresize = () => {
      init(this.$refs.ech).resize();
    };
  },
  watch: {
    value2(n, o) {
      this.arrTime = [];
      let startTime = this.value1;
      console.log(typeof startTime)
      let endTime = n;
      let [startY, startM] = startTime.split("/");
      let [endY, endM] = endTime.split("/");
      let len = (endY - startY) * 12 + (endM - startM);
      for (let i = 0; i <= len; i++) {
        this.arrTime.push(
          `${startY * 1 + parseInt((startM) / 13)}/${(startM++-1) % 12 +
            1}`
        );
      }
      init(this.$refs.ech).setOption({
        xAxis: {
          type: "category",
          data: this.arrTime
        }
      });
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 400px;
}
.homemain {
  overflow: auto;
}
</style>