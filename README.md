# ErgoBot
Discord bot that fetches the Uni/UAS lunch menus.

So far only fetches menus from a single campus, but I'm adding more functionalities when I have the time and interest.

## Installation
Clone the repository, navigate to root directory of the repo.

Create ```auth.json``` file and paste this template to it:
```
  {
    token: {TOKEN}
  }
```
Replace the {TOKEN} with the Token the Discord Developer Portal provides you with.

Then, open command line and type:
```
  npm install
```

After this, you should be able to run the app from the command line with the command
```
  node bot.js
```

## Usage
When you type ```!safkaa```(food in Finnish) into a text channel, the bot will fetch you some lunch menus.
