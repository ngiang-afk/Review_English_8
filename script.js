const quizData = [
    { q: "Peter : Can you lend me your notes from yesterday's class? - David : - ____________", options: ["Yes, you can.", "That's true.", "Certainly. Here you are.", "I don’t know."], correct: 2, hint: "Đáp lại lời đề nghị lịch sự (cho mượn), dùng 'Certainly. Here you are.'" },
    { q: "Tiger : Congratulations! You've passed the exam. - Monkey : _______", options: ["No, I don't think so.", "Many thanks.", "Sorry, I don't.", "Not at all."], correct: 1, hint: "Đáp lại lời chúc mừng (Congratulations!), dùng 'Many thanks' (Cảm ơn nhiều)." },
    { q: "Jerry : Hey, I love your new haircut! It looks great on you. - Tom : Thanks! ____________", options: ["I'm glad you like it.", "You can say that again.", "You must be kidding.", "Certainly."], correct: 0, hint: "Đáp lại lời khen (compliment), dùng 'I'm glad you like it' (Tôi mừng vì bạn thích nó)." },
    { q: "Bac : Happy New Year to you! - Nam : _______. ", options: ["Not at all", "I don’t think so", "Never mind", "Thank you! Happy New Year to you, too"], correct: 3, hint: "Đáp lại lời chúc, chúc lại." },
    { q: "Most girls are interested ______ cooking.", options: ["on", "in", "at"], correct: 1, hint: "Cấu trúc: be interested in (quan tâm, thích thú về...)." },
    { q: "If it _______ tomorrow, we will cancel the outdoor event.", options: ["rains", "will rain", "rained"], correct: 0, hint: "Câu điều kiện loại 1: If + S + V(hiện tại đơn), S + will + V." },
    { q: "They are learning hard ______ they are having Math exams next week.", options: ["although", "so", "because"], correct: 2, hint: "Dùng 'because' để chỉ nguyên nhân (vì họ có bài thi Toán)." },
    { q: "How do people _______ New Year in the U.S.A?", options: ["celebrate", "keep", "buy"], correct: 0, hint: "'Celebrate' (ăn mừng) đi với các dịp lễ như New Year." },
    { q: "The Chapi is a traditional ______ of the Raglai people.", options: ["farming tool", "musical instrument", "traditional song"], correct: 1, hint: "Chapi là một loại nhạc cụ (musical instrument)." },
    { q: "I think she ______ the gift we bought for her.", options: ["like", "likes", "will like"], correct: 2, hint: "'I think' thường dùng với thì tương lai đơn (will like) để diễn tả dự đoán." },
    { q: "Shaking hands is probably ______ most common way of greeting around ______ world.", options: ["the – the", "∅ – the", "the – ∅"], correct: 0, hint: "So sánh nhất (the most common) và cụm từ cố định (around the world)." },
    { q: "The Cham in Ninh Thuan _______sheep and cows.", options: ["weave", "run", "raise"], correct: 2, hint: "'Raise' (chăn nuôi) đi với động vật (sheep and cows)." },
    { q: "Anna ______ weight if she keeps eating unhealthy snacks every day.", options: ["won't lose", "didn't lose", "doesn't lose"], correct: 0, hint: "Câu điều kiện loại 1 (nếu cô ấy cứ tiếp tục... thì cô ấy sẽ không...). Vế 'if' là hiện tại đơn, vế chính là tương lai đơn (won't lose)." },
    { q: "Unless she ______ her chores, she won't be able to join us for the party.", options: ["finishes", "finished", "will finish"], correct: 0, hint: "'Unless' = If not. Vế sau 'Unless' dùng thì hiện tại đơn (finishes) theo cấu trúc câu điều kiện loại 1." },
    { q: "If we pollute the water, we will not have ______fresh water to use in the future.", options: ["much", "many", "a few"], correct: 0, hint: "'Fresh water' là danh từ không đếm được, dùng 'much'." },
    { q: "The people there ______ mainly rice and corn.", options: ["poultry", "cultivate", "plough"], correct: 1, hint: "'Cultivate' (trồng trọt, canh tác) đi với cây trồng (rice and corn)." },
    { q: "Many ethnic groups in Viet Nam live in mountainous _______. ", options: ["regions", "customs", "clothes"], correct: 0, hint: "Họ sống ở các vùng (regions) núi." },
    { q: "Many people believe that carrying a lucky charm can chase ______ bad luck.", options: ["for", "with", "away"], correct: 2, hint: "Cụm động từ: 'chase away' (xua đuổi)." },
    { q: "______ethnic groups live on the northern areas of Viet Nam? - 54", options: ["How many", "How much", "How long"], correct: 0, hint: "'Ethnic groups' là danh từ đếm được số nhiều, hỏi số lượng dùng 'How many'." },
    { q: "______ ethnic groups live on the northern areas of Viet Nam?", options: ["How many", "How much", "How long"], correct: 1, hint: "Đáp án đúng là 'How many' (hỏi số lượng)." }
    { q: "The Cham people in Ninh Thuan are famous for their traditional _______. ", options: ["villages", "rivers", "festivals"], correct: 2, hint: "Người Chăm nổi tiếng với các lễ hội (festivals) truyền thống của họ." },
    { q: "The store opens _______than the supermarket does.", options: ["more earlier", "earlier", "early"], correct: 1, hint: "So sánh hơn của trạng từ 'early' là 'earlier' (Không dùng 'more earlier')." },
    { q: "_______ people enjoy a walk in the park.", options: ["A", "An", "Ɵ"], correct: 2, hint: "'People' là danh từ số nhiều chung chung, không dùng mạo từ A/An (Dùng ∅)." },
    { q: "Each ethnic group has its own __________ which reflects its history and beliefs.", options: ["culture", "cultural", "cultures", "culturally"], correct: 0, hint: "Sau tính từ sở hữu 'its own' cần một danh từ số ít (culture)." },
    { q: "In many villages, people share __________ information and work together to support their community.", options: ["many", "a few", "much", "an"], correct: 2, hint: "'Information' là danh từ không đếm được, dùng 'much'." },
    { q: "Ethnic people often live close to nature, and they respect __________ nature", options: ["a", "∅", "an", "the"], correct: 3, hint: "Cụm từ cố định: 'respect the nature' (tôn trọng thiên nhiên)." },
    { q: "In the future, the government __________ more programs to help preserve the cultures of ethnic minorities.", options: ["supports", "supported", "will support", "is supporting"], correct: 2, hint: "Dấu hiệu 'In the future', dùng thì tương lai đơn (will support)." },
    { q: "If young people learn about ethnic traditions, they __________ understand the value of cultural diversity better.", options: ["will", "could", "would", "might"], correct: 0, hint: "Câu điều kiện loại 1. Dùng 'will' để chỉ kết quả." },
    { q: "I’ve never ______ more than an hour at a time online.", options: ["spend", "spending", "spent"], correct: 2, hint: "Cấu trúc thì hiện tại hoàn thành: S + have/has + V3/ed (spent)." },
    { q: "Today, for instance, I’ve been _____ three times.", options: ["online", "Internet", "website"], correct: 0, hint: "'Been online' (đã truy cập mạng) là cụm từ hợp lý." },
    { q: "I read online magazines and I look _____ information, too.", options: ["at", "for", "in"], correct: 1, hint: "Cụm động từ: 'look for' (tìm kiếm)." },
    { q: "I also compare prices of things, ____ I’ve never bought anything online because I don’t think it’s safe.", options: ["so", "because", "but"], correct: 2, hint: "Dùng 'but' (nhưng) để chỉ sự đối lập giữa việc so sánh giá và việc không mua hàng." },
    { q: "In my experience, it’s very useful for people who use the Internet ________", options: ["sensibly.", "sensible.", "sensibility."], correct: 0, hint: "Sau động từ 'use' (sử dụng) cần một trạng từ 'sensibly' (một cách hợp lý)." },
    { q: "Where do many ethnic minorities mainly live?", options: ["In coastal areas.", "In big cities.", "In industrial zones.", "In mountainous areas."], correct: 3, hint: "Các dân tộc thiểu số sống chủ yếu ở vùng núi (mountainous areas)." },
    { q: "The word “diversity” in paragraph 1 is closest in meaning to:", options: ["Population.", "Tradition.", "Difference.", "Similarity."], correct: 2, hint: "'Diversity' (sự đa dạng) gần nghĩa nhất với 'Difference' (sự khác biệt)." },
    { q: "A handshake is a common form of greeting in the four countries. (True/False)", options: ["True", "False"], correct: 1, hint: "Câu này là False dựa trên bảng dữ liệu." },
    { q: "In Finland, close friends and family often hug and kiss when they see each other. (True/False)", options: ["True", "False"], correct: 0, hint: "Câu này là True dựa trên bảng dữ liệu." },
    { q: "In Japan, people greet their superiors with a small head bow. (True/False)", options: ["True", "False"], correct: 1, hint: "Câu này là False dựa trên bảng dữ liệu (thường là cúi đầu sâu hơn)." },
    { q: "Korean women usually bow slightly and shake hands to greet each other. (True/False)", options: ["True", "False"], correct: 1, hint: "Câu này là False dựa trên bảng dữ liệu (thường chỉ là cúi đầu nhẹ, không bắt tay)." },
    { q: "In Viet Nam and Korea, when you address someone with his or her full name, the family name comes first. (True/False)", options: ["True", "False"], correct: 0, hint: "Câu này là True (Họ đứng trước tên riêng)." },
    ];

