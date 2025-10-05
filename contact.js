const firebaseConfig = {
    apiKey: "AIzaSyDifoDjjfteh4USJ3tfDxUrNJq8pcQR3JU",
    authDomain: "miad-b0445.firebaseapp.com",
    databaseURL: "https://miad-b0445-default-rtdb.firebaseio.com",
    projectId: "miad-b0445",
    storageBucket: "miad-b0445.firebasestorage.app",
    messagingSenderId: "536096989741",
    appId: "1:536096989741:web:0b47915d4adf773a5c8ea4",
    measurementId: "G-HRESJJQ1P9"
    };

    firebase.initializeApp(firebaseConfig);
    var messagesRef = firebase.database().ref('messages');

    document.getElementById('contactForm').addEventListener('submit', submitForm);

    function submitForm(e) {
        e.preventDefault();
        const miadDB = firebase.database().ref('miad').on('value', gotData, errData);

        var name = getElementVal('name');
        var email = getElementVal('email');
        var message = getElementVal('message');

        saveMessages(name, email, message);

        //reset the form
        document.getElementById('contactForm').reset();
        }
        console.log(name, email, message);
        saveMessages(name, email, message);
         var namemiad = miadDB.push();
         newmiad.set({
             name: name,
             email: email,
             message: message
         })
    

    const getElementVal = (id) => {
        return document.getElementById(id).value;
    }
