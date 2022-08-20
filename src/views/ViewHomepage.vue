<template>
  <div class="v-homepage page">
    <v-header></v-header>
    <v-main></v-main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "@/components/header";
import vMain from "@/components/main";
import vFooter from "@/components/footer";
export default {
  name: "home",
  components: {
    vHeader,
    vMain,
    vFooter
  }
};
</script>

<style lang="less">
.v-homepage {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
