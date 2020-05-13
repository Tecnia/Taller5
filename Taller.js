/*
// Inicializa Cloud Firestore a través de Firebase
firebase.initializeApp ({
    apiKey: "AIzaSyDb1kX5sCJJVXtfXGNEwbv4iA8ltaQ27Hc",
    authDomain: "taller05-69ef6.firebaseapp.com",
    projectId: "taller05-69ef6", 
});
    var db = firebase.firestore ();
    */
   
   var providerFacebook = new firebase.auth.FacebookAuthProvider();

   $('#loginFacebook').click(function(){
       firebase.auth().signIwithPopup(providerFacebook)
       .then(function(result){
           console.log(result.user);
           $('#loginFacebook').hide();
           guardarDatos (result.user);
           $('#root').append( result.user.displayName);
           $('#avatar').attr('src', result.user.photoURL) 
       });
   });
   
   function guardarDatos(user){
       var usuario = {
           uid :user.uid,
           nombre :user.displayName,
           email :user.email,
           foto :user.photoURL
       }
       firebase.database().ref("taller3.1/usuarios/"+user.uid).set(usuariio)
   
   }