import { Service } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';

@Service()
export class FirebaseAppInitService {
    app: FirebaseApp;

    constructor(){
        this.app = initializeApp(environment.firebase);
    }
}
