<template>
  <div v-loading.fullscreen.lock="loading">
    <template v-for="(info, key) in getInfos">
      <template v-if="chapterId == info[0].replace(storyId, '')">
        <ChapterCard :storyId_props="storyId" :info_props="info" :key="key"></ChapterCard>
      </template>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import ChapterCard from "./components/ChapterCard";

export default {
  components: {
    ChapterCard
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      getInfos: [],
      loading: true
    };
  },
  computed: {
    storyIdandchapterId() {
      return this.storyId + this.chapterId;
    },
    chapterId() {
      return this.$route.params.chapterid;
    },
    storyId() {
      return this.$route.meta.storyid;
    }
  },
  mounted() {
    const storyObj = {
      A:
        "https://script.googleusercontent.com/macros/echo?user_content_key=c785WLZ2TsBS6rySiJjXr1aeMh0quqGRXhHanyK3bNTM-r1nqud8Gvq4FevDc6luUZGb_liaPT0UsJT8W9RE1pvIeGjHpLhOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAQW2Z2MRDB7XZqGRXyLFucP6pc-oRJhzyz8QdueZ-YAQ9HFdVgYpmhb6prIHlLXW4vAItAz81VzEnYB1uKFRYE&lib=MzGxIdIgu6DGrLCNLsQ3RRplXkjGulmKX",
      B:
        "https://script.googleusercontent.com/macros/echo?user_content_key=YhCpTqm54Ibo9Ni0jbI12K_xttSAExXBwzdNtVRkipbLLuil4BibjzlRJkqhgVk8rwHzoMwvQRPJP4KoGE5qVwVIm5Eg82gwm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAQW2Z2MRDB7XZqGRXyLFucP6pc-oRJhzyz8QdueZ-YAQ9HFdVgYpmhb6prIHlLXW4vAItAz81Vzlle4FUCOeyc&lib=MzGxIdIgu6DGrLCNLsQ3RRplXkjGulmKX",
      C:
        "https://script.googleusercontent.com/macros/echo?user_content_key=QleCNFFp2mm3TdyUV1rSD9TpWMpm5PgCywlhBgO50gwyWHaOMMcjLbWWpQXK9QBxzq67fybDodDJP4KoGE5qV9gv_S9xkc_Xm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAQW2Z2MRDB7XZqGRXyLFucP6pc-oRJhzyz8QdueZ-YAQ9HFdVgYpmhb6prIHlLXW4vAItAz81VzgMK9pVmsanA&lib=MzGxIdIgu6DGrLCNLsQ3RRplXkjGulmKX"
    };
    console.log(this.$route.meta.storyid);
    axios.get(storyObj[this.$route.meta.storyid]).then(response => {
      // console.log(response.data);
      let tempInfos = response.data;
      tempInfos.forEach(item => {
        item.show = false;
        this.getInfos.push(item);
      });
      this.loading = false;
      const dateTime = Date.now();
      const timestamp = Math.floor(dateTime / 1000);
      localStorage.setItem("lastMoveTimestamp", timestamp.toString());
    });
  }
};
</script>

<style scoped></style>
