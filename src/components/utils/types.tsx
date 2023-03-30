export interface IItem {
    calories: number,
    carbohydrates: number,
    fat: number,
    image: string,
    image_large: string,
    image_mobile: string,
    name: string,
    price: number,
    proteins: number,
    type: string,
    __v: number
    _id: string
}

export interface IData {
    data: IItem,

}

export interface IConstructorItem {
    data: IItem;
    handleClose: (id: string) => void;
    moveItemInsideContainer: (dragIndex: number, hoverIndex: number) => void;
    index: number;
}

export interface ICurrentList extends Array<IItem> {
}

export type QueryObject = {
    ingredients: string[];
};

export interface IModal {
    children?: JSX.Element,
    onClose?: () => void;
    confirm?:boolean,
    title?:string

}
export interface IModalOverlayProps {
    handler: () => void;
}
export interface IResetDetails {
    newPassword: string;
    token: string;
}
