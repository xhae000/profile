<template>
<div class="w-[49%] mobile:w-full mb-[2%]" style="cursor:pointer">
    <div class="flex flex-col p-1 mobile:p-3 border border-[#ececec] rounded-[8.5px] bg-white shadow-2xl">
        <div class="mx-[1%] my-[1%] w-[98%] mobile:m-0 mobile:w-full">
            <div >
                <img class="w-full rounded-[15px] mobile:rounded-b-[0px] mobile:rounded-t-[8.5px] " :src="image" />
            </div>
        </div>
        <div class="text-2xl font-semibold p-3 pb-0 font-gray-700 mobile:text-[2.0rem] mobile:leading-10">
            {{ title }}
        </div>
        <div class="font-light text-right px-3 py-2 mobile:text-[1.5rem]">
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