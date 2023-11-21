<template>
  <v-app>
    <v-main>
        <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-around; margin-top: 20px;">
            <div class="container">
                <List
                    :data="data"
                    @toggle-checkbox="toggleCheck"
                    @update-item-qty="updateItemField"
                    />
            </div>
            <div class="container">
                <Board 
                    :data="data"
                    />
            </div>
        </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IItem } from '@/utils/types';
import List from '@/components/List.vue'
import Board from '@/components/Board.vue'
import { useAppStore } from './store/app';

export default defineComponent({
    name: 'App',
    components: { List, Board },
    data(){
        const store = useAppStore()

        return { store }
    },
    computed: {
        data(){
            return this.store.getData
        }
    },
    methods: {
        toggleCheck(index: number[]) {
            this.store.toggleCheck(index)
        },
        updateItemField(field: keyof IItem, index: number[], value: number){
            this.store.updateQty(field, index, value)
        }
    }

})

</script>

<style scoped>
.container {
    display: flex; 
    flex-direction: column; 
    width: 44%;
    padding: 30px;
    border: 1px solid black;
}

</style>