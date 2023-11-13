<script setup lang="ts">
import { getRandomId } from '../../utils/random-utils'
import { ref } from 'vue'

withDefaults(defineProps<{
    content: string
    onHover?: boolean
    onClick?: boolean
    id?: string,
  }>(), {
  content: '',
  id: () => getRandomId('tooltip'),
})

const showToolTip = ref(false)

function toggleToolTip () {
  showToolTip.value = !showToolTip.value
}
</script>

<template>
  <div
    v-if="onHover"
    @mouseover="toggleToolTip()"
    @mouseout="toggleToolTip()"
  >
    <a
      :id="'link-' + id"
      class="fr-link"
      :aria-describedby="id"
      href="#"
    >
      <slot />
    </a>
    <span
      :id="id"
      class="fr-tooltip  fr-placement  fr-placement--top  fr-placement--center  fr-tooltype-style"
      :class="{
        'fr-tooltip--shown': showToolTip
      }"
      role="tooltip"
      aria-hidden="true"
    >
      {{ content }}
    </span>
  </div>

  <div
    v-if="onClick"
    @click="toggleToolTip()"
  >
    <button
      :id="'button-' + id"
      class="fr-btn--tooltip fr-btn"
      :aria-describedby="id"
    />
    <span
      :id="id"
      class="fr-tooltip  fr-placement  fr-placement--top  fr-placement--center  fr-tooltype-style"
      :class="{
        'fr-tooltip--shown': showToolTip
      }"
      role="tooltip"
      aria-hidden="true"
    >
      {{ content }}
    </span>
  </div>
</template>
<style>
/*
ne fonctionne pas
.fr-tooltype-style {
  transform: translate(600px, 151px); --arrow-x: -8.00px;
} */
</style>
