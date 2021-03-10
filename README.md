# IU Rainbow Extension
![IU](https://media.giphy.com/media/UkYA557fdMYTe/giphy.gif)

This extension searches for all instances of the string "IU" and creates a span element containing "IU" with a class rainbow. This class has a keyframe animation which changes the color of the IU text to rainbow.

Update:

This extension now also searches for all img and replaces the src with an image of IU.




In order to build a chrome extension I took the following steps:
### manifest.json
1. In the manifest.json file, we need to specify the manifest version, name, and version
2. Create a script
3. Specify the script in the manifest.json object. We need to specify the content_script property. This property contains an array of objects. Each object has properties for urls, scripts, and css. The url property specifies which urls to run the script on. By using `"<all_urls>"`, the script will run on all urls. The scripts properties is an array of different scripts to run. The css property specifies what css to use on a page.

### Content Script
Code that executes when a webpage loads that can affect, manipulate, and work with the content of the actual web page itself.

### Background Script
Loads when chrome is launched. It listens to activities done on the browser. We cannot debug console.log background scripts in the browser console because it does not talk to the web browser console. We instead use the Inspect Views button to debug.

I use the background script to listen for the extension button onClick event. The content script then receives the message and I can write a conditional statement to run code that alters the browser.


### Running an extension
Open chrome and type chrome://extensions. Then toggle developer mode on the top right and locate your code directory.


Here's what it looks like:

![iu](https://github.com/andreidimaano/IURainbowExtension/blob/main/IUGIF.gif)
![iu](https://github.com/andreidimaano/IURainbowExtension/blob/main/IUexample.png)
