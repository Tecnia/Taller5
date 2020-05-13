console.log('Que gran ola chiqui')

var providerGoogle = new firebase.auth.GoogleAuthProvider();

//jquery sujeta a la etiqueta root
 
$('#loginGoogle').click(function(){  
    console.log('Entrar a Google')
    firebase.auth().signInWithPopup(providerGoogle)
        .then(function(result){
            console.log(result.user);
            $('#loginGoogle').hide();
            guardarDatos(result.user);
            
            $('#root').append( result.user.displayName);
            $('#avatar').attr('src',result.user.photoURL)
                       
        });
});



var providerFacebook = new firebase.auth.FacebookAuthProvider();

   $('#loginFacebook').click(function(){
    console.log('Entrar a Faceebok')
    firebase.auth().signInWithPopup(providerFacebook)
        .then(function(result){
            console.log(result.user);
            $('#loginFacebook').hide();
            guardarDatos(result.user);
            
            $('#root').append( result.user.displayName);
            $('#avatar').attr('src',result.user.photoURL)
                       
        });
   });
   
   function guardarDatos(user){
    var usuario= {
        uid     :user.uid,
        nombre  :user.displayName,
        email   :user.email,
        foto    :user.photoURL
    }
    firebase.database().ref("taller05/Usuarios/"+user.uid ).set(usuario)
}
