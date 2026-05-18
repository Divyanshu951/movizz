Here is a pristine, professional README template tailored to the Movizz project based on your screenshots and file structure.

---

![alt text](<Screenshot 2026-05-19 052303.png>)
![alt text](<Screenshot 2026-05-19 052432.png>)
![alt text](image.png)

# 🎬 Movizz

**Movizz** is a sleek, highly immersive movie and television discovery application. Designed with a premium, cinematic user interface, it allows users to explore trending titles, search for specific media, and dive deep into detailed metadata, all wrapped in a moody, visually striking dark theme.

## ✨ Features

- **Cinematic UI:** Large, high-resolution backdrops, dynamic typography, and a desaturated-to-color hover aesthetic that mimics the theatrical experience.
- **Trending Hub:** Instantly toggle between trending Movies and TV Shows on the homepage.
- **Deep-Dive Details:** Comprehensive media pages displaying overviews, cast/crew info, runtime, release dates, and studio metadata.
- **Global Command Bar:** A custom, floating bottom navigation and search bar accessible via keyboard shortcuts (`Ctrl + Shift + K`).
- **Grid Search Results:** Beautifully formatted search result grids complete with user rating badges and pagination.

---

## 🛠 Tech Stack

| Category               | Technology                               |
| ---------------------- | ---------------------------------------- |
| **Frontend Framework** | React (via Vite)                         |
| **Language**           | TypeScript                               |
| **Styling**            | Tailwind CSS (Assumed based on UI/Setup) |
| **Data Source**        | TMDB API                                 |
| **Tooling**            | ESLint, Prettier                         |

---

## 📂 Project Structure

Based on the repository architecture, the project is organized for scalability and separation of concerns:

```text
movizz/
├── public/                 # Static assets
├── src/
│   ├── api/                # API fetching logic (api.ts)
│   ├── components/         # Reusable UI elements
│   │   ├── svgs/           # Custom SVG icons and logos
│   │   └── ui/             # NavBars, Cards, Sliders, etc.
│   ├── layouts/            # Page wrappers (AppLayout.tsx)
│   ├── lib/                # Helper utilities (utils.ts)
│   ├── pages/              # Main route views (Home, SearchResults)
│   └── schema/             # Data validation/type schemas
├── .env                    # Environment variables
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration

```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/movizz.git
cd movizz

```

### 2. Install dependencies

```bash
npm install
# or
yarn install

```

### 3. Environment Variables

Create a `.env` file in the root of your project and add your API credentials (likely from TMDB).

```env
VITE_API_KEY=your_tmdb_api_key_here
VITE_BASE_URL=https://api.themoviedb.org/3

```

> **Note:** Make sure your `.env` is added to `.gitignore` so you don't expose your API keys.

### 4. Run the development server

```bash
npm run dev
# or
yarn dev

```

Open your browser and navigate to `http://localhost:5173` to view the application.

---

## ⌨️ Keyboard Shortcuts

- `Ctrl + Shift + K`: Open global search/command palette.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
