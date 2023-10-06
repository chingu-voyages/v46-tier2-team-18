# Chingu Voyage 46 | Team 18 - Recipe App

## Github Workflow

<details><summary><b>GH Workflow</b></summary>

## Workflow

1. Create a new todo in the project board (GitHub Projects) and convert it to an issue.
2. Assign the todo to yourself if you are ready to start working on it.
3. Checkout develop `git checkout develop` (go to the develop branch) and run `git pull`.
4. Create a new branch like this: `git checkout -b issue-<issue-number>/<branch-name>.` Example: `git checkout -b issue-14/update-readme`.
5. Do your work. Stage, commit, and push your changes.
6. Create a pull request from your branch back into develop. Write `Closes #<issue-number>` in your pull request’s comments. Example: `Closes #14`.
7. Send a link to your PR to our Discord chat and notify everyone (@Voyager).
8. Merge the pull request if you got an approval.
9. Notify everyone in out team that you have merged the PR so we update the develop branch locally.

Remember: After each merged PR (develop got updated) run `git checkout develop`, `git pull`, `git checkout your-branch`, `git merge develop` That way, you are up-to-date with the develop branch and avoid most conflicts.

</details>

<details><summary><b>Team Documents</b></summary>

You may find these helpful as you work together to organize your project.

- [Keys to a well written README](https://tinyurl.com/yk3wubft).
- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx
</details>

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [MVP](#mvp)
- [Running the Project](#running-the-project)
- [Dependencies](#dependencies)
- [Contributors](#contributors)

## Overview

This should be a quick run through of why you made this project, it’s key goals, and why it might be helpful to whoever is reading this documentation. Keep it brief, but specific.

## Features

This can be a list of features or just a description of what this project does / what can be done with it. Presenting information in a bullet or numbered list as it improves the ability to scan through and gather information quickly. Short, specific pieces of information are much easier to digest.

## MVP

<details><summary><b>User can see a landing page containing the following components:</b></summary>

- [ ] Header component displaying a welcome message.
- [ ] Search field that enables users to input ingredient(s).
- [ ] A component to explain the use of the application.
- [ ] A scrollable list of recipes displaying the results based on the search criteria.
- [ ] A summary main recipe component: it should display recipe image, name and link to details.
- [ ] A summary detail recipe component: it should display recipe name, category, and instructions.
- [ ] Ensure mobile responsiveness for the application.

- Search Component

  - [ ] Users can input one or multiple ingredient(s).
  - [ ] Initiate the search by either pressing the Enter key or clicking the 'Search' button/icon.
  - [ ] Display an error message when an unlisted item is entered.

- Main Data Display Component

  - [ ] Display result for each recipe in the main component.
  - [ ] Remain on the landing page if no search ingredient has been entered.

- Summary Detail Component
  - [ ] Display the following information of the selected recipe:
    - Name
    - Category
    - List of instruction
    - List of nutrition
  - [ ] Add a Link to the instruction video
  </details>

## Running the Project

Example for this section:

Live version:

- link to live version goes here

From the repo:

1. Clone this project locally
2. Run `npm install` in your bash / command line
3. Run `npm run dev` in your bash / command line
4. Grab some ingredients and cook with friends!

## Dependencies

Listing other peoples work that your project relies on is not only in good taste it helps show what your project is built on and adds insight to compatibility/integration with outside projects.

e.g. Prettier, ESLint, Babel, Webpack, React, React-DOM

## Contributors

[Emeka Kelvin](https://github.com/kelvinSeamount) | [Jesse](https://github.com/futurefounder) | [Ross Condie](https://github.com/rosscondie)
