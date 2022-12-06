// 브라우저 체크 함수
function browserVersionCheck(){
	var agent = navigator.userAgent.toLowerCase(),
		name = navigator.appName,
		browser;

	if( name === "Microsoft Internet Explorer" || agent.indexOf("trident") > -1 || agent.indexOf("edge/") > -1 ){
		browser = "ie";
		if( name === "Microsoft Internet Explorer" ){
			agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
            browser += parseInt(agent[1]);
		} else {
			if( agent.indexOf("trident") > -1 ){
				browser += 11;
			} else if( agent.indexOf("edge/") > -1 ){
				browser = "edge";
			}
		}
	} else if( agent.indexOf("safari") > -1 ){
		if( agent.indexOf("chrome") > -1 ){
			browser = "chrome";
		} else if( agent.indexOf("safari") > -1 ) {
			browser = "safari";
		}
	} else if( agent.indexOf("firefox") > -1 ){
		browser = "firefox";
	}

	return browser;
}

/*
팝업창 사용법
<a target="_blank" href="#" onclick="popup({ url:this.href, name:'popup', width:300, height:300, position:'center', scroll:false });return false;">
<a target="_blank" href="http://www.ondisk.co.kr" onclick="popup({ url:this.href, name:'popup2', width:300, height:300, position:'center', scroll:false });return false;">팝업2</a>
*/
function popup(obj){
	var url = obj.url;
	var name = obj.name || "popup";
	var w = obj.width || 450;
	var h = obj.height || 650;
	var position = obj.position;
	var scroll = obj.scroll;
	var browserCheck = browserVersionCheck() || false;

	var tlOpt = 'top=0, left=0';
	if(position == "center"){
		var top = screen.height/2 - h/2 - 100;
		var left = screen.width/2 - w/2;
		if(top<0) top=0;
		if(left<0) left=0;
		tlOpt = ',top='+top +',left='+left;

	} else if( Object.prototype.toString.call(position) == "[object Object]" && "top" in position && "left" in position ){
		tlOpt = ',top='+position.top+',left='+position.left;
	}

	if( browserCheck == "chrome" ){
		w = w + 18;
		h = h - 20;
	} else if( browserCheck == "firefox" ){
		w = w + 20;
		h = h - 5;
	}

	//if( navigator.userAgent.toLowerCase().indexOf("msie") != -1 ) w -= 6;

	sOpt = (scroll == "scroll" || scroll === true) ? ",scrollbars=yes" :  ""; // 창스크롤
	winOptions = tlOpt+',width='+w +',height='+h +sOpt +', resizable=yes'; // top, left, width, height, location, menubar, resizable, scrollbar, status

	var popWin = window.open(url, name, winOptions);

    return popWin;
}

