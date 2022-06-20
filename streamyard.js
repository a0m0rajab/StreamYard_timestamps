
let selectors = {
    comments: '.VirtualScroller__ScrollItemWrapper-sc-zulysv-4.kYApIl',
    banners: '.Banner__LiWrap-sc-t4oiaf-0.bpkPta',
    timer: '.Tags__Tag-sc-e34eu2-1.Tags__LiveTag-sc-e34eu2-4.kUxBiX',
    streamTitle: 'header p',
    headerButtons: '.Status__Wrap-sc-1e5w33n-0',
    goLiveDialog: '.GoLiveOverlay__Overlay-sc-yqe2ks-0.dDGhnF',
    goLiveButtons: '.GoLiveOverlay__BottomButtonRow-sc-yqe2ks-1.kVTHfL',
    sideBarTabs: '[role="tablist"]'
}

let streamTitle = document.querySelector(selectors.streamTitle).innerText

let localStorageName = 'SteramYard_test';
let text = localStorage.getItem(localStorageName) || ''
let el;

text += streamTitle + "\n";

function initScript() {
    debugger;
    setTimeout(() => {
        let goLiveDialog = document.querySelector(selectors.goLiveDialog);
        if (goLiveDialog) {
            let goLiveButtons = document.querySelector(selectors.goLiveButtons);
            goLiveButtons.lastChild.addEventListener('click', startRecoring);
        }

    }, 1000);

}

function setBarEvents() {
    let sideBarTabs = document.querySelector(selectors.sideBarTabs).children;
    for (let item of sideBarTabs) item.addEventListener('click', startRecoring)
}

function startRecoring() {
    setTimeout(() => {
        let items = document.querySelectorAll(selectors.comments + ', ' + selectors.banners);
        items.forEach(e => removeClickEvent(e));
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
        e = e.srcElement.closest('li').innerText
        e = replaceNewLine(e);
        console.log('Clicked', e)
        text += getTimer() + " " + e + "\n"
        localStorage.setItem(localStorageName, text)
    }
}

// function to replace /n with /t
function replaceNewLine(str) {
    return str.replace(/\n/g, '\t');
}

function getTimer() {
    let counter = document.querySelectorAll(selectors.timer)[0].innerText;
    return counter.replace('LIVE ', "")
}

function isLive() {
    let time = document.querySelectorAll(selectors.timer)
    if (time.length > 0) return true
}

function getStreamYardTimeStamps() {
    console.log(text)
}

setBarEvents()
document.querySelector(selectors.headerButtons).lastChild.addEventListener('click', initScript)