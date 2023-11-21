<template>
    <div
        v-for="(list, index) in data"
        >
        <Items
            :section="list"
            :index="index" 
            @toggleCheckbox="toggleCheck"
            @updateQty="updateItem"
            />
    </div>
</template>

<script lang="ts">
import { IData, IItem } from '@/utils/types';
import { PropType } from 'vue';
import { defineComponent } from 'vue';
import Items from '@/components/Items.vue'

export default defineComponent({
    name: 'List',
    components: { Items },
    data(){
        return { showList: true }
    },
    props: {
        data: { type: [] as PropType<IData[]>, required: true }
    },
    emits: ['toggleCheckbox', 'updateItemQty'],
    methods: {
        toggleCheck(index: number[]){
            this.$emit('toggleCheckbox', index)
        },
        updateItem(field: keyof IItem, index: number[], value: number){
            this.$emit('updateItemQty', field, index, value)
        }
    }
})


</script>

<style scoped>
.list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}
</style>