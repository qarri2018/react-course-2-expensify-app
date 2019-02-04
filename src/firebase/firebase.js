// Takes all of the named exports from firebase and dumps them in the firebase variable
import * as firebase from 'firebase';
import moment from 'moment';

// Initialize Firebase
const config = {
apiKey: "AIzaSyCcoUN3RCiq2B0yyqbQLwJryZ1IKkICNlw",
authDomain: "expensify-15801.firebaseapp.com",
databaseURL: "https://expensify-15801.firebaseio.com",
projectId: "expensify-15801",
storageBucket: "expensify-15801.appspot.com",
messagingSenderId: "734763326441"
};

firebase.initializeApp(config);
const database = firebase.database();

// child_removed -fires when expense gets removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
// Fires one time for each existing child and every time child added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// MAKE ARRAY
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

database.ref('expenses').push({
    description: 'Soda',
    note: '',
    amount: 33,
    createdAt: 679598447
});

// const expenses = [{
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
//   }, {
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
//   }, {
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'days').valueOf()
//   }];



// expenses.map((expense) => {
//     database.ref('expenses').push(expense);
// });

// database.ref('notes/-LXnp70P99iEpaWFMWMU').remove();

// Push generates id automatically 
// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React native, Angular, Python'
// });



// database.ref('notes').set(notes);
// database.ref('notes/');

// database.ref().update({
//     name: 'Karri',
//     'job/title': 'Software Developer',
//     'job/company': 'Amazon'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const user = snapshot.val();
//     console.log(`${user.name} is a ${user.job.title} at ${user.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching.', e);
// });

// database.ref().update({
//     name: 'Pekka',
//     'job/title': 'Janitor',
//     'job/company': 'Google'
// });

// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('This failed.', e);
// });

// Subscribes to database 
// runs when data changes

// ref() gives access to a specific part of the database
// database.ref().set({
//     name: 'Karri Asikainen',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Helsinki',
//         country: 'Finland'
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// change stresslevel to a 9
// Change the job.company to Amazon
// Change the location.city to Seattle
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });