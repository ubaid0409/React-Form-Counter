# React Form Counter App

A simple **React + Vite + Tailwind CSS** application that demonstrates:

* Form handling using `useState`
* Conditional rendering (Login → Counter)
* Passing data via props (Parent ↔ Child)
* A counter with increment/decrement limits

---

## 🔗 Repository URL

```
https://github.com/ubaid0409/React-Form-Counter.git
```

---

## 📦 Tech Stack

* **React (Vite)**
* **Tailwind CSS**
* JavaScript (ES6)

---

## 📁 Project Structure

```
React-Form-Counter/
│── src/
│   ├── components/
│   │   ├── Form.jsx
│   │   └── Counter.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│── index.html
│── package.json
│── tailwind.config.js
│── postcss.config.js
```

---

## 🚀 How to Clone & Run the App

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ubaid0409/React-Form-Counter.git
```

### 2️⃣ Go into Project Folder

```bash
cd React-Form-Counter
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Vite will give you a local URL like:

```
http://localhost:5173
```

Open it in the browser.

---

## 🎨 Tailwind CSS Setup (Already Configured)

### tailwind.config.js

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
}
```

---

## 🧠 Application Flow (High Level)

```
Form.jsx → App.jsx → Counter.jsx
```

* App.jsx holds the main state
* Form.jsx updates App.jsx state
* Counter.jsx receives data from App.jsx

---

## 🧩 App.jsx (Main Controller)

**Purpose:**

* Holds global state
* Decides which component to render

**Key States:**

* `isLoggedIn` → controls navigation
* `userName` → stores logged-in user name

```jsx
{!isLoggedIn ? (
  <Form setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />
) : (
  <Counter userName={userName} />
)}
```

---

## 📝 Form.jsx (Login Form)

**Purpose:**

* Collects user input
* Updates parent state using props

**States Used:**

* `name`
* `email`
* `password`

**Important Logic:**

```js
e.preventDefault();
setUserName(name);
setIsLoggedIn(true);
```

* Prevents page reload
* Sends username to App.jsx
* Marks user as logged in

---

## 🔢 Counter.jsx (Counter Component)

**Purpose:**

* Displays user name
* Controls counter logic

**Counter Rules:**

* Minimum value: `0`
* Maximum value: `50`

**Increment Logic:**

* Increases count only if `< 50`

**Decrement Logic:**

* Decreases count only if `> 0`

```jsx
<h2>Welcome, {userName}</h2>
```

User name is received via props from App.jsx.

---

## ✅ Features Summary

* Controlled form inputs
* State management with `useState`
* Conditional rendering
* Props-based data flow
* Tailwind CSS styling
* Vite fast development server

---

## 📌 Notes

* Page refresh will reset state (normal React behavior)
* Login persistence can be added using `localStorage`

---

## 🙌 Author

**Ubaid Hashmi**

---