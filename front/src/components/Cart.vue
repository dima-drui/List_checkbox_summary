<template>
    <div class="header">
        <p style="font-size: large;"> 
            {{ list.name }}
        </p>
        <BtnGeneric 
            :title="isMix ? 'Сортировать' : 'Перемешать'"
            @click="isMix=!isMix"
            > 
        </BtnGeneric>
    </div>

    <div v-if="list.items.find( i => i.checked == true)" >
        <div
            v-if="!isMix"
            v-for="(item, index) in list.items"
            :key="index"
            class="items"
            >
            <div
                v-if="item.checked"
                v-for="i in parseInt(item.qty.toString())"
                :key="i"
                :style="{
                    width: '20px', 
                    height: '20px', 
                    margin: '2px 2px 2px 2px',
                    backgroundColor: item.color
                }"
                ></div>
        </div>

        <div
            v-else 
            class="items"
            >
            <div
                v-for="(color, index) in mixItems(list.items)" 
                :key="index"
                :style="{
                    width: '20px', 
                    height: '20px', 
                    margin: '2px 2px 2px 2px',
                    backgroundColor: color
                }"
                ></div>
        </div>

    </div>
</template>

<script lang="ts">
import { IData, IItem } from '@/utils/types';
import { PropType } from 'vue';
import { defineComponent } from 'vue';
import BtnGeneric from '@/components/Buttons/BtnGeneric.vue'

export default defineComponent({
    name: 'Cart',
    components: { BtnGeneric },
    data(){
        return { isMix: false }
    },
    props: {
        list: { type: [] as PropType<IData>, required: true }
    },
    methods: {
        mixItems(items: IItem[]): string[] {
            let mix = []
            for(const itColor of items){
                if (itColor.checked) {
                    for(let i=0; i<itColor.qty; i++){
                        mix.push(itColor.color)
                    }
                }
            }
            for (let i = mix.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                const temp: string = mix[i]
                mix[i] = mix[j]
                mix[j] = temp
            }
            return mix
        }
    }
})


</script>

<style scoped>
.header {
    display: flex; 
    flex-direction: row; 
    flex-wrap: wrap; 
    justify-content: space-between; 
    align-items: center;
    margin-bottom: 5px;
}
.list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}
.items {
    display:flex; 
    flex-direction: row; 
    flex-wrap: wrap; 
    margin: 0px 0px 10px 0px;
}
</style>