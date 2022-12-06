
const btnPush = document.querySelector(".js_btn_push");
console.log(btnPush);

btnPush.addEventListener("click", function(e) {
    Notification.requestPermission().then(function(result) {
        if( result === "granted" ){
            randomNotification();
        }
    });
});

const games = [{
    name : "오늘의 날씨",
    author : "오늘 중부지방에는 소나기가 내리겠습니다.",
    slug : "icon-96x96"
}, {
    name : "오늘의 이벤트",
    author : "이번주 이벤트는 여러분이 상상을 초월하는것입니다.",
    slug : "icon-96x96"
}, {
    name : "기획전",
    author : "우리의 기획전은 항상 새롭습니다.",
    slug : "icon-96x96"
}];

function randomNotification() {
    var randomItem = Math.floor(Math.random()*games.length);
    var notifTitle = games[randomItem].name;
    var notifBody = games[randomItem].author+'.';
    var notifImg = '/portfolio/image/favicon/'+games[randomItem].slug+'.png';
    var options = {
        body: notifBody,
        icon: notifImg
    }
    var notif = new Notification(notifTitle, options);
}

/*
const pwaButton = document.querySelector(".js_button");
let deferredPrompt;

// 설치전 체크
window.addEventListener("beforeinstallprompt", function(e){
    e.preventDefault();

    deferredPrompt = e;

    pwaButton.style.display = "block";
});

// 설치 버튼 클릭
pwaButton.addEventListener("click", () => {
    if( !deferredPrompt ){
        return false;
    }

    // 설치 prompt 호출
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
        } else {
            console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
    });

    console.log(deferredPrompt);
});


// 앱을 설치 완료 했을경우
window.addEventListener('appinstalled', (event) => {
    // 이벤트 초기화 (리소스 가비지 처리) 
    deferredPrompt = null;
});*/