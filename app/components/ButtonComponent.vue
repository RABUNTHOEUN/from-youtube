<script setup>
import CodeBlockComponent from "~/components/CodeBlockComponent.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <!-- Your Example Card -->
    <div class="bg-white p-8 w-2/3 flex flex-col items-center">
      <div class="border-b border-slate-200 w-full">
        <div class="flex justify-between items-start w-full">
          <p class="text-slate-900 text-4xl font-semibold">Button</p>
          <p
            class="bg-slate-900 py-2 px-4 rounded-md text-white text-center cursor-pointer underline"
          >
            View docs
          </p>
        </div>
        <div class="flex justify-start items-center w-full">
          <p class="text-slate-600 py-4 mb-10">
            Displays a button or a component that looks like a button.
          </p>
        </div>
      </div>
      <p
        class="bg-slate-900 py-2 px-4 rounded-md text-white w-[90px] text-center cursor-pointer mb-4 mt-16"
      >
        Button
      </p>
    </div>

    <!-- ✅ Code Block (only shows code) -->
    <CodeBlockComponent
      language="vue"
      :code="`
    <p
        class='bg-slate-900 py-2 px-4 rounded-md text-white w-[90px] text-center cursor-pointer mb-4 mt-16'
    >
    Button
    </p>
`"
    />
  </div>
</template>
