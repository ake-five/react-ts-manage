export interface IUser {
    id: number;
    name: string;
}
interface IState {
    user: IUser;
}
const initUserState: IState = {
    user: {
        id: 0,
        name: "",
    },
};
export enum IUserActionType {
    INIT,
    CHANGE,
}
const user = (
    state: IState = initUserState,
    action: { type: IUserActionType; payload: any }
) => {
    switch (action.type) {
        case IUserActionType.INIT:
            return state;
        case IUserActionType.CHANGE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
export default user;
