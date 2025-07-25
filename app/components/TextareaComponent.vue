<script setup>


</script>

<template>
    <div class="flex flex-col items-center justify-center my-8">
        <div class="bg-white p-8 w-2/3 flex flex-col items-center">
            <div class="border-b-1 border-slate-200 w-full">
                <div class="flex justify-between items-start w-full">
                    <p class="text-slate-900 text-4xl font-semibold">Textarea</p>
                    <p class="bg-slate-900 py-2 px-4 rounded-md text-white text-center cursor-pointer underline">View docs</p>
                </div>
                <div class="flex justify-start items-center w-full ">
                    <p class="text-slate-600 py-4 mb-10">Displays a button or a component that looks like a button.</p>
                </div>
            </div>
            <div class="w-full mt-8">
                <textarea name="#" placeholder="Type your message here" rows="3" id="#" class="border rounded-sm border-slate-300 p-2 w-full">Hello</textarea>
                <p class="text-slate-500">Your message will be copied to the support team.</p>
            </div>
        </div>
    </div>
</template>
