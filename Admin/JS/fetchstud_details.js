function generateUniqueId(branch, ageGroup) {
    let prefix;
    switch(branch.toLowerCase()) {
        case "nandhini layout":
            prefix = "NL";
            break;
        case "laggere":
            prefix = "LG";
            break;
        case "mahalakshmi layout":
            prefix = "ML";
            break;
        default:
            prefix = "TDF"; // For any other branch
    }
    
    let agePrefix = ageGroup === "above18" ? "A" : "B";
    
    return `${prefix}${agePrefix}-${Math.floor(Math.random() * 10001)}`;
}

function above18() {
    var table = document.getElementById("above18_data");
    table.innerHTML = "";

    // Create table header
    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    var headers = [
        "SI.No", "Student ID", "Full Name", "Email", "Phone Number", "Address", "Government ID", "Date of Birth",
        "Age", "Gender", "Parent/Guardian Name", "Parent/Guardian Number", "Previous Experience","Name of Previous School","Course", "Branch", "Other Course",
        "Course Start Date", "Course End Date", "Batch Timing", "Medical History", "Medical Description","Emergency Name", "Emergency Number",
        "Application Form", "Payment Slip"
    ];

    headers.forEach(function(headerText) {
        var th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    var tbody = table.createTBody();
    var j = 0;

    firebase.database().ref('data/above').once('value', function(snapshot3) {
        snapshot3.forEach(function(childsnapshot3) {
            j++;
            var row = tbody.insertRow();
            var data = childsnapshot3.val();
            var uniqueId = data.id || generateUniqueId(data.above18branch, "above18");
            
            if (!data.id) {
                // If there's no ID, update the record with the new ID
                childsnapshot3.ref.update({ id: uniqueId });
            }
            
            var rowData = [
                j, // SI.No
                uniqueId, // Student ID
                data.above18fullName,
                data.above18email,
                data.above18phone,
                data.above18address,
                data.above18govtId ? 'Uploaded' : 'Not Uploaded',
                data.above18dob,
                data.above18age,
                data.above18gender,
                'N/A', // Parent/Guardian Name
                'N/A', // Parent/Guardian Number
                data.above18experience,
                data.above18school || 'N/A',                
                data.above18course,
                data.above18branch,
                data.above18otherCourse || '-',
                data.above18courseStart,
                data.above18courseEnd,
                data.above18batchTiming,
                data.above18medicalHistory,
                data.above18medicalDescription || '-',
                data.above18emergencyName,
                data.above18emergencyNumber
            ];

            rowData.forEach(function(cellData) {
                var cell = row.insertCell();
                cell.textContent = cellData;
            });

            // Application Form button
            var appFormCell = row.insertCell();
            var appFormButton = createButton('View Application Form', `sayenqapp('${uniqueId}')`);
            appFormCell.appendChild(appFormButton);

            // Payment Slip button
            var paymentSlipCell = row.insertCell();
            var paymentSlipButton = createButton('View Payment Slip', `sayenqpay('${uniqueId}')`);
            paymentSlipCell.appendChild(paymentSlipButton);
        });
    });
}

function below18() {
    var table = document.getElementById("below18_data");
    table.innerHTML = "";

    // Create table header
    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    var headers = [
        "SI.No", "Student ID", "Full Name", "Email", "Phone Number", "Address", "Government ID", "Date of Birth",
        "Age", "Gender", "Parent/Guardian Name", "Parent/Guardian Number", "Previous Experience","Name of Previous School","Course", "Branch", "Other Course",
        "Course Start Date", "Course End Date", "Batch Timing", "Medical History", "Medical Description","Emergency Name", "Emergency Number",
        "Application Form", "Payment Slip"
    ];

    headers.forEach(function(headerText) {
        var th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    var tbody = table.createTBody();
    var j = 0;

    firebase.database().ref('data/below').once('value', function(snapshot3) {
        snapshot3.forEach(function(childsnapshot3) {
            j++;
            var row = tbody.insertRow();
            var data = childsnapshot3.val();
            var uniqueId = data.id || generateUniqueId(data.below18branch, "below18");
            
            if (!data.id) {
                // If there's no ID, update the record with the new ID
                childsnapshot3.ref.update({ id: uniqueId });
            }
            
            var rowData = [
                j, // SI.No
                uniqueId, // Student ID
                data.below18fullName,
                data.below18email,
                data.below18phone,
                data.below18address,
                data.below18govtId ? 'Uploaded' : 'Not Uploaded',
                data.below18dob,
                data.below18age,
                data.below18gender,
                data.parentname,
                data.parentnumber,
                data.below18experience,
                data.below18school || 'N/A',  
                data.below18course,
                data.below18branch,
                data.otherbelow18course || '-',
                data.below18courseStart,
                data.below18courseEnd,
                data.below18batchTiming,
                data.below18medicalHistory,
                data.below18medicalDescription || '-',
                data.below18emergencyName,
                data.below18emergencyNumber
            ];

            rowData.forEach(function(cellData) {
                var cell = row.insertCell();
                cell.textContent = cellData;
            });

            // Application Form button
            var appFormCell = row.insertCell();
            var appFormButton = createButton('View Application Form', `sayenqapp('${uniqueId}')`);
            appFormCell.appendChild(appFormButton);

            // Payment Slip button
            var paymentSlipCell = row.insertCell();
            var paymentSlipButton = createButton('View Payment Slip', `sayenqpay('${uniqueId}')`);
            paymentSlipCell.appendChild(paymentSlipButton);
        });
    });
}

function searchStudents(ageGroup) {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-" + ageGroup);
    filter = input.value.toUpperCase();
    table = document.getElementById(ageGroup + "_data");
    tr = table.getElementsByTagName("tr");
    
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2]; // Assuming the name is in the third column (index 2)
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

function createButton(text, onclick) {
    var button = document.createElement('button');
    button.innerText = text;
    button.style.backgroundColor = "#156118";
    button.style.border = "none";
    button.style.color = "white";
    button.style.height = '30px';
    button.style.width = '140px';
    button.style.padding = '2px 5px';
    button.style.fontSize = '12px';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '3px';
    button.setAttribute('onclick', onclick);
    return button;
}

function sayenqpay(data) {
    var modal = document.getElementById("paymentSlipModal");
    modal.style.display = "block";
    fetchPaymentData(data);
}

function sayenqapp(data) {
    var modal = document.getElementById("applicationFormModal");
    modal.style.display = "block";
    fetchApplicationData(data);
}

function fetchPaymentData(rowIndex) {
    // In a real scenario, fetch this data from Firebase
    // dummy data
    var dummyData = {
        date: "2024-09-19",
        paymentId: "PAY" + Math.floor(Math.random() * 1000000),
        amount: "₹3000",
        mode: "Online",
        paymentDate: "2024-09-19",
        studentName: "Lifney",
        course: "Folk Dance"
    };
    
    updatePaymentSlip(dummyData);
}

function updatePaymentSlip(data) {
    document.getElementById("slipDate").textContent = data.date;
    document.getElementById("slipPaymentId").textContent = data.paymentId;
    document.getElementById("slipAmount").textContent = data.amount;
    document.getElementById("slipMode").textContent = data.mode;
    document.getElementById("slipPaymentDate").textContent = data.paymentDate;
    document.getElementById("slipStudentName").textContent = data.studentName;
    document.getElementById("slipCourse").textContent = data.course;
}

function printPaymentSlip() {
   var printContents = document.querySelector('.payment-slip').innerHTML;
   var originalContents = document.body.innerHTML;

   document.body.innerHTML = printContents;

   window.print();

   document.body.innerHTML = originalContents;

   // Re-attach event listeners after restoring original content
   attachModalEventListeners();
}

function fetchApplicationData(studentId) {
    firebase.database().ref('data').once('value', function(snapshot) {
        snapshot.forEach(function(ageGroupSnapshot) {
            ageGroupSnapshot.forEach(function(studentSnapshot) {
                var data = studentSnapshot.val();
                if (data.id === studentId) {
                    updateApplicationForm(data);
                    return true; // Exit the loop once we've found the student
                }
            });
        });
    });
}

function updateApplicationForm(data) {
    var table = document.getElementById("applicationFormTable");
    table.innerHTML = ""; // Clear existing content

    var isAbove18 = data.above18fullName !== undefined;
    var prefix = isAbove18 ? 'above18' : 'below18';

    var fields = [
        {label: "Student ID", value: data.id}, // Add this line to display the student ID
        {label: "Full Name", value: data[prefix + 'fullName']},
        {label: "Email", value: data[prefix + 'email']},
        {label: "Phone", value: data[prefix + 'phone']},
        {label: "Address", value: data[prefix + 'address']},
        {label: "Government ID", value: data[prefix + 'govtId'] ? 'Uploaded' : 'Not Uploaded'},
        {label: "Date of Birth", value: data[prefix + 'dob']},
        {label: "Age", value: data[prefix + 'age']},
        {label: "Gender", value: data[prefix + 'gender']},
        {label: "Previous Experience", value: data[prefix + 'experience']},
        {label: "Name of Previous School", value: data[prefix + 'school'] || 'N/A'},
        {label: "Course", value: data[prefix + 'course']},
        {label: "Branch", value: data[prefix + 'branch']},
        {label: "Course Start Date", value: data[prefix + 'courseStart']},
        {label: "Course End Date", value: data[prefix + 'courseEnd']},
        {label: "Batch Timing", value: data[prefix + 'batchTiming']},
        {label: "Medical History", value: data[prefix + 'medicalHistory']},
        {label: "Medical Description", value: data[prefix + 'medicalDescription'] || 'N/A'},
        {label: "Emergency Name", value: data[prefix + 'emergencyName']},
        {label: "Emergency Number", value: data[prefix + 'emergencyNumber']}
    ];

    if (!isAbove18) {
        fields.push({label: "Parent/Guardian Name", value: data.parentname});
        fields.push({label: "Parent/Guardian Number", value: data.parentnumber});
    }

    fields.forEach(function(field) {
        var row = table.insertRow();
        var cellLabel = row.insertCell(0);
        var cellValue = row.insertCell(1);
        cellLabel.innerHTML = field.label;
        cellValue.innerHTML = field.value;
        cellLabel.style.fontWeight = 'bold';
        cellLabel.style.padding = '5px 10px';
        cellValue.style.padding = '5px 10px';
    });
}




function fetchStudentData(studentId) {
    firebase.database().ref('data').once('value', function(snapshot) {
        let studentData = null;
        snapshot.forEach(function(ageGroupSnapshot) {
            ageGroupSnapshot.forEach(function(studentSnapshot) {
                const data = studentSnapshot.val();
                if (data.id === studentId) {
                    studentData = data;
                    return true; // Exit the loop once we've found the student
                }
            });
            if (studentData) return true; // Exit the outer loop if student is found
        });

        if (studentData) {
            updateProfileContainer(studentData);
        } else {
            alert('Student not found');
        }
    });
}

function printApplicationForm() {
    var printContents = document.querySelector('.application-form').innerHTML;
    var originalContents = document.body.innerHTML;

    // Show signature container
    var signatureContainer = document.querySelector('.signature-container');
    signatureContainer.style.display = 'flex';

    // Set correct signature label
    var signatureLabel = document.getElementById('studentSignatureLabel');
    var isAbove18 = document.getElementById('applicationFormTable').innerHTML.includes('above18');
    signatureLabel.textContent = isAbove18 ? "Student's Signature" : "Parent/Guardian's Signature";

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;

    // Re-attach event listeners after restoring original content
    attachModalEventListeners();

    // Hide signature container again
    signatureContainer.style.display = 'none';
}

function attachModalEventListeners() {
   var paymentSlipModal = document.getElementById("paymentSlipModal");
   var applicationFormModal = document.getElementById("applicationFormModal");

   var spans = document.getElementsByClassName("close");

   for (var i = 0; i < spans.length; i++) {
       spans[i].onclick = function() {
           paymentSlipModal.style.display = "none";
           applicationFormModal.style.display = "none";
       }
   }

   window.onclick = function(event) {
       if (event.target == paymentSlipModal) {
           paymentSlipModal.style.display = "none";
       }
       if (event.target == applicationFormModal) {
           applicationFormModal.style.display = "none";
       }
   }
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    above18();
    below18();
    document.getElementById('search-above18').addEventListener('keyup', function() {
        searchStudents('above18');
    });
    document.getElementById('search-below18').addEventListener('keyup', function() {
        searchStudents('below18');
    });
});

