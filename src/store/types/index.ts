export interface IState {
    loginStore: User[];
    // loginStore: any;
    isAuthenticated: boolean;
    currentUser: User | null;
}

export interface User {
    email: string;
    password: string;
}