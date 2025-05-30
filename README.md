#  Match Task - NBA Match Viewer

This project displays upcoming NBA matches using a modern frontend built with **React**, **Vite**, **TailwindCSS**, and a **Node.js** backend that proxies real-time sports data.

---

##  Project Structure

```
Match-Task/
├── backend/       → Node.js Express server
├── frontend/      → React (Vite + TailwindCSS + TypeScript)
└── README.md
```

---


##  Backend Setup

1. Go to the `backend` directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Start the backend server:

```bash
npm start
```

> Server runs at: `http://localhost:3000/api/matches`

---

##  Frontend Setup

1. Go to the `frontend` directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

> Frontend runs at: `http://localhost:5173`

---

##  API Reference

Real-time NBA match data is fetched from [TheSportsDB](https://www.thesportsdb.com/api.php):

```
https://www.thesportsdb.com/api/v1/json/123/eventsnextleague.php?id=4387
```

This returns the **single upcoming NBA match** from the league with ID `4387`.

---

##  Features

- Full-width responsive match cards
- Vertical scroll to view all matches
- Light blue-purple gradient background
- TypeScript support
- Backend proxy to avoid CORS issues

---

## 🛠 Tech Stack

- **Frontend**: React, Vite, TailwindCSS, TypeScript
- **Backend**: Node.js, Express
- **API**: TheSportsDB

---

##  Preview

_Add screenshots or GIFs here if desired._

---

##  License

This project is licensed under the [MIT License](LICENSE).