// 프로젝트 상세 내용
var dataList = {
    "website" : [ // 웹사이트
	{ // Ebook
        title : "Web/Mobile",
        tag : "#Ebook 뷰어, #사이트 유지보수",
        link : "ebook/ebook_viewer.html",
        linkTarget : "popup",
        view : [{
            imgSrc : "image/main_ebook_img1.jpg",
            text : "",
			size : "original"
        }, {
            imgSrc : "image/main_ebook_img2.jpg",
            text : "",
			size : "original"
        }, {
            imgSrc : "image/main_ebook_img3.jpg",
            text : "",
			size : "original"
        }]
    }, { // Player
        title : "Web/Mobile",
        tag : "#Player 뷰어, #사이트 유지보수",
        link : "player/player.html",
        linkTarget : "popup",
        view : [{
            imgSrc : "image/main_player_img1.jpg",
            text : "",
			size : "original"
        }, {
            imgSrc : "image/main_player_img2.jpg",
            text : "",
			size : "original"
        }, {
            imgSrc : "image/main_player_img3.jpg",
            text : "",
			size : "original"
        }, {
            imgSrc : "image/main_player_img4.jpg",
            text : "",
			size : "original"
        }]
    }, { // 온디스크 웹
        title : "Web/Mobile",
        tag : "#온디스크 사이트, #사이트 유지보수",
        link : "https://ondisk.co.kr",
        linkTarget : "blank",
        view : [{
            imgSrc : "image/main_ondisk_img1.jpg",
            text : ""
        }, {
            imgSrc : "image/main_ondisk_img2.jpg",
            text : ""
        }, {
            imgSrc : "image/main_ondisk_img3.jpg",
            text : ""
        }]
    }, { // 온디스크 모바일
        title : "Web/Mobile",
        tag : "#온디스크 모바일 사이트, #사이트 유지보수",
        link : "https://m.ondisk.co.kr",
        linkTarget : "blank",
        view : [{
            imgSrc : "image/main_ondisk_img.jpg",
            text : "",
			size : "original"
        }]
    }, { // 케이디스크 웹
        title : "Web/Mobile",
        tag : "#케이디스크 사이트, #사이트 유지보수",
        link : "https://kdisk.co.kr",
        linkTarget : "blank",
        view : [{
            imgSrc : "image/main_kdisk_img1.jpg",
            text : ""
        }, {
            imgSrc : "image/main_kdisk_img2.jpg",
            text : ""
        }, {
            imgSrc : "image/main_kdisk_img3.jpg",
            text : ""
        }]
    }, { // 케이디스크 모바일
        title : "Web/Mobile",
        tag : "#케이디스크 모바일 사이트, #사이트 유지보수",
        link : "https://m.kdisk.co.kr",
        linkTarget : "blank",
        view : [{
            imgSrc : "image/main_kdisk_mobile_img3.jpg",
            text : "",
			size : "original"
        }]
    }, { // 관리자
        title : "Web/Mobile",
        tag : "#사이트 웹 관리자, #사이트 유지보수",
        link : "admin/index.html",
        linkTarget : "blank",
        view : [{
            imgSrc : "image/main_admin_img1.jpg",
            text : ""
        }, {
			imgSrc : "image/main_admin_img2.jpg",
            text : "",
			size : "original"
		}, {
			imgSrc : "image/main_admin_img3.jpg",
            text : "",
			size : "original"
        }]
    }],
    "responsiveSite" : [ // 반응형
	{ // 교육인생이모작지원센터
        title : "반응형",
        tag : "#교육인생이모작지원센터 사이트, #반응형사이트",
        link : "responsive/education/index.html",
        linkTarget : "blank",
        view : [{
            imgSrc : "image/main_edu_img1.jpg",
            text : ""
        }, {
            imgSrc : "image/main_edu_img4.jpg",
            text : ""
        }]
    }, { // 더센에듀
        title : "반응형",
        tag : "#더센에듀 사이트, #반응형사이트",
        link : "",
        linkTarget : "blank",
        view : [{
            imgSrc : "image/main_edu2_img1.jpg",
            text : ""
        }, {
            imgSrc : "image/main_edu2_img4.jpg",
            text : ""
        }]
    }],
    "guide" : [ // Guide
	{ // Html 가이드
        title : "Guide",
        tag : "#Html 가이드",
        link : "guide/guide_html.html",
        linkTarget : "blank",
        view : [{
            imgSrc : "image/main_guide_html_img.jpg",
            text : ""
        }]
    }, { // Name 가이드
        title : "Guide",
        tag : "#Name 가이드",
        link : "guide/guide_name.html",
        linkTarget : "blank",
        view : [{
            imgSrc : "image/main_guide_name_img.jpg",
            text : ""
        }]
    }, {  // Javascript 가이드
        title : "Guide",
        tag : "#Javascript 가이드, #Vanilla JS, #jQuery JS",
        link : "guide/guide_javascript.html",
        linkTarget : "blank",
        view : [{
            imgSrc : "image/main_guide_javascript_img.jpg",
            text : ""
        }]
    }],
    "projectTool" : [ // 프로젝트관리툴
	{ // 스프레드시트 관리
        title : "프로젝트 관리",
        tag : "#담당자 일정 관리, #구글 스프레드시트",
        link : "",
        linkTarget : "",
        view : [{
            imgSrc : "image/main_guide_produce_img.jpg",
            text : ""
        }]
    }, { // 페이지 관리
        title : "프로젝트 관리",
        tag : "#프로젝트 페이지 관리",
        link : "project/index.html",
        linkTarget : "blank",
        view : [{
            imgSrc : "image/main_guide_page_img.jpg",
            text : ""
        }]
    }]
};

