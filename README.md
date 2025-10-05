# AI-Assignments

## 📘 PhilLearn – Philosophy E-Learning Platform

**PhilLearn** is a simple, interactive e-learning web application built with **HTML**, **CSS**, and **JavaScript**.
It allows users to explore and learn from various **philosophy courses**, manage their learning progress, and mark modules as completed — all stored locally using **Local Storage** (no backend required).

---

### 🌟 Features

✅ **User Authentication (Local)**

* Login and Sign Up modals with client-side validation.
* Saves user data to browser local storage.
* Personalized welcome message after login.

✅ **Dynamic Course System**

* Displays multiple philosophy courses such as *Philosophy of Science*, *Philosophy of Law*, and *Political Philosophy*.
* Each course includes multiple modules with detailed content.

✅ **Progress Tracking**

* Users can mark modules as completed.
* Visual progress bars show completion percentage.
* Automatic “Course Complete” message when all modules are done.

✅ **Responsive Design**

* Fully responsive layout using modern CSS grid and flexbox.
* Works seamlessly on desktop, tablet, and mobile screens.

✅ **Interactive UI**

* Smooth animations, modals, and notifications.
* Local notifications when modules are completed.

---

### 🧠 Technologies Used

| Technology           | Purpose                                |
| -------------------- | -------------------------------------- |
| **HTML5**            | Structure and content                  |
| **CSS3**             | Styling, layout, and animations        |
| **JavaScript (ES6)** | Logic, interactivity, and data storage |
| **Font Awesome**     | Icons for UI elements                  |
| **LocalStorage API** | Saving user and progress data          |

---

### 📂 Project Structure

```
PhilLearn/
│
├── index.html        # Main page and app structure
├── styles.css        # Styling and responsive design
└── script.js         # Application logic and dynamic interactivity
```

---

### 🚀 How to Run the Project

1. **Download or clone** the project folder:

   ```bash
   git clone https://github.com/waziri-cod/PhilLearn.git
   ```

2. **Open the project:**

   * Locate the `index.html` file.
   * Open it directly in your browser (no server needed).

3. **Start Learning:**

   * Sign up or log in.
   * Browse available philosophy courses.
   * View course details and mark modules as completed.
   * Your progress is saved automatically in your browser.

---

### 🧩 Example Courses

* **Philosophy of Science**
  Learn about the scientific method, paradigm shifts, and debates between realism and anti-realism.

* **Philosophy of Law**
  Explore natural law theory, legal positivism, and justice.

* **Political Philosophy**
  Study the social contract, liberty, and theories of democracy.

---

### 💾 Data Persistence

All user information and course progress are saved locally in your browser using:

```js
localStorage.setItem('userProgress', JSON.stringify(data));
```

No server or database connection is required.

---

### 💡 Future Improvements

* 🔐 Connect to a real backend (Node.js / Firebase).
* 🧾 Add quizzes and assignments per module.
* 🗂️ Enable multi-user sessions and progress analytics.
* 🎨 Add dark mode and enhanced accessibility.

---

### 👨‍🏫 Author

**Waziri Shaban Waziri**
University of Dar es Salaam
Course: *Development Ethics and Global Justice / Philosophy of Mind and Cognitive Science*


