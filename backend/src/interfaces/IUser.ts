export interface IUser{
    fullName: string,
    email: string,
    password: string,
}

export interface IUserMethods{
    createAccessToken(id: string): string;
    createRefreshToken(id: string): string;
}