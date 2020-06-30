import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "<yourApiKey>",
    authDomain: "<yourAuthDomain>",
    databaseURL: "<yourDatabaseURL>",
    projectId: "<yourProjectID>",
    storageBucket: "<yourStorageBucket>",
    messagingSenderId: "<yourMessagingSenderID>",
    appId: "<yourAppId>",
    measurementId: "<yourMeasurementID>"
};

firebase.initializeApp(firebaseConfig);