let streamTitle = document.querySelector('header p').innerText
let comments = '.VirtualScroller__ScrollItemWrapper-sc-zulysv-4.kYApIl';
let banners = '.Banner__LiWrap-sc-t4oiaf-0.bpkPta';
// https://stackoverflow.com/questions/37552933/concat-two-nodelists 
let items = document.querySelectorAll(comments + ', ' + banners);
let localStorageName = 'SteramYard_test';
let text = localStorage.getItem(localStorageName) || ''
text += streamTitle + "\n";
function getTimer(){
    let counter = document.querySelectorAll('.Tags__Tag-sc-e34eu2-1.Tags__LiveTag-sc-e34eu2-4.kUxBiX')[0].innerText;
    return counter.replace('LIVE ',"")
}
let el;
function addClickEvent(item){

    item.addEventListener('click',e => {
        // e = e.srcElement.parentElement.querySelector('.Banner__ContentColumn-sc-t4oiaf-4').innerText
        e = e.srcElement.closest('li').innerText
        console.log(e)
        text += getTimer() + " " + replaceNewLine(e)  + "\n"
        localStorage.setItem(localStorageName, text)
    })
}


// function to replace /n with /t
function replaceNewLine(str) {
    return str.replace(/\n/g, '\t');
}

items.forEach( e => addClickEvent(e) );

// TODO: 
// 1. add event listener to go live button
// 2. add event listner to buttons on the right side (comments, banners)
// 3. add event listerner to banners folders

// one hour 
// check the init on comment, go to banner. 
// check init on banner, go to comment. 
// add event listener on the other cases