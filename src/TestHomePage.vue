<template>
  <div>
    <el-row>
      <h1>測驗說明頁</h1>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="16" :key="1">
        <p>
          測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明測驗說明
        </p>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row>
      <a :href="unfinishedStoryLink">
        <el-button type="danger" style="margin-top: 20px"
          >繼續還沒結束的故事</el-button
        >
      </a>
      <br />
      <a href="./#/test/A/000">
        <el-button
          type="primary"
          style="margin-top: 20px"
          @click="startStory('A')"
          >新故事開始：故事Ａ</el-button
        >
      </a>
      <br />
      <a href="./#/test/B/000">
        <el-button
          type="success"
          style="margin-top: 20px"
          @click="startStory('B')"
          >新故事開始：故事Ｂ</el-button
        >
      </a>
      <br />
      <a href="./#/test/C/000">
        <el-button
          type="warning"
          style="margin-top: 20px"
          @click="startStory('C')"
          >新故事開始：故事Ｃ</el-button
        >
      </a>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  computed: {
    unfinishedStoryLink() {
      let storyname = localStorage.getItem('currentStory');
      let chapterame = localStorage.getItem('currentChapter');
      return './#/test/' + storyname + '/' + chapterame;
    },
  },
  methods: {
    startStory(storyname) {
      localStorage.setItem('currentStory', storyname);
      localStorage.setItem('currentChapter', '000');
      localStorage.setItem('testResult', '[]');
      localStorage.setItem('lastMoveTimestamp', '');
    },
  },
};
</script>

<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
