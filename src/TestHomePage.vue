<template>
  <div>
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="12">
        <h1>氣候變遷情境故事 說明頁</h1>
        <p
          style="text-align: left; text-indent: 32px;"
        >您好，我們是臺灣科技大學數位學習與教育所王嘉瑜老師的研究團隊。全球 暖化帶來的氣候變遷，為不同地區的人們帶來不同影響。我們希望能利用互動式 情境故事，幫助更多人體會受到氣候暖化和改變影響的生活樣貌，促進民眾關注 氣候變遷議題。</p>
        <p
          style="text-align: left; text-indent: 32px;"
        >為瞭解造訪網站的人次和使用情形，本網頁收集使用者造訪的頁面和停留時 間。您可以選擇匿名或不輸入造訪者編號。本網頁所收集之資料僅供學術研究使 用，您的瀏覽資料本研究將會絕對保密，絕不妨礙您的生活與侵犯個人隱私，請 您安心瀏覽。本研究感謝您對氣候變遷議題的關注和支持。</p>
        <p style="text-align: left; text-indent: 32px;">請點選「新故事開始：格陵蘭、吐瓦魯或雅加達」的按鈕，體驗不同的故事 情境。</p>
        <p
          style="text-align: left; text-indent: 32px;"
        >小提醒:如果中途不小心跳出故事，回到首頁按下「繼續還沒結束的故事」 就可以回到先前跳出的地方喔。</p>
        <el-card class="box-card" shadow="never">
          <a :href="unfinishedStoryLink">
            <el-button type="danger">繼續還沒結束的故事</el-button>
          </a>
        </el-card>
        <el-alert
          title="開始新故事後，舊故事的瀏覽資料就會消失喔!請先確認資料已經送出後， 再開始另一個新的故事呦!"
          type="warning"
          style="margin-top: 14px;"
        ></el-alert>
        <el-card class="box-card" style="margin-top: 14px;" shadow="never">
          <a href="./#/test/A/000">
            <el-button
              type="primary"
              @click="startStory('A')"
              style="margin-bottom: 14px;"
            >新故事開始：改變中的冰原 ─ 格陵蘭</el-button>
          </a>

          <br />
          <a href="./#/test/B/000">
            <el-button
              type="success"
              @click="startStory('B')"
              style="margin-bottom: 14px;"
            >新故事開始：我的家鄉會消失嗎? ─ 吐瓦魯</el-button>
          </a>
          <br />
          <a href="./#/test/C/000">
            <el-button type="warning" @click="startStory('C')">新故事開始：市長的難題 ─ 雅加達</el-button>
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
