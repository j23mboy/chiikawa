let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let mainImage = document.getElementById("mainImage");
let questionText = document.getElementById("question");

let clickCount = 0;  // 紀錄點擊次數

// No 按鈕的文字變化
const noTexts = [
    "你認真的嗎…？", 
    "要不要再想想？", 
    "不可以選這個！", 
    "我會很傷心…", 
    "不行:("
];

// 切換容器的按鈕事件
document.getElementById('chiiButton').addEventListener('click', function() {
    document.getElementById('chicontainer').style.display = 'block';
    document.getElementById('hachicontainer').style.display = 'none';
    document.getElementById('usagicontainer').style.display = 'none';
    document.getElementById('momocontainer').style.display = 'none';

    this.style.backgroundColor = '#C0C0C0'; // 改變 chiiButton 顏色
    document.getElementById('hachiButton').style.backgroundColor = ''; // 恢復 hachiButton 原顏色
    document.getElementById('usagiButton').style.backgroundColor = ''; // 恢復 usagiButton 原顏色
    document.getElementById('momoButton').style.backgroundColor = ''; // 恢復 momoButton 原顏色

    // 切換到 chicontainer 時，yesButton 指向 "yes"
    yesButton = document.getElementById("yes");
    noButton = document.getElementById("no");
    mainImage = document.getElementById("mainImage");
    questionText = document.getElementById("question");

    clickCount = 0; // 重置點擊次數
    questionText.innerText = "可以抱抱我嗎？"; // 重置問題文字

    // No 按鈕點擊事件
    noButton.addEventListener("click", function() {
        clickCount++;

        // 讓 Yes 按鈕變大，每次放大 2 倍
        let yesSize = 1 + (clickCount * 1.2);
        yesButton.style.transform = `scale(${yesSize})`;

        // 擠壓 No 按鈕，每次右移 50px
        let noOffset = clickCount * 50;
        noButton.style.transform = `translateX(${noOffset}px)`;

        // **新增：讓圖片和文字往上移動**
        let moveUp = clickCount * 25; // 每次上移 25px
        mainImage.style.transform = `translateY(-${moveUp}px)`;
        questionText.style.transform = `translateY(-${moveUp}px)`;

        // No 按鈕文字變化（前 5 次變化）
        if (clickCount <= 5) {
            noButton.innerText = noTexts[clickCount - 1];
        }

        // 圖片變化（前 5 次變化）
        if (clickCount === 1) mainImage.src = "images/shocked.png"; // 驚訝
        if (clickCount === 2) mainImage.src = "images/think.png";   // 思考
        if (clickCount === 3) mainImage.src = "images/angry.png";   // 生氣
        if (clickCount === 4) mainImage.src = "images/crying.png";  // 哭泣
        if (clickCount >= 5) mainImage.src = "images/crying.png";  // 之後一直是哭泣
    });

    // Yes 按鈕點擊後，進入表白成功頁面
    yesButton.addEventListener("click", function() {
        document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!喜歡你!! ( >᎑<)♡︎ᐝ</h1>
            <img src="images/hug.png" alt="擁抱" class="yes-image">
            <button id="refreshButton" class="refresh-button">重整</button>
        </div>
        `;
        document.body.style.overflow = "hidden";

        // 為重整按鈕綁定事件
        document.getElementById("refreshButton").addEventListener("click", function() {
            location.reload(); // 重整頁面
        });
    });
});

// 小八貓的按鈕事件
document.getElementById('hachiButton').addEventListener('click', function() {
    document.getElementById('chicontainer').style.display = 'none';
    document.getElementById('hachicontainer').style.display = 'block';
    document.getElementById('usagicontainer').style.display = 'none';
    document.getElementById('momocontainer').style.display = 'none';

    this.style.backgroundColor = '#C0C0C0'; // 改變 hachiButton 顏色
    document.getElementById('chiiButton').style.backgroundColor = ''; // 恢復 chiiButton 原顏色
    document.getElementById('usagiButton').style.backgroundColor = ''; // 恢復 usagiButton 原顏色
    document.getElementById('momoButton').style.backgroundColor = ''; // 恢復 momoButton 原顏色

    // 切換到 hachicontainer 時，更新按鈕指向
    yesButton = document.getElementById("hachiyes");
    noButton = document.getElementById("hachino");
    mainImage = document.getElementById("hachiImage");
    questionText = document.getElementById("hachiQuestion");

    clickCount = 0; // 重置點擊次數
    questionText.innerText = "可以抱抱我嗎？"; // 重置問題文字

    // 為 hachino 按鈕綁定點擊事件
    noButton.addEventListener("click", function() {
        clickCount++;
        // 讓 Yes 按鈕變大，每次放大 2 倍
        let yesSize = 1 + (clickCount * 1.2);
        yesButton.style.transform = `scale(${yesSize})`;

        // 擠壓 No 按鈕，每次右移 50px
        let noOffset = clickCount * 50;
        noButton.style.transform = `translateX(${noOffset}px)`;

        // 讓圖片和文字往上移動
        let moveUp = clickCount * 25; // 每次上移 25px
        mainImage.style.transform = `translateY(-${moveUp}px)`;
        questionText.style.transform = `translateY(-${moveUp}px)`;

        // No 按鈕文字變化（前 5 次變化）
        if (clickCount <= 5) {
            noButton.innerText = noTexts[clickCount - 1];
        }

        // 圖片變化（前 5 次變化）
        if (clickCount === 1) mainImage.src = "images/hachishocked.jpg"; // 驚訝
        if (clickCount === 2) mainImage.src = "images/hachithink.jpg";   // 思考
        if (clickCount === 3) mainImage.src = "images/hachiangry.jpg";   // 生氣
        if (clickCount === 4) mainImage.src = "images/hachicrying.jpg";  // 哭泣
        if (clickCount >= 5) mainImage.src = "images/hachicrying.jpg";  // 之後一直是哭泣
    });

    // Yes 按鈕點擊後，進入表白成功頁面
    yesButton.addEventListener("click", function() {
        document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!喜歡你!! ( >᎑<)♡︎ᐝ</h1>
            <img src="images/hachihug.jpg" alt="擁抱" class="yes-image">
            <button id="refreshButton" class="refresh-button">重整</button>
        </div>
        `;
        document.body.style.overflow = "hidden";

        // 為重整按鈕綁定事件
        document.getElementById("refreshButton").addEventListener("click", function() {
            location.reload(); // 重整頁面
        });
    });
});

