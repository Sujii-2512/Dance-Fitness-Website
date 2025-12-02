function showLoadingOverlay() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  loadingOverlay.style.display = 'flex';
}

function logintoaccount()
{
  showLoadingOverlay();

  var user_Id = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;
  {

    firebase.auth().signInWithEmailAndPassword(user_Id,password).then((success)=>{ 

      window.location.reload();

       
    }).catch((error)=>{
      loadingOverlay.style.display = 'none';

       alert("Login Failed")
    });
    }

}


function logout(){
  firebase.auth().signOut();
  alert("Signed Out");
  window.location.reload();
}

function studentlogout(){
  firebase.auth().signOut();
  alert("Signed Out");
  window.location.href="../index.html";
}