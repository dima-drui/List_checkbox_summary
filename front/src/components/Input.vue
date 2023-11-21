<template>
    <input 
        :type="type" 
        :min="minNum"
        size="3"
        v-model="inputValue"
        >
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { InputTypes } from '@/utils/types';

export default defineComponent({
    name: 'InputText',
    props: {
        type: { type: String as PropType<InputTypes>, required: true },
        value: { type: [String, Number], required: true },
        minNum: { type: Number, default: 0 }
    },
    emits: ['updateValue'],
    computed: {
        inputValue: {
            get() {
                return this.value;
            },
            set(value: string | number) {
                this.$emit("updateValue", value);
            },
        },
    },
})


</script>