const totalQuestions = quizData.length;
let currentIdx = 0;
let scoreCorrect = 0;
let scoreWrong = 0;
let timer;
const TIME_LIMIT = 20; // Giới hạn 20 giây cho mỗi câu

// --- Audio Functions ---
const audioCorrect = document.getElementById('audio-correct');
const audioWrong = document.getElementById('audio-wrong');

function playAudio(isCorrect) {
    if (isCorrect && audioCorrect) {
        audioCorrect.currentTime = 0;
        audioCorrect.play();
    } else if (!isCorrect && audioWrong) {
        audioWrong.currentTime = 0;
        audioWrong.play();
    }
}
// -----------------------

function init() { 
    // Thiết lập tổng số câu hỏi chính xác
    document.getElementById('current-pos').innerText = currentIdx + 1;
    document.querySelector('.stats').querySelector('div:first-child').innerHTML = `Câu hỏi: <span id="current-pos">${currentIdx + 1}</span>/${totalQuestions}`;
    loadQuestion(); 
}

function startTimer() {
    let timeLeft = TIME_LIMIT;
    document.getElementById('time-left').innerText = timeLeft;
    
    // Xóa timer cũ nếu có
    if (timer) clearInterval(timer);

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time-left').innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            // Tự động chuyển câu và tính là sai
            handleAnswer(-1); 
        }
    }, 1000);
}

