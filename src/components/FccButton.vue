<script setup lang="ts">

defineProps<{ text: string }>()

</script>

<template>
  <button class="btn-cta">{{ text }}</button>
</template>

<style scoped>
.btn-cta {
  background-color: #5f5fdc;
  border-width: 3px;
  border-color: #d3266f;
  border-radius: 15px;
  border-style: solid;
  color: #59de45;
  display: block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 18px;
  line-height: 1.42857143;
}

.btn-cta:active:hover,
.btn-cta:focus,
.btn-cta:hover {
  background-color: #050572;
  border-width: 3px;
  border-color: #500303;
  background-image: none;
  color: #1076dc;
}
</style>
