<script lang="ts" setup>
import { reactive, ref, useAttrs, watch } from "vue"

const props = withDefaults(
        defineProps<{
            modelValue: string
            placeholder: string
            type?: string
        }>(),
        {
            modelValue: "",
            placeholder: "",
            type: "text",
        },
    ),
    emits = defineEmits<{
        (e: "update:modelValue", modelValue: string): void
    }>(),
    data = reactive({
        defaultValue: "",
        noFormatted: "",
    }),
    inputNode = ref<HTMLInputElement>(),
    attrs = useAttrs(),
    methods = {
        inputEvent: async (event: Event) => {
            if (props.type === "tel") {
                const el = event.target as HTMLInputElement
                let p = el.value.replace(/\D/g, "")
                el.value = p
                const m = p.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
                if (m === null) {
                    return
                }
                const [country, group1, group2, group3, group4] = m.slice(1)
                const formattedPhone = [country, group1, group2, group3, group4].filter((group) => group).join(" ")

                emits("update:modelValue", formattedPhone)
                data.defaultValue = formattedPhone
            } else {
                data.defaultValue = (event.target as HTMLInputElement).value
                emits("update:modelValue", (event.target as HTMLInputElement).value)
            }
        },
    }

watch(
    () => props.modelValue,
    (val: string) => {
        if (val !== data.defaultValue) {
            emits("update:modelValue", data.defaultValue)
            data.defaultValue = val
        }
    },
)
</script>

<template lang="pug">
input(
    ref="inputNode"
    :maxlength="type === 'tel' ? 15 : 255"
    :placeholder="placeholder"
    :type="type"
    :value="data.defaultValue"
    v-bind="attrs"
    @input="methods.inputEvent"
    )
</template>

<style lang="scss" scoped>
input {
    border: 0;
    border-bottom: 1px solid map-get($base, contrast);
    outline: 0;
    color: map-get($base, contrast);
    padding: 2px 8px;
    background: transparent;
    transition: border-color 0.3s ease-in-out;
    font-size: 18px;
    line-height: 26px;
    display: inline-flex;
    height: 28px;
    width: 353px;
    box-sizing: border-box;
    font-family: inherit;

    &::placeholder {
        color: map-get($neutral, 100);
        transition: 0.3s ease-in-out;
    }

    &:placeholder-shown {
        border-bottom-color: map-get($neutral, 100);
        color: map-get($neutral, 100);
    }

    &:focus {
        border-bottom-color: map-get($primary, 100);

        &::placeholder {
            color: transparent;
        }
    }

    @media screen and (max-width: 354px) {
        max-width: 353px;
        width: 100%;
    }
}
</style>
