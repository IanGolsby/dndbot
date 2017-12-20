/* NOTE THINGIES

message.author pings the person who sent the message
if sending messages, the :emoji: works fine
use the unicode (\:emoji: then copy paste that into code) for message.react

*/

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	console.log("Logged in as "+client.user.tag+"!");
});

var prefix = "d/";

var questions = ["What channel can you post spicy memes in?", "What is the command for rolling a six-sided die (Two correct answers)?", "What is the name of the channel where you can party up with other players for roleplay?", "What is the name of the channel where you can ask Jimmy or the other members any questions you have?"];
var answers = [["#meme-storm", ".roll d6", "#the-briefing-room", "#faq"], ["#nsfw", ".diceroll 6", "#meetups", "#gateway"], ["#heat-vent", "/roll dice 6", "#recruiting", "#suggestions-and-feedback"], ["#general-chat", "+roll 6d", "#ooc-chat", "#the-courtroom"]];

var used = [0, 1, 2, 3];
shuffleArray(used);

var gild = client.guilds.find("name", "Dungeons & Dumbasses");

client.on("message", (message) => {
	var msg = message.content.toLowerCase();
	var rawmsg = message.content;
	var chnl = message.channel;
	
	var args = msg.slice(prefix.length).split(" ");
	
	if (message.author.id == 224712063832948736 || message.author.id == 258091348828094476 || message.author.id == 268240683159126016) {
		// Ian Golsby, Jimmy Brookes, and Ian Gonzales only commands
	}
	
	if (message.author.id != 377294983708803072) {
	
	if (args[0]=="help") {
		if (args.length==1) {
			chnl.send("```javascript\n`Standard Commands List`\n```\nUse `d/help [command]` for more information on a certain command.\n\n**Commands: **`help` `ping` `getavatar` `serverinfo`");
		} else {
			if (args[1]=="help") {
				chnl.send("`d/help` __`Displays a full list of all commands. Input a command to get that command's info`__\n\n**Usage: **d/help [command]\n\n**Examples:**\n`d/help` displays a full list of commands\n`d/help ping` displays the help information for the ping command");
			} else if (args[1]=="ping") {
				chnl.send("`d/ping` __`Returns 'Pong!' with latency (number of milliseconds between creation of command message and the bot receiving it)`__\n\n**Usage: **d/ping\n\n**Examples: **\n`d/ping` Pong! (128 ms)");
			} else if (args[1]=="color") {
				chnl.send("`d/color` __`Displays any hex color`__\n\n**Usage:** d/color <hex value>\n\n**Examples:** `d/color #FF0000` *a picture of red*");
			}
			
			else {
				chnl.send("I don't recognize that command.");
			}
		}
	}
	
	if (args[0]=="ping") {
		chnl.send("Pong! (" + (new Date().getTime() - message.createdAt.getTime()).toString() + " ms)");
	}
	
	if (args[0]=="getavatar") {
		message.reply(message.author.avatarURL);
	}
	
	if (args[0]=="serverinfo") {
		chnl.send("Server name: "+message.guild.name+"\nMember count: "+message.guild.memberCount+"\nOwner: "+message.guild.owner.user.username);
	}
	
	if (args[0]=="color") {
		if (args[1].startsWith("#")) {
			chnl.send("http://www.colorhexa.com/"+args[1].slice(1)+".png");
		}
	}
	
	if (msg.startsWith("aye")) {
		chnl.send("Aye papi");
	}
	if (msg.startsWith("mama")) {
		chnl.send("Mia");
	}
	if (msg.startsWith("thank god")) {
		chnl.send("You're welcome!");
	}
	
	/*if (message.channel.type=="dm"&&message.author.id==224712063832948736) {
		if (args[0]=="say") {
			var chanl = gild.channels.find("name", args[1]);
			chanl.send(args[2]);
		}
	}*/
	// That there above me is a command that Ian's working on, it lets him DM the bot and the bot send a message in D&D. This lets the bot seem smarter than it is hehehe. Also don't tell people this exists. And it only works if Ian does it. Muahahaha
	
	if (message.mentions.users.exists("username", "dndbot") && !message.guild.roles.find("name", "Member").members.exists("user", message.author)) {
		chnl.send("Alright, here's a little pop quiz for you! Simply reply with either A, B, C, or D. Don't include anything else in your message.");
		var q = makerandom(used);
		chnl.send(questions[q]);
		chnl.send("A: "+answers[used[0]][q] + "\nB: "+answers[used[1]][q] + "\nC: "+answers[used[2]][q] + "\nD: "+answers[used[3]][q]);
	}
	
	if ((rawmsg=="A"||rawmsg=="B"||rawmsg=="C"||rawmsg=="D") && !message.guild.roles.find("name", "Member").members.exists("user", message.author)) {
		var pos = ["A", "B", "C", "D"];
		var whereA = 0;
		if (used[0]==0) {
			whereA = 0;
		}
		if (used[1]==0) {
			whereA = 1;
		}
		if (used[2]==0) {
			whereA = 2;
		}
		if (used[3]==0) {
			whereA = 3;
		}
		if (rawmsg==pos[whereA]) {
			chnl.send("Welcome to Dungeons and Dumbasses! You are about to be promoted to the @Member status where you get a shiny green nameplate and will be given access to the rest of the server! It will be overwhelming since we have many, MANY channels on offer, so just flip through them and give Jimmy (True Crisis) an @message either in #faq or #general-chat if you have any questions.");
			
			message.member.addRole(message.guild.roles.find("name", "Member"));
			
			shuffleArray(used);
			
			chnl.send("You now have access to the server. Proceed. Press :regional_indicator_f: to yay.\n\nhttps://www.youtube.com/watch?v=QtEljxur6eI");
		} else {
			chnl.send("Sorry, that's not the right answer. Try again.");
		}
	}
	
	}
});

client.on("guildMemberAdd", member => {
	const channel = member.guild.channels.find("name", "gateway");
	channel.send("@everyone, "+member+" has just joined Dungeons & Dumbasses! Welcome! Please introduce yourself. Press :regional_indicator_f: to yay\nhttps://i.ytimg.com/vi/VoevJ9RWtS8/maxresdefault.jpg");
	channel.send("I'm the D&D bot, created by  Idgo, and this is the Dungeons and Dumbasses Discord server!");
	channel.send("Here we have roleplaying, game nights, and just all in all hanging with the chillest people around.");
	channel.send("In order to have access to this server, simply read through #welcome-and-introduction and #rp-rules and @ me when you're through! I'll give you a tiny little quiz (one question, multiple choice) to make sure you've read through it.");
	channel.send("Of course, you can also read #about-dungeons-and-dumbasses if you'd like. It talks about the history of the server and stuff.");
	channel.send("Oh! I almost forgot. If you have any questions you can ask in #faq at any time.");
});

client.on("guildMemberRemove", member => {
	const channel = member.guild.channels.find("name", "gateway");
	channel.send("@everyone "+member+' just left Dungeons & Dumbasses. Good luck out there, Member...\nPress "F" to cri\nhttps://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/s320x320/e35/11311476_1538746186448416_88438787_n.jpg');
});

client.login("Mzc3Mjk0OTgzNzA4ODAzMDcy.DOK23A.t4CAKXwtpnmfc-BUD9oIhraH00Y"); // THIS IS THE TOKEN. FOR THE LOVE OF ALL THAT IS D&D DON'T TOUCH THIS LINE

function makerandom(z) {
	var x = Math.floor(4*Math.random());
	if (z[x] == true) {
		makerandom(z);
	}
	return x;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Client ID: 377294983708803072
