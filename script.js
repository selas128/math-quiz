const quizData = {
    'Συναρτήσεις': {
        multipleChoice: [
            { question: "Ποια είναι η τιμή της f(2) αν f(x)=x²;", options: ["2","4","8","0"], answer: 1 }
        ],
        trueFalse: [
    {question: "Κάθε κατακόρυφη ευθεία έχει το πολύ ένα κοινό σημείο με τη γραφική παράσταση μιας συνάρτησης f.", answer: true},
    {question: "Η γραφική παράσταση της συνάρτησης -f είναι συμμετρική, ως προς τον άξονα x'x, της γραφικής παράστασης της f.", answer: true},
    {question: `Η γραφική παράσταση της \\(|f({x_0})|\\) αποτελείται από τα τμήματα της γραφικής παράστασης της f που βρίσκονται πάνω από τον άξονα x'x και από τα συμμετρικά, ως προς τον άξονα x'x, των τμημάτων της γραφικής παράστασης της f που βρίσκονται κάτω από τον άξονα x'x.`, answer: true},
    {question: "Μια συνάρτηση ορίζεται όταν σε κάθε στοιχείο του πεδίου ορισμού της αντιστοιχίζεται ακριβώς ένας πραγματικός αριθμός.", answer: true},
    {question: "Στο πεδίο ορισμού μιας συνάρτησης μπορεί να υπάρχουν στοιχεία που δεν αντιστοιχίζονται σε καμία τιμή.", answer: false},
    {question: "Το σύνολο τιμών μιας συνάρτησης f είναι οι τεταγμένες όλων των σημείων της γραφικής της παράστασης.", answer: true},
    {question: "Δύο συναρτήσεις είναι ίσες αν έχουν το ίδιο πεδίο ορισμού και ίδιες τιμές για κάθε x.", answer: true},
    {question: "Το άθροισμα f+g δύο συναρτήσεων ορίζεται σε ολόκληρο το R.", answer: false},
    {question: "Η σύνθεση gof ορίζεται αν το σύνολο τιμών της f είναι υποσύνολο του πεδίου ορισμού της g.", answer: true},
    {question: "Αν gof και fog ορίζονται, τότε ισχύει πάντα gof = fog.", answer: false},
    {question: "Αν ho(gof) και (hog)of ορίζονται, τότε ισχύει ho(gof) = (hog)of.", answer: true},
    {question: "Η γραφική παράσταση της f είναι το σύνολο σημείων (x, f(x)), με x από το πεδίο ορισμού.", answer: true},
    {question: "Το πεδίο ορισμού μιας συνάρτησης είναι η προβολή της γραφικής παράστασης στον άξονα y’y.", answer: false},
    {question: "Αν η f είναι γνησίως αύξουσα σε Δ, τότε για κάθε x₁ < x₂ στο Δ ισχύει f(x₁) < f(x₂).", answer: true},
    {question: "Αν η f είναι γνησίως φθίνουσα σε Δ, τότε για κάθε x₁ < x₂ στο Δ ισχύει f(x₁) > f(x₂).", answer: true},
    {question: "Κάθε συνάρτηση είναι γνησίως αύξουσα ή γνησίως φθίνουσα.", answer: false},
    {question: "Μια συνάρτηση μπορεί να είναι γνησίως μονότονη σε διαφορετικά διαστήματα.", answer: true},
    {question: "Αν η f είναι γνησίως αύξουσα στο (-∞,3) και στο (5,+∞), τότε είναι γνησίως αύξουσα και στο (-∞,3)∪(5,+∞).", answer: false},
    {question: "Αν μια συνάρτηση έχει ολικό μέγιστο στο x₀, τότε f(x₀) ≥ f(x) για κάθε x.", answer: true},
    {question: "Αν μια συνάρτηση έχει ολικό ελάχιστο στο x₀, τότε f(x₀) ≤ f(x) για κάθε x.", answer: true},
    {question: "Αν η f έχει μέγιστο το 3, τότε η -f έχει ελάχιστο το -3.", answer: true},
    {question: "Αν μια συνάρτηση είναι 1-1, τότε σε διαφορετικά x αντιστοιχίζονται διαφορετικές τιμές.", answer: true},
    {question: "Αν μια συνάρτηση είναι γνησίως μονότονη, τότε είναι και 1-1.", answer: true},
    {question: "Αν μια συνάρτηση είναι 1-1, τότε είναι πάντα γνησίως μονότονη.", answer: false},
    {question: "Η αντίστροφη μιας συνάρτησης f έχει πεδίο ορισμού το f(A) και σύνολο τιμών το A.", answer: true},
    {question: "Οι γραφικές παραστάσεις μιας συνάρτησης και της αντίστροφής της είναι συμμετρικές ως προς την ευθεία y=x.", answer: true},
    {question: "Αν μια συνάρτηση δεν είναι 1-1, τότε δεν μπορεί να έχει αντίστροφη.", answer: true},
    {question: "Μια συνάρτηση είναι 1-1 αν και μόνο αν κάθε οριζόντια ευθεία την τέμνει το πολύ σε ένα σημείο.", answer: true},
    {question: "Αν οι συναρτήσεις f και g είναι 1-1, τότε και η gof είναι 1-1.", answer: true},
    {question: "Για να είναι μια συνάρτηση 1-1, αρκεί να ισχύει ότι αν f(x₁)=f(x₂) τότε x₁=x₂.", answer: true},
    {question: "Ο κύκλος αποτελεί γραφική παράσταση συνάρτησης.", answer: false},
    {question: "Η συνάρτηση f(x)=|x| είναι 1-1.", answer: false},
    {question: "Αν μια συνάρτηση f και η αντίστροφή της τέμνονται, τότε το σημείο ανήκει στην ευθεία y=x.", answer: true}
        ]
    },
    'Όρια': {
        multipleChoice: [
            { question: "Το όριο lim x→0 (sin x)/x είναι;", options:["0","1","∞","-1"], answer:1 }
        ],
        trueFalse: [
            { question: "Το όριο lim x→∞ 1/x = 0.", answer:true }
        ]
    },
    'Συνέχεια': {
        multipleChoice: [
            { question: "Η συνάρτηση f(x)=1/x είναι συνεχής στο x=0;", options:["Ναι","Όχι"], answer:1 }
        ],
        trueFalse: [
            { question: "Κάθε συνεχής συνάρτηση σε κλειστό διάστημα έχει μέγιστο και ελάχιστο.", answer:true }
        ]
    },
    'Παράγωγος': {
        multipleChoice: [
            { question: "Η παράγωγος του f(x)=x² είναι;", options:["x","2x","x²","2"], answer:1 }
        ],
        trueFalse: [
            { question: "Η παράγωγος μιας σταθερής συνάρτησης είναι 0.", answer:true }
        ]
    },
    'Ολοκληρώματα': {
        multipleChoice: [
            { question: "Το ∫ 1 dx είναι;", options:["1","x","x²/2","0"], answer:1 }
        ],
        trueFalse: [
            { question: "Το ∫ f'(x) dx = f(x) + C.", answer:true }
        ]
    }
};

