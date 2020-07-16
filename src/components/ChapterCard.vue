<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="16">
        <el-row style="margin: 5px 0">
          <el-col :span="24" :key="1" v-show="isLoad">
            <el-card shadow="never" :body-style="{ padding: '0px'}">
              <!-- <img  :src="info_props[1]" class="image" @load="loaded" /> -->
              <el-image id="cht-image" :src="info_props[1]" fit="contain" @load="loaded"></el-image>
            </el-card>
          </el-col>
          <el-col :span="24" :key="2" v-show="!isLoad">
            <el-card shadow="never" :body-style="{ padding: '0px'}">
              <div class="cht-image" style="position: relative;">
                <div
                  class="loader"
                  style="position: absolute; top: 50%; left: 50%; transfrom: translate(50%, 50%)"
                ></div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin: 5px 0">
          <el-col :span="24" :key="3">
            <el-card shadow="never" :body-style="{ padding: '10px'}">
              <div id="cht-title" v-html="chtTitleP"></div>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin: 5px 0">
          <el-col :span="12" :key="4">
            <el-card
              shadow="never"
              :body-style="{ height: 'calc(10vh - 60px);' }"
              style=" margin-right: 2.5px"
            >
              <div style="padding: 0px;">
                <div class="clearfix">
                  <span class="opt-description">{{ info_props[5] }}</span>
                </div>
                <a :href="opt1Link" @click="choose(opt1Name, info_props[3])">
                  <el-button
                    class="opttxt"
                    style="width: 100%; margin-top: 10px;"
                    type="success"
                    plain
                  >{{ info_props[4] }}</el-button>
                </a>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12" :key="5">
            <el-card
              shadow="never"
              :body-style="{ height: 'calc(10vh - 60px);' }"
              style=" margin-left: 2.5px"
            >
              <div style="padding: 0px;">
                <div class="clearfix">
                  <span class="opt-description">{{ info_props[9] }}</span>
                </div>
                <a :href="opt2Link" @click="choose(opt2Name, info_props[7])">
                  <el-button
                    class="opttxt"
                    style="width: 100%; margin-top: 10px;"
                    type="success"
                    plain
                  >{{ info_props[8] }}</el-button>
                </a>
              </div>
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
export default {
  props: ["info_props", "storyId_props"],
  data() {
    return {
      isLoad: false,
      currentDate: new Date(),
      fits: ["fill"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      root: "./#/test/" + this.storyId_props + "/"
    };
  },
  computed: {
    opt1Name() {
      return this.info_props[6].replace(this.storyId_props, "");
    },
    opt2Name() {
      return this.info_props[10].replace(this.storyId_props, "");
    },
    opt1Link() {
      return this.root + this.opt1Name;
    },
    opt2Link() {
      return this.root + this.opt2Name;
    },
    chtTitleP() {
      return (
        "<p>" + this.info_props[2].split("「換行！」").join("</p><p>") + "</p>"
      );
    }
  },
  methods: {
    loaded() {
      this.isLoad = true;
    },
    choose(chaptername, currentoptid) {
      const dateTime = Date.now();
      const timestamp = Math.floor(dateTime / 1000);
      let timespent =
        timestamp - Number(localStorage.getItem("lastMoveTimestamp"));
      localStorage.setItem("lastMoveTimestamp", timestamp);

      let testResultArr = JSON.parse(localStorage.getItem("testResult"));
      localStorage.setItem("currentChapter", chaptername);
      testResultArr.push({
        currentChapterID: this.info_props[0],
        currentOptID: currentoptid,
        currentDirectChapterID: this.storyId_props + chaptername,
        timeSpent: timespent
      });
      localStorage.setItem("testResult", JSON.stringify(testResultArr));
    }
  }
};
</script>

<style scope>
* {
  font-family: "微軟正黑體";
  line-height: 24px;
  font-size: 16px;
}
.opttxt span {
  line-height: 36px;
  font-size: 24px;
}

.opt-description {
  text-align: left;
  display: inline-block;
}

/* .cht-image {
  width: 100%;
  height: 60px;
} */

#cht-image {
  width: 100%;
  height: 50vh;
}
#cht-title {
  padding: 5px 10px;
}

#cht-title > p {
  width: 100%;
  height: auto;
  text-align: left;
  margin: 10px 0px;
  text-indent: 32px;
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
  content: "";
}

.clearfix:after {
  clear: both;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.loader {
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid teal; /* Blue */
  border-radius: 50%;
  width: 12px;
  height: 12px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
