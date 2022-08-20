<template>
  <main class="v-main">
    <section class="about-us">
      <v-link
        title="Where?"
        :link="{ name: 'test' }"
        class="about-us__link about-us__link_up"
      >
      </v-link>
      <v-baner class="about-us__baner"></v-baner>
      <v-link
        title="What?"
        :link="{ name: 'test' }"
        class="about-us__link about-us__link_dn"
      >
      </v-link>
    </section>
    <section class="showreel">
      <div class="text-ellipse">
        <img
          src="@/assets/images/showreel.png"
          alt="showreel"
          width="115"
          height="113"
          class="text-ellipse__img"
        />
        <span class="text-ellipse__dot"></span>
      </div>
    </section>
  </main>
</template>

<script>
import vLink from "@/components/ui/v-link";
import vBaner from "@/components/ui/v-baner";
export default {
  name: "main",
  components: {
    vLink,
    vBaner
  }
};
</script>

<style lang="less">
.about-us {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 58px;

  &__link_up {
    transform: rotate(-90deg);
    margin-left: -44px;
  }

  &__link_dn {
    transform: rotate(90deg);
    margin-right: -36px;
  }
}

.showreel {
  text-align: right;
}

.text-ellipse {
  margin-right: 30%;
  display: inline-block;
  position: relative;

  :hover {
    animation-name: rotation;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &__dot {
    position: absolute;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #000000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@media screen and (max-width: 1024px) {
  .v-main {
    margin-top: 160px;
  }
}

@media screen and (max-width: 768px) {
   .v-main {
    margin-top: 100px;
  }

  .about-us {
    margin-bottom: 25px;
  }

  .text-ellipse {
    margin-right: 20%;
  }
}

@media screen and (max-width: 680px) {
  .about-us {
    &__link {
      display: none;
    }
  }

  .text-ellipse img{
    width: 88px;
  }
}

@media screen and (max-width: 440px) {
  .v-main {
    margin-top: 40px;
  }

  .about-us {
    margin-bottom: 25px;
  }
}
</style>
