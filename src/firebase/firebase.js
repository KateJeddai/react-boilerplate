import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };


/*
  const config = {
    apiKey: 'AIzaSyBjGfkJbFjCEUC2CZtu4zZje94LHpbUzJc',
    authDomain: 'expensify-test-ff982.firebaseapp.com',
    databaseURL: 'https://expensify-test-ff982.firebaseio.com',
    projectId: 'expensify-test-ff982',
    storageBucket: 'expensify-test-ff982.appspot.com',
    messagingSenderId: '917496584067'
  }; 
*/
 
  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };

  /*
  // child_removed
  database.ref('expenses').on('child_removed', (snapshot) => {
     console.log(snapshot.key, snapshot.val());
  });

  //child_changed
  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
 });

 //child_added
 database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
 });
*/

  /*database.ref('expenses').push({
    description: 'rent',
    notes: '',
    amount: 2000, 
    createdAt: '1stJuly'
  });*/

  /*database.ref()
          .once('value')
          .then((snapshot) => {
             const expenses = [];
             snapshot.forEach((childSnapshot) => {
               expenses.push({
                   id: childSnapshot.key,
                   ...childSnapshot.val()
               })
             });
             console.log(expenses);
          });*/
  
  /*database.ref('expenses')
          .on('value', (snapshot) => {
             const expenses2 = [];
             snapshot.forEach((childSnapshot) => {
                expenses2.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
             });
             console.log(expenses2);
          }, (e) => {
            console.log('error with data fetching', e);
          });
       */  


  /*database.ref('notes').push({
      title: 'Courses',
      body: 'JS, React'
  });*/

  /*const onValueChange = database.ref().on('value', (snapshot) => {
     console.log(snapshot.val()); 
  }, (e) => {
      console.log('error with data fetching', e);
  });

  setTimeout(() => {
     database.ref('age').set(28);
  }, 4500);

  setTimeout(() => {
    database.ref().off(onValueChange);
  }, 8500);

 setTimeout(() => {
    database.ref('age').set(30);
 }, 10500);

*/
  /*database.ref()
          .once('value')
          .then((snapshot) => {
             const val = snapshot.val();
             console.log(val);
          }).catch((err) => {
              console.log(err);
          });
  database.ref('location/city')
          .once('value')
          .then((snapshot) => {
             const val = snapshot.val();
             console.log(val);
          }).catch((err) => {
              console.log(err);
          });*/

  /*
 database.ref().set({
      name: 'Kate',
      age: 34, 
      isSingle: false,
      job: {
          title: 'software developer',
          company: 'Google'
      },    
      stressLevel: 6,
      location: {
          city: 'Philadephia',
          country: 'US'
      }
  }).then(() => {
      console.log('data is saved');
  }).catch((err) => {
      console.log('something went wrong');
  });
*/
  /*database.ref().update({
     name: 'Catleen',
     age: 31,
     job: 'software developer',
     isSingle: null
  });
  
  database.ref().update({
     stressLevel: 9,
     'job/company': 'Amazon',
     'location/city': 'Seattle'
  });  */



  //database.ref().set(null);

  //database.ref().set('This is my data');

  //database.ref('age').set(27);
  //database.ref('location/city').set('LA');
  
  /*database.ref('attributes').set({
      height: 168,
      weight: 58
  }).then(() => {
     console.log('height and weight set');
  }).catch((err) => {
     console.log('something went wrong'); 
  });*/
  

  /*database.ref('isSingle')
          .remove()
          .then(() => {
              console.log('ref isSingle removed');
          }).catch((err) => {
              console.log('err: ', err);
          });

  database.ref().remove();

  */