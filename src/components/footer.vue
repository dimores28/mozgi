<template>
  <footer class="v-footer">
    <v-link title="Who?" :link="{ name: 'test' }"> </v-link>
  </footer>
</template>

<script>
import vLink from "@/components/ui/v-link";
export default {
  name: "v-footer",
  components: {
    vLink
  }
};
</script>

<style lang="less">
.v-footer {
  text-align: center;
  padding-bottom: 20px;
}
</style>
