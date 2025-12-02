function showLoadingOverlay() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'flex';
}
function hideLoadingOverlay() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'none';
}

var detailsDatabase = firebase.database().ref('contact_details');

function submitcontact()
{
    showLoadingOverlay();
    var name = document.getElementById("contact_name").value;
    var email = document.getElementById("contact_email").value;
    var phone = document.getElementById("contact_phone").value;
    var whatsapp = document.getElementById("contact_whatsapp").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var danceType = document.querySelector('input[name="danceType"]:checked');
    var branch = document.getElementById("contact_branch").value;
    var startDate = document.getElementById("startDate").value;
    var batchTiming = document.getElementById("batchTiming").value;    
    if (name == "" || email == "" || phone == "" || whatsapp == "" || !gender || !danceType || branch == "" || startDate == "" || batchTiming == "") {
        alert("Please fill out all required fields.");
        hideLoadingOverlay();
    }
    else{
        var data = detailsDatabase.push();
        data.set({
            name: $('#contact_name').val(),
            email: $('#contact_email').val(),
            phone: $('#contact_phone').val(),
            whatsapp: $('#contact_whatsapp').val(),
            gender: $('input[name="gender"]:checked').val(),
            danceType: $('input[name="danceType"]:checked').val() || "",
            otherDance: $('#otherDance').val(),
            branch: $('#contact_branch').val(),
            startDate: $('#startDate').val(),
            batchTiming: $('#batchTiming').val(),
            comments: $('#contact_comments').val()
        });
         alert("data Submmited");

         hideLoadingOverlay();
         document.getElementById("message").innerHTML="Data Submitted Contact on WhatsaApp Number 8767485678 to confirm your admission or any doubdt."

         document.getElementById("contact_form").reset();
    }
 

   
    
}
