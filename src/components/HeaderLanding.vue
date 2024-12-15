<template>
  <div
    class="fixed top-0 left-0 w-full flex items-center justify-between mx-4 pt-2 px-8 z-10 bg-white"
  >
    <img :src="gdgLogo" alt="GDGLogo" class="w-40 hidden md:block" />
    <img :src="gdgLogo2" alt="gdg" class="sm:block md:hidden w-12" />
    <div class="flex items-center justify-center gap-4">
      <RegBut />
      <LogBut />
    </div>
  </div>
</template>

<script setup>
import gdgLogo from "../assets/GDGLogo.svg";
import gdgLogo2 from "../assets/GDG.svg";
import LogBut from "./LogBut.vue";
import RegBut from "./RegBut.vue";
</script>