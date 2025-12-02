function showLoadingOverlay() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'flex';
}


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        showLoadingOverlay();
        checkPermission(user);
    }
    else {
        //window.location.href="index.html";
    }
});
function checkPermission(user) {
    var found=0;
    firebase.database().ref('permissionTable').once('value', function (snapshot) {
        snapshot.forEach(function (childsnapshot) {
            if (user.email == childsnapshot.val().email) {
                let role_assign = childsnapshot.val().role;
                found=1;
                if (role_assign == "admin") {

                    window.location.href = "./Admin/dashboard.html";
                }
            }
        });
        if(found==0){
            window.location.href = "student/student.html";

        }
    });
}