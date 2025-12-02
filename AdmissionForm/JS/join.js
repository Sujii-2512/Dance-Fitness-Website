//login

function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    if (overlay.style.display === 'flex') {
        popup.classList.remove('show');
        setTimeout(() => overlay.style.display = 'none', 300);
    } else {
        overlay.style.display = 'flex';
        setTimeout(() => popup.classList.add('show'), 50);
    }
}

//age selection

document.addEventListener("DOMContentLoaded", function () {
    const above18Form = document.getElementById("above18Form");
    const below18Form = document.getElementById("below18Form");
    const ageSelection = document.querySelector(".age-selection");

    ageSelection.addEventListener("change", function () {
        const selectedValue = document.querySelector('input[name="ageGroup"]:checked').value;
        if (selectedValue === "above18") {
            above18Form.style.display = "block";
            below18Form.style.display = "none";
        } else if (selectedValue === "below18") {
            above18Form.style.display = "none";
            below18Form.style.display = "block";
        }
    });
});
// Medical Condition
document.addEventListener('DOMContentLoaded', function () {
    const medicalHistorySelects = document.querySelectorAll('#below18medicalHistory, #above18medicalHistory');
    const medicalDescriptionRows = document.querySelectorAll('#medicalDescriptionRow, #medicalDescriptionRow');

    medicalHistorySelects.forEach((select, index) => {
        select.addEventListener('change', function () {
            if (this.value === 'yes') {
                medicalDescriptionRows[index].style.display = 'block';
            } else {
                medicalDescriptionRows[index].style.display = 'none';
            }
        });
    });
});


// Other Fitness Syles

document.addEventListener('DOMContentLoaded', function () {
    const courseSelects = document.querySelectorAll('#above18course, #below18course');
    const otherCourseFields = document.querySelectorAll('#otherCourseField, #otherCourseFieldBelow18');

    courseSelects.forEach((select, index) => {
        select.addEventListener('change', function () {
            if (this.value === 'others') {
                otherCourseFields[index].style.display = 'block';
            } else {
                otherCourseFields[index].style.display = 'none';
            }
        });
    });
});

// LEGAL TERMS AND CONDITIONS 
document.addEventListener('DOMContentLoaded', function() {
    const acceptCheckbox = document.getElementById('acceptTerms');
    const nextButton = document.getElementById('nextButton');
    const legalTermsSection = document.querySelector('.legal-terms');
    const inquirySection = document.querySelector('.inquiry-section');

    acceptCheckbox.addEventListener('change', function() {
        nextButton.disabled = !this.checked;
    });

    nextButton.addEventListener('click', function() {
        if (acceptCheckbox.checked) {
            legalTermsSection.style.display = 'none';
            inquirySection.style.display = 'block';
        }
    });
});

// QR CODE 
    document.addEventListener('DOMContentLoaded', function() {
        var qrcode = new QRCode(document.getElementById("qrCode"), {
            text: window.location.href,
            width: 100,
            height: 100
        });
    });
