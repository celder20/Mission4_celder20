$("#btnSubmit").click(function TotalGrade() {
    //Give variables a type
    var assignment, groupWork, quizzes, midtermExam, finalExam, intex, gradePercentage;

    //Assign each of the variables a value according to what the user inputs and multiply them by their weight
    assignment = parseInt($("#assmt").val() * 0.5);
    groupWork = parseInt($("#group").val() * 0.1);
    quizzes = parseInt($("#quiz").val() * 0.1);
    midtermExam = parseInt($("#midterm").val() * 0.1);
    finalExam = parseInt($("#final").val() * 0.1);
    intex = parseInt($("#intex").val() * 0.1);

    //Add up all of the different percentages that the user  to get the final percentage
    gradePercentage = assignment + groupWork + quizzes + midtermExam + finalExam + intex;

    //If statements to determine which letter grade the student will receive according to their final percent
    if (gradePercentage >= 94) {
        letterGrade = "Letter grade: A";
    } else if ((gradePercentage < 94) && (gradePercentage >= 90)) {
        letterGrade = "Letter grade: A-";
    } else if ((gradePercentage < 90) && (gradePercentage >= 87)) {
        letterGrade = "Letter grade: B+";
    } else if ((gradePercentage < 87) && (gradePercentage >= 84)) {
        letterGrade = "Letter grade: B";
    } else if ((gradePercentage < 84) && (gradePercentage >= 80)) {
        letterGrade = "Letter grade: B-";
    } else if ((gradePercentage < 80) && (gradePercentage >= 77)) {
        letterGrade = "Letter grade: C+";
    } else if ((gradePercentage < 77) && (gradePercentage >= 74)) {
        letterGrade = "Letter grade: C";
    } else if ((gradePercentage < 74) && (gradePercentage >= 70)) {
        letterGrade = "Letter grade: C-";
    } else if ((gradePercentage < 70) && (gradePercentage >= 67)) {
        letterGrade = "Letter grade: D+";
    } else if ((gradePercentage < 67) && (gradePercentage >= 64)) {
        letterGrade = "Letter grade: D";
    } else if ((gradePercentage < 64) && (gradePercentage >= 60)) {
        letterGrade = "Letter grade: D-";
    } else if (gradePercentage < 60) {
        letterGrade = "Letter grade: E";
    }

    //Take their letter grade and final grade percentage and output it to the HTML file AKA the webpage
    $('#totalGradeOutput').html("Grade percentage: " + gradePercentage + "%! " + letterGrade + "!");
})