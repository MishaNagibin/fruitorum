<script lang="ts" setup>
withDefaults(
    defineProps<{
        type?: "submit" | "reset" | "button"
        mode?: "default" | "primary"
    }>(),
    {
        mode: "default",
        type: "button",
    },
)
</script>

<template lang="pug">
button(:class="['button', '--' + mode]" :type="type")
    slot
</template>

<style lang="scss" scoped>
button {
    display: inline-block;
    padding: 10px 50px;
    gap: 10px;
    color: map-get($base, contrast);
    border-radius: 2px;
    transition: 0.3s ease-in-out;
    font-size: 18px;
    line-height: 26px;
    border: 1px solid transparent;
    text-decoration: none;
    text-align: center;
    width: fit-content;
    font-family: inherit;
    box-sizing: border-box;

    &.--default {
        background-color: map-get($base, main);
        height: 46px;
    }

    &.--primary {
        height: 46px;
        background-color: map-get($primary, 100);
    }

    &:hover {
        cursor: pointer;

        &.--default {
            background-color: map-get($primary, 100);
        }

        &.--primary {
            background-color: transparent;
            border-color: map-get($primary, 100);
        }
    }
}
</style>