// 포트폴리오
class SitePortforlio {
    // 리스트 AOS 기능
    funcElementSlide(op){
        let units = op.unit
        , className = op.className
        , initTime = op.time
        , viewStandardValue = (window.pageYOffset + window.innerHeight) - 100;

        // 리스트 슬라이드 체크
        for( var i=0; i<units.length; i++ ){
            // 첫번째 리스트에 Time값 적용
            if( className == "item_mt" ){
                var delayValue = initTime + parseFloat((0.2 * i).toFixed(1));
            } else {
                var delayValue = initTime + parseFloat((0.1 * i).toFixed(1));
            }
            
            // 스크롤 위치값 체크후 리스트 활성화
            if( viewStandardValue > window.pageYOffset + units[i].getBoundingClientRect().top ){
                if( !units[i].classList.contains(className + "_active") ){
                    units[i].classList.add(className + "_active");
                    units[i].style.transitionDelay = (delayValue) + "s";
                }
            }
        }
    }

    // 리스트 스크롤 아이콘
    funcScrollToggle(op){
        var lineCount = Math.floor(window.innerWidth/op.unit[0].offsetWidth);

        // lineCount 보다 리스트가 적을경우 스크롤 아이콘 비활성화
        if( op.unit.length <= lineCount ){
            op.icon.classList.add("scroll_icon_disable");
        } else { // 스크롤 아이콘 활성화
            op.icon.classList.remove("scroll_icon_disable");

            for( var i=0; i<op.unit.length; i++ ){
                if( op.unit[i].classList.contains("item_mt_active") ){
                    if( i >= lineCount ){
                        op.icon.classList.add("scroll_icon_disable");

                        break;
                    }
                }
            }
        }
    }

    // 컨텐츠별 스크롤 진행바
    funcProcessBar(op){
        let processAfter = op.bar.querySelector("span");

        let totalLength = op.layer.scrollHeight - window.innerHeight
        , totalValue = Math.floor((op.layer.scrollTop/totalLength) * 100);

        // 스크롤 진행바 가로값 퍼센트 적용
        processAfter.style.width = totalValue + "%";
    }

    // 상세 레이어 TOP 버튼
    funcTopMove(op){
        if( op.layer.scrollTop >= op.posY ){
            if( !op.btnTop.classList.contains(op.className) ){
                op.btnTop.classList.add(op.className);
            }
        } else {
            if( op.btnTop.classList.contains(op.className) ){
                op.btnTop.classList.remove(op.className);
            }
        }
    }

    // Device별 클래스 적용
    funcDeviceName(op){
        // Device 추출
        let device = this.funcDeviceCheck();

        // 현재 Device 클래스가 없을경우만 적용
        if( op.layer.className.indexOf(device) == -1 ){
            if( op.layer.classList.contains("pop_view_mobile_active") ){
                op.layer.classList.remove("pop_view_mobile_default");
                op.layer.classList.remove("pop_view_mobile_active");
            } else if( op.layer.classList.contains("pop_view_web_active") ){
                op.layer.classList.remove("pop_view_web_default");
                op.layer.classList.remove("pop_view_web_active");
            } else {
                op.layer.classList.remove("pop_view_wide_default");
                op.layer.classList.remove("pop_view_wide_active");
            }
        }

        // Device별 Default 클래스 추가
        op.layer.classList.add("pop_view_" + device + "_default");
        // Device별 Active 클래스 추가
        if( op.layer.classList.contains("pop_view_active") ){
            op.layer.classList.add("pop_view_" + device + "_active");
        }
    }

