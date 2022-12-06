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
function SitePortforlio(m){
    // new없이 함수 호출했을경우 체크
    if( !new.target ){
        return new SitePortforlio(m);
    }

    // Body 태그
    this.tagBody = document.querySelector("body");
    // Wrap 태그
    this.tagWrap = document.querySelector(".wrap");
    // 모바일 전용 Gnb메뉴
    this.mobileMenu = document.getElementById(m.selectMenu);
    // 웹 전용 Gnb메뉴
    this.webMenu = document.getElementById(m.tabMenu);
    // 메인 리스트
    this.unitForm = document.getElementById(m.unit);
    // 상세 레이어
    this.layerForm = document.querySelector(m.layer);
    // Scroll 아이콘
    this.scrollIcon = document.querySelector(".scroll_icon");
    // Mouse 포인터
    this.mousePointer = document.querySelector(".mouse_pointer");
    // 상세 진행바
    this.processBar = document.querySelector(".process_bar");
    // TOP 버튼
    this.btnTopMove = document.querySelector(".btn_top_move");

    // 메인 리스트 확장 여부
    this.unitExpendFlag = m.expendFlag ?? false;
    // 메인 리스트 활성화 총 갯수
    this.unitTotalCount = this.unitForm.querySelectorAll(".unit").length;
    // 메뉴별 리스트
    this.unit = null;
    // 상세 레이어 리스트
    this.layerUnit = null;
    // 메뉴 활성화 카운트
    this.menuCount = m.active;
    // 메뉴 활성화 ID
    this.menuActive = "";
    // 메뉴 이전버튼
    this.mobileOldThis = null;
    this.webOldThis = null;
    // Device 별
    this.device = null;
    this.oldDevice = null;
    // TOP 버튼 기준값
    this.topMoveValue = 200;

    // 초기 실행
    this.funcInit();
}
SitePortforlio.prototype = {
    // 초기 실행
    funcInit : function(){
        var that = this

        // Gnb Menu
        this.funcGnbMenu();

        var unitList = this.unitForm.querySelectorAll(".btn_view") // 리스트 버튼
        , unitListWidth = this.unit[0].offsetWidth // 리스트 가로사이즈
        , unitListMaxWidth = (this.unit[0].offsetWidth+(Math.floor(this.unit[0].offsetWidth/3)))-1 // 확장 리스트 가로사이즈
        , unitListMinWidth = this.unit[0].offsetWidth-Math.floor(Math.floor(this.unit[0].offsetWidth/3)/3) // 축소 리스트 가로사이즈
        , lineCount = Math.floor(this.unitForm.offsetWidth/unitListWidth);

        // 현재 Index 값
        currentIndexResult();

        // 리스트 버튼
        Array.prototype.forEach.call(unitList, function(v, i){
            // 버튼 클릭
            v.addEventListener("click", function(e){
                // 링크 기능 삭제
                e.preventDefault();

                // 현재 Index 값
                currentIndexResult();
                
                // 타입별 카운팅
                var typeCount = i-count;

                // 상세 내용 생성
                var viewDetail = that.funcViewContentCreate(typeCount);

                // 전체 스크롤 삭제
                that.tagBody.classList.add("body_hidden");
                // 레이어 활성화
                that.layerForm.classList.add("pop_view_" + that.device + "_active", "pop_view_active");

                // 상세 내용 로드 딜레이
                setTimeout(function(){
                    that.layerUnit = viewDetail.querySelectorAll(".explain");
                    var viewImg = viewDetail.querySelectorAll("img");

                    // 이미지 로드
                    that.funcImageLoad({ unit : that.layerUnit, img : viewImg });
                }, 50);
            });

            // 리스트 확대기능
            if( that.unitExpendFlag ){
                // 리스트 마우스오버
                v.addEventListener("mouseenter", function(){
                    // 웹용일경우만 사용
                    if( that.device == "wide" ){
                        // 현재 Index 값
                        currentIndexResult();

                        // 확장 및 축소 기능
                        divisionExpand({ type : "expand", index : i });
                    }
                });
                // 리스트 마우스오버
                v.addEventListener("mouseleave", function(){
                    // 웹용일경우만 사용
                    if( that.device == "wide" ){
                        // 현재 Index 값
                        currentIndexResult();

                        // 확장 및 축소 기능
                        divisionExpand({ type : "reduce", index : i });
                    }
                });
            }
        });

        // 상세 페이지
        this.funcViewActive();

        // Window 스크롤 이벤트
        window.addEventListener("scroll", this.funcScrollEvt.bind(this));
        // 상세레이어 스크롤 이벤트
        this.layerForm.addEventListener("scroll", this.funcScrollEvt.bind(this));

        // Resize 이벤트
        window.addEventListener("resize", function(){
            // Device별 클래스 적용
            that.funcDeviceName();

            // 확장 기능이 있을경만 적용
            if( that.unitExpendFlag ){
                if( that.device == "wide" ){
                    // 리스트 가로사이즈
                    unitListWidth = that.unit[0].offsetWidth;
                    // 확장 리스트 가로사이즈
                    unitListMaxWidth = (that.unit[0].offsetWidth+(Math.floor(that.unit[0].offsetWidth/3)))-1;
                    // 축소 리스트 가로사이즈
                    unitListMinWidth = that.unit[0].offsetWidth-Math.floor(Math.floor(that.unit[0].offsetWidth/3)/3)
                    // 리스트 확대를 위한 가로형 갯수
                    lineCount = Math.floor(that.unitForm.offsetWidth/unitListWidth);
                } else {
                    for( var i=0; i<unitList.length; i++ ){
                        if( unitList[i].parentNode.style ){
                            unitList[i].parentNode.style = "";
                        }
                    }
                }
            }
        });

        // 확장 및 축소 기능
        function divisionExpand(m){
            var startNum = 0 // 시작 인덱스
            , maxLength = 0; // 마지막 인덱스

            // 첫번째 메뉴 인텍스
            if( count == 0 ){
                startNum = Math.floor(m.index/lineCount)*lineCount;

                if( that.unit.length <= lineCount ){
                    maxLength = count + that.unit.length;
                } else {
                    if( that.unit.length > lineCount*(Math.floor(m.index/lineCount)+1) ){
                        maxLength = lineCount*(Math.floor(m.index/lineCount)+1);
                    } else {
                        maxLength = count + that.unit.length;
                    }                    
                }
            } else { // 그외 메뉴 인텍스
                startNum = count + (Math.floor((m.index-count)/lineCount)*lineCount);

                if( that.unit.length <= lineCount ){
                    maxLength = count + that.unit.length;
                } else {
                    if( lineCount >= Math.floor((m.index-count)/lineCount)+lineCount ){
                        maxLength = count + (Math.floor((m.index-count)/lineCount)+lineCount);
                    } else {
                        maxLength = count + that.unit.length;
                    }                    
                }
            }

            // 조건별 Style 적용
            for( var k=startNum; k<maxLength; k++ ){
                if( m.type == "expand" ){
                    // 딜레이 0으로 초기화
                    unitList[k].parentNode.style.transitionDelay = "0" + "s";

                    // 현재 활성화
                    if( k == m.index ){
                        unitList[k].parentNode.style.width = unitListMaxWidth + "px";
                    } else { // 그외
                        unitList[k].parentNode.style.width = unitListMinWidth + "px";
                    }
                } else {
                    // 현재 활성화
                    unitList[k].parentNode.style.width = unitListWidth + "px";
                }
            }
        }

        // 현재 Index 값
        function currentIndexResult(){
            // 초기화
            count = 0;

            // DataList별 Index 추출
            for( var value in dataList ){
                if( that.menuActive == value ){
                    break;
                } else {
                    count += document.querySelector("#js_" + value).querySelectorAll(".unit").length;
                }
            }
        }
    },
    // Gnb Menu
    funcGnbMenu : function(){
        var that = this
        , mobileId = this.mobileMenu
        , mobileButton = mobileId.querySelector(".button a")
        , mobileLayer = mobileId.querySelector(".layer")
        , mobileLayerBtn = mobileLayer.querySelectorAll("a")
        , webId = this.webMenu
        , webButton = webId.querySelectorAll("a");

        // 모바일 셀렉트버튼 클릭
        mobileButton.addEventListener("click", function(e){
            // 링크 기능 삭제
            e.preventDefault();
            
            // 메뉴 활성화
            if( !mobileId.classList.contains("mobile_menu_active") ){
                mobileId.classList.add("mobile_menu_active");
            } else {
                mobileId.classList.remove("mobile_menu_active");
            }
        });

        // 모바일 레이어 버튼 클릭
        Array.prototype.forEach.call(mobileLayerBtn, function(v, i){
            v.addEventListener("click", function(e){
                // 링크 기능 삭제
                e.preventDefault();

                // 이전 버튼 비활성화
                if( that.mobileOldThis ){
                    // 메뉴 비활성화
                    that.mobileOldThis.parentNode.classList.remove("active");
                    // 컨텐츠 비활성화
                    document.querySelector(that.mobileOldThis.hash).style.display = "none";
                }

                // 레이어 비활성화
                mobileId.classList.remove("mobile_menu_active");
                // 버튼 텍스트
                if( mobileButton.innerText != this.text ){
                    mobileButton.innerText = this.text;
                }
                // 컨텐츠 활성화
                document.querySelector(this.hash).style.display = "block";
                // 모바일 메뉴 활성화
                clickMenuActive({ type : "mobile", index : i });
                // 선택 컨텐츠 리스트
                that.unit = document.querySelector(this.hash).querySelectorAll(".unit");

                // 메뉴 활성화 ID
                that.menuActive = this.hash.split("#js_")[1];

                // 리스트 슬라이드 활성화
                that.funcElementSlide({ unit : that.unit, className : "item_mt", time : 0 });

                // 현재 활성화 저장
                that.mobileOldThis = this;
            });
        });

        // 웹 메뉴 버튼 클릭
        Array.prototype.forEach.call(webButton, function(v, i){
            v.addEventListener("click", function(e){
                // 링크 기능 삭제
                e.preventDefault();

                // 이전 버튼 비활성화
                if( that.webOldThis ){
                    // 메뉴 비활성화
                    that.webOldThis.parentNode.classList.remove("active");
                    // 컨텐츠 비활성화
                    document.querySelector(that.webOldThis.hash).style.display = "none";
                }

                // 메뉴 활성화
                this.parentNode.classList.add("active");
                // 컨텐츠 활성화
                document.querySelector(this.hash).style.display = "block";
                // 모바일 메뉴 활성화
                clickMenuActive({ type : "web", index : i });
                // 선택 컨텐츠 리스트
                that.unit = document.querySelector(this.hash).querySelectorAll(".unit");

                // 메뉴 활성화 ID
                that.menuActive = this.hash.split("#js_")[1];

                // 리스트 슬라이드 활성화
                that.funcElementSlide({
                    unit : that.unit,
                    className : "item_mt",
                    time : ( !that.webOldThis ) ? 1.4 : 0
                });

                // 스크롤 아이콘 기능
                that.funcScrollToggle();

                // 현재 활성화 저장
                that.webOldThis = this;
            });

            // 초기 활성화
            if( i == that.menuCount-1 ){
                v.click();
            }
        });

        /*
        // 초기 메뉴 활성화
        function initMenuActive(m){
            var device = m.device
            , button = device == "mobile" ? mobileLayerBtn : webButton;

            // 초기 메뉴 활성화
            for( var i=0; i<button.length; i++ ){
                if( that.menuCount-1 == i ){
                    if( device == "mobile" ){
                        mobileButton.innerText = button[i].text;
                    } else {
                        button[i].parentNode.classList.add("active");
                    }
                    
                    // 모바일 사이즈일경우 컨텐츠 활성화
                    document.querySelector(button[i].getAttribute("href")).style.display = "block";
                    // 선택 컨텐츠 리스트
                    that.unit = document.querySelector(button[i].getAttribute("href")).querySelectorAll(".unit");

                    // 메뉴 활성화 ID
                    that.menuActive = button[i].getAttribute("href").split("#js_")[1];

                    // 리스트 슬라이드 활성화
                    that.funcElementSlide({ unit : that.unit, className : "item_mt", time : 1.6 });

                    if( device == "mobile" ){
                        // 현재 모바일 메뉴 저장
                        that.mobileOldThis = button[i];
                    } else {
                        // 현재 웹 메뉴 저장
                        that.webOldThis = button[i];
                    }
                }
            }
        }
        */

        // 클릭 메뉴 활성화
        function clickMenuActive(m){
            var type = m.type
            , index = m.index;

            // 모바일 메뉴 클릭
            if( type == "mobile" ){
                // 메뉴 비활성화
                if( that.webOldThis ){
                    that.webOldThis.parentNode.classList.remove("active");
                }
                // 메뉴 활성화
                webButton[index].parentNode.classList.add("active");

                // 현재 웹 메뉴 저장
                that.webOldThis = webButton[index];
            } else { // 웹 메뉴 클릭
                // 메뉴 활성화
                mobileButton.innerText = mobileLayerBtn[index].text;
                that.mobileOldThis = mobileLayerBtn[index];
            }
        }
    },
    // 리스트 슬라이드 활성화 체크
    funcElementSlide : function(m){
        var unit = m.unit
        , className = m.className
        , initTime = m.time
        , viewStandardValue = (window.pageYOffset + window.innerHeight) - 100;

        // 리스트 슬라이드 체크
        for( var i=0; i<unit.length; i++ ){
            // 첫번째 리스트에 Time값 적용
            if( className == "item_mt" ){
                var delayValue = initTime + parseFloat((0.2 * i).toFixed(1));
            } else {
                var delayValue = initTime + parseFloat((0.1 * i).toFixed(1));
            }
            
            // 스크롤 위치값 체크후 리스트 활성화
            if( viewStandardValue > window.pageYOffset + unit[i].getBoundingClientRect().top ){
                if( !unit[i].classList.contains(className + "_active") ){
                    unit[i].classList.add(className + "_active");
                    unit[i].style.transitionDelay = (delayValue) + "s";
                }
            }
        }
    },
    // 상세 레이어
    funcViewActive : function(m){
        var that = this
        , layer = this.layerForm
        , layerView = layer.querySelector(".view")
		, layerLink = layer.querySelector(".link")
        , layerBtnClose = layer.querySelector(".btn_close a");

        // Device별 클래스 적용
        this.funcDeviceName();

        // 닫기 버튼 클릭
        layerBtnClose.addEventListener("click", function(e){
            // 링크 기본기능 삭제
            e.preventDefault();

            // 전체 스크롤 활성화
            that.tagBody.classList.remove("body_hidden");
            // 레이어 비활성화
            layer.classList.remove("pop_view_" + that.device + "_active", "pop_view_active");
            if( that.processBar.querySelector("span").style.width != "0%" ){
                that.processBar.querySelector("span").style.width = 0;
            }

            // 상세 컨텐츠 삭제
            layerView.innerHTML = "";
			layerLink.innerHTML = "";
        });

        // Top 버튼 클릭
        this.btnTopMove.addEventListener("click", function(e){
            // 링크 기본기능 삭제
            e.preventDefault();

            layer.scrollTo({ top : 0, behavior : "smooth" });
        });
    },
    // 상세 레이어 내용 생성
    funcViewContentCreate : function(count){
        var eleTarget = this.layerForm
        , eleTitle = eleTarget.querySelector(".title")
        , eleTag = eleTarget.querySelector(".hashtag")
        , eleLink = eleTarget.querySelector(".link")
		, eleLinkBtn = null
        , eleView = eleTarget.querySelector(".view")
        , activeData = dataList[this.menuActive][count];

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
        for( var i=0; i<activeData.view.length; i++ ){
            // 상세 리스트
            var tagExplain = document.createElement("div");
            tagExplain.classList.add("explain", "pop_up_default");
            // 상세 이미지
            var tagImg = document.createElement("img");
            tagImg.setAttribute("src", activeData.view[i].imgSrc);

			// 이미지 사이즈
			if( activeData.view[i].size ){
				tagImg.classList.add("pop_size_original");
			}

            // 상세 텍스트
			if( activeData.view[i].text ){
				var tagPara = document.createElement("p");
	            tagPara.classList.add("txt");
	            tagPara.innerText = activeData.view[i].text;
			}

            // 상세 리스트 내용 추가
            tagExplain.append(
                tagImg,
                tagPara ? tagPara : ""
            );
            eleView.append(tagExplain);
        }

        return eleView;
    },
    // Device별 클래스 적용
    funcDeviceName : function(){
        // Device 추출
        this.device = this.funcViewCheck();

        // Device별 활성화 클래스 삭제
        if( this.device != this.oldDevice ){
            // Device별 클래스 삭제
            this.layerForm.classList.remove("pop_view_" + this.oldDevice + "_default");

            if( this.layerForm.classList.contains("pop_view_" + this.oldDevice + "_active") ){
                // Device별 클래스 삭제
                this.layerForm.classList.remove("pop_view_" + this.oldDevice + "_active");
            }
        }

        // Device별 활성화 클래스 추가
        this.layerForm.classList.add("pop_view_" + this.device + "_default");

        if( this.layerForm.classList.contains("pop_view_active") ){
            // Device별 클래스 추가
            this.layerForm.classList.add("pop_view_" + this.device + "_active");
        }

        this.oldDevice = this.device;
    },
    // 이미지 로드
    funcImageLoad : function(m){
        var that = this
        , viewUnit = m.unit
        , viewImg = m.img
        , viewCount = viewImg.length;

        // 이미지 로드 카운트
        var imgCount = imgLoadCount();

        // 이미지 로드 체크
        var Timer = setInterval(function(){
            if( imgCount >= viewImg.length ){
                clearInterval(Timer);

                // 리스트 슬라이드 활성화
                that.funcElementSlide({
                    unit : viewUnit,
                    className : "pop_up",
                    time : 0.6
                });
            } else {
                // 이미지 로드 카운트
                imgCount = imgLoadCount();
            }
        }, 100);

        // 이미지 로드 카운트
        function imgLoadCount(){
            var count = 0;

            for( var i=0; i<viewCount; i++ ){
                if( viewImg[i].complete && viewImg[i].naturalWidth != 0 ){
                    if( count < viewImg.length ){
                        count++;
                    }
                }
            }

            return count;
        }
    },
    // Window 또는 Layer 스크롤 이벤트
    funcScrollEvt : function(e){
        // Gnb Menu Fixed
        this.funcMenuFiexd();

        // Window일경우
        if( e.srcElement == document ){
            // 리스트 슬라이드 활성화
            this.funcElementSlide({
                unit : this.unit,
                className : "item_mt",
                time : 0
            });
        } else {
            // 리스트 슬라이드 활성화
            this.funcElementSlide({
                unit : this.layerUnit,
                className : "pop_up",
                time : 0.6
            });

            // 컨텐츠별 스크롤 진행바
            this.funcProcessBar();

            // Top 버튼
            this.funcTopMove();
        }        

        // Scroll Icon Active
        this.funcScrollToggle();
    },
    // Gnb Menu Fixed
    funcMenuFiexd : function(){
        var title = document.querySelector(".h1Type")
        , fiexdPosY = (window.scrollY + title.getBoundingClientRect().top) + title.offsetHeight + (parseFloat(window.getComputedStyle(title).getPropertyValue("margin-bottom"))-20);

        // 스크롤 높이가 메뉴위치에서 Fixed 변경
        if( window.scrollY > fiexdPosY ){
            if( this.funcViewCheck() == "wide" || this.funcViewCheck() == "web" ){
                // Web Menu fixed
                if( !this.webMenu.classList.contains("tabType_fixed") ){
                    this.webMenu.classList.add("tabType_fixed");
                }

                // 컨텐츠 위치
                if( !this.unitForm.classList.contains("project_list_fiexd") ){
                    this.unitForm.classList.add("project_list_fiexd");

                    this.unitForm.style.top = (this.webMenu.offsetHeight-17) + "px";
                }
            } else {
                // Mobile Menu fixed
                if( !this.mobileMenu.classList.contains("mobile_menu_fixed") ){
                    this.mobileMenu.classList.add("mobile_menu_fixed");
                }

                // 컨텐츠 위치
                if( !this.unitForm.classList.contains("project_list_fiexd") ){
                    this.unitForm.classList.add("project_list_fiexd");

                    this.unitForm.style.top = (this.mobileMenu.offsetHeight-12) + "px";
                }
            }
        } else {
            if( this.funcViewCheck() == "wide" || this.funcViewCheck() == "web" ){
                // Web Menu fixed
                if( this.webMenu.classList.contains("tabType_fixed") ){
                    this.webMenu.classList.remove("tabType_fixed");
                }
            } else {
                // Mobile Menu fixed
                if( this.mobileMenu.classList.contains("mobile_menu_fixed") ){
                    this.mobileMenu.classList.remove("mobile_menu_fixed");
                }
            }

            if( this.unitForm.classList.contains("project_list_fiexd") ){
                this.unitForm.classList.remove("project_list_fiexd");

                this.unitForm.style.top = 0;
            }
        }
    },
    // 컨텐츠별 스크롤 진행바
    funcProcessBar : function(){
        var processAfter = this.processBar.querySelector("span");

        var totalLength = this.layerForm.scrollHeight - window.innerHeight
        , totalValue = Math.floor((this.layerForm.scrollTop/totalLength) * 100);

        // 스크롤 진행바 가로값 퍼센트 적용
        processAfter.style.width = totalValue + "%";
    },
    // 상세 레이어 TOP 버튼
    funcTopMove : function(){
        if( this.layerForm.scrollTop >= this.topMoveValue ){
            if( !this.btnTopMove.classList.contains("btn_top_move_active") ){
                this.btnTopMove.classList.add("btn_top_move_active");
            }
        } else {
            if( this.btnTopMove.classList.contains("btn_top_move_active") ){
                this.btnTopMove.classList.remove("btn_top_move_active");
            }
        }
    },
    // Scroll Icon Active
    funcScrollToggle : function(){
        var lineCount = Math.floor(window.innerWidth/this.unit[0].offsetWidth);

        // lineCount 보다 리스트가 적을경우 스크롤 아이콘 비활성화
        if( this.unit.length <= lineCount ){
            this.scrollIcon.classList.add("scroll_icon_disable");
        } else { // 스크롤 아이콘 활성화
            this.scrollIcon.classList.remove("scroll_icon_disable");

            for( var i=0; i<this.unit.length; i++ ){
                if( this.unit[i].classList.contains("item_mt_active") ){
                    if( i >= lineCount ){
                        this.scrollIcon.classList.add("scroll_icon_disable");

                        break;
                    }
                }
            }
        }
    },
    // 해상도 체크
    funcViewCheck : function(){
        var result = null;

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

