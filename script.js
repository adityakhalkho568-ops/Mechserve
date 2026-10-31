/* =====================================
   MECHSERVE MAIN JAVASCRIPT
===================================== */


/* ---------- MESSAGE ---------- */

function showMessage(message) {

    alert(message);

}


/* ---------- LOGIN ---------- */

function loginUser(event) {

    event.preventDefault();

    showMessage(
        "Login successful! Welcome to MechServe."
    );

    window.location.href =
        "dashboard.html";

}


/* ---------- REGISTER ---------- */

function registerUser(event) {

    event.preventDefault();

    showMessage(
        "Account created successfully!"
    );

    window.location.href =
        "dashboard.html";

}


/* ---------- ACCOUNT TYPE ---------- */

function selectAccount(type) {

    const buttons =
        document.querySelectorAll(
            ".account-type button"
        );

    buttons.forEach(function(button) {

        button.classList.remove(
            "selected"
        );

    });


    event.target.classList.add(
        "selected"
    );


    const fields =
        document.getElementById(
            "engineerFields"
        );


    if (type === "engineer") {

        fields.style.display =
            "block";

    }

    else {

        fields.style.display =
            "none";

    }

}


/* ---------- PROJECT ---------- */

function submitProject(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "projectName"
        ).value;


    showMessage(
        "Project submitted successfully!\n\n" +
        "Project: " + name +
        "\nProject ID: MS-2051"
    );


    window.location.href =
        "dashboard.html";

}


/* ---------- TRACKING ---------- */

let progress = 52;


function advanceTracking() {

    progress += 12;


    if (progress > 100) {

        progress = 100;

    }


    const bar =
        document.getElementById(
            "bigProgressBar"
        );


    const text =
        document.getElementById(
            "progressText"
        );


    if (bar) {

        bar.style.width =
            progress + "%";

    }


    if (text) {

        text.innerText =
            progress + "%";

    }


    if (progress === 100) {

        showMessage(
            "Project completed successfully!"
        );

    }

    else {

        showMessage(
            "Project progress updated!"
        );

    }

}


/* ---------- PAYMENT ---------- */

function makePayment() {

    const transaction =
        "MS" +
        Date.now()
        .toString()
        .slice(-8);


    showMessage(
        "Payment Successful!\n\n" +
        "Transaction ID: " +
        transaction
    );


    setTimeout(function() {

        window.location.href =
            "dashboard.html";

    }, 1200);

}


/* ---------- EXPENSE ---------- */

let totalSpent = 12450;

const totalBudget = 25000;


function addDemoExpense() {

    const expense =
        prompt(
            "Enter expense amount:"
        );


    if (
        expense === null ||
        expense === ""
    ) {

        return;

    }


    const amount =
        Number(expense);


    if (
        isNaN(amount) ||
        amount <= 0
    ) {

        showMessage(
            "Please enter a valid amount."
        );

        return;

    }


    totalSpent += amount;


    const remaining =
        Math.max(
            0,
            totalBudget - totalSpent
        );


    const spentElement =
        document.getElementById(
            "spent"
        );


    const remainingElement =
        document.getElementById(
            "remaining"
        );


    if (spentElement) {

        spentElement.innerText =
            "₹" +
            totalSpent
            .toLocaleString("en-IN");

    }


    if (remainingElement) {

        remainingElement.innerText =
            "₹" +
            remaining
            .toLocaleString("en-IN");

    }


    const table =
        document.getElementById(
            "expenseRows"
        );


    if (table) {

        const row =
            document.createElement(
                "tr"
            );


        row.innerHTML = `

            <td>
                New Project Expense
            </td>

            <td>
                Other
            </td>

            <td>
                26 Sep 2026
            </td>

            <td>
                ₹${amount.toLocaleString("en-IN")}
            </td>

        `;


        table.appendChild(row);

    }


    showMessage(
        "Expense added successfully!"
    );

}


/* ---------- MOBILE NAVIGATION ---------- */

function toggleMenu() {

    const nav =
        document.querySelector(
            ".navbar nav"
        );


    if (nav) {

        nav.classList.toggle(
            "mobile-open"
        );

    }

}