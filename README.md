# IU Rainbow Extension
![IU](https://media.giphy.com/media/UkYA557fdMYTe/giphy.gif)

This extension searches for all instances of the string "IU" and creates a span element containing "IU" with a class rainbow. This class has a keyframe animation which changes the color of the IU text to rainbow.




In order to build a chrome extension we take the following steps:
### manifest.json
1. In the manifest.json file, we need to specify the manifest version, name, and version
2. Create a script
3. Specify the script in the manifest.json object. We need to specify the content_script property. This property contains an array of objects. Each object has properties for urls, scripts, and css. The url property specifies which urls to run the script on. By using `"<all_urls>"`, the script will run on all urls. The scripts properties is an array of different scripts to run. The css property specifies what css to use on a page.


### Running an extension
Open chrome and type chrome://extensions. Then toggle developer mode on the top right and locate your code directory.


Here's what it looks like:

![iu](https://github.com/andreidimaano/IURainbowExtension/blob/main/726abc2c8dbc710b96ad511cc7477ade.gif)
