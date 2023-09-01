<template>
  <svg
    :viewBox="viewBox"
    :width="width"
    :height="height"
    :fill="color"
    :stroke="color"
    :ref="svg"
  />
</template>

<script setup lang="ts">
import { parse } from 'postsvg'
import render from 'posthtml-render'
import { EIconColor, EIconSize, IDefaultIconProps } from '@/components/icon/types'
import { computed, ref, watch } from 'vue'

interface Props extends IDefaultIconProps {
  name: string;
}

const svg = ref()

const props = withDefaults(defineProps<Props>(), {
  color: EIconColor.primary,
  size: EIconSize.md,
})

// Кэш загруженных иконок
const cache = new Map()

let svgString = ''

const filepath = computed(async () => await import(`../../../../assets/svg/${props.name}.svg`))

const parsedSVG = computed(() => svgString ? parse(svgString) : null)

// const viewBox = computed(() => parsedSVG ? parsedSVG.root.attrs.viewBox : '0 0 24 24')

// Обновление SVG
const refreshSvg = function () {
  Promise.resolve(parsedSVG)
    // Обновляем стилизацию
    .then(svgTree => {
      // svgTree.each('path', node => (node.attrs.fill = fill))
      return svgTree
    })
    // Оставляем только внутренности тега <svg>
    .then(svgTree => render(svgTree.root.content))
    // Заменяем содержимое тега <svg> новым
    .then(svgHtml => ($el.innerHTML = svgHtml))
    // .then(() => generateReadyEvent && $emit('ready'))
    .catch(error => {
      console.error('Ошибка при обновлении SVG', error)
      // $emit('error', error)
    })
}

const loadFile = function () {
  getSvgIconText()
    .then(responseText => (svgString = responseText))
    .catch(error => console.error('Ошибка загрузки SVG-файла', error))
}

const getSvgIconText = async function () {
  const url = filepath

  if (!cache.has(url)) {
    try {
      cache.set(url, fetch(url).then(r => r.text()))
    } catch (e) {
      cache.delete(url)
    }
  }

  return cache.has(url)
    ? await cache.get(url)
    : Promise.reject(new Error('Нет SVG-файла в локальном кэше'))
}

watch(filepath, () => loadFile())
watch([svgString, props.color, props.size], () => refreshSvg())
</script>

<style scoped lang="scss">
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
  transition: fill 0.3s, stroke 0.3s;
}
</style>