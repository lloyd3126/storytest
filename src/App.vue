<template>
  <div id="app">
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <router-link to="/test">測驗畫面</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <a
            href="https://docs.google.com/spreadsheets/d/1VORQl4nnKqEzfctwlWlNngA00EdBgCWb7NNVlTpblqA/"
            target="_blank"
          >測驗結果</a>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import VueRouter from "vue-router";
import Test from "./Test.vue";
import TestHomePage from "./TestHomePage.vue";
import TestEndPage from "./TestEndPage.vue";

export default {
  name: "app",
  components: {
    // HelloWorld,
  },
  router: new VueRouter({
    routes: [
      { path: "/test/", component: TestHomePage },
      { path: "/test/:storyid", component: TestEndPage },
      { path: "/test/:storyid/:chapterid", component: Test }
    ]
  }),
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      console.clear();
    }
  }
};
</script>

<style scope>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
ul.el-menu--horizontal > li.el-menu-item {
  height: 30px;
  line-height: 20px;
}

ul.el-menu--horizontal > li.el-menu-item > a {
  font-size: 16px;
  line-height: 16px;
}
</style>
