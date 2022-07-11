# Streamyard extension for timestamps

This extension is used to help YouTubers to get the timestamps immediately after their stream.

## How to use it

### the logic 

### Contribution 

### ToDo

- [x] init when stream start (go live button).
- [x] Activate when tabs changed from right side (Comments, Banners).
- [x] Add event listener to banner folders, to activate when navigate.
- [ ] Check the navigation situation
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

- [Get Parnet by tag](https://bobbyhadz.com/blog/javascript-get-parent-element-by-tag)
- [Contact two nodeList](https://stackoverflow.com/questions/37552933/concat-two-nodelists)
- [Foreach HTML connection](https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements)
- [await document.queryselector](https://stackoverflow.com/questions/69070866/async-queryselector-access)
- [Remove Event](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
- [Listeners](https://www.sqlpac.com/en/documents/javascript-listing-active-event-listeners.html)
- [Loop HTML Collection](https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements)