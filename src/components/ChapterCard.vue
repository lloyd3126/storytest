<template>
  <div>
    <el-row>
      <el-col :span="16" :key="1">
        <el-card shadow="never" :body-style="{ padding: '0px' }">
          <div class="demo-image" style="padding: 14px;">
            <el-image id="cht-image" :src="url" fit="cover"></el-image>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" :key="2">
        <el-card shadow="never" :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <span id="cht-title">{{ info_props[2] }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :key="3">
        <a :href="opt1Link" @click="choose(opt1Name, info_props[3])">
          <el-card
            shadow="hover"
            :body-style="{ height: '22vh' }"
            style="cursor: pointer; margin-top: 5px; margin-right: 5px"
          >
            <div style="padding: 0px; cursor: pointer">
              <h3>{{ info_props[4] }}</h3>
              <div class="clearfix">
                <span class="opt-description">{{ info_props[5] }}</span>
              </div>
            </div>
          </el-card>
        </a>
      </el-col>
      <el-col :span="12" :key="4">
        <a :href="opt2Link" @click="choose(opt2Name, info_props[7])">
          <el-card
            shadow="hover"
            :body-style="{ height: '22vh' }"
            style="cursor: pointer; margin-top: 5px; margin-left: 5px"
          >
            <div style="padding: 0px;">
              <h3>{{ info_props[8] }}</h3>
              <div class="clearfix">
                <span class="opt-description">{{ info_props[9] }}</span>
              </div>
            </div>
          </el-card>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['info_props', 'storyId_props'],
  data() {
    return {
      currentDate: new Date(),
      fits: ['fill'],
      url:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      root: './#/test/' + this.storyId_props + '/',
    };
  },
  computed: {
    opt1Name() {
      return this.info_props[6].replace(this.storyId_props, '');
    },
    opt2Name() {
      return this.info_props[10].replace(this.storyId_props, '');
    },
    opt1Link() {
      return this.root + this.opt1Name;
    },
    opt2Link() {
      return this.root + this.opt2Name;
    },
  },
  methods: {
    choose(chaptername, currentoptid) {
      const dateTime = Date.now();
      const timestamp = Math.floor(dateTime / 1000);
      let timespent =
        timestamp - Number(localStorage.getItem('lastMoveTimestamp'));
      localStorage.setItem('lastMoveTimestamp', timestamp);

      let testResultArr = JSON.parse(localStorage.getItem('testResult'));
      localStorage.setItem('currentChapter', chaptername);
      testResultArr.push({
        currentChapterID: this.info_props[0],
        currentOptID: currentoptid,
        currentDirectChapterID: chaptername,
        timeSpent: timespent,
      });
      localStorage.setItem('testResult', JSON.stringify(testResultArr));
    },
  },
};
</script>

<style scope>
.opt-description {
  text-align: left;
  display: inline-block;
}

#cht-image {
  width: 100%;
  height: 60vh;
}
#cht-title {
  text-align: left;
  display: inline-block;
  height: calc(60vh + 6px);
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
