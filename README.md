# Expense App

NEU CS5520 Fall 2023 - Mobile Dev Assignment 2
Kay (Mengxian) Cai

## App Introduction:

An expense tracker app, which is connected to a firebase Firestore database. User can add, edit, delete and get data from database.

## Table of Contents

- [User Guide](#user-guide)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Firebase Configuration](#firebase-configuration)
  - [Create a .env file](#create-a-env-file)
  - [Installation](#installation)
- [Running the App](#running-the-app)

## User Guide

Please check the video at https://www.youtube.com/watch?v=-3Ko4rG3P9U which provides an overview and usage guide about the app.

The app's home screen displays pets in different tabs that users can swipe to view. All logs are shown in reverse chronological order. User can user the top search bar to searh for logs of a certain type.

![Home screen](./PetDiaryApp/assets/screenshots/home.png)

By pressing the big plus button in the bottom middle of home screen, user can add a log for their pets.

![Add log screen](./PetDiaryApp/assets/screenshots/add.png)

By pressing a specific log in the home screen, user can edit or delete a log.

![Edit log screen](./PetDiaryApp/assets/screenshots/edit.png)

By pressing the person icon on the top left of the home screen, user can go to Profile screen.

![Profile screen](./PetDiaryApp/assets/screenshots/profile.png)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- Node.js: [Download here](https://nodejs.org/)
- npm (Node Package Manager): Installed with Node.js

### Firebase Configuration

This project uses Firebase Firestore as the backend database. Follow these steps to set up Firebase for your app:

1. Create a Firebase project: [Firebase console](https://console.firebase.google.com/).
2. Navigate to the Cloud Firestore section and create a [Cloud Firestore database](https://firebase.google.com/docs/firestore/quickstart).
3. Obtain your Firebase configuration by navigating to Project Settings > General > Your apps > SDK setup and configuration.

Copy the configuration object.

### Create a .env file

Create a new file named `.env` in the root folder and paste the following, replacing the placeholder values with your Firebase credentials.

```javascript
// ExpensesApp/.env

apiKey = "YOUR_API_KEY";
authDomain = "YOUR_AUTH_DOMAIN";
projectId = "YOUR_PROJECT_ID";
storageBucket = "YOUR_STORAGE_BUCKET";
messagingSenderId = "YOUR_MESSAGING_SENDER_ID";
appId = "YOUR_APP_ID";
```

### Installation

1. Clone the repository.

```bash
git clone https://github.com/kaycaimx/ExpensesApp.git
```

2. Navigate to the project directory.

```bash
cd ExpensesApp
```

3. Install dependencies:

```bash
npm install
```

## Running the App

To run the app on an emulator or a physical device, use the following commands:

```bash
npm expo start
```
