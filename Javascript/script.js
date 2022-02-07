function validate() {
    if (document.Javascript_test_1.qn1.value == " ") {
        alert("Please select an answer");
        document.Javascript_test_1.qn1.focus();
        return false;
    }
    if (document.Javascript_test_1.qn2.value == " ") {
        alert("Please select an answer");
        document.Javascript_test_1.qn2.focus();
        return false;
    }

    if (document.Javascript_test_1.qn3.value == " ") {
        alert("Please select an answer");
        document.Javascript_test_1.qn3.focus();
        return false;
    }

    if (document.Javascript_test_1.qn4.value == " ") {
        alert("Please select an answer");
        document.Javascript_test_1.qn4.focus();
        return false;
    }

    if (document.Javascript_test_1.qn5.value == " ") {
        alert("Please select an answer");
        document.Javascript_test_1.qn5.focus();
        return false;
    }

    if (document.Javascript_test_1.qn6.value == " ") {
        alert("Please select an answer");
        document.Javascript_test_1.qn6.focus();
        return false;
    }

    if (document.Javascript_test_1.qn7.value == " ") {
        alert("Please select an answer");
        document.Javascript_test_1.qn7.focus();
        return false;
    }

    if (document.Javascript_test_1.qn8.value == " ") {
        alert("Please select an answer");
        document.Javascript_test_1.qn8.focus();
        return false;
    }

    if (document.Javascript_test_1.qn9.value == " ") {
        alert("Please select an answer");
        document.Javascript_test_1.qn9.focus();
        return false;
    }

    if (document.Javascript_test_1.qn10.value == " ") {
        alert("Please select an answer");
        document.Javascript_test_1.qn10.focus();
        return false;
    }

    function calculateResult() {
        var marks = 0;
        var rightAnswer1 = document.Javascript_Test_1.qn1.value;
        var rightAnswer2 = document.Javascript_Test_1.qn2.value;
        var rightAnswer3 = d3cument.Javascript_Test_1.qn3.value;
        var rightAnswer4 = document.Javascript_Test_1.qn4.value;
        var rightAnswer5 = document.Javascript_Test_1.qn5.value;
        var rightAnswer6 = document.Javascript_Test_1.qn6.value;
        var rightAnswer7 = document.Javascript_Test_1.qn7.value;
        var rightAnswer8 = document.Javascript_Test_1.qn8.value;
        var rightAnswer9 = document.Javascript_Test_1.qn9.value;
        var rightAnswer10 = document.Javascript_Test_1.qn10.value;

        var result = document.getElementById("Test_1")

        if (rightAnswer1 == "Division by zero") {
            marks += 10
        };
        if (rightAnswer2 == "Object Oriented") {
            marks += 10
        };
        if (rightAnswer3 == "Immediate if") {
            marks += 10
        };
        if (rightAnswer4 == "Block that combines a number of statements into a single compound statement") {
            marks += 10
        };
        if (rightAnswer5 == "Ignores the statemt") {
            marks += 10
        };
        if (rightAnswer6 == "Declaration statements") {
            marks += 10
        };
        if (rightAnswer7 == "The local element") {
            marks += 10
        };
        if (rightAnswer8 == "Function/method") {
            marks += 10
        };
        if (rightAnswer9 == "Mutable variable") {
            marks += 10
        };
        if (rightAnswer10 == "Displays Infinity") {
            marks += 10
        }

        document.write(marks);

    }
}