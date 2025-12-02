let subjects = document.querySelectorAll(".subject");
let totalBox = document.getElementById("total");
let resultBox = document.getElementById("result");

// Update total fee when checkboxes change
subjects.forEach(item => {
    item.addEventListener("change", () => {
        let total = 0;

        subjects.forEach(sub => {
            if (sub.checked) {
                total += parseInt(sub.value);
            }
        });

        totalBox.innerText = "₹" + total;
    });
});

// Handle form submit
document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    let studentName = document.getElementById("name").value.trim();
    if (studentName === "") {
        alert("Please enter student name.");
        return;
    }

    let selectedSubjects = [];
    let totalFee = 0;
    let count = 1;

    subjects.forEach(sub => {
        if (sub.checked) {
            // Get subject name + fee from label text
            let subjectName = sub.parentElement.innerText.trim();
            selectedSubjects.push(count + ". " + subjectName);
            count++;

            totalFee += parseInt(sub.value);
        }
    });

    if (selectedSubjects.length === 0) {
        alert("Please select at least one subject.");
        return;
    }

    let message =
        "Student Name: " + studentName + "\n\n" +
        "Selected Subjects:\n" + selectedSubjects.join("\n") + "\n\n" +
        "Total Fee: ₹" + totalFee;

    resultBox.innerText = message;
});