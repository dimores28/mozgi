<template>
  <header class="v-header">
    <v-language-selection
      @selectedLang="selected($event)"
    ></v-language-selection>
  </header>
</template>

<script>
import vLanguageSelection from "@/components/ui/v-language-selectior";
export default {
  name: "header",
  components: {
    vLanguageSelection
  },
  methods: {
    selected(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="less"></style>
