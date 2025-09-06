const quizData = {
    'Συναρτήσεις': {
        multipleChoice: [
            { question: "Ποια είναι η τιμή της f(2) αν f(x)=x²;", options: ["2","4","8","0"], answer: 1 },
             {question: "Επιλέξτε από τις παρακάτω προτάσεις την πρόταση που συμπληρώνει τη φράση: Πραγματική συνάρτηση f με πεδίο ορισμού το A ονομάζουμε ...",
        options: [
          "μια διαδικασία (κανόνα) f, με την οποία κάθε στοιχείο x∈A αντιστοιχεί το πολύ σε έναν πραγματικό αριθμό y.",
          "μια διαδικασία (κανόνα) f, με την οποία κάθε στοιχείο x∈A αντιστοιχεί σε έναν και μόνο πραγματικό αριθμό y. Το y ονομάζεται τιμή της f στο x και συμβολίζεται f(x).",
          "μια διαδικασία (κανόνα) f, με την οποία κάθε στοιχείο x∈A αντιστοιχεί τουλάχιστον σε έναν πραγματικό αριθμό y.",
          "μια διαδικασία (κανόνα) f, με την οποία σε κάθε πραγματικό αριθμό y αντιστοιχεί κάποιο x του A."
        ],
        answer: 1
    },
    {
        question: "Τι ονομάζουμε πεδίο ορισμού μιας συνάρτησης f;",
        options: [
          "α) Το σύνολο των τιμών της f",
          "β) Το ευρύτερο υποσύνολο του ℝ στο οποίο ο τύπος της f έχει νόημα",
          "γ) Το σύνολο όλων των πραγματικών αριθμών",
          "δ) Το σύνολο των λύσεων της εξίσωσης f(x)=0"
        ],
        answer: 1
    },
    {
        question: "Τι ονομάζουμε σύνολο τιμών μιας συνάρτησης f με πεδίο ορισμού το Α;",
        options: [
          "α) Το σύνολο όλων των πραγματικών αριθμών",
          "β) Το σύνολο που έχει για στοιχεία του τις τιμές της f σε όλα τα x∈A",
          "γ) Το πεδίο ορισμού της f",
          "δ) Το σύνολο των λύσεων της εξίσωσης f(x)=0"
        ],
        answer: 1
    }
        ],
        trueFalse: [
  {question: "Έστω η συνάρτηση \\( f: A \\to \\mathbb{R} \\) και \\( \\alpha, \\beta \\in A \\), τότε ισχύει \\( f(\\alpha) = f(\\beta) \\iff \\alpha = \\beta \\).", answer: false},

    {question: "Αν η συνάρτηση \\( f: A \\to \\mathbb{R} \\) είναι 1-1, τότε ισχύει \\( f(f^{-1}(x)) = x \\) για κάθε \\( x \\in A \\).",answer: false},
    {question: "Έστω η συνάρτηση \\( f: A \\to \\mathbb{R} \\) η οποία είναι γνησίως μονότονη. Αν ισχύει \\( f(20) < f(3) \\), τότε η \\( f \\) είναι γνησίως αύξουσα.",answer: false},
    {question: "Έστω μια συνάρτηση \\( f: A \\to \\mathbb{R} \\). Τότε η \\( f \\) είναι 1-1 αν και μόνο αν, για κάθε στοιχείο \\( y \\) του συνόλου τιμών της, η εξίσωση \\( f(x) = y \\) έχει ακριβώς μία λύση ως προς \\( x \\).",answer: true} ,
    {question: "Έστω μια συνάρτηση \\( f: A \\to \\mathbb{R} \\).Αν η \\( f \\) είναι 1-1 τότε κάθε οριζόντια ευθεία τέμνει τη γραφική παράσταση της \\( f\\) τουλάχιστον σε ένα σημείο .",answer: false},
    {question: "Κάθε κατακόρυφη ευθεία έχει το πολύ ένα κοινό σημείο με τη γραφική παράσταση μιας συνάρτησης f.", answer: true},
    {question: "Η γραφική παράσταση της συνάρτησης -f είναι συμμετρική, ως προς τον άξονα x'x, της γραφικής παράστασης της f.", answer: true},
    {question: `Η γραφική παράσταση της \\(|f|\\) αποτελείται από τα τμήματα της γραφικής παράστασης της f που βρίσκονται πάνω από τον άξονα x'x και από τα συμμετρικά, ως προς τον άξονα x'x, των τμημάτων της γραφικής παράστασης της f που βρίσκονται κάτω από τον άξονα x'x.`, answer: true},
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
    
    {question: "Αν η f είναι γνησίως αύξουσα στο (-∞,3) και στο (5,+∞), τότε είναι γνησίως αύξουσα και στο (-∞,3)∪(5,+∞).", answer: false},
    {question: "Αν μια συνάρτηση \\( f: A \\to \\mathbb{R} \\) έχει ολικό μέγιστο στο \\( x_{0} \\in A \\), τότε \\( f(x_{0}) \\geq f(x) \\) για κάθε \\( x \\in A \\).",answer: true},

    {question: "Αν μια συνάρτηση \\( f: A \\to \\mathbb{R} \\) έχει ολικό ελάχιστο στο \\( x_{0} \\in A \\), τότε \\( f(x_{0}) \\leq f(x) \\) για κάθε \\( x \\in A \\).",answer: true},

    {question: "Αν η f έχει μέγιστο το 3, τότε η -f έχει ελάχιστο το -3.", answer: true},
    {question: "Αν μια συνάρτηση είναι 1-1, τότε σε διαφορετικά x αντιστοιχίζονται διαφορετικές τιμές.", answer: true},
    {question: "Αν μια συνάρτηση είναι γνησίως μονότονη, τότε είναι και 1-1.", answer: true},
    {question: "Αν μια συνάρτηση είναι 1-1, τότε είναι πάντα γνησίως μονότονη.", answer: false},
    {question: "Η αντίστροφη μιας συνάρτησης f έχει πεδίο ορισμού το f(A) και σύνολο τιμών το A.", answer: true},
    {question: "Οι γραφικές παραστάσεις μιας συνάρτησης και της αντίστροφής της είναι συμμετρικές ως προς την ευθεία y=x.", answer: true},
    {question: "Αν μια συνάρτηση δεν είναι 1-1, τότε δεν μπορεί να έχει αντίστροφη.", answer: true},
    {question: "Μια συνάρτηση είναι 1-1 αν και μόνο αν κάθε οριζόντια ευθεία την τέμνει το πολύ σε ένα σημείο.", answer: true},
    {question: "Αν οι συναρτήσεις f και g είναι 1-1, τότε και η gof είναι 1-1.", answer: true},
    {question: "Για να είναι μια συνάρτηση 1-1, αρκεί για οποιαδήποτε x₁,x₂ του πεδίου ορισμού της να ισχύει η συνεπαγωγή , αν f(x₁)=f(x₂) τότε x₁=x₂.", answer: true},
    {question: "Ο κύκλος αποτελεί γραφική παράσταση συνάρτησης.", answer: false},
    {question: "Η συνάρτηση f(x)=|x| είναι 1-1.", answer: false},
    {question: "Αν η συνάρτηση \\( f: A \\to \\mathbb{R} \\) είναι 1-1, τότε ισχύει \\( f^{-1}(f(x)) = x \\) για κάθε \\( x \\in A \\).",answer: true},
    {question: "Αν μια συνάρτηση f και η αντίστροφή της τέμνονται, τότε το σημείο ανήκει στην ευθεία y=x.", answer: false}
        ]
    },
    'Όρια': {
        multipleChoice: [
            { question: "Το όριο lim x→0 (sin x)/x είναι;", options:["0","1","∞","-1"], answer:1 }
        ],
        trueFalse: [        
 {"question": "Για κάθε συνάρτηση ισχύει ότι, το όριο της \\( f \\) στο \\( x_0 \\) ισούται με την τιμή της \\( f \\) στο \\( x_0 \\)","answer": false},
{"question": "Ισχύει ότι: \\( |ημ x| \\leq |x| \\) για κάθε \\( x \\in \\mathbb{R} \\)","answer": true},
{"question": "Ισχύει ότι: \\( |ημx| \\leq x \\) για κάθε \\( x \\in \\mathbb{R} \\)","answer": false},
{"question": "Ισχύει: \\( \\lim\\limits_{x \\to 0} \\frac{1 - συνx}{x} = 0 \\)","answer": true},
{"question": "Ισχύει: \\( \\lim\\limits_{x \\to 0} \\frac{ημx}{x} = 1 \\)","answer": true},
{"question": "Ισχύει: \\( \\lim\\limits_{x \\to 0} \\frac{συνx - 1}{x} = 1 \\)","answer": false},
{"question": "Ισχύει: \\( \\lim\\limits_{x \\to 0} \\frac{1}{x^{2\\nu + 1}} = +\\infty \\) για κάθε \\( \\nu \\in \\mathbb{N} \\)","answer": false},
{"question": "Αν \\( \\lim\\limits_{x \\to x_0} f(x) = -\\infty \\), τότε \\( f(x) > 0 \\) κοντά στο \\( x_0 \\)","answer": false},
{"question": "Αν \\( \\lim\\limits_{x \\to x_0} f(x) = +\\infty \\), τότε \\( \\lim\\limits_{x \\to x_0} (-f(x)) = -\\infty \\)","answer": true},
{"question": "Για κάθε ζεύγος συναρτήσεων \\( f: R \\to R \\) και \\( g: R \\to R \\), αν \\( \\lim\\limits_{x \\to x_0} f(x) = 0 \\) και \\( \\lim\\limits_{x \\to x_0} g(x) = +\\infty \\), τότε \\( \\lim\\limits_{x \\to x_0} (f(x) \\cdot g(x)) = 0 .\\)","answer": false},
{"question": "Αν υπάρχει το όριο της συνάρτησης \\( f \\) στο \\( x_0 \\) και \\( \\lim\\limits_{x \\to x_0} |f(x)| = 0 \\), τότε \\( \\lim\\limits_{x \\to x_0} f(x) = 0 \\)","answer": true},
{"question": "Αν \\( f(x) = \\ln(x^5 + x + 1) \\), τότε το όριο \\( \\lim\\limits_{x \\to 0} f(x) \\) είναι καλώς ορισμένο","answer": true},
{"question": "Αν \\( f(x) = \\sqrt{x^5 + x - 2} \\), τότε το όριο \\( \\lim\\limits_{x \\to 0} f(x) \\) είναι καλώς ορισμένο","answer": false},
{"question": "Έστω συνάρτηση \\( f \\) ορισμένη στο \\( (a, x_0) \\cup (x_0, b) \\) και \\( \\ell \\) ένας πραγματικός αριθμός. Τότε ισχύει η ισοδυναμία: \\[ \\lim_{x \\to x_0} f(x) = \\ell \\iff \\lim_{x \\to x_0} (f(x) - \\ell) = 0 \\]","answer": true},
{"question": "Ισχύει ότι: \\( \\lim\\limits_{x \\to -\\infty} e^{x} = 0 \\)","answer": true},
{ "question": "Ισχύει ότι: \\( \\lim\\limits_{x \\to 0} \\ln(x) = +\\infty \\)", "answer": false},
{"question": "Αν \\( \\kappa \\) θετικός ακέραιος, τότε \\( \\lim\\limits_{x \\to 0} \\frac{1}{x^{2\\kappa}} = +\\infty \\)","answer": true},
{"question": "Αν \\( \\kappa \\) θετικός ακέραιος, τότε \\( \\lim\\limits_{x \\to 0^{-}} \\frac{1}{x^{2\\kappa + 1}} = -\\infty \\)","answer": true},
{"question": "Ισχύει \\( \\lim\\limits_{x \\to +\\infty} \\frac{\\sin x}{x} = 1 \\)","answer": false},
{"question": "Αν \\( 0 < \\alpha < 1 \\), τότε \\( \\lim\\limits_{x \\to +\\infty} \\alpha^{x} = +\\infty \\)","answer": false},
{"question": "Αν \\( \\lim\\limits_{x \\to x_0} f(x) = +\\infty \\) και \\( \\lim\\limits_{x \\to x_0} (\\alpha \\cdot f(x)) = -\\infty \\), τότε \\( \\alpha < 0 \\)","answer": true},
{"question": "Αν \\( \\lim\\limits_{x \\to x_0} |f(x)| = +\\infty \\), τότε \\( \\lim\\limits_{x \\to x_0} f(x) = +\\infty \\) ή \\( \\lim\\limits_{x \\to x_0} f(x) = -\\infty \\)","answer": false},
{ "question": "Αν \\( \\lim\\limits_{x \\to +\\infty} f(x) = -\\infty \\), τότε \\( \\lim\\limits_{x \\to +\\infty} \\frac{1}{f(x)} = 0 \\)","answer": true},
{"question": "Έστω οι συναρτήσεις \\( f, g, h \\) για τις οποίες ισχύει \\( h(x) \\leq f(x) \\leq g(x) \\) κοντά στο \\( x_0 \\) και \\( \\lim\\limits_{x \\to x_0} h(x) \\neq \\lim\\limits_{x \\to x_0} g(x) = \\ell \\). Τότε δεν υπάρχει το \\( \\lim\\limits_{x \\to x_0} f(x) = \\ell \\).", "answer": false},
{"question": "Έστω οι συναρτήσεις \\( f, g, h \\) για τις οποίες ισχύει \\( h(x) \\leq f(x) \\leq g(x) \\) κοντά στο \\( x_0 \\) και \\( \\lim\\limits_{x \\to x_0} h(x) = \\lim\\limits_{x \\to x_0} g(x) = \\ell \\). Τότε \\( \\lim\\limits_{x \\to x_0} f(x) = \\ell \\).","answer": true},
{"question": "Έστω η συνάρτηση \\( f: R \\to R \\) για την οποία ισχύει ότι: \\( 0 \\leq f(x) \\leq 1 \\) για κάθε \\( x \\in R \\). Τότε ισχύει: \\[ \\lim\\limits_{x \\to 0} (x^2 \\cdot f(x)) = 0 \\]","answer": true},
{"question": "Αν ισχύει ότι: \\[ \\lim_{x \\to x_0} (f(x) \\cdot g(x)) = k \\] τότε \\[ \\lim\\limits_{x \\to x_0} f(x) \\cdot \\lim\\limits_{x \\to x_0} g(x) = k \\]","answer": false},
{"question": "Αν υπάρχει το \\[ \\lim_{x \\to x_0} f(x) = \\ell \\] τότε \\[ \\lim_{x \\to x_0} \\sqrt{f(x)} = \\sqrt{ \\lim_{x \\to x_0} f(x) } \\] εφόσον \\( f(x) \\geq 0 \\) κοντά στο \\( x_0 \\)","answer": true},
  {  "question": "Αν \\( f(x) < g(x) \\) κοντά στο \\( x_0 \\) τότε \\[ \\lim\\limits_{x \\to x_0} f(x) < \\lim\\limits_{x \\to x_0} g(x) \\]", "answer": false },
{"question": "Ισχύει \\[ \\lim\\limits_{h \\to 0} (f(x_0 + h)) = \\ell \\iff \\lim\\limits_{x \\to x_0} f(x) = \\ell \\]","answer": true},
  {"question": "Αν \\( f : (\\alpha, \\beta) \\to R \\) τότε \\[ \\lim\\limits_{x \\to \\alpha^{+}} f(x) = \\lim\\limits_{x \\to \\alpha} f(x) \\]","answer": true},
  {"question": "Αν \\( f : R \\to R \\) και \\[ \\lim\\limits_{x \\to x_0} f(x) = \\ell > 0 \\] τότε \\( f(x) > 0 \\) για κάθε \\( x \\in R \\)","answer": false },
  {"question": "Αν \\( \\lim\\limits_{x \\to x_0} |f(x)| = \\ell \\) τότε \\( \\lim\\limits_{x \\to x_0} f(x) = \\ell \\) ή \\( \\lim\\limits_{x \\to x_0} f(x) = -\\ell \\)","answer": false },
{ "question": "Αν \\( \\lim\\limits_{x \\to -\\infty} f(x) = -\\infty \\), τότε \\( \\lim\\limits_{x \\to -\\infty} \\frac{1}{f(x)} = 0 \\)","answer": true},
{ "question": "Πάντα ισχύει ότι: αν \\(\\lim\\limits_{x\\to x_0} f(x) =l \\) και \\( \\lim\\limits_{x \\to x_0} g(x) = m \\) τότε \\[ \\lim\\limits_{x \\to x_0} (f(x) + g(x)) =l + m \\]","answer": true},
{question: "Ισχύει ότι : \\( \\lim\\limits_{x \\to -\\infty} \\frac{1}{x} = 0 \\).", answer:true},
{"question": "Αν \\( \\lim\\limits_{x \\to x_0} f(x) = +\\infty \\) ή \\( \\lim\\limits_{x \\to x_0} f(x) = -\\infty \\), τότε \\[ \\lim\\limits_{x \\to x_0} |f(x)| = +\\infty \\]","answer": true},
{question: "Έστω συνάρτηση f ορισμένη στο \\((a, x_{0}) \\cup (x_{0}, b)\\) και \\( \\ell \\) ένας πραγματικός αριθμός. Τότε ισχύει η ισοδυναμία: \\[ \\lim\\limits_{x \\to x_{0}} f(x) = \\ell \\iff \\lim\\limits_{x \\to x_{0}^{-}} f(x) = \\lim\\limits_{x \\to x_{0}^{+}} f(x) = \\ell \\].", answer: true},
{question: "Αν \\( \\lim\\limits_{x \\to x_{0}} f(x) > 0 \\), τότε \\( f(x) > 0 \\) κοντά στο \\(x_{0}\\).", answer: true},
{question: "Αν οι συναρτήσεις f, g έχουν όριο στο \\(x_{0}\\) και ισχύει \\( f(x) \\leq g(x) \\) κοντά στο \\(x_{0}\\), τότε \\[ \\lim\\limits_{x \\to x_{0}} f(x) \\leq \\lim\\limits_{x \\to x_{0}} g(x) \\].", answer: true},
{question: "Αν υπάρχει το όριο \\[ \\lim\\limits_{x \\to x_{0}} (f(x) + g(x)) \\], τότε κατ' ανάγκη υπάρχουν τα όρια \\[ \\lim\\limits_{x \\to x_{0}} f(x) \\] και \\[ \\lim\\limits_{x \\to x_{0}} g(x) \\].", answer: false},
{"question": "Αν \\( \\kappa \\) θετικός ακέραιος, τότε \\( \\lim\\limits_{x \\to 0} \\frac{1}{x^{2\\kappa + 1}} = +\\infty \\)","answer": false},
{question: "Για κάθε συνάρτηση \\( f: A \\to \\mathbb{R} \\), όταν υπάρχει το όριο της f καθώς το \\(x\\) τείνει στο \\(x_{0} \\in A\\), τότε αυτό το όριο ισούται με την τιμή της f στο \\(x_{0}\\).", answer: false}
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






