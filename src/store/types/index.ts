export interface IState {
    loginStore: User[];
    isAuthenticated: boolean;
    currentUser: User | null;
}

export interface User {
    email: string;
    password: string;
}

export interface Certificate {
    htmlStore: [];
    javascriptStore: [];
    angularStore: [];
    reactStore: [];
    frontStore: [];
    rubyStore: [];
    pythonStore: [];
    phpStore: [];
    javaStore: [];
    designerStore: [];
    databaseStore: [];
}