// 兔兔的按鈕事件
document.getElementById('usagiButton').addEventListener('click', function() {
    document.getElementById('chicontainer').style.display = 'none';
    document.getElementById('hachicontainer').style.display = 'none';
    document.getElementById('usagicontainer').style.display = 'block';
    document.getElementById('momocontainer').style.display = 'none';

    this.style.backgroundColor = '#C0C0C0'; // 改變 usagiButton 顏色
    document.getElementById('chiiButton').style.backgroundColor = ''; // 恢復 chiiButton 原顏色
    document.getElementById('hachiButton').style.backgroundColor = ''; // 恢復 hachiButton 原顏色
    document.getElementById('momoButton').style.backgroundColor = ''; // 恢復 momoButton 原顏色

    yesButton = document.getElementById("usagiyes");
    noButton = document.getElementById("usagino");
    mainImage = document.getElementById("usagiImage");
    questionText = document.getElementById("usagiQuestion");

    yesButton.addEventListener("click", function() {
        document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">蛤！(才不給你抱)</h1>
            <img src="images/usagifinal.jpg" alt="擁抱" class="yes-image">
            <button id="refreshButton" class="refresh-button">重整</button>
        </div>
        `;
        document.body.style.overflow = "hidden";
        // 為重整按鈕綁定事件
        document.getElementById("refreshButton").addEventListener("click", function() {
            location.reload(); // 重整頁面
        });
    });

    noButton.addEventListener("click", function() {
        document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">蛤！(才不給你抱)</h1>
            <img src="images/usagifinal.jpg" alt="擁抱" class="yes-image">
            <button id="refreshButton" class="refresh-button">重整</button>
        </div>
        `;
        document.body.style.overflow = "hidden";
        // 為重整按鈕綁定事件
        document.getElementById("refreshButton").addEventListener("click", function() {
            location.reload(); // 重整頁面
        });
    });
});

