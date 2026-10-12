import type { UserCredential } from "firebase/auth";
import type ICreateUser from "./createUser";

export interface IauthContextType{
    createUserWithMail: ({email, password}: ICreateUser) => Promise<UserCredential>; 
    loginInWIthMailAndPassword: ({email, password}: ICreateUser) => Promise<UserCredential>;
    loginInWithToken: (token: string) => Promise<UserCredential>;  
    logoutUser: ()=> Promise<boolean>;  
}

