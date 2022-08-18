<template>
  <div class="v-homepage page">
    <v-header></v-header>
    <router-link to="/test">Go to</router-link>
  </div>
</template>

<script>
import vHeader from "@/components/header";
export default {
  name: "home",
  components: {
    vHeader
  }
};
</script>