document.getElementById('momoButton').addEventListener('click', function() {
    document.getElementById('chicontainer').style.display = 'none';
    document.getElementById('hachicontainer').style.display = 'none';
    document.getElementById('usagicontainer').style.display = 'none';
    document.getElementById('momocontainer').style.display = 'block';

    this.style.backgroundColor = '#C0C0C0'; // 改變 momoButton 顏色
    document.getElementById('chiiButton').style.backgroundColor = ''; // 恢復 chiiButton 原顏色
    document.getElementById('hachiButton').style.backgroundColor = ''; // 恢復 hachiButton 原顏色
    document.getElementById('usagiButton').style.backgroundColor = ''; // 恢復 usagiButton 原顏色

    noButton = document.getElementById("momono");
    mainImage = document.getElementById("momoImage");
    questionText = document.getElementById("momoQuestion");

    clickCount = 0; // 重置點擊次數
    questionText.innerText = "可以抱抱我嗎？"; // 重置問題文字

    noButton.addEventListener("click", function() {
        clickCount++;
        // 讓 Yes 按鈕變大，每次放大 2 倍
        let yesSize = 1 + (clickCount * 1.2);
        yesButton.style.transform = `scale(${yesSize})`;

        // 擠壓 No 按鈕，每次右移 50px
        let noOffset = clickCount * 50;
        noButton.style.transform = `translateX(${noOffset}px)`;

        // 讓圖片和文字往上移動
        let moveUp = clickCount * 25; // 每次上移 25px
        mainImage.style.transform = `translateY(-${moveUp}px)`;
        questionText.style.transform = `translateY(-${moveUp}px)`;

        // No 按鈕文字變化（前 5 次變化）
        if (clickCount < 5) {
            noButton.innerText = noTexts[clickCount - 1];
        }

        // 圖片變化（前 5 次變化）
        if (clickCount === 1) mainImage.src = "images/momo02.png"; // 驚訝
        if (clickCount === 2) mainImage.src = "images/momo03.png";   // 思考
        if (clickCount === 3) mainImage.src = "images/momo04.png";   // 生氣
        if (clickCount === 4) mainImage.src = "images/momo05.png";  // 哭泣
        
        if (clickCount >= 5) {
            document.body.innerHTML = `
            <div class="yes-screen">
                <h1 class="yes-text">不抱就不抱！(ﾒ ﾟ皿ﾟ)ﾒ</h1>
                <img src="images/momo06.png" alt="擁抱" class="yes-image">
                <button id="refreshButton" class="refresh-button">重整</button>
            </div>
            `;
            document.body.style.overflow = "hidden";
            // 為重整按鈕綁定事件
            document.getElementById("refreshButton").addEventListener("click", function() {
            location.reload(); // 重整頁面
            });
        }
    });
});

// No 按鈕點擊事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 讓 Yes 按鈕變大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 擠壓 No 按鈕，每次右移 50px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：讓圖片和文字往上移動**
    let moveUp = clickCount * 25; // 每次上移 25px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 按鈕文字變化（前 5 次變化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 圖片變化（前 5 次變化）
    if (clickCount === 1) mainImage.src = "images/shocked.png"; // 驚訝
    if (clickCount === 2) mainImage.src = "images/think.png";   // 思考
    if (clickCount === 3) mainImage.src = "images/angry.png";   // 生氣
    if (clickCount === 4) mainImage.src = "images/crying.png";  // 哭泣
    if (clickCount >= 5) mainImage.src = "images/crying.png";  // 之後一直是哭泣
});

// Yes 按鈕點擊後，進入表白成功頁面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
    <div class="yes-screen">
        <h1 class="yes-text">!!!喜歡你!! ( >᎑<)♡︎ᐝ</h1>
        <img src="images/hug.png" alt="擁抱" class="yes-image">
        <button id="refreshButton" class="refresh-button">重整</button>
    </div>
    `;
    document.body.style.overflow = "hidden";

    // 為重整按鈕綁定事件
    document.getElementById("refreshButton").addEventListener("click", function() {
        location.reload(); // 重整頁面
    });
});