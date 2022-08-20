<template>
  <div class="v-baner baner" ref="parent">
    <h1 class="baner__text" ref="baner">FULL-CYCLE EVENT AGENCY</h1>
  </div>
</template>

<script>
export default {
  name: "VBaner",
  created() {

    const cont = this;
    document.addEventListener("mouseover", (event) => {
      let x = event.x;
      let y = event.y;

      cont.moveBaner(x, y);
    });

    window.addEventListener("resize", () => {
      cont.bannerResizing();
    });

    window.onload = () => {
      cont.bannerResizing();
    }
  },
  data() {
    return {
      previousX: 0,
      previousY: 0,
    };
  },
  methods: {
    moveBaner(x, y) {
      if (this.previousX > x) {
        this.$refs.baner.style.left = "-10px";
      } else if (this.previousX < x) {
        this.$refs.baner.style.left = "10px";
      }

      if (this.previousY > y) {
        this.$refs.baner.style.top = "-10px";
      } else if (this.previousY < y) {
        this.$refs.baner.style.top = "10px";
      }

      this.previousX = x;
      this.previousY = y;
    },
    bannerResizing() {
      this.$refs.parent.style.height = this.$refs.baner.scrollHeight + "px";
    }
  },
};
</script>

<style lang="less">
.baner {
  position: relative;
  max-width: 1023px;
  flex: 1 1;
  height: 180px;
  box-sizing: border-box;

  &__text {
    position: absolute;
    font-size: 82px;
    line-height: 90px;
    width: 100%;
    text-align: center;
    margin: 0;
    transition: all 0.3s ease;
  }
}

@media screen and (max-width: 1024px) {
  .baner {
    max-width: 700px;
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
