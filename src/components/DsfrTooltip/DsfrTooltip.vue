<script setup lang="ts">
  import '@gouvfr/dsfr/dist/component/tooltip/tooltip.module.js'
  import { getRandomId } from '../../utils/random-utils'

  withDefaults(defineProps<{
    content: string
    onHover?: boolean
    onClick?: boolean
    id?: string,
  }>(), {
    content: '',
    id: () => getRandomId('tooltip'),
  })
</script>

<template>
  <div v-if="onHover">
    <a
      class="fr-link"
      :aria-describedby="id"
      href="#"
    >
      <slot />
    </a>
    <span
      class="fr-tooltip fr-placement"
      :id="id"
      role="tooltip"
      aria-hidden="true"
    >
    {{ content }}
    </span>
  </div>

  <div v-if="onClick">
    <button
      class="fr-btn--tooltip fr-btn"
      :aria-describedby="id"
    />
    <span
      class="fr-tooltip fr-placement"
      :id="id"
      role="tooltip"
      aria-hidden="true"
    >
    {{ content }}
    </span>
  </div>
</template>
