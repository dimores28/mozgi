<template>
  <div class="v-link">
    <router-link :to="link" class="strike">{{ title }}</router-link>
  </div>
</template>

<script>
export default {
  name: "v-link",
  props: {
    link: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: "Home"
    }
  }
};
</script>

<style lang="less">
.v-link a {
  font-size: 16px;
  line-height: 22px;
  color: var(--primary-text-color);
  text-decoration: none;
  transition: all 0.3s ease-out;
  position: relative;
  outline: none;
}

.v-link a:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--hover-color);
  transition: width 0.3s ease-out;
}

.v-link a:hover,
.v-link a:focus {
  color: var(--hover-color);
}

.v-link a:hover:after,
.v-link a:focus:after {
  width: 100%;
}
</style>