    // 이미지 로드
    funcImageLoad(op){
        // 이미지 로드 카운트
        let imgCount = this.funcImageLoadIndex({ image : op.img, imageCount : op.img.length });

        // 이미지 로드 체크
        let Timer = setInterval(() => {
            if( imgCount >= op.img.length ){
                clearInterval(Timer);

                // 리스트 슬라이드 활성화
                this.funcElementSlide({
                    unit : op.unit,
                    className : "pop_up",
                    time : 0.6
                });
            } else {
                // 이미지 로드 카운트
                imgCount = this.funcImageLoadIndex({ image : op.img, imageCount : op.img.length });
            }
        }, 100);
    }

    // 이미지 로드 카운트 체크
    funcImageLoadIndex(op){
        let count = 0;

        for( let i=0; i<op.imageCount; i++ ){
            if( op.image[i].complete && op.image[i].naturalWidth != 0 ){
                if( count < op.image.length ){
                    count++;
                }
            }
        }

        return count;
    }

    // 활성화 이전 리스트 카운트
    funcCurrentPrevIndex(op){
        let paraName = op.name
        , paraArray = op.array
        , result = 0;

        // DataList별 Index 추출
        for( var value in paraArray ){
            if( paraName == value ){
                break;
            } else {
                result += document.querySelector("#js_" + value).querySelectorAll(".unit").length;
            }
        }

        return result;
    }

    // Device Check
    funcDeviceCheck(){
        let result = "";

        if( window.innerWidth < 768 ){
            result = "mobile";
        } else if( window.innerWidth >= 1420 ) {
            result = "wide";
        } else {
            result = "web";
        }

        return result;
    }
}
// 포트폴리오 클래스
const sitePortforlio = new SitePortforlio();

