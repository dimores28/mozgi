<template>
  <div class="v-burger-menu">
    <nav class="menu">
      <button class="menu__btn" :class="active" @click="showMenu"></button>
      <transition name="slide-fade">
        <div v-if="active" class="menu__items">
          <v-link
            title="Who?"
            :link="{ name: 'test' }"
            class="menu__item"
          ></v-link>
          <v-link
            title="Where?"
            :link="{ name: 'test' }"
            class="menu__item"
          ></v-link>
          <v-link
            title="What?"
            :link="{ name: 'test' }"
            class="menu__item"
          ></v-link>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import vLink from "@/components/ui/v-link";
export default {
  name: "v-burger-menu",
  components: {
    vLink
  },
  data() {
    return {
      active: ""
    };
  },
  methods: {
    showMenu() {
      if (this.active) {
        this.active = "";
      } else {
        this.active = "active";
      }
    }
  }
};
</script>

<style lang="less">
.menu {
  text-align: right;
  position: relative;
  display: none;

  &__btn {
    border: none;
    width: 22px;
    height: 1px;
    background: #000000;
    position: relative;
    margin-bottom: 30px;
    cursor: pointer;
    transform-origin: center;
    transition: all 0.4s ease;
  }

  &__btn::after {
    content: "";
    position: absolute;
    width: 22px;
    height: 2px;
    background: #000000;
    left: 0;
    top: 8px;
  }

  &__items {
    text-align: left;
    position: absolute;
    right: 0;
  }

  &__item {
    margin-bottom: 20px;
  }
}

.active {
  transform: rotate(90deg);
}

.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
