import Vue from 'vue';
import VueRouter from 'vue-router';
import Test from './Test.vue';
import TestHomePage from './TestHomePage.vue';
import TestEndPage from './TestEndPage.vue';

Vue.use(VueRouter);

const storyPageTitle = {
  A: '格陵蘭 - 改變中的冰原 | 氣候變遷情境故事',
  B: '吐瓦魯 - 我的家鄉會消失嗎？ | 氣候變遷情境故事',
  C: '雅加達 - 市長的難題 | 氣候變遷情境故事',
};

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/test' },
    {
      path: '/test',
      component: TestHomePage,
      meta: {
        title: '說明頁 | 氣候變遷情境故事',
      },
    },
    {
      path: '/test/:storyid',
      component: TestEndPage,
      meta: {
        title: '結束頁 | 氣候變遷情境故事',
      },
    },
    {
      path: '/test/A/:chapterid',
      component: Test,
      meta: {
        storyid: 'A',
        title: storyPageTitle.A,
      },
    },
    {
      path: '/test/B/:chapterid',
      component: Test,
      meta: {
        storyid: 'B',
        title: storyPageTitle.B,
      },
    },
    {
      path: '/test/C/:chapterid',
      component: Test,
      meta: {
        storyid: 'C',
        title: storyPageTitle.C,
      },
    },
  ],
});
