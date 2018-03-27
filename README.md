# ErgoBot
Discord bot written for my own server.

I'll keep adding functionalities when I have the time and resources

Functionalities so far (PREFIX symbol needs to appended in front of the command):
 - ```safkaa``` Fetches cafeteria lunch menus at my campus
 - ```marco``` I bet you know what the bot will answer to this one
 - ```pizza {amount}``` Randomizes the amount of pizza toppings you want

## Installation
Clone the repository, navigate to root directory of the repo.

Create ```config.json``` file and paste this template to it:
```
  {
    "TOKEN": {TOKEN},
    "PREFIX": {PREFIX}
  }
```
Replace the {TOKEN} with the Token the Discord Developer Portal provides you with.
Change {PREFIX} to the prefix you want your commands to be preceded with, for example
"!" or "~"

Then, open command line and type:
```
  npm install
```

After this, you should be able to run the app from the command line with the command
```
  node bot.js
```
