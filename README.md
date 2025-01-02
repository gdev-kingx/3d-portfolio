# 3D Portfolio Website with React.js and Three.js

This is a simple 3D portfolio website built using **React.js** for the framework and **Three.js** for 3D rendering. The goal is to create an interactive and visually appealing portfolio to showcase projects in a 3D environment.

## Project Structure

```bash
3d-portfolio/
├── public/
│   ├── desktop_pc/
│   ├── planet/
│   └── logo.svg 
├── src/
│   ├── assets/
│       └── tech/
│   ├── components/
│       └── canvas/
│   ├── constants/
│       └── index.js
│   ├── hoc/
│       ├── index.js
│       └── SectionWrapper.jsx
│   ├── utils/
│       └── motion.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── styles.js
├── .gitignore
├── .env.local
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Steps to Run the Application

1. Clone the repository:

    ```code
    git clone https://github.com/gdev-kingx/3d-portfolio.git
    cd 3d-portfolio
    ```

2. Install the dependencies:

    ```code
    npm install
    ```

3. Run the development server:

    ```code
    npm run dev
    ```

4. Open in your browser: Go to `http://localhost:3000`. The 3D scene will be displayed, and you can interact with it directly in your browser.
