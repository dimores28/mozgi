<template>
  <div class="v-baner baner">
    <h1 class="baner__text">FULL-CYCLE EVENT AGENCY</h1>
  </div>
</template>

<script>
export default {
  name: "v-baner"
};
</script>

<style lang="less">
.baner {
  //   margin: 0 auto;

  &__text {
    font-size: 82px;
    line-height: 90px;
    text-align: center;
    max-width: 1023px;
  }
}

@media screen and (max-width: 1024px) {
  .baner {
    &__text {
      font-size: 52px;
      line-height: 64px;
    }
  }
}

@media screen and (max-width: 440px) {
  .baner {
    &__text {
      font-size: 24px;
      line-height: 38px;
    }
  }
}
</style>
