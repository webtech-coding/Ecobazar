import { IUser } from '@/utils/types';
import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const appWriteConfig = {
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    endPoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!,
    userCollectionId: process.env.EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID!

} 

const client = new Client().setEndpoint(appWriteConfig.endPoint).setProject(appWriteConfig.projectId);

const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);

/**
 * function to create a user account
 * @param email 
 * @param password 
 * @param name 
 * @returns promise
 */
export const createUser = async (email:string, password:string, name:string)=>{
    try {
        const userAccount = await account.create(ID.unique(), email, password, name)

        if(!userAccount)throw Error;
        
        await saveUserData(email, name, userAccount.$id)
        await signInUser(email, password);
        
        return userAccount

    } catch (error:any) {
        const message = error.message
        throw new Error(message)
    }
}

/**
 * once the user account is created, save the user in the database user collection
 * @param email 
 * @param name 
 * @param accountId 
 */
const saveUserData = async (email:string, name:string, accountId:string)=>{
    try {
        const avatar = avatars.getInitialsURL(name);
        const result = await databases.createDocument(appWriteConfig.databaseId, appWriteConfig.userCollectionId, ID.unique(),{email, name, accountId, avatar})
        if(!result)throw Error

    } catch (error:any) {
        throw new Error(error.message)
    }
}

/**
 * A request to sign in user
 * @param email 
 * @param password 
 * @returns 
 */
export const signInUser = async (email:string, password:string)=>{
    try {
        const userSession = await account.createEmailPasswordSession(email, password);
        if(!userSession)throw Error;
        return userSession
    } catch (error:any) {
        throw new Error(error.message)
    }
}

export const getUserSession = async ():Promise<IUser>=>{
    try {
        const session = await account.get();
        if(!session)throw Error
        const userData = await databases.listDocuments(appWriteConfig.databaseId, appWriteConfig.userCollectionId, [Query.equal('email', [session.email])])
        const userAvatar =userData.documents[0].avatar
        return {...session, avatar:userAvatar}

    } catch (error:any) {
        throw new Error(error.message)
    }  
}


export const deleteUserSession =async():Promise<{}>=>{
    try {
        const sessionEnd = await account.deleteSession('current')
        return sessionEnd
    } catch (error:any) {
        throw new Error(error.message)
    }
}

            