export interface Users {
    uid: string;
    displayName: string;
    lastName: string;
    photoURL? : string;
    role? : string;    


    fcmTokens?: { [token: string]: true };
}