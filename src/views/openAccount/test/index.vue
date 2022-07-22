<template>
  <div class="open">
    <h1 class="open-title">风险等级测试</h1>
    <div class="test" v-for="item in testLists" :key="item.quesId">
      <h3 class="title">{{ item.quesDetail }}</h3>
      <h-radio-group v-model="answer[item.quesId - 1]" size="large">
        <h-radio label="A">{{ item.ansA }}</h-radio>
        <h-radio label="B">{{ item.ansB }}</h-radio>
        <h-radio label="C">{{ item.ansC }}</h-radio>
        <h-radio label="D">{{ item.ansD }}</h-radio>
      </h-radio-group>
    </div>
    <h-button class="btn" type="primary" shape="circle" @click="submit"
      >提交</h-button
    >
  </div>
</template>

<script>
import core from "@hsui/core";
import { QUESTIONS } from "../../../constant/index";
export default {
  data() {
    return {
      testLists: QUESTIONS,
      animal: "",
      answer: [],
      userRiskLevel: "",
    };
  },
  methods: {
    //检测答题, 计算分数判断等级
    testIsNull() {
      this.answer1 = JSON.parse(JSON.stringify(this.answer));
      console.log(this.animal1);
      if (
        this.answer1.every((x) => x != null) === true &&
        this.animal1 != undefined
      ) {
        //计算分数
        let count = 0;
        this.answer1.map((item) => {
          switch (item) {
            case "A":
              count = count + 1;
              break;
            case "B":
              count = count + 4;
              break;
            case "C":
              count = count + 7;
              break;
            default:
              count = count + 10;
              break;
          }
        });
        return count;
      } else {
        return false; //答题未完成
      }
    },
    submit() {
      const isNull = this.testIsNull();
      if (isNull === false) {
        this.$hMessage.error("请完成答题");
      } else {
        if (0 <= isNull < 30) {
          this.userRiskLevel = "保守型";
        } else if (30 <= isNull < 60) {
          this.userRiskLevel = "稳健型";
        } else {
          this.userRiskLevel = "激进型";
        }
        core
          .fetch({
            method: "get",
            url: "/api/userLevel",
            params: {
              userId: this.$route.query,
              userRiskLevel: this.userRiskLevel,
            },
          })
          .then((res) => {
            const { message } = res;
            this.$hMessage.success(message);
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.open {
  width: 100%;
  height: 83vh;
  padding: 18px;
  overflow: auto;
  background-color: #fff;
  border-radius: 10px;
  .open-title {
    margin-bottom: 10px;
    text-align: center;
  }
  .test {
    .title {
      margin-top: 10px;
      margin-bottom: 5px;
    }
  }
  .btn {
    display: block;
    width: 200px;
    margin: 20px auto;
  }
}
</style>
