import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAflBwrQm9YvPla3m9rbBEXZa70_H7orYE',
  authDomain: 'wave-blogging.firebaseapp.com',
  projectId: 'wave-blogging',
  storageBucket: 'wave-blogging.appspot.com',
  messagingSenderId: '65294058999',
  appId: '1:65294058999:web:b1b914d2fe8634b7eedaf2',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
