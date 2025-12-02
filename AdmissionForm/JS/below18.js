function showLoadingOverlay() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'flex';
}

var detailsDatabase = firebase.database().ref('data/below');
var detailsDatabaseabove = firebase.database().ref('data/above');

$('.above18Form').submit(function(e) {
    e.preventDefault();
    showLoadingOverlay();

    var abovedata = detailsDatabaseabove.push();
    abovedata.set({
        above18fullName: $('#above18fullName').val(),
        above18email: $('#above18email').val(),
        above18phone: $('#above18phone').val(),
        above18address: $('#above18address').val(),
        above18govtId: $('#above18govtId').val(),
        above18dob: $('#above18dob').val(),
        above18age: $('#above18age').val(),
        above18gender: $('#above18gender').val(),
        PreviousExperience: $('#above18experience').val(),
        SchoolName: $('#above18school').val(),
        above18course: $('#above18course').val(),
        above18branch: $('#above18branch').val(),
        above18otherCourse: $('#above18otherCourse').val(),
        above18courseStart: $('#above18courseStart').val(),
        above18courseEnd: $('#above18courseEnd').val(),
        above18batchTiming: $('#above18batchTiming').val(),
        above18medicalHistory: $('#above18medicalHistory').val(),
        above18medicalDescription: $('#above18medicalDescription').val(),
        above18emergencyName: $('#above18emergencyName').val(),
        above18emergencyNumber: $('#above18emergencyNumber').val()
        
    });

    setTimeout(function() {
        $('#loadingOverlay').hide();
        console.log('Redirecting...');
        window.location.href = "../AdmissionForm/JoiningForm.html";
    }, 2000);
});



$('.below18Form').submit(function(e) {
    e.preventDefault();
    showLoadingOverlay();

    var data = detailsDatabase.push();
    data.set({
        below18fullName: $('#below18fullName').val(),
        below18email: $('#below18email').val(),
        below18phone: $('#below18phone').val(),
        below18address: $('#below18address').val(),
        below18govtId: $('#below18govtId').val(),
        below18dob: $('#below18dob').val(),
        below18age: $('#below18age').val(),
        below18gender: $('#below18gender').val(),
        parentname: $('#parentName').val(),
        parentnumber: $('#parentNumber').val(),
        PreviousExperience: $('#below18experience').val(),
        SchoolName: $('#below18school').val(),
        below18course: $('#below18course').val(),
        below18branch: $('#below18branch').val(),
        otherbelow18course: $('#otherbelow18course').val(),
        below18courseStart: $('#below18courseStart').val(),
        below18courseEnd: $('#below18courseEnd').val(),
        below18batchTiming: $('#below18batchTiming').val(),
        below18medicalHistory: $('#below18medicalHistory').val(),
        below18medicalDescription: $('#below18medicalDescription').val(),
        below18emergencyName: $('#below18emergencyName').val(),
        below18emergencyNumber: $('#below18emergencyNumber').val()
    });

    setTimeout(function() {
        $('#loadingOverlay').hide();
        console.log('Redirecting...');
        window.location.href = "../AdmissionForm/JoiningForm.html";
    }, 2000);
});