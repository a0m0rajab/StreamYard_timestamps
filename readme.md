# timestamps extension for Streamers

This extension is used to help YouTubers to get the timestamps immediately after their stream.
it works on StreamYard and melonApp. 

## How to use it

- When you are in the StreamYard studio (backstage), paste the code in the console. (F12 or inspect).
- After ending the episode you can get the text by typing: getStreamYardTimeStamps() in the console. 
- To make sure that the script is running, move between the chat and the banner tabs. 

### Known issue: 

When comments page are active the script are not active on new comments, you should move between tabs to reactive it.

Possible solution is to write this script again with an observer.

### Options: 

initial text: set_initial_text(text)
You can set the initial text which will be at 00: initial text, in the time stamp with this function.

Time adjustment: set_time_adjustment(mins,sec)
You can extract time in minutes and seconds from the time stamps in case if you wanted to remove the beginning of your video.


### the logic 

The code works by setting event listeners that listens to click event on the banners and comments. 
The scripts get initialized when you press go live or move between the tabs on the right side. 
The script is scrapping the time from the StreamYard time counter and it works on recordings. 

### Contribution 

### ToDo

- [x] init when stream start (go live button).
- [x] Activate when tabs changed from right side (Comments, Banners).
- [x] Add event listener to banner folders, to activate when navigate.
- [x] ~~Check the navigation (Banners folders) situation.~~ The second option does this.
- [ ] Add sound bite timestamp. 
- [x] Add time modifier to extract or add to the timestamps.
- [x] ~~Add option for comments to get the name of the commented user.~~ It's already there. 
- [ ] Check when new comment added.
- [ ] Use observer instead of timeout.
- [ ] Create a frontend for the extension where it can help the user for things like: 
  - Getting the title of the stream to add it. 
  - Saving previous text or having a text field for pre-defined text.
  - Adding title on each text when the buttons clicked.
  - Having ready to use text as starter.
  - Etc
- [ ] create extension for chrome 

### Testing scenarios: 

- one hour
- check the init on comment, go to banner.
- check init on banner, go to comment.
- add event listener on the other cases


### Helpful resources:

- [Get Parent by tag](https://bobbyhadz.com/blog/javascript-get-parent-element-by-tag)
- [Contact two nodeList](https://stackoverflow.com/questions/37552933/concat-two-nodelists)
- [Foreach HTML connection](https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements)
- [await document.querySelector](https://stackoverflow.com/questions/69070866/async-queryselector-access)
- [Remove Event](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
- [Listeners](https://www.sqlpac.com/en/documents/javascript-listing-active-event-listeners.html)
- [Loop HTML Collection](https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements)
- [Subclass selecting StackOverFlow <3](https://stackoverflow.com/questions/36396497/get-all-items-that-start-with-class-name)
- [Subclass W3.org](https://www.w3.org/TR/selectors-3/#attribute-substrings)