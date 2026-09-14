import { inject, Service } from '@angular/core';
import {
  Auth,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
} from 'firebase/auth';
import { setPersistence, connectAuthEmulator } from 'firebase/auth';
import { environment } from '../environments/environment';
import { FirebaseAppInitService } from './firebase-app-init-service';
import { DataAccessService } from './data-access-service';
import { ErrorHelper } from './error-helper';

@Service()
export class AuthService {
  private appInit = inject(FirebaseAppInitService);
  private dataAccess = inject(DataAccessService); 

  private firebaseAuth: Auth;

  constructor() {
    this.firebaseAuth = getAuth(this.appInit.app);
    if(environment.development){
        console.info("Auth: using emulator");
        connectAuthEmulator(this.firebaseAuth, 'http://127.0.0.1:9099');
    }
    this.setSessionStoragePersistence();
  }

  private setSessionStoragePersistence(): void {
    setPersistence(this.firebaseAuth, browserSessionPersistence);
  }

  async getCurrentUser(): Promise<User | null> {
    await this.firebaseAuth.authStateReady();
    return this.firebaseAuth.currentUser;
  }

  async isAuthenticated(): Promise<boolean>{
    let user = await this.getCurrentUser();
    return !!user;
  }

  async getAuthToken(): Promise<string | undefined>{
    let u = await this.getCurrentUser();
    if (u){
      let t = u.getIdToken();
      return t;
    }
    return undefined;
  }

  async login(email: string, password: string): Promise<void> {
    const result = await signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    );
    if (result?.user){
      try{
        await this.dataAccess.createUserIfNotExists(result.user);
      } catch (e){
        alert("AuthService Error saving user data: " + ErrorHelper.getMessage(e));
      }
    }
  }

  async loginWithGoogle(){
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(
      this.firebaseAuth,
      provider,
    );

    try{
      await this.dataAccess.createUserIfNotExists(result.user);
    }
    catch(e){
      alert("Registration error: " + ErrorHelper.getMessage(e));
    }
  }

  async register(email: string, password: string, displayName: string){
    try{
      const result = await createUserWithEmailAndPassword(this.firebaseAuth, email, password);
      await updateProfile(result.user, {
        displayName: displayName,
      });
      await this.dataAccess.createUserIfNotExists(result.user);
    }
    catch(e){
      alert("Registration error: " + ErrorHelper.getMessage(e));
    }
  }

  async logout(): Promise<void> {
    await signOut(this.firebaseAuth);
    sessionStorage.clear();
  }
}
