<template>
  <h1>Icons</h1>
  <Icon name="details"/>
  <Icon name="payments"/>
  <Icon name="filter"/>
  <Icon name="search"/>

  <br><br>

  <IconSvgComponent name="IconFile"/>
  <IconSvgComponent name="IconSearch"/>
  <IconSvgComponent name="IconDownload"/>

  <br><br>

  <IconFetch name="search"/>

</template>

<script setup lang="ts">
import Icon from '@/components/icon/Icon.vue'
import IconSvgComponent from '@/components/icon/IconSvgComponent.vue'
import IconFetch from '@/components/icon/IconFetch.vue'
</script>


<style lang="scss">
@import "@/assets/style/index";
</style>
