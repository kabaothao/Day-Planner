# Day Planner

> Outline a brief description of your project.
> Live demo [_here_](https://kabaothao.github.io/Day-Planner/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
<!-- * [License](#license) -->

## General Information

- This project is designed to create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code.
- What is the purpose of your project?
  To demonstrate that the calendar application can run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
- Why did you undertake it?
  To incoporate Moment.js library to work with date and time.

<!-- You don't have to answer all the questions - just the ones relevant to your project. -->

## Technologies Used

- HTML5
- CSS
- Javascript
- Visual Studio

## Features

List the ready features here:

- Provided with starter code

## Screenshots

![Example screenshot](.\Assets\05-third-party-apis-homework-demo.gif)

<!-- If you have screenshots you'd like to share, include them here. -->

## Setup

What are the project requirements/dependencies? Where are they listed? Where is it located? Proceed to describe how to install / setup one's local environment / get started with the project.

- The URL of the deployed application.
- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

## Usage

How does one go about using it?

- To allow end users to save events for each hour of the day.

For example:

//getScheduleText to show on textarea after you save
let getScheduleText = function (hour) {
let schedule = JSON.parse(window.localStorage.getItem("schedule"));
for (let i = 0; i < schedule.length; i++) {
if (schedule[i].hour == hour) {
return schedule[i].text;
}
}
return "";
};

## Acknowledgements

Give credit here.

- This project was inspired by Trilogy Education.
- Many thanks to Trilogy Education.

## Contact

Created by [@kabaothao](https://github.com/kabaothao) - feel free to contact me!

<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
