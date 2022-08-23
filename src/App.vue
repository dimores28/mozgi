<template>
  <img
    src="@/assets/images/background_text.png"
    alt="bg img"
    class="animate-bg-img"
  />
  <div class="container posr">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="less">
#app {
  overflow: hidden;
}

.animate-bg-img {
  border: 1px solid red;
  position: fixed;
  top: -862px;
  left: 1440px;
  animation: examples 15s infinite;
}

@keyframes example {
  0% {
    margin: 0vh;
  }
  100% {
    margin: 100vh;
  }
}

@keyframes examples {
  100% {
    left: -1440px;
    top: 100vh;
  }
}

</style>
