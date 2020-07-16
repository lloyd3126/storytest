<template>
  <div>
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="12">
        <h1>測驗說明頁</h1>
        <p
          style="text-align: left"
        >驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明</p>
        <p
          style="text-align: left"
        >測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明</p>
        <p
          style="text-align: left"
        >測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明</p>

        <el-card class="box-card" shadow="never">
          <a :href="unfinishedStoryLink">
            <el-button type="danger">繼續還沒結束的故事</el-button>
          </a>
        </el-card>
        <el-alert
          title="開始新故事後，舊故事的資料就會消失囉！請先確認資料已經送出後，再開始另一個新遊戲呦！"
          type="warning"
          style="margin-top: 14px;"
        ></el-alert>
        <el-card class="box-card" style="margin-top: 14px;" shadow="never">
          <a href="./#/test/A/000">
            <el-button
              type="primary"
              @click="startStory('A')"
              style="margin-bottom: 14px;"
            >新故事開始：故事Ａ</el-button>
          </a>

          <br />
          <a href="./#/test/B/000">
            <el-button
              type="success"
              @click="startStory('B')"
              style="margin-bottom: 14px;"
            >新故事開始：故事Ｂ</el-button>
          </a>
          <br />
          <a href="./#/test/C/000">
            <el-button type="warning" @click="startStory('C')">新故事開始：故事Ｃ</el-button>
          </a>
        </el-card>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  computed: {
    unfinishedStoryLink() {
      let storyname = localStorage.getItem("currentStory");
      let chapterame = localStorage.getItem("currentChapter");

      if (storyname == null) {
        return "./#/test/";
      } else {
        return "./#/test/" + storyname + "/" + chapterame;
      }
    }
  },
  methods: {
    startStory(storyname) {
      localStorage.setItem("currentStory", storyname);
      localStorage.setItem("currentChapter", "000");
      localStorage.setItem("testResult", "[]");
      localStorage.setItem("lastMoveTimestamp", "");
    }
  }
};
</script>

<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
