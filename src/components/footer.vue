<template>
  <footer class="v-footer">
    <div class="v-footer__link">
      <v-link title="Who?" :link="{ name: 'test' }"> </v-link>
    </div>
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

@media screen and (max-width: 680px) {
  .v-footer {
    &__link {
      display: none;
    }
  }
}
</style>
