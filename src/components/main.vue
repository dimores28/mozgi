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
.v-main {
  border: 1px solid red;
  margin-bottom: 300px;
}

.about-us {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__link_up {
    transform: rotate(-90deg);
    margin-left: -44px;
  }

  &__link_dn {
    transform: rotate(90deg);
    margin-right: -36px;
  }
}

@media screen and (max-width: 680px) {
  .about-us {
    &__link {
      display: none;
    }
  }
}
</style>
