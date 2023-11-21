<template>
  <button
    @click="$emit('click')"
    class="button"
    >{{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BtnGeneric',
    props: {
        title: { type: String, required: true },
    },
    emits: ['click']
})
</script>

<style scoped>
.button {
    padding: 4px 9px 4px 9px;
    border-radius: 7px;
    color: white;
    background-color: cornflowerblue;
}

</style>