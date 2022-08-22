<template>
  <header class="v-header">
    <v-language-selection
      @selectedLang="selected($event)"
    ></v-language-selection>
    <v-logo></v-logo>
    <v-burger-menu></v-burger-menu>
  </header>
</template>

<script>
import vLanguageSelection from "@/components/ui/v-language-selectior";
import vBurgerMenu from "@/components/ui/v-burger-menu";
import vLogo from "@/components/ui/v-logo";
export default {
  name: "Header",
  components: {
    vLanguageSelection,
    vBurgerMenu,
    vLogo
  },
  methods: {
    selected(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="less">
.v-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 28px;
  position: relative;
}

@media screen and (max-width: 680px) {
  .menu {
    display: block;
  }
}
</style>
