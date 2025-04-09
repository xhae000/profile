<template>
<div class="w-[49%] mb-[2%]" style="cursor:pointer">
    <div class="flex flex-col p-1 border border-[#ececec] rounded-[8.5px] bg-white shadow-2xl">
        <div class="mx-[1%] my-[1%] w-[98%]">
            <div >
                <img class="w-full rounded-[15px] " :src="image" />
            </div>
        </div>
        <div class="text-2xl font-semibold p-3 pb-0 font-gray-700">
            {{ title }}
        </div>
        <div class="font-light text-right px-3 py-2">
            {{ date }}
        </div>

    </div>
</div>

</template>

<script setup>
defineProps({
  title: String,
  image: String,
  category: String,
  date: String,

})
</script>