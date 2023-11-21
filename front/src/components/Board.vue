<template>
    <div>
        <div
            v-for="(list, index) in data"
            :key="index"
            style="border: 1px solid black; margin-bottom: 10px; padding: 5px;"
            >
            <Cart :list="list"/>
        </div>
    </div>
</template>

<script lang="ts">
import { IData, IItem } from '@/utils/types';
import { PropType } from 'vue';
import { defineComponent } from 'vue';
import Cart from '@/components/Cart.vue'

export default defineComponent({
    name: 'Board',
    components: { Cart },
    data(){
        return { isMix: false }
    },
    props: {
        data: { type: [] as PropType<IData[]>, required: true }
    }
})

</script>

