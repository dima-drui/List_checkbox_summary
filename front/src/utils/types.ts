export interface AppStore {
    data: IData[]
}

export interface IData {
    name: string,
    checked: boolean
    items: IItem[]
}

export interface IItem {
    name: string,
    qty: number,
    color: string,
    checked: boolean
}

export enum InputTypes {
    text = 'text',
    color = 'color'
}
