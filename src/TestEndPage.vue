<template>
  <div v-loading.fullscreen.lock="loading">
    <el-row>
      <h1>測驗結束頁</h1>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="16" :key="1">
        <p>
          測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束測驗結束
        </p>
        <el-row style="margin-top: 50px;">
          <el-col :span="12" :key="1">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>請輸入受試者編號並送出本次測驗資料</span>
                <el-button
                  style="float: right; padding: 3px 0"
                  @click="onSubmit"
                  type="text"
                  >送出</el-button
                >
              </div>
              <el-form class="demo-form-inline">
                <el-form-item>
                  <el-input
                    v-model="userInput"
                    placeholder="受試者編號"
                  ></el-input>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
          <el-col :span="12" :key="1">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>確認受試者已完成受測後點擊按鈕回到首頁</span>
              </div>
              <el-form class="demo-form-inline">
                <el-form-item>
                  <a href="./#/test">
                    <el-button type="primary">首頁</el-button>
                  </a>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      userInput: '',
      loading: false,
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      let tempArr = [];
      tempArr.push(new Date().toLocaleString());
      tempArr.push(this.userInput || 'NONAME');
      Object.keys(JSON.parse(localStorage.getItem('testResult'))).forEach(
        (e) => {
          tempArr.push(String(Number(e) + 1));
          tempArr.push(
            JSON.parse(localStorage.getItem('testResult'))[e].currentChapterID
          );
          tempArr.push(
            JSON.parse(localStorage.getItem('testResult'))[e]
              .currentDirectChapterID
          );
          tempArr.push(
            JSON.parse(localStorage.getItem('testResult'))[e].currentOptID
          );
          tempArr.push(
            JSON.parse(localStorage.getItem('testResult'))[e].timeSpent
          );
        }
      );

      const params = { sentdata: tempArr.join(',') };

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(params),
        url:
          'https://script.google.com/macros/s/AKfycbwPLSVXQ45oscqcxProGYRFy0ttuiikyysRMH9TX0QRNQLdhq0/exec',
      };
      axios(options);
      setInterval(() => {
        this.loading = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
