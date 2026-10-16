# Resume Analyzer          
[![Live App](https://img.shields.io/badge/Live-App-brightgreen)](https://resume-analyser-kp0f.onrender.com/)




## Description

Resume Analyzer is a full-stack web application that analyzes resumes using Artificial Intelligence and provides meaningful insights such as skill extraction, resume evaluation, and improvement suggestions.

This project integrates **Google Gemini AI** for resume analysis and includes secure authentication features like email verification and password reset using **Brevo** and job suggestions using **Adzuna API**.



## Tech Stack
- Frontend: HTML, CSS, React.js  
- Backend: Spring Boot  
- Database: MySQL  



## Preview

<p align="center">
  <img width="30%" src="https://github.com/user-attachments/assets/df7bb0c1-1f10-478d-b8c9-c2b1bf2369f4" />
  <img width="30%" src="https://github.com/user-attachments/assets/1c65a0cc-c915-4103-a7fe-30a975639ab0" />
  <img width="30%" src="https://github.com/user-attachments/assets/b8ca21ad-7c2f-470d-ad5d-73119b8fd9f1" />
</p>

<p align="center">
  <img width="30%" src="https://github.com/user-attachments/assets/3f945bf1-84dd-4052-9c65-709f512ae0a4" />
  <img width="30%" src="https://github.com/user-attachments/assets/d04af8b7-4e12-4948-94c6-3b1f15340180" />
  <img width="30%" src="https://github.com/user-attachments/assets/a0c6f513-2108-41c8-98b5-91e86d27d398" />
</p>



## Frontend & Backend Integration Notes

- The frontend UI is developed using **React**
- For deployment, the React application is **built and served by the Spring Boot backend** as static files
- The React production build files are placed inside the backend’s **static** directory

### Static & Template Files
- The `static` folder contains the **React production build files**
- The `templates` folder inside `static` is used to store **email templates**
  - Used for **email verification** and **password reset**



## How to Run the Project Locally

#### 1. Clone the Repository
```bash
git clone https://github.com/Mohamed-Imran-12/Resume-Analyser.git
```

#### 2. Open Project in IDE
Open the project in **IntelliJ IDEA / Eclipse**

Open `pom.xml` and allow Maven to download dependencies

#### 3. Configure Environment Variables

Keep credentials out of `application.properties`. Configure the following environment variables before starting the backend:

| Variable | Purpose |
| --- | --- |
| `DB_URL`, `DB_USERNAME`, `DB_PASSWORD` | MySQL connection (URL defaults to local `resume_analyzer`) |
| `GEMINI_API_KEY` | Gemini resume analysis |
| `BREVO_API_KEY` | Verification and password reset emails |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | Google sign-in |
| `ADZUNA_APP_ID`, `ADZUNA_API_KEY` | Job suggestions |
| `JWT_KEY` | JWT signing key; use a random secret of at least 32 bytes |
| `COOKIE_SECURE` | Set to `true` when serving the app over HTTPS |

For local development, set these in your shell or IDE run configuration. Do not commit real credentials.


#### 4. Run Backend
Run `ResumeAnalyserApplication.java`

The test suite uses an in-memory H2 database and does not require a local MySQL server.

#### 5. Open in Browser
```
http://localhost:8080/
```



## Important Notes (Must Read)

- Only **Gemini AI** is configured in this project.  
To use another AI provider, update AI-related code in `appservice.java`.

- Email functionality works **only with Brevo API**.  
To use another mail provider, update mail-related code in `mailservice.java`.

- AI models evolve quickly.  
If the configured Gemini model is removed or replaced, update the model in `appservice.java`.



## Modifying the Frontend UI

Do **not** edit files inside the backend `static` folder directly.

### 1. Run Frontend Separately (Development Mode)
```bash
cd "frontend src"
npm install
npm run dev
```

This starts the React development server for UI changes.



### 2. Build Frontend for Backend Deployment
```bash
cd "frontend src"
npm run build
```

#### Backend Static Structure
```text
static/
├── assets/
│   ├── *.css
│   ├── *.js
├── index.html
```

Steps:
- Delete old `index.html` and files inside `assets`
- Copy new build files from `dist`
- Paste them into backend `static` directory



## Disclaimer
- This project is developed for learning and demonstration purposes
- AI analysis results may vary and should not be considered professional career advice
