function fetchenqdata() {
    var table = document.getElementById("enquirytable");

    table.innerHTML = "";

    // Create table header
    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    var headers = ["SI.No","Name", "Email", "Phone", "WhatsApp", "Gender", "Dance Type", "Other Dance", "Branch", "Start Date", "Batch Timing", "Comments"];
    
    headers.forEach(function(headerText) {
        var th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    var tbody = table.createTBody();
    var j = 0;

    firebase.database().ref("contact_details").once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            j++;
            var row = tbody.insertRow();
            var data = [
                j, 
                childSnapshot.val().name,
                childSnapshot.val().email,
                childSnapshot.val().phone,
                childSnapshot.val().whatsapp,
                childSnapshot.val().gender,
                childSnapshot.val().danceType || '-',
                childSnapshot.val().otherDance || '-',
                childSnapshot.val().branch,
                childSnapshot.val().startDate,
                childSnapshot.val().batchTiming,
                childSnapshot.val().comments
            ];

            data.forEach(function(cellData) {
                var cell = row.insertCell();
                cell.textContent = cellData;
            });
        });
    });
}

function searchEnquiries() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-enquiry");
    filter = input.value.toUpperCase();
    table = document.getElementById("enquirytable");
    tr = table.getElementsByTagName("tr");
    
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]; // Assuming the name is in the third column (index 2)
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetchenqdata();
    document.getElementById('search-enquiry').addEventListener('keyup', searchEnquiries);
});
