console.log('que mas perrito')
// Inicializa Cloud Firestore a través de Firebase
firebase.initializeApp ({
    apiKey: "AIzaSyDb1kX5sCJJVXtfXGNEwbv4iA8ltaQ27Hc",
    authDomain: "taller05-69ef6.firebaseapp.com",
    projectId: "taller05-69ef6", 
});
 var db = firebase.firestore ();
  
  // Cargar Datos 
  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
    })

.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});