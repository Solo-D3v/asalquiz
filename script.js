const quizData = [
    {
        image: 'teacher1.jpg', // Resim dosyanın yolu
        text: 'Bu öğretmen kimdir?',
        options: ['Ali', 'Veli', 'Ayşe', 'Fatma'],
        correct: 2 // Doğru cevabın indeksi (0'dan başlar)
    },
    {
        image: 'teacher2.jpg',
        text: 'Bu öğretmen kimdir?',
        options: ['Mehmet', 'Can', 'Buse', 'Gül'],
        correct: 0
    },
    // Daha fazla soru ekleyebilirsiniz
];

let currentQuestion = 0;

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    document.getElementById('question-image').src = questionData.image;
    document.getElementById('question-text').innerText = questionData.text;
    const optionButtons = document.getElementsByClassName('option-btn');
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].innerText = questionData.options[i];
    }
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestion].correct) {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            alert("Tebrikler, tüm soruları doğru bildiniz!");
            restartQuiz();
        }
    } else {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('result').style.display = 'block';
    }
}

function restartQuiz() {
    currentQuestion = 0;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    loadQuestion();
}

window.onload = loadQuestion;
