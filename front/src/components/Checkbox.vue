<template>
    <div style="display: flex;  align-items: center;">
        <input 
            type="checkbox" 
            :id="index" 
            v-model="value"
            @click="$emit('checkClick', index)" 
            />
        <div v-if="partChecked" class="dot"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Checkbox',
    props: {
        value: { type: Boolean, required: true },
        index: { type: String, required: true },
        partChecked: { type: Boolean, default: false },
    },
    emits: ['checkClick'],
})

</script>

<style scoped>
input[type=checkbox] {
    position:relative;
    width: 20px;
    height: 20px;
}
.dot {
    transform: translate(6px);
    position:absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: black;
}

</style>