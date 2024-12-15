<template>
    <button
        type="submit"
        :class="`px-6 py-2 ${primaryColor} text-white rounded-md shadow hover:${hoverColor} focus:outline-none`"
        >
        {{ action }}
    </button>
</template>

<script setup>
defineProps(['handleSubmit','primaryColor','hoverColor','action'])
</script>