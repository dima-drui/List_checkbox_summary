// Utilities
import { AppStore, IData, IItem } from '@/utils/types'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: (): AppStore => ({
    data: [
        { 
            name: 'List 1',   
            checked: false,
            items: [
                { name: 'Item 1', qty: 10, color: '#FF0000', checked: false },
                { name: 'Item 2', qty: 16, color: '#ffff00', checked: false },
                { name: 'Item 3', qty: 40, color: '#39a78e', checked: false },
                { name: 'Item 4', qty: 1, color: '#0014a8', checked: false }
            ]
        },
        { 
            name: 'List 2',   
            checked: false,
            items: [
                { name: 'Item 1', qty: 1, color: '#000000', checked: false },
                { name: 'Item 2', qty: 1, color: '#000000', checked: false },
                { name: 'Item 3', qty: 1, color: '#000000', checked: false },
                { name: 'Item 4', qty: 1, color: '#000000', checked: false }
            ]
        },
        { 
            name: 'List 3',   
            checked: false,
            items: [
                { name: 'Item 1', qty: 1, color: '#000000', checked: false },
                { name: 'Item 2', qty: 1, color: '#000000', checked: false },
                { name: 'Item 3', qty: 1, color: '#000000', checked: false },
                { name: 'Item 4', qty: 1, color: '#000000', checked: false }
            ]
        },
        { 
            name: 'List 4',   
            checked: false,
            items: [
                { name: 'Item 1', qty: 1, color: '#000000', checked: false },
                { name: 'Item 2', qty: 1, color: '#000000', checked: false },
                { name: 'Item 3', qty: 1, color: '#000000', checked: false },
                { name: 'Item 4', qty: 1, color: '#000000', checked: false }
            ]
        },
        { 
            name: 'List 5',   
            checked: false,
            items: [
                { name: 'Item 1', qty: 1, color: '#000000', checked: false },
                { name: 'Item 2', qty: 1, color: '#000000', checked: false },
                { name: 'Item 3', qty: 1, color: '#000000', checked: false },
                { name: 'Item 4', qty: 1, color: '#000000', checked: false }
            ]
        },
    ]
  }),
  getters: {
    getData: (state): IData[] => state.data
  },
  actions: {
    toggleCheck(index: number[]){
        let item: any
        if (index.length == 1){
            item = this.data[index[0]]
            item.checked = !item.checked
            item.items.forEach( (i: any) => i.checked = item.checked )
        } else {
            item = this.data[index[0]].items[index[1]]
            item.checked = !item.checked
            if(!this.data[index[0]].items.find( i => i.checked == false)) {
                this.data[index[0]].checked = true
            } else {
                this.data[index[0]].checked = false
            }
        }
    },
    updateQty<K extends keyof IItem>(field: K , index: number[], value: IItem[K] ){
        const item = this.data[index[0]].items[index[1]]
        item[field] = value
    }
  }

})
