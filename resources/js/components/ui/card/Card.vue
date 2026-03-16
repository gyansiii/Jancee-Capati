<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'bg-card/96 text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.35)] backdrop-blur-sm transition-[border-color,box-shadow,background-color] duration-200',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
