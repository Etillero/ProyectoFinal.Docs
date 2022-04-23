import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey            : 'AIzaSyDDZY5Zn_2SDc4QqSmEFA5APM35KSA7PJ8',
	authDomain        : 'proyectoreactestefaniati-65fd5.firebaseapp.com',
	projectId         : 'proyectoreactestefaniati-65fd5',
	storageBucket     : 'proyectoreactestefaniati-65fd5.appspot.com',
	messagingSenderId : '760219798725',
	appId             : '1:760219798725:web:1830ec3ac9160b1dcdb4ac',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
