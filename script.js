document.getElementById('submitFeedback').addEventListener('click', function() {
    const studentID = document.getElementById('studentID').value;
    if (!studentID) {
        alert("Please enter a Student ID");
        return;
    }
    const feedback = document.getElementById('feedback').value;
    let feedbackData = JSON.parse(localStorage.getItem('feedbackData')) || [];
    feedbackData.push({
        studentID: studentID,
        feedback: feedback,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
    alert('Feedback submitted!');
    document.getElementById('feedback').value = "";
});

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentID = document.getElementById('studentID').value;
    if (!studentID) {
        alert("Please enter a Student ID");
        return;
    }
    let results = {};
    const formData = new FormData(this);
    for (let pair of formData.entries()) {
        results[pair[0]] = pair[1];
    }
    let quizData = JSON.parse(localStorage.getItem('quizData')) || [];
    quizData.push({
        studentID: studentID,
        results: results,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('quizData', JSON.stringify(quizData));
    alert('Quiz submitted!');
});

//Example of how to view the stored data.
function viewLocalStorage(){
    console.log("Feedback Data:", JSON.parse(localStorage.getItem('feedbackData')));
    console.log("Quiz Data:", JSON.parse(localStorage.getItem('quizData')));
}



//If you want to add a button to the html to run the function viewLocalStorage()
//you can add this line to your html.
//<button onclick="viewLocalStorage()">View Local Storage</button>