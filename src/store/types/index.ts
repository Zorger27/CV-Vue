export interface IState {
    loginStore: User[];
    // loginStore: any;
    isAuthenticated: boolean;
    // showExtraContent: boolean;
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