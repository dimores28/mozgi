<template>
  <div class="v-homepage page">
    <v-header></v-header>
    <v-main></v-main>
  </div>
</template>

<script>
import vHeader from "@/components/header";
import vMain from "@/components/main";
export default {
  name: "home",
  components: {
    vHeader,
    vMain
  }
};
</script>
