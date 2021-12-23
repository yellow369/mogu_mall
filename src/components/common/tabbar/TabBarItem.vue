<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else ><slot name="item-icon-active"></slot></div>
    <div :class="{'active':isActive}"><slot name="item-text"></slot></div>
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" /> <br />
    <div>首页</div> -->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1 //不等于-1时返回true
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  background-color: #f6f6f6;
  font-size: 14px;
}

.tab-bar-item img {
  width: 20px;
  height: 20px;
  margin-top: 3px;
  vertical-align: middle;
}
.active{
  color: #FE6E8A;
}
</style>