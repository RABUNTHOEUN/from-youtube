<template>
  <div class="relative bg-gray-100 rounded-lg p-4 mt-6 w-2/3">
    <!-- Copy Button -->
    <button
      @click="copyCode"
      class="absolute top-2 right-2 text-xs bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
    >
      {{ copied ? "Copied!" : "Copy" }}
    </button>

    <!-- Code Block -->
    <pre class="overflow-x-auto text-sm">
      <code :class="`language-${language}`">{{ code }}</code>
    </pre>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: "vue"
  }
})

const copied = ref(false)

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch (err) {
    console.error("Failed to copy:", err)
  }
}
</script>
