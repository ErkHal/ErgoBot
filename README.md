# ErgoBot
Discord bot written for my own server.

I'll keep adding functionalities when I have the time and resources

Functionalities so far (PREFIX symbol needs to appended in front of the command):
 - ```safkaa``` Fetches cafeteria lunch menus at my campus
 - ```marco``` I bet you know what the bot will answer to this one
 - ```pizza {amount}``` Randomizes the amount of pizza toppings you want
 - ```gif {searchword(s)}``` Fetches a random GIF from Giphy.com with the provided
                          searchword, if searchword is omitted, gets a completely
                          random GIF. Can have multiple searchwords, just separate
                          with spaces.

## Installation & How To Run
 - This bot requires that you have Node.js installed on your computer or on your server

### Installation
Clone the repository, navigate to root directory of the repo.

Create ```config.json``` file and paste this template to it:
```
  {
    "TOKEN": {TOKEN},
    "GIPHY_KEY": {GIPHYKEY},
    "PREFIX": {PREFIX}
  }
```
Replace the ```{TOKEN}``` and ```{GIPHYKEY}``` with an API token the Discord and Giphy.com Developer Portals provide you with.
Change {PREFIX} to the prefix you want your commands to be preceded with, for example
"!" or "~"

Then, open command line and type:
```
  npm install
```

After this, you should be able to run the app from the command line with the command
```
  node ErgoBot.js
```
### Running on a server
You can use Forever.js to make the bot run without being logged in. Just install it on your server with
```
 npm install -g forever
```
and then navigate to root folder of the repo and run
```
 forever start ErgoBot.js
```

## Tips
You can change the randomized pizza toppings from ```utils/pizzaToppings.json```
I am planning to add functionality to add different toppings from discord, but
it's not implemented yet.
