
let selectors = {
    comments: '[class^=VirtualScroller__Scroll]',
    banners: '[class^=Banner__LiWrap]',
    timer: '[class*=Tags__LiveTag]',
    streamTitle: 'header p',
    headerButtons: '[class^=Status__Wrap]',
    goLiveDialog: '[class^=GoLiveOverlay__Overlay]',
    goLiveButtons: '[class^=GoLiveOverlay__BottomButtonRow]',
    sideBarTabs: '[role="tablist"]',
    headerTitle: '[class^=Header__TitleWrap]',
    closestItem: 'li'

}

let selectorsMelonApp = {
    comments: '#message-container',
    banners: '.text-item',
    timer: '.live-timer',
    streamTitle: '.multiselect__single',
    headerButtons: '.controls__control--live',
    sideBarTabs: '.right-nav__menu__section',
    headerTitle: '.studio-host__status',
    closestItem: '.text-item'
}

let isMelonApp = document.location.href.includes('https://melonapp.com/') 

if(isMelonApp) selectors = selectorsMelonApp

let streamTitle = document.querySelector(selectors.streamTitle).innerText
let localStorageName = 'timeStamps_extension';
let text = localStorage.getItem(localStorageName) || ''
let el;
let initText = 'بداية الحلقة' // the initial text of the timestamps. 
let minutesDiff = 0 // minutes adjustment of the project.
let secondDiff = 0 // minutes adjustment of the project.

text += streamTitle + "\n" + "00:00 " + initText + "\n";


function set_initial_text(text) {
    initText = text;
}

function set_time_adjustment(mins, sec) {
    minutesDiff = mins
    secondDiff = sec
}

function initScript() {
    setTimeout(() => {
        let goLiveDialog = document.querySelector(selectors.goLiveDialog);
        if (goLiveDialog) {
            let goLiveButtons = document.querySelector(selectors.goLiveButtons);
            goLiveButtons.lastChild.addEventListener('click', startRecording);
        }

    }, 1000);

}

function setBarEvents() {
    document.querySelector(selectors.headerTitle).append(scriptRunningText())
    let sideBarTabs = document.querySelector(selectors.sideBarTabs).children;
    for (let item of sideBarTabs) item.addEventListener('click', startRecording)
}
function scriptRunningText(){
    let p = document.createElement("p")
    p.style.color = 'red'
    p.innerText = 'SCRIPT IS RUNNING'
    return p
}

function startRecording() {
    setTimeout(() => {
        let items = document.querySelectorAll(selectors.comments + ', ' + selectors.banners);
        // items.forEach(e => removeClickEvent(e));
        items.forEach(e => addClickEvent(e));
    }, 1000);
}

function removeClickEvent(item) {
    item.removeEventListener('click', parseClickEvent)
}

function addClickEvent(item) {
    item.addEventListener('click', parseClickEvent)
}

function parseClickEvent(e) {
    if (isLive()) {
        e = (getOnScreenTextStreamYard(e) || getOnScreenTextMelonApp()).innerText
        e = replaceNewLine(e);
        console.log('Clicked', e)
        addTimeStamp(e)
    }
}

function getOnScreenTextStreamYard(e){
    return e.srcElement.closest(selectors.closestItem);
}
function getOnScreenTextMelonApp(){
    let chats = document.querySelectorAll('.fb-chat-item__body')
    return chats[chats.length-1] || document.querySelector('.text-item--selected')
}

function addTimeStamp(sectionTitle) {
    text += getTimer() + " " + sectionTitle + "\n"
    localStorage.setItem(localStorageName, text)

}

// function to replace /n with /t
function replaceNewLine(str) {
    return str.replace(/\n/g, '\t').replace('Show\t', '').replace('\nHide','');
}

function getTimer() {
    let timeCounter = getTimeText().split(":")
    return calculateDifference(timeCounter[0], minutesDiff) + ":" + calculateDifference(timeCounter[1], secondDiff)
}

function calculateDifference(mainTime, diff) {
    let descriptionTime = Number(mainTime) + diff
    if (descriptionTime < 10) descriptionTime = "0" + descriptionTime
    return descriptionTime;
}

function getTimeText() {
    let counter = document.querySelectorAll(selectors.timer)[0].innerText;
    return counter.replace('LIVE ', "").replace('Live\n','')
}

function isLive() {
    let time = document.querySelectorAll(selectors.timer)
    if (time.length > 0) return true
}

function getTimeStamps() {
    console.log(text)
}

function resetLocalStorage() {
    text = ''
    localStorage.setItem(localStorageName, '')
}
setBarEvents()
// document.querySelector(selectors.headerButtons).lastChild.addEventListener('click', initScript)