# Quiz-game

Welcome to the quiz game. 

## About the challenge

Create a browser-based game using HTML, CSS, JavaScript, DOM manipulation, and Object-Oriented Programming (OOP).
The purpose of this project is to consolidate and practice all the knowledge you have acquired in this module. 
You may choose any game idea you like, but it must meet the technical requirements in this lesson.


## Technical Requirements
Your game must meet the following technical requirements:

- Render a game in the browser.
- Have logic for winning and/or losing and show feedback to the player in either case:
- Your game must have logic that allows the player to win or lose.
- Your game code must be organized in separate files for HTML, CSS, and JavaScript.
- Use plain JavaScript for DOM manipulation.
- Your game entities and elements must be organized using classes and OOP.
- Have a repo on GitHub.
- Have at least one (1) commit per day that you worked on.
- You must deploy your game online using GitHub Pages so anyone can play it.
- Your code should follow the principles of KISS (Keep It Simple Stupid) and DRY (Don’t Repeat Yourself).

## Getting started

1. Clone the repository to your local machine.
2. Ensure that Visual Studio Code (VS Code) is installed, then open the project in VS Code.
3. Install the "Live Server" extension by Ritwick Dey.
4. After installing the extension, either click the "Go Live" button in the footer of VS Code or right-click on the ```index.html``` file and select the "Open with Live Server" option.


## Project structure:
The project follows a simple structure to organize the quiz-related logic. 

Below is an overview of the main files within the ``src`` folder:

```Quiz.js```
This file contains the Quiz class which handles the core functionality of the quiz. It includes methods for getting the Question, moving to next Question, checking if answer is correct and similar.

```questions.js```
This file defines the Questions class, which manages questions shuffling.

```index.js```  
This is the main entry point of the application. It orchestrates the interactions between Quiz and Questions classes.



```Styles``` folder contains all styling files for the application. Specifically, there is a single file: ```styles.css```. 
This file holds all the CSS styling for the application.

Root folder
The root directory includes the main HTML structure for the application: ```index.html```.
The main entry point of the application that contains the HTML structure.

