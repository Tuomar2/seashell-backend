# 🐚 Seashell Collection Backend API

Backend challenge implementation for James and Anna’s seashell collection app.

This project provides a simple REST API for managing a seashell collection with full CRUD operations, persistent storage, and interactive API documentation.

---

## Quickstart

### ✅ Requirements

- **Node.js 22** was used during development  


### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/seashell-backend.git
cd seashell-backend

### 2️⃣ Create env file

Create a .env file in the project root:
DATABASE_URL="file:./dev.db"
PORT=3000

### 3️⃣ Setup the project

```bash
npm install
npx prisma migrate dev
npm run dev

---

## 📌 API Endpoints

The backend runs locally at:
http://localhost:3000/

The backend includes a health check endpoint at `/health` and interactive API documentation available at `/docs`.


| Method | Endpoint              | Description              |
|--------|----------------------|--------------------------|
| GET    | `/seashells`          | List all seashells       |
| GET    | `/seashells/:id`      | Get seashell by ID       |
| POST   | `/seashells`          | Add a new seashell       |
| PUT    | `/seashells/:id`      | Update an existing shell |
| DELETE | `/seashells/:id`      | Delete a seashell        |

### 🐚 Example Seashell Object

Copy-paste example for creating a new seashell:

{
  "name": "Conch Shell",
  "color": "Pink",
  "size": "Medium",
  "species": "Gastropod",
  "description": "Found near the pier",
  "location": "Hanko Beach",
  "collectedBy": "Anna"
}

## 🚀 Tech Stack

- **Node.js + Express**
- **TypeScript**
- **Prisma ORM**
- **SQLite** (local persistent database)
- **Swagger/OpenAPI Docs**

---

## ✨ Features

- ✅ Health check endpoint
- ✅ Full CRUD API for seashells
- ✅ Persistent storage using SQLite + Prisma migrations
- ✅ Interactive Swagger documentation for frontend developers
- ✅ Clean modular API structure

