<template>
    <div>
        <div class="section_head">
            <BtnArrow 
                :is-open="showList"
                @click="showList = !showList"
                />
            <Checkbox 
                :value="section.checked"
                :index="'l'+section.name"
                :partChecked="partChecked"
                @checkClick="toggleCheck([index])"
                />
            <div>{{ section.name }}</div>
        </div>

        <div v-if="showList" >
            <div
                v-for="(item, chilIndex) in section.items"
                class="item_row"
                >
                <div class="item_subrow">
                    <Checkbox 
                        :value="item.checked"
                        :index="'l'+index+chilIndex"
                        @checkClick="toggleCheck([index, chilIndex])"
                        />
                    <div>{{ item.name }}</div>
                </div>
                <div class="item_subrow">
                    <Input 
                        :type="inputsValueType.text"
                        :value="item.qty"
                        @updateValue="(qty: number) => updateItem('qty', [index, chilIndex], qty)"
                        />
                    <Input 
                        :type="inputsValueType.color"
                        :value="item.color"
                        @updateValue="(color: number) => updateItem('color', [index, chilIndex], color)"
                        />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { defineComponent } from 'vue';
import { IData, IItem, InputTypes } from '@/utils/types';
import BtnArrow from '@/components/Buttons/BtnArrow.vue'
import Checkbox from '@/components/Checkbox.vue'
import Input from '@/components/Input.vue'

export default defineComponent({
    name: 'Items',
    components: { BtnArrow, Checkbox, Input },
    data(){
        return { 
            showList: true, 
            inputsValueType: InputTypes 
        }
    },
    props: {
        section: { type: [] as PropType<IData>, required: true },
        index: { type: Number, required: true }
    },
    emits: ['toggleCheckbox', 'updateQty'],
    computed: {
        partChecked(){
            if (this.section.items.find(i => i.checked == true) 
                && this.section.items.find(i => i.checked == false)
                ) {
                    return true
            } else {
                return false
            }
        }
    },
    methods: {
        toggleCheck(index: number[]){
            this.$emit('toggleCheckbox', index)
        },
        updateItem(field: keyof IItem, index: number[], value: number) {
            this.$emit('updateQty', field, index, value)
        }
    }
})


</script>

<style scoped>
.section_head {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}
.item_row {
    display: flex;
    flex-direction: row;    
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-left: 5rem;
}
.item_subrow {
    display: flex;
    gap: 1rem;
    flex-direction: row;    
    flex-wrap: wrap;
    align-items: center;
}
input [type=text]{
    width: 20px;
}
</style>