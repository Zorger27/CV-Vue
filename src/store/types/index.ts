export interface IState {
    loginStore: User[];
    isAuthenticated: boolean;
    currentUser: User | null;
}

export interface User {
    email: string;
    password: string;
}

export interface WeatherData {
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        pressure: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
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