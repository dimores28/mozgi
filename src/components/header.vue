<template>
  <header class="v-header">
    <v-language-selection
      @selectedLang="selected($event)"
    ></v-language-selection>
    <v-burger-menu></v-burger-menu>
  </header>
</template>

<script>
import vLanguageSelection from "@/components/ui/v-language-selectior";
import vBurgerMenu from "@/components/ui/v-burger-menu";
export default {
  name: "header",
  components: {
    vLanguageSelection,
    vBurgerMenu
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
  border: 1px solid green;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 284px;
}

@media screen and (max-width: 680px) {
  .menu {
    display: block;
  }
}
</style>
