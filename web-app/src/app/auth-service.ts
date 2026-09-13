import { inject, Service } from '@angular/core';
import {
  Auth,
  browserSessionPersistence,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { setPersistence, connectAuthEmulator } from 'firebase/auth';
import { environment } from '../environments/environment';
import { FirebaseAppInitService } from './firebase-app-init-service';

@Service()
export class AuthService {
  private appInit = inject(FirebaseAppInitService);

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

  async login(email: string, password: string): Promise<void> {
    const result = await signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    );
  }

  async logout(): Promise<void> {
    await signOut(this.firebaseAuth);
    sessionStorage.clear();
  }
}
