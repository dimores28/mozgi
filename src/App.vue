<template>
  <img
    src="@/assets/images/topdown_img.png"
    alt="bg image"
    class="bg-animate-img bg-animate-img__dn"
  />
  <img
    src="@/assets/images/upwards_img.png"
    alt="bg image"
    class="bg-animate-img bg-animate-img__up"
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

<style lang="less"></style>