let currentQuizType = '';
let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let studentName = '';

// Εμφάνιση υπομενού κατηγορίας
function showCategoryMenu(category){
    const nameInput = document.getElementById('studentName').value.trim();
    if(!nameInput){ alert("Πρέπει να γράψεις το όνομά σου!"); return; }
    studentName = nameInput;
    currentCategory = category;

    document.getElementById('mainMenu').style.display='none';
    document.getElementById('categoryTitle').textContent = category;
    document.getElementById('categoryMenu').style.display='flex';
}

// Ξεκινάει το quiz
function startQuiz(type){
    currentQuizType = type;
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('categoryMenu').style.display='none';
    document.getElementById('questionContainer').style.display='block';
    document.getElementById('scoreContainer').style.display='none';

    showQuestion();
}

// Εμφάνιση ερώτησης
function showQuestion(){
    const qData = quizData[currentCategory][currentQuizType][currentQuestionIndex];
    document.getElementById('question').innerHTML = qData.question;
    document.getElementById('progress').textContent = `Ερώτηση ${currentQuestionIndex+1}/${quizData[currentCategory][currentQuizType].length}`;
    if (window.MathJax) {
    MathJax.typesetPromise();
}


    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    if(currentQuizType==='multipleChoice'){
        document.getElementById('optionsContainer').style.display='flex';
        document.getElementById('trueFalseContainer').style.display='none';
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML='';
        qData.options.forEach((opt,index)=>{
            const div=document.createElement('div');
            div.className='option';
          div.innerHTML = opt;
            div.onclick=()=>checkAnswer(index);
            optionsContainer.appendChild(div);
        });
    } else {
        document.getElementById('optionsContainer').style.display='none';
        document.getElementById('trueFalseContainer').style.display='flex';
    }

    document.getElementById('feedback').style.display='none';
    document.getElementById('nextButton').style.display='none';
}

// Έλεγχος απάντησης πολλαπλής επιλογής
function checkAnswer(selectedIndex){
    const qData = quizData[currentCategory][currentQuizType][currentQuestionIndex];
    const isCorrect = selectedIndex === qData.answer;
    showFeedback(isCorrect, qData.options[qData.answer]);
    if(isCorrect) score++;
}

// Έλεγχος απάντησης σωστό/λάθος
function checkTrueFalse(userAnswer){
    const qData = quizData[currentCategory][currentQuizType][currentQuestionIndex];
    const isCorrect = userAnswer === qData.answer;
    showFeedback(isCorrect, qData.answer?"Σωστό":"Λάθος");
    if(isCorrect) score++;
}

// Feedback
function showFeedback(isCorrect, correctAnswer){
    const feedback = document.getElementById('feedback');
    feedback.style.display='block';
    feedback.innerHTML = isCorrect
        ? '<span style="color:green;font-weight:bold;">Σωστή απάντηση!</span>'
        : `<span style="color:red;font-weight:bold;">Λανθασμένη απάντηση.</span><br><span style="color:#3399ff;font-weight:bold;">Η σωστή απάντηση είναι: ${correctAnswer}</span>`;
    feedback.className='feedback '+(isCorrect?'correct':'incorrect');
    document.getElementById('nextButton').style.display='block';
}

// Επόμενη ερώτηση
function nextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < quizData[currentCategory][currentQuizType].length)
        showQuestion();
    else showResults();
}

// Αποτελέσματα
function showResults(){
    document.getElementById('questionContainer').style.display='none';
    document.getElementById('scoreContainer').style.display='block';

    const percentage = (score/quizData[currentCategory][currentQuizType].length)*100;
    document.getElementById('score').textContent = `${score}/${quizData[currentCategory][currentQuizType].length}`;
    document.getElementById('percentage').textContent = `Ποσοστό επιτυχίας: ${percentage.toFixed(2)}%`;

    let message='';
    if(percentage<50) message=`${studentName}, δεν έχεις μελετήσει αρκετά.`;
    else if(percentage<=70) message=`${studentName}, καλά τα πήγες αλλά μπορείς καλύτερα.`;
    else message=`${studentName}, πολύ καλά μπράβο!`;

    document.getElementById('studentMessage').textContent = message;
}

// Επιστροφή στο κύριο μενού
function goHome(){
    document.getElementById('mainMenu').style.display='flex';
    document.getElementById('categoryMenu').style.display='none';
    document.getElementById('scoreContainer').style.display='none';
}