function loadQuestion() {
    if (currentIdx >= totalQuestions) { showResult(); return; }
    
    startTimer(); // Bắt đầu đếm ngược cho câu hỏi mới
    
    const data = quizData[currentIdx];
    document.getElementById('current-pos').innerText = currentIdx + 1;
    document.getElementById('question').innerText = data.q;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    // Reset bong bóng Vẹt
    document.getElementById('parrot-message').innerText = "Cố gắng lên nhé! Đếm ngược 20 giây bắt đầu! ⏱️";
    document.getElementById('parrot-message').style.borderColor = "var(--error-color)"; 

    data.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        // Thêm A, B, C... vào đáp án
        btn.innerText = `${String.fromCharCode(65+idx)}. ${opt}`; 
        btn.onclick = () => handleAnswer(idx);
        optionsDiv.appendChild(btn);
    });
}

function handleAnswer(choice) {
    // Ngừng đồng hồ ngay khi người dùng chọn hoặc hết giờ
    clearInterval(timer);
    
    const data = quizData[currentIdx];
    const correct = data.correct;
    const msg = document.getElementById('parrot-message');

    // Vô hiệu hóa các nút để ngăn chặn chọn thêm
    Array.from(document.getElementById('options').children).forEach(btn => btn.disabled = true);

    if (choice === correct) {
        scoreCorrect++;
        document.getElementById('score-correct').innerText = scoreCorrect;
        msg.innerText = "Tuyệt vời! Chính xác! 🎉 " + data.hint;
        msg.style.borderColor = "var(--success-color)";
        playAudio(true);
    } else {
        scoreWrong++;
        document.getElementById('score-wrong').innerText = scoreWrong;
        // Kiểm tra xem là hết giờ hay chọn sai
        const errorMsg = choice === -1 ? "Hết giờ! ⏰ " : "Chưa chính xác! 😥 ";
        msg.innerText = errorMsg + "Hãy lưu ý: " + data.hint;
        msg.style.borderColor = "var(--error-color)";
        playAudio(false);
    }
    
    currentIdx++;
    // Chuyển câu hỏi sau 2 giây
    setTimeout(loadQuestion, 2000);
}

function showResult() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    const finalScore = (scoreCorrect / totalQuestions * 10).toFixed(1);
    const percentage = (scoreCorrect / totalQuestions * 100).toFixed(0);
    document.getElementById('final-stats').innerHTML = `Đúng: ${scoreCorrect}/${totalQuestions} | Sai: ${scoreWrong} <br> <b>Tỷ lệ đúng: ${percentage}% | Tổng điểm: ${finalScore}/10</b>`;
    
    // Tiêu chí đánh giá
    let finalMessage = "Cố gắng luyện tập thêm để đạt ước mơ em nhé! 💪";
    if (scoreCorrect >= 36) {
        finalMessage = "Xuất sắc! Kiến thức vững vàng cho kỳ thi! 🌟";
    } else if (scoreCorrect >= 30) {
        finalMessage = "Rất tốt! Giữ vững phong độ này nhé! 👍";
    }
    document.getElementById('final-message').innerText = finalMessage;
}

function restartGame() {
    currentIdx = 0; scoreCorrect = 0; scoreWrong = 0;
    document.getElementById('score-correct').innerText = 0;
    document.getElementById('score-wrong').innerText = 0;
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('result-screen').style.display = 'none';
    // Đặt lại thông báo ban đầu
    document.getElementById('parrot-message').innerText = "Chào các em! Cùng Vẹt thông thái của trường Ước Mơ chinh phục 40 câu hỏi nhé!";
    document.getElementById('parrot-message').style.borderColor = "var(--error-color)"; // Màu viền mặc định cho Vẹt
    init();
}

window.onload = init;