// 포트폴리오
function portforlio(op){
    const docBody = document.querySelector("body")
    , mobileMenu = document.getElementById(op.selectMenu)
    , webMenu = document.getElementById(op.tabMenu)
    , listUnit = document.getElementById(op.unit)
    , layerForm = document.querySelector(op.layer)
    , scrollIcon = document.querySelector(".scroll_icon")
    , processBar = document.querySelector(".process_bar")
    , topMoveIcon = document.querySelector(".btn_top_move")
    , unitExpendFlag = op.expendFlag
    , active = op.active;

    let unitList = null
    , layerUnit = null
    , menuName = "";

    // Gnb Menu 실행
    gnbMenu();

    // Unit 리스트
    let unitListBtn = listUnit.querySelectorAll(".btn_view") // 리스트 버튼
    , unitListWidth = unitList[0].offsetWidth // 리스트 가로사이즈
    , unitListMaxWidth = (unitList[0].offsetWidth+(Math.floor(unitList[0].offsetWidth/3)))-1 // 확장 리스트 가로사이즈
    , unitListMinWidth = unitList[0].offsetWidth-Math.floor(Math.floor(unitList[0].offsetWidth/3)/3) // 축소 리스트 가로사이즈
    , lineCount = Math.floor(listUnit.offsetWidth/unitListWidth);
    
    // 활성화 이전 리스트 카운트
    let prevCount = sitePortforlio.funcCurrentPrevIndex({ name : menuName, array : dataList });

    // 리스트 버튼
    Array.prototype.forEach.call(unitListBtn, function(v, i){
        // 버튼 클릭
        v.addEventListener("click", function(e){
            // 링크 기능 삭제
            e.preventDefault();

            // 활성화 이전 리스트 카운트
            prevCount = sitePortforlio.funcCurrentPrevIndex({ name : menuName, array : dataList });

            // 상세 내용 생성
            let viewContent = viewCreate(i-prevCount);
            // Device Value
            let deviceValue = sitePortforlio.funcDeviceCheck();

            // 전체 스크롤 삭제
            docBody.classList.add("body_hidden");
            // 레이어 활성화
            layerForm.classList.add("pop_view_active", "pop_view_" + deviceValue + "_active");

            // 상세 내용 로드 딜레이
            setTimeout(() => {
                let viewImg = viewContent.querySelectorAll("img");

                layerUnit = viewContent.querySelectorAll(".explain");

                // 이미지 로드
                sitePortforlio.funcImageLoad({ unit : layerUnit, img : viewImg });
            }, 50);
        });

        // 리스트 확대기능
        if( unitExpendFlag ){
            // 리스트 마우스오버
            v.addEventListener("mouseenter", function(){
                // 웹용일경우만 사용
                if( sitePortforlio.funcDeviceCheck() == "wide" ){
                    // 활성화 이전 리스트 카운트
                    let count = sitePortforlio.funcCurrentPrevIndex({ name : menuName, array : dataList });

                    // 확장 및 축소 기능
                    fluidExpand({ type : "expand", index : i, count : count });
                }
            });
            // 리스트 마우스오버
            v.addEventListener("mouseleave", function(){
                // 웹용일경우만 사용
                if( sitePortforlio.funcDeviceCheck() == "wide" ){
                    // 활성화 이전 리스트 카운트
                    let count = sitePortforlio.funcCurrentPrevIndex({ name : menuName, array : dataList });

                    // 확장 및 축소 기능
                    fluidExpand({ type : "reduce", index : i, count : count });
                }
            });
        }
    });

    // 레이어 기능 활성화
    viewLayer();

    // Window 스크롤 이벤트
    window.addEventListener("scroll", scrollEvt);
    // 상세레이어 스크롤 이벤트
    layerForm.addEventListener("scroll", scrollEvt);

    // Resize 이벤트
    window.addEventListener("resize", function(){
        // Device별 클래스 적용
        sitePortforlio.funcDeviceName({ layer : layerForm });

        // 확장 기능이 있을경만 적용
        if( unitExpendFlag ){
            if( sitePortforlio.funcDeviceCheck() == "wide" ){
                // 리스트 가로사이즈
                unitListWidth = unitList[0].offsetWidth;
                // 확장 리스트 가로사이즈
                unitListMaxWidth = (unitList[0].offsetWidth+(Math.floor(unitList[0].offsetWidth/3)))-1;
                // 축소 리스트 가로사이즈
                unitListMinWidth = unitList[0].offsetWidth-Math.floor(Math.floor(unitList[0].offsetWidth/3)/3)
                // 리스트 확대를 위한 가로형 갯수
                lineCount = Math.floor(listUnit.offsetWidth/unitListWidth);
            } else {
                for( var i=0; i<unitListBtn.length; i++ ){
                    if( unitListBtn[i].parentNode.style ){
                        unitListBtn[i].parentNode.style = "";
                    }
                }
            }
        }
    });

    // Gnb Menu
    function gnbMenu(){
        // Gnb Menu Mobile
        let mobileBtn = mobileMenu.querySelector(".button a")
        , mobileLayer = mobileMenu.querySelector(".layer")
        , mobileLayerBtn = mobileLayer.querySelectorAll("a")
        , mobileOldActive = null;

        // Gnb Menu Web
        let webBtn = webMenu.querySelectorAll("a")
        , webOldActive = null

        // Device Value
        let deviceValue = sitePortforlio.funcDeviceCheck()

        // 모바일 메뉴 버튼 클릭
        mobileBtn.addEventListener("click", function(e){
            // 링크 기능 삭제
            e.preventDefault();
            
            // 메뉴 활성화
            if( !mobileMenu.classList.contains("mobile_menu_active") ){
                mobileMenu.classList.add("mobile_menu_active");
            } else {
                mobileMenu.classList.remove("mobile_menu_active");
            }
        });

        // 모바일 레이어 버튼 클릭
        Array.prototype.forEach.call(mobileLayerBtn, function(v, i){
            v.addEventListener("click", function(e){
                // 링크 기능 삭제
                e.preventDefault();

                // 클릭한 이전값이 있을경우
                if( mobileOldActive ){
                    // 메뉴에 클릭한값 적용
                    mobileBtn.text = this.text;

                    // 컨텐츠 비활성화
                    document.querySelector(mobileOldActive.hash).style.display = "none";
                }

                // 컨텐츠 활성화
                document.querySelector(this.hash).style.display = "block";

                // 레이어 닫기
                mobileMenu.classList.remove("mobile_menu_active");

                // 선택 컨텐츠 리스트
                unitList = document.querySelector(this.hash).querySelectorAll(".unit");
                // 메뉴 활성화 ID
                menuName = this.hash.split("#js_")[1];
                
                // 웹 메뉴 비활성화
                if( webOldActive ){
                    webOldActive.parentNode.classList.remove("active");
                }
                // 웹 메뉴 활성화
                webBtn[i].parentNode.classList.add("active");
                
                // 리스트 AOS 기능
                sitePortforlio.funcElementSlide({
                    unit : unitList,
                    className : "item_mt",
                    time : 0.6
                });

                // 웹 메뉴 저장
                webOldActive = webBtn[i];
                // 선택값 저장
                mobileOldActive = this;
            });
        });

        // 웹 메뉴 버튼 클릭
        Array.prototype.forEach.call(webBtn, function(v, i){
            v.addEventListener("click", function(e){
                // 링크 기능 삭제
                e.preventDefault();

                // 클릭한 이전값이 있을경우
                if( webOldActive ){
                    // 이전 버튼 비활성화
                    webOldActive.parentNode.classList.remove("active");

                    // 컨텐츠 비활성화
                    document.querySelector(webOldActive.hash).style.display = "none";
                }

                // 클릭 버튼 활성화
                this.parentNode.classList.add("active");
                // 컨텐츠 활성화
                document.querySelector(this.hash).style.display = "block";

                // 선택 컨텐츠 리스트
                unitList = document.querySelector(this.hash).querySelectorAll(".unit");
                // 메뉴 활성화 ID
                menuName = this.hash.split("#js_")[1];
                
                // 모바일 메뉴 활성화
                mobileBtn.innerText = this.text;

                // 리스트 AOS 기능
                sitePortforlio.funcElementSlide({
                    unit : unitList,
                    className : "item_mt",
                    time : ( !webOldActive ) ? 1.6 : 0
                });

                // 리스트 스크롤 아이콘
                sitePortforlio.funcScrollToggle({
                    unit : unitList,
                    icon : scrollIcon
                });

                // 선택값 저장
                mobileOldActive = mobileLayerBtn[i];
                webOldActive = this;
            });

            // 초기 활성화
            if( i == active-1 ){
                v.click();
            }
        });
    }

    // 스크롤 이벤트
    function scrollEvt(e){
        // Gnb Menu Fixed
        gnbmenuFiexd();

        // Window일경우
        if( e.srcElement == document ){
            // 리스트 AOS 기능
            sitePortforlio.funcElementSlide({
                unit : unitList,
                className : "item_mt",
                time : 0
            });
        } else {
            // 리스트 AOS 기능
            sitePortforlio.funcElementSlide({
                unit : layerUnit,
                className : "pop_up",
                time : 0.6
            });

            // 컨텐츠 상세 스크롤 진행바
            sitePortforlio.funcProcessBar({
                bar : processBar,
                layer : layerForm
            });

            // 상세 레이어 TOP 버튼
            sitePortforlio.funcTopMove({
                layer : layerForm,
                btnTop : topMoveIcon,
                posY : 200,
                className : "btn_top_move_active"
            });
        }  

        // 리스트 스크롤 아이콘
        sitePortforlio.funcScrollToggle({
            unit : unitList,
            icon : scrollIcon
        });
    }

    // 상세 레이어
    function viewLayer(){
        let layerView = layerForm.querySelector(".view")
		, layerLink = layerForm.querySelector(".link")
        , layerBtnClose = layerForm.querySelector(".btn_close a");

        // Device별 클래스 적용
        sitePortforlio.funcDeviceName({ layer : layerForm });

        // 닫기 버튼 클릭
        layerBtnClose.addEventListener("click", function(e){
            // 링크 기본기능 삭제
            e.preventDefault();

            // 전체 스크롤 활성화
            docBody.classList.remove("body_hidden");
            // 레이어 비활성화
            layerForm.classList.remove("pop_view_" + sitePortforlio.funcDeviceCheck() + "_default", "pop_view_" + sitePortforlio.funcDeviceCheck() + "_active", "pop_view_active");
            if( processBar.querySelector("span").style.width != "0%" ){
                processBar.querySelector("span").style.width = 0;
            }

            // 상세 컨텐츠 삭제
            layerView.innerHTML = "";
			layerLink.innerHTML = "";
        });

        // Top 버튼 클릭
        topMoveIcon.addEventListener("click", function(e){
            // 링크 기본기능 삭제
            e.preventDefault();

            // 상단으로 이동
            layerForm.scrollTo({ top : 0, behavior : "smooth" });
        });
    }

    // 상세 레이어 내용 생성
    function viewCreate(index){
        let eleTitle = layerForm.querySelector(".title")
        , eleTag = layerForm.querySelector(".hashtag")
        , eleLink = layerForm.querySelector(".link")
		, eleLinkBtn = null
        , eleView = layerForm.querySelector(".view")
        , activeData = dataList[menuName][index];

        // 타이틀
        eleTitle.innerText = activeData.title;
        // 해쉬태그 및 설명
        eleTag.innerText = activeData.tag;
        // 사이트 링크
        if( activeData.link ){
            if( eleLink.style.display == "none" ){
                eleLink.style.display = "block";
            }

			// A링크 생성
			eleLinkBtn = document.createElement("a")
            eleLinkBtn.setAttribute("href", activeData.link);
			eleLinkBtn.innerText = "사이트 바로가기";

            // 링크 Target
            if( activeData.linkTarget != "popup" ){
                eleLinkBtn.setAttribute("target", "_" + activeData.linkTarget);
            } else {
                eleLinkBtn.setAttribute("onClick", "popup({ url:this.href, name:'popup', width:1200, height:1200, position:'center', scroll:false }); return false;");
            }

			eleLink.append( eleLinkBtn );
        } else {
            eleLink.style.display = "none";
        }

        // 상세 레이어 내용 생성
        for( let i=0; i<activeData.view.length; i++ ){
            // 상세 리스트
            let tagExplain = document.createElement("div");
            tagExplain.classList.add("explain", "pop_up_default");
            // 상세 이미지
            let tagImg = document.createElement("img");
            tagImg.setAttribute("src", activeData.view[i].imgSrc);

			// 이미지 사이즈
			if( activeData.view[i].size ){
				tagImg.classList.add("pop_size_original");
			}

            // 상세 리스트 내용 추가
            tagExplain.append(
                tagImg
            );

            // 상세 텍스트
			if( activeData.view[i].text ){
				let tagPara = document.createElement("p");
	            tagPara.classList.add("txt");
	            tagPara.innerText = activeData.view[i].text;

                // 상세 리스트 내용 추가
                tagExplain.append(
                    tagPara ?? ""
                );
			}

            eleView.append(tagExplain);
        }

        return eleView;
    }

    // Gnb Menu Fixed
    function gnbmenuFiexd(){
        var title = document.querySelector(".h1Type")
        , fiexdPosY = (window.scrollY + title.getBoundingClientRect().top) + title.offsetHeight + (parseFloat(window.getComputedStyle(title).getPropertyValue("margin-bottom"))-20);

        // 스크롤 높이가 메뉴위치에서 Fixed 변경
        if( window.scrollY > fiexdPosY ){
            if( sitePortforlio.funcDeviceCheck() == "wide" || sitePortforlio.funcDeviceCheck() == "web" ){
                // Web Menu fixed
                if( !webMenu.classList.contains("tabType_fixed") ){
                    webMenu.classList.add("tabType_fixed");
                }

                // 컨텐츠 위치
                if( !listUnit.classList.contains("project_list_fiexd") ){
                    listUnit.classList.add("project_list_fiexd");

                    listUnit.style.top = (webMenu.offsetHeight-17) + "px";
                }
            } else {
                // Mobile Menu fixed
                if( !mobileMenu.classList.contains("mobile_menu_fixed") ){
                    mobileMenu.classList.add("mobile_menu_fixed");
                }

                // 컨텐츠 위치
                if( !listUnit.classList.contains("project_list_fiexd") ){
                    listUnit.classList.add("project_list_fiexd");

                    listUnit.style.top = (mobileMenu.offsetHeight-12) + "px";
                }
            }
        } else {
            if( sitePortforlio.funcDeviceCheck() == "wide" || sitePortforlio.funcDeviceCheck() == "web" ){
                // Web Menu fixed
                if( webMenu.classList.contains("tabType_fixed") ){
                    webMenu.classList.remove("tabType_fixed");
                }
            } else {
                // Mobile Menu fixed
                if( mobileMenu.classList.contains("mobile_menu_fixed") ){
                    mobileMenu.classList.remove("mobile_menu_fixed");
                }
            }

            if( listUnit.classList.contains("project_list_fiexd") ){
                listUnit.classList.remove("project_list_fiexd");

                listUnit.style.top = 0;
            }
        }
    }

    // 확장 및 축소 기능
    function fluidExpand(m){
        let startNum = 0 // 시작 인덱스
        , maxLength = 0; // 마지막 인덱스

        // 첫번째 메뉴 인텍스
        if( m.count == 0 ){
            startNum = Math.floor(m.index/lineCount)*lineCount;

            if( unitList.length <= lineCount ){
                maxLength = m.count + unitList.length;
            } else {
                if( unitList.length > lineCount*(Math.floor(m.index/lineCount)+1) ){
                    maxLength = lineCount*(Math.floor(m.index/lineCount)+1);
                } else {
                    maxLength = m.count + unitList.length;
                }                    
            }
        } else { // 그외 메뉴 인텍스
            startNum = m.count + (Math.floor((m.index-m.count)/lineCount)*lineCount);

            if( unitList.length <= lineCount ){
                maxLength = m.count + unitList.length;
            } else {
                if( lineCount >= Math.floor((m.index-m.count)/lineCount)+lineCount ){
                    maxLength = m.count + (Math.floor((m.index-m.count)/lineCount)+lineCount);
                } else {
                    maxLength = m.count + unitList.length;
                }                    
            }
        }

        // 조건별 Style 적용
        for( var i=startNum; i<maxLength; i++ ){
            if( m.type == "expand" ){
                // 딜레이 0으로 초기화
                unitListBtn[i].parentNode.style.transitionDelay = "0" + "s";

                // 현재 활성화
                if( i == m.index ){
                    unitListBtn[i].parentNode.style.width = unitListMaxWidth + "px";
                } else { // 그외
                    unitListBtn[i].parentNode.style.width = unitListMinWidth + "px";
                }
            } else {
                // 현재 활성화
                unitListBtn[i].parentNode.style.width = unitListWidth + "px";
            }
        }
    }
};