import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  googleAuthProvider.setCustomParameters({
    'prompt': 'select_account'
  });

  export { firebase, googleAuthProvider, database as default };

//   //child_remove
//   database.ref('expenses').on('child_removed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });

//   //child_change
//   database.ref('expenses').on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//   });

//   //child_added
//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//             const expenses = [];
//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             });
//             console.log(expenses); 
//         });



//   database.ref('expenses').push({
//     description: 'Rent',
//     note: 'Last Rent',
//     amount: 100000,
//     createdAt: 1000
//   });

 

//   database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   });
  

//   database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//       console.log('Error fetching data', e);
//   });

//   database.ref().set({
//     name: 'Adriano Sotos',
//     age: 27,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Florianopolis',
//         country: 'Brazil'
//     }
//   }).then(() => {   
//       console.log('Data is saved!');
//   }).catch((error) => {
//       console.log('error: ', error);
//   });

//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'São Paulo'
//   });

// database.ref('isSingle').remove().then(() => {
//     console.log('Data removed');
// }).catch((e) => {
//     console.log('Something went wrong', e);
// });
