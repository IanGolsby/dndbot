Okay so this respository here is very important because it contains the source code for the legendary dndbot.
The reason I made this is so Jimmy and possibly other people could run the bot themselves, thus allowing it to run while my internet is down and stuff.
So, I'm going to have here below me instructions for running the bot.
The bot runs using code in the language `Javascript`. But, it uses a special package of javascript called `nodeJS`. And not only does it use that, but it has a particular library (that allows the things related to Discord to work) called `discord.js`. Now, what's useful is that discord.js has a website.
https://discord.js.org/#/
That's helpful. So anyway the first important thing for running the bot is having a folder just for him. The easiest place to put this is directly inside your user folder. So, I have a path in my hard drive that goes `C:\Users\Ian Golsby\dndbot` and inside that folder are a few key things.

1. The js code for the bot
2. A folder called `node_modules` (don't add this manually I'm about to get to this part)
3. A file called `package-lock.json` (same as #2)

Well, for now all you need to put in the folder is the `dndbot.js` file which should be the only other thing in the repository.
Now, go to https://nodejs.org/en/ and install the latest version of Node.js (don't get the version that says recommended for most users, get the latest one).
This is the fun part. So you have to open the command line (this assumes you have Windows by the way. If not, come talk to me).
In most cases, it should open to your user folder (in my case, `C:\Users\Ian Golsby`). If not, then use the interwebs to learn how to navigate cmd. If it is to that folder, simply type `cd dndbot` (and press Enter) and you should find yourself in the project folder.
Now that we're in the right folder, we need to install discord.js
Luckily, that's very easy because we already have Node.js installed. There's just one command you have to type:
`npm install --save discord.js`
Some weird shit should show up, that's discord.js installing itself to that folder. When it's done, the 2 items I mentioned earlier (the folder and json file) should be in the project folder.
Once this is all said and done, the bot is ready to run! To run the bot, just make sure you're in the project folder, and type:
`node dndbot.js`
(I've gotten very good at typing that now)
The cmd should return `Logged in as dndbot#4988!`
To kill the bot, press Ctrl+C. Make sure you check back here and keep yourself updated with the latest version of the source (you can probably update it by opening `dndbot.js` in a text editor and copy pasting the github code into that and saving it).
