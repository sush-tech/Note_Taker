# 11 Express.js: Note Taker

##  Task 
## User Story
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```
## Acceptence criteria

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

## Description
This project uses nodejs and express.js to locally host a browser-based note taking applicaiton. This project can be used by anyone intuitively and has an easy to understand functionality. Simply title the note, add text, click save, and you're done! There is a handy delete button that removes completed ideas.

## Technologies
* [nodejs](https://nodejs.org/en/)
* [express.js](https://expressjs.com/)
* [Heroku](https://heroku.com) for live deployment



## Demonstration
![Demo of note taker app](./Assets/demo.gif)

## Installation
* For installation onto local machine, clone provided repository.
* Use `npm install` to install dependencies.
* Use `npm run dev` to initiate the server in your terminal.
* Visit `http://localhost:3000/` in your browser. Default provided port is 3000.

## License
MIT © 
