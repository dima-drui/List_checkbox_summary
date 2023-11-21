<template>
  <button
    @click="$emit('click')"
    class="button"
    >
    <div :class="['arrow', isOpen ? 'arrow_down' : 'arrow_right']"></div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Button',
    props: {
        isOpen: { type: Boolean, required: true },
        icon: String
    },
    emits: ['click']
})
</script>

<style scoped>
.button {
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    height: 50px;
    min-width: 30px;
    color: white;
    border-radius: 7px;
}

.arrow {
    width: 13px;
    height: 13px;
    border-bottom: 2px solid darkblue;
    border-right: 2px solid darkblue;
    border-radius: 2px;
}
.arrow_right {

    transform: rotate(-45deg) translate(-8px);
}
.arrow_down {
    transform: rotate(45deg) ;
}
</style>