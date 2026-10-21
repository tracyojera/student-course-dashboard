# Starter project
# Student Course Dashboard

## 1. Project Overview

The Student Course Dashboard is a simple React application that allows students to view their courses, monitor their learning progress, and identify which courses are completed or still in progress.

The project demonstrates the use of React components, JavaScript arrays, conditional rendering, and CSS styling.

## 2. Features

- Displays a list of courses.
- Shows the course title and lecturer's name.
- Displays course progress as a percentage.
- Uses a progress bar to represent learning progress.
- Shows **Completed** or **In progress** based on the course data.
- Displays a helpful message when a course list is empty.
- Uses reusable React components to organize the application.
- Provides a responsive layout using CSS.

## 3. Technologies Used

- **React.js** — builds the user interface using components.
- **JavaScript** — stores course data and implements application logic.
- **JSX** — combines JavaScript expressions with HTML-like elements.
- **CSS** — styles the dashboard, course cards, progress bars, and empty-state message.
- **Vite** — runs the development server for the React application.

## 4. Project Structure

student-course-dashboard/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── assets/
├── index.html
├── package.json
├── package-lock.json
└── README.md


## 5. Main Components

### App

The main component that displays the dashboard heading and the course sections.

### DashboardSection

A reusable component that displays a section heading and either a list of course cards or a helpful message when the array is empty.

### CourseCard

Displays an individual course's title, lecturer, progress percentage, progress bar, and completion status.

## 6. Conditional Rendering

The application uses conditional rendering to display the correct course status:

- If `course.completed` is `true`, the status displays **Completed**.
- If `course.completed` is `false`, the status displays **In progress**.
- If the course array is empty, the dashboard displays a helpful empty-state message instead of course cards.

## 7. How to Run the Project

### Step 1: Open the project

Open the project folder in Visual Studio Code.

### Step 2: Open the terminal

In VS Code, select **Terminal → New Terminal**.

### Step 3: Install dependencies

Run the following command if the project dependencies have not been installed:
npm install


### Step 4: Start the development server

Run:
npm run dev

### Step 5: Open the application

Open the local URL displayed in the terminal, usually:

```text
http://localhost:5173
```

## 8. Learning Outcomes

Through this project, I practised:

- Creating reusable React functional components.
- Passing data between components using props.
- Displaying array data with the JavaScript `map()` method.
- Using conditional rendering to display different messages and course statuses.
- Handling empty arrays.
- Styling React components using CSS classes.
- Running a React application with Vite.

## 9. Conclusion

The Student Course Dashboard demonstrates how React, JavaScript, JSX, and CSS can be combined to create a simple, organized, and responsive user interface for tracking course progress.

