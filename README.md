# 🤖 AI HireBooster

### AI-Powered Mock Interview Platform with Resume Analysis, Voice Interviews, Real-Time Evaluation & Performance Analytics

**AI HireBooster** is a full-stack AI mock interview platform that helps candidates practice realistic **Technical and HR interviews** based on their role, experience, skills, projects, and resume.

The platform analyzes an uploaded PDF resume, generates personalized interview questions using an LLM, conducts a voice-enabled timed interview, evaluates every answer across multiple dimensions, and produces a detailed performance dashboard with downloadable PDF reports.

The application also includes Google authentication, interview history, a credit-based usage system, and Razorpay payment integration.

---

## ✨ Highlights

* 📄 AI-powered PDF resume analysis
* 🎯 Role and experience-specific interview generation
* 💼 Technical and HR interview modes
* 🧠 GPT-4o-mini through OpenRouter
* 🎙️ Voice-enabled interview experience
* 🔊 AI interviewer text-to-speech
* 📝 Speech-to-text answer capture
* ⏱️ Difficulty-based question timers
* 📊 AI answer scoring and feedback
* 📈 Interactive performance analytics
* 📚 Complete interview history
* 📥 Downloadable PDF interview reports
* 🔐 Google authentication with Firebase
* 🍪 JWT-based authenticated backend sessions
* 💳 Razorpay payment integration
* 🪙 Credit-based interview system
* 📱 Responsive React interface
* ☁️ Frontend and backend deployment support

---

# 🎯 What Problem Does AI HireBooster Solve?

Traditional interview preparation usually involves reading lists of common questions or practicing without receiving meaningful feedback.

That creates several problems:

* Questions are not personalized to the candidate.
* Candidates do not know whether their answers are actually good.
* Communication and confidence are difficult to measure.
* Resume-specific questions are rarely practiced.
* Candidates cannot easily track improvement over multiple interviews.
* Practicing alone does not feel like a real interview.

AI HireBooster creates a more realistic practice environment.

Instead of simply displaying generic questions, the platform builds an interview around:

* target role
* years of experience
* interview type
* resume content
* technical skills
* projects

Every submitted answer is then evaluated by AI for:

1. **Confidence**
2. **Communication**
3. **Correctness**

The candidate receives immediate feedback and a complete analytics report after the interview.

---

# 🚀 Core Features

## 1. Google Authentication

Users can sign in using their Google account.

The frontend uses **Firebase Authentication** with the Google provider. After successful authentication, user information is sent to the backend, where the application creates or retrieves the corresponding MongoDB user.

The backend then creates a JWT-based session.

### Authentication flow

```text
User
   ↓
Google Sign-In
   ↓
Firebase Authentication
   ↓
React Frontend
   ↓
Express Authentication API
   ↓
Create / Find MongoDB User
   ↓
Generate JWT
   ↓
Store Session Cookie
```

New users receive **100 interview credits by default**.

---

# 2. Resume Upload & AI Resume Analysis

Candidates can optionally upload their resume before starting an interview.

Supported input:

```text
PDF resume
Maximum upload size: 5 MB
```

The backend processes the resume using:

* Multer for file upload
* `pdfjs-dist` for PDF parsing
* OpenRouter for LLM access
* GPT-4o-mini for structured resume analysis

The system extracts information such as:

```json
{
  "role": "Software Engineer",
  "experience": "3 years",
  "projects": [
    "AI Interview Platform",
    "Video Analytics Service"
  ],
  "skills": [
    "Node.js",
    "React",
    "MongoDB",
    "AWS"
  ]
}
```

The extracted information automatically enriches the interview configuration.

### Resume processing flow

```text
PDF Resume
     ↓
Multer Upload
     ↓
Temporary Server File
     ↓
pdfjs-dist
     ↓
Extract Text From Every Page
     ↓
Clean Resume Text
     ↓
GPT-4o-mini
     ↓
Structured Candidate Profile
     ↓
Role + Experience + Projects + Skills
```

The temporary resume file is removed after processing.

---

# 3. Personalized AI Question Generation

After interview setup, the application sends the candidate context to the AI model.

Input can contain:

```text
Role
Experience
Interview Mode
Projects
Skills
Full Resume Text
```

GPT-4o-mini generates **exactly five personalized interview questions**.

The questions follow a progressive difficulty structure:

| Question   | Difficulty | Time Limit |
| ---------- | ---------- | ---------: |
| Question 1 | Easy       |     60 sec |
| Question 2 | Easy       |     60 sec |
| Question 3 | Medium     |     90 sec |
| Question 4 | Medium     |     90 sec |
| Question 5 | Hard       |    120 sec |

This creates an interview that gradually becomes more challenging.

Example:

```text
Candidate
Role: Backend Engineer
Experience: 3 years
Skills: Node.js, Kafka, Redis, MongoDB
Project: Payment Reconciliation Platform
```

The AI may generate questions around:

* backend architecture
* Node.js concurrency
* database decisions
* Redis caching
* Kafka event processing
* scaling systems
* project trade-offs

Instead of asking the same static questions to every user, the interview changes according to the candidate profile.

---

# 4. Technical & HR Interview Modes

AI HireBooster currently supports two interview modes:

### 💻 Technical Interview

Designed around:

* programming
* frameworks
* system design
* databases
* cloud technologies
* project architecture
* engineering decisions
* debugging
* scalability
* candidate experience

### 👔 HR Interview

Designed around areas such as:

* communication
* behavioral situations
* teamwork
* leadership
* conflict handling
* strengths and weaknesses
* career motivation
* project ownership

---

# 5. Voice-Enabled AI Interviewer

The interview experience combines an animated interviewer with browser speech APIs.

The browser uses:

```text
SpeechSynthesis API
```

to speak questions aloud.

It also uses:

```text
webkitSpeechRecognition
```

to convert spoken candidate answers into text.

### Voice interaction flow

```text
AI Question
     ↓
Browser Speech Synthesis
     ↓
AI Interviewer Speaks
     ↓
Microphone Activated
     ↓
Candidate Speaks
     ↓
Speech Recognition
     ↓
Speech Converted to Text
     ↓
Answer Displayed in Text Area
```

Candidates can also manually edit or type their answers.

The microphone can be enabled or disabled during the interview.

---

# 6. AI Interviewer Experience

To make the interaction feel more natural, the frontend includes male and female interviewer videos.

When the AI speaks:

```text
Text-to-Speech starts
       ↓
Interviewer video plays
       ↓
Microphone pauses
       ↓
AI completes question
       ↓
Video pauses
       ↓
Candidate microphone resumes
```

The interview begins with an AI-generated-style introduction such as:

```text
Hi [Candidate], it's great to meet you today.
I hope you're feeling confident and ready.

I'll ask you a few questions.
Just answer naturally, and take your time.
Let's begin.
```

This produces a more interview-like interaction than simply presenting questions on a webpage.

---

# 7. Timed Interview Questions

Every interview question has a time limit depending on difficulty.

```text
Easy   → 60 seconds
Medium → 90 seconds
Hard   → 120 seconds
```

The UI displays a live countdown timer while the candidate answers.

If the timer reaches zero, the current answer is automatically submitted.

The backend also validates the submitted `timeTaken` against the configured question time limit.

---

# 8. AI Answer Evaluation

Every submitted answer is sent to GPT-4o-mini for evaluation.

The AI evaluates three dimensions.

### Confidence

Evaluates whether the candidate sounds:

* clear
* confident
* structured
* professionally presented

### Communication

Evaluates:

* clarity
* simplicity
* answer structure
* readability
* ease of understanding

### Correctness

Evaluates:

* technical accuracy
* relevance
* completeness
* whether the answer actually addresses the question

Each dimension is scored from:

```text
0 → 10
```

The final question score is calculated from the evaluation dimensions.

Example AI response:

```json
{
  "confidence": 8,
  "communication": 7,
  "correctness": 9,
  "finalScore": 8,
  "feedback": "Strong technical explanation, but structure the response more clearly."
}
```

The score and feedback are stored with the interview in MongoDB.

---

# 9. Immediate Feedback

After answering each question, candidates receive concise AI feedback.

Example:

```text
Good explanation, but include a concrete example to strengthen your answer.
```

The feedback is also spoken aloud by the AI interviewer before the candidate moves to the next question.

---

# 10. Performance Analytics Dashboard

After completing all questions, the backend calculates the candidate's overall performance.

Metrics include:

```text
Overall Score
Average Confidence
Average Communication
Average Correctness
Question-wise Score
Question-wise Feedback
```

The frontend visualizes the results using:

* circular progress indicators
* skill progress bars
* question performance charts
* individual question cards
* AI feedback panels

---

# 11. Performance Trend Visualization

Question scores are visualized using **Recharts**.

Example:

```text
Score
10 |
 9 |                  ●
 8 |       ●
 7 |             ●
 6 |  ●
 5 |
   +-------------------------
      Q1  Q2  Q3  Q4  Q5
```

This helps candidates identify whether their performance improves or declines as questions become more difficult.

---

# 12. Question-Wise Breakdown

The final report retains information for each question:

```text
Question
Difficulty
Time Limit
Candidate Answer
Confidence Score
Communication Score
Correctness Score
Final Score
AI Feedback
```

This makes it easier to identify exactly where improvement is required.

---

# 13. PDF Report Export

Candidates can download their interview analytics as a PDF.

The report is generated in the browser using:

* jsPDF
* jspdf-autotable

The PDF contains:

```text
AI Interview Performance Report

Final Score

Confidence
Communication
Correctness

Professional Advice

Question-by-Question Analysis

Question
Score
AI Feedback
```

This allows candidates to save and compare their interview performance over time.

---

# 14. Interview History

Every interview is persisted in MongoDB.

Users can access an Interview History page containing:

* role
* experience
* interview mode
* date
* final score
* interview status

Example:

```text
Backend Engineer
3 Years • Technical
10 Aug 2026
8.2 / 10
Completed
```

Selecting an interview opens its complete analytics report.

---

# 15. Credit-Based Interview System

AI HireBooster uses a credit system to manage interview usage.

Every new user starts with:

```text
100 credits
```

Starting an AI interview currently requires:

```text
50 credits
```

Therefore a new user can complete approximately:

```text
100 / 50 = 2 interviews
```

before purchasing additional credits.

The credit balance is stored directly with the user in MongoDB.

---

# 16. Razorpay Payments

Users can purchase additional interview credits through Razorpay.

Current credit packs presented by the application are:

| Plan         | Price | Credits |
| ------------ | ----: | ------: |
| Free         |    ₹0 |     100 |
| Starter Pack |  ₹100 |     150 |
| Pro Pack     |  ₹500 |     650 |

### Payment flow

```text
User Selects Plan
       ↓
React Frontend
       ↓
POST /api/payment/order
       ↓
Express Backend
       ↓
Razorpay Order Created
       ↓
Razorpay Checkout
       ↓
Payment Completed
       ↓
Payment ID + Order ID + Signature
       ↓
POST /api/payment/verify
       ↓
HMAC SHA-256 Signature Verification
       ↓
Payment Marked Paid
       ↓
Credits Added to User
```

Payment information is also stored in MongoDB.

---

# 🧠 Complete Application Flow

```mermaid
flowchart TD

A[User Opens AI HireBooster] --> B[Google Authentication]

B --> C[Firebase Google Sign-In]

C --> D[Express Backend]
D --> E[MongoDB User]
D --> F[JWT Session]

F --> G[Interview Setup]

G --> H{Upload Resume?}

H -->|Yes| I[Multer PDF Upload]
I --> J[pdfjs-dist Text Extraction]
J --> K[GPT-4o-mini Resume Analysis]
K --> L[Extract Role Experience Projects Skills]

H -->|No| M[Manual Role & Experience]
L --> N[Generate Interview]
M --> N

N --> O[OpenRouter GPT-4o-mini]
O --> P[Generate 5 Questions]

P --> Q[Deduct 50 Credits]
Q --> R[Create MongoDB Interview]

R --> S[AI Voice Interview]

S --> T[Speech Synthesis Reads Question]
T --> U[Candidate Answers]
U --> V[Speech Recognition / Typed Input]

V --> W[Submit Answer]
W --> X[GPT-4o-mini Evaluation]

X --> Y[Confidence Score]
X --> Z[Communication Score]
X --> AA[Correctness Score]
X --> AB[AI Feedback]

AB --> AC{More Questions?}

AC -->|Yes| T
AC -->|No| AD[Finish Interview]

AD --> AE[Calculate Final Scores]
AE --> AF[Save Interview]

AF --> AG[Analytics Dashboard]
AG --> AH[Interview History]
AG --> AI[Download PDF Report]
```

---

# 🏗️ High-Level Architecture

```text
┌─────────────────────────────────────────────┐
│                React Frontend               │
│                                             │
│ React 19                                    │
│ Vite                                        │
│ Tailwind CSS                                │
│ Redux Toolkit                               │
│ React Router                                │
│ Motion                                      │
│ Recharts                                    │
│ jsPDF                                       │
└───────────────────┬─────────────────────────┘
                    │ HTTPS / REST
                    │ Cookies
                    ▼
┌─────────────────────────────────────────────┐
│            Node.js / Express API            │
│                                             │
│ Authentication                              │
│ Resume Processing                           │
│ Interview Generation                        │
│ Answer Evaluation                           │
│ Interview History                           │
│ Payments                                    │
│ Credit Management                           │
└───────┬──────────────┬───────────────┬──────┘
        │              │               │
        ▼              ▼               ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   MongoDB    │ │  OpenRouter  │ │   Razorpay   │
│              │ │              │ │              │
│ Users        │ │ GPT-4o-mini  │ │ Orders       │
│ Interviews   │ │ Resume AI    │ │ Payments     │
│ Payments     │ │ Interview AI │ │ Verification │
└──────────────┘ └──────────────┘ └──────────────┘

        ▲
        │
┌─────────────────┐
│    Firebase     │
│ Google Sign-In  │
└─────────────────┘
```

---

# 🛠️ Technology Stack

## Frontend

| Technology                 | Purpose                       |
| -------------------------- | ----------------------------- |
| React 19                   | Frontend UI                   |
| Vite                       | Development and build tooling |
| JavaScript                 | Application logic             |
| Tailwind CSS               | Responsive UI styling         |
| Redux Toolkit              | Global user state             |
| React Router               | Client-side navigation        |
| Axios                      | Backend API communication     |
| Firebase Auth              | Google authentication         |
| Motion                     | UI animations                 |
| Recharts                   | Analytics visualization       |
| React Circular Progressbar | Score visualization           |
| jsPDF                      | PDF generation                |
| jspdf-autotable            | Report tables                 |
| React Icons                | UI icons                      |
| Web Speech API             | AI voice output               |
| Webkit Speech Recognition  | Voice-to-text answers         |

---

## Backend

| Technology    | Purpose                                          |
| ------------- | ------------------------------------------------ |
| Node.js       | Backend runtime                                  |
| Express 5     | REST API                                         |
| MongoDB       | Application database                             |
| Mongoose      | MongoDB ODM                                      |
| JWT           | Session authentication                           |
| Cookie Parser | Authentication cookie parsing                    |
| Multer        | Resume uploads                                   |
| pdfjs-dist    | PDF text extraction                              |
| Axios         | OpenRouter communication                         |
| OpenRouter    | LLM gateway                                      |
| GPT-4o-mini   | Resume analysis, questions and answer evaluation |
| Razorpay      | Payment processing                               |
| Node Crypto   | Payment signature verification                   |
| CORS          | Cross-origin frontend access                     |

---

# 🗄️ Database Design

## User

```text
User
├── name
├── email
├── credits
├── createdAt
└── updatedAt
```

Default credits:

```text
100
```

---

## Interview

```text
Interview
├── userId
├── role
├── experience
├── mode
├── resumeText
├── questions[]
│   ├── question
│   ├── difficulty
│   ├── timeLimit
│   ├── answer
│   ├── feedback
│   ├── score
│   ├── confidence
│   ├── communication
│   └── correctness
├── finalScore
├── status
├── createdAt
└── updatedAt
```

---

## Payment

A payment record links a Razorpay order to:

```text
User
Plan
Amount
Credits
Razorpay Order
Razorpay Payment
Payment Status
```

After successful signature verification, credits are added to the associated user.

---

# 🌐 REST API

Backend routes are grouped into four API modules.

```text
/api/auth
/api/user
/api/interview
/api/payment
```

---

## Authentication APIs

### Google Authentication

```http
POST /api/auth/google
```

Creates or retrieves the user and establishes an authenticated session.

---

### Logout

```http
GET /api/auth/logout
```

Clears the authentication session.

---

# User APIs

### Current User

```http
GET /api/user/current-user
```

Requires authentication.

Returns the currently authenticated user and current credit balance.

---

# Interview APIs

### Analyze Resume

```http
POST /api/interview/resume
```

Authentication required.

Request:

```text
multipart/form-data
resume: PDF file
```

Response:

```json
{
  "role": "Software Engineer",
  "experience": "3 years",
  "projects": [],
  "skills": [],
  "resumeText": "..."
}
```

---

### Generate Questions

```http
POST /api/interview/generate-questions
```

Authentication required.

Example request:

```json
{
  "role": "Backend Engineer",
  "experience": "3 years",
  "mode": "Technical",
  "resumeText": "...",
  "projects": [
    "Payment Reconciliation Platform"
  ],
  "skills": [
    "Node.js",
    "Kafka",
    "Redis"
  ]
}
```

Example response:

```json
{
  "interviewId": "...",
  "creditsLeft": 50,
  "userName": "Candidate",
  "questions": [
    {
      "question": "...",
      "difficulty": "easy",
      "timeLimit": 60
    }
  ]
}
```

---

### Submit Answer

```http
POST /api/interview/submit-answer
```

Authentication required.

Example:

```json
{
  "interviewId": "...",
  "questionIndex": 0,
  "answer": "My answer...",
  "timeTaken": 42
}
```

Returns AI feedback for the answer.

---

### Finish Interview

```http
POST /api/interview/finish
```

Example:

```json
{
  "interviewId": "..."
}
```

Returns:

```json
{
  "finalScore": 8.2,
  "confidence": 8.0,
  "communication": 7.8,
  "correctness": 8.6,
  "questionWiseScore": []
}
```

---

### Interview History

```http
GET /api/interview/get-interview
```

Returns interviews belonging to the current user.

---

### Interview Report

```http
GET /api/interview/report/:id
```

Returns detailed analytics for a specific interview.

---

# Payment APIs

### Create Razorpay Order

```http
POST /api/payment/order
```

Authentication required.

---

### Verify Payment

```http
POST /api/payment/verify
```

Authentication required.

Verifies the Razorpay signature and adds credits after successful payment processing.

---

# 📁 Project Structure

```text
ai-hire-booster/
│
├── client/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   ├── videos/
│   │   │   │   ├── female-ai.mp4
│   │   │   │   └── male-ai.mp4
│   │   │   ├── HR.png
│   │   │   ├── tech.png
│   │   │   ├── resume.png
│   │   │   ├── history.png
│   │   │   └── ...
│   │   │
│   │   ├── components/
│   │   │   ├── AuthModel.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Step1SetUp.jsx
│   │   │   ├── Step2Interview.jsx
│   │   │   ├── Step3Report.jsx
│   │   │   └── Timer.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Auth.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── InterviewPage.jsx
│   │   │   ├── InterviewHistory.jsx
│   │   │   ├── InterviewReport.jsx
│   │   │   └── Pricing.jsx
│   │   │
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   │
│   │   ├── utils/
│   │   │   └── firebase.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   │
│   ├── config/
│   │   ├── connectDb.js
│   │   └── token.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── interview.controller.js
│   │   ├── payment.controller.js
│   │   └── user.controller.js
│   │
│   ├── middlewares/
│   │   ├── isAuth.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   ├── interview.model.js
│   │   └── payment.model.js
│   │
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── interview.route.js
│   │   ├── payment.route.js
│   │   └── user.route.js
│   │
│   ├── services/
│   │   ├── openRouter.service.js
│   │   └── razorpay.service.js
│   │
│   ├── public/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Local Development Setup

## Prerequisites

Install:

* Node.js
* npm
* MongoDB or MongoDB Atlas account
* Firebase project
* OpenRouter account/API key
* Razorpay account/test keys

---

## 1. Clone Repository

```bash
git clone https://github.com/rajarshi700/ai-hire-booster.git
cd ai-hire-booster
```

---

# 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

# 3. Configure Frontend Environment Variables

Create:

```text
client/.env
```

Add:

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

The Firebase project configuration currently contains the remaining Firebase application identifiers in `src/utils/firebase.js`.

For a cleaner deployment setup, these values can also be moved entirely to environment variables.

---

# 4. Start Frontend

```bash
npm run dev
```

Vite normally starts on:

```text
http://localhost:5173
```

---

# 5. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

---

# 6. Configure Backend Environment Variables

Create:

```text
server/.env
```

Example:

```env
PORT=6000

MONGODB_URL=mongodb+srv://username:password@cluster/database

JWT_SECRET=your_secure_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Never commit `.env` files or API secrets to Git.

---

# 7. Start Backend

```bash
npm run dev
```

Backend default port:

```text
6000
```

---

# 🔧 Development Configuration Note

The current code contains deployed frontend/backend origins directly in application code.

Backend CORS currently targets the deployed frontend, while the frontend API URL targets the deployed backend.

For local development, it is recommended to move these URLs to environment variables.

Example frontend variable:

```env
VITE_API_URL=http://localhost:6000
```

Then:

```javascript
export const ServerUrl = import.meta.env.VITE_API_URL;
```

Backend example:

```env
CLIENT_URL=http://localhost:5173
```

Then configure CORS using:

```javascript
origin: process.env.CLIENT_URL
```

This makes the same codebase work cleanly across:

```text
development
staging
production
```

---

# 📜 Available Frontend Commands

From `/client`:

```bash
npm run dev
```

Start Vite development server.

```bash
npm run build
```

Create a production frontend build.

```bash
npm run lint
```

Run ESLint.

```bash
npm run preview
```

Preview the production build locally.

---

# 📜 Backend Commands

From `/server`:

```bash
npm run dev
```

Starts the Express server using Nodemon.

---

# 🔐 Authentication Architecture

Protected backend routes use JWT authentication middleware.

```text
Request
   ↓
Read JWT Cookie
   ↓
Verify JWT
   ↓
Extract userId
   ↓
Attach req.userId
   ↓
Protected Controller
```

The token lifetime is currently:

```text
7 days
```

Interview, user, and payment operations use authenticated backend routes.

---

# 🤖 AI Integration

All LLM communication is centralized through:

```text
server/services/openRouter.service.js
```

The application currently uses:

```text
openai/gpt-4o-mini
```

through the OpenRouter Chat Completions API.

The LLM is used for three primary tasks.

### Resume understanding

```text
Resume Text
     ↓
Structured Candidate Profile
```

### Interview generation

```text
Candidate Context
     ↓
Five Personalized Questions
```

### Answer evaluation

```text
Question + Candidate Answer
     ↓
Confidence
Communication
Correctness
Final Score
Feedback
```

---

# 🪙 Credit Lifecycle

```text
New User
   ↓
100 Credits
   ↓
Start Interview
   ↓
Validate Credits >= 50
   ↓
Generate Questions
   ↓
Deduct 50 Credits
   ↓
Interview Created
```

For purchased credits:

```text
Credit Pack
   ↓
Razorpay Order
   ↓
Payment
   ↓
Signature Verification
   ↓
Credits Incremented
```

---

# 📊 Interview Scoring

For every answered question:

```text
Confidence      0–10
Communication   0–10
Correctness     0–10
```

AI returns a final question score.

At interview completion:

```text
Overall Score =
Sum of Question Scores
──────────────────────
Number of Questions
```

The platform separately calculates:

```text
Average Confidence

Average Communication

Average Correctness
```

These become the values displayed on the analytics dashboard.

---

# 📱 Application Pages

## `/`

Landing page containing the product introduction and entry points to interview preparation.

## `/auth`

Google authentication page.

## `/interview`

Three-stage interview workflow:

```text
Setup
  ↓
Interview
  ↓
Report
```

## `/history`

Displays previous interviews and scores.

## `/report/:id`

Displays detailed analytics for a previous interview.

## `/pricing`

Displays credit packages and Razorpay purchasing flow.

---

# 🌍 Current Deployment Configuration

The frontend code is configured to communicate with:

```text
https://interviewiqbackend-h6yh.onrender.com
```

The backend CORS configuration currently permits:

```text
https://ai-hire-booster.onrender.com
```

For production deployments, these should preferably be provided through environment variables rather than hard-coded URLs.

---

# 🔮 Suggested Roadmap

Potential improvements for future versions include:

* Firebase ID-token verification on the backend
* Server-side payment plan configuration
* Stronger interview ownership validation
* Fully environment-based deployment configuration
* OpenRouter structured-output validation
* AI retry/fallback strategy
* Additional LLM providers
* Web Speech API compatibility fallback
* Audio recording and replay
* Webcam interview simulation
* Behavioral interview scoring
* STAR-method answer analysis
* Resume ATS scoring
* Job-description upload
* Resume vs job-description matching
* Dynamic follow-up questions
* Adaptive question difficulty
* System-design interview mode
* Coding interview mode
* DSA code editor
* Real-time code execution
* Company-specific interview preparation
* Interview streaks and goals
* Long-term performance trends
* Admin analytics dashboard
* Email reports
* Rate limiting
* Automated tests
* Docker deployment
* CI/CD pipeline
* Redis caching
* Background AI processing

---

# 💡 Future AI Interview Flow

A more advanced version could support adaptive interviews:

```text
Question
   ↓
Candidate Answer
   ↓
AI Evaluation
   ↓
Was Answer Strong?
   │
   ├── Yes → Harder Follow-Up
   │
   └── No → Clarification / Easier Follow-Up
   ↓
Continue Interview
```

This would make AI HireBooster behave more like a real interviewer instead of following a fixed five-question sequence.

---

# 🔒 Security Recommendations

For production usage, consider implementing:

* Firebase ID-token verification on the API
* `httpOnly`, `secure`, and correctly configured SameSite cookies
* interview ownership checks on all interview endpoints
* server-controlled payment plans and prices
* payment processing transactions/idempotency
* request validation
* strict PDF MIME/type validation
* API rate limiting
* centralized error handling
* structured LLM response validation
* secure HTTP headers
* audit logging
* production secret management

---

# 🧪 Testing Opportunities

Recommended automated testing layers:

### Unit Tests

Test:

* JWT utilities
* score calculations
* payment signature verification
* resume transformation
* validation helpers

### API Integration Tests

Test:

```text
Authentication
Resume Upload
Question Generation
Answer Submission
Interview Completion
Interview History
Payment Verification
```

### AI Contract Tests

Validate that AI responses follow expected schemas:

```json
{
  "confidence": 0,
  "communication": 0,
  "correctness": 0,
  "finalScore": 0,
  "feedback": "..."
}
```

### End-to-End Tests

A complete E2E test can verify:

```text
Login
 → Configure Interview
 → Upload Resume
 → Generate Questions
 → Submit Answers
 → Finish Interview
 → View Report
```

---

# 📌 Why This Project Is Interesting

AI HireBooster combines several real-world engineering areas in one full-stack application:

```text
Frontend Engineering
+
Backend API Design
+
Authentication
+
MongoDB Data Modeling
+
Generative AI
+
Prompt Engineering
+
PDF Processing
+
Browser Speech APIs
+
Payments
+
Analytics
+
PDF Reporting
+
Cloud Deployment
```

The AI is not used as a standalone chatbot.

It participates in a complete application workflow:

```text
Unstructured Resume
        ↓
Structured Candidate Context
        ↓
Personalized AI Questions
        ↓
Human Voice Answers
        ↓
AI Evaluation
        ↓
Structured Scores
        ↓
Persistent Analytics
        ↓
Actionable Interview Feedback
```

---

# 👨‍💻 Author

**Rajarshi Roy**

GitHub:
https://github.com/rajarshi700

Repository:
https://github.com/rajarshi700/ai-hire-booster

---

# ⭐ Support

If you find AI HireBooster useful or interesting, consider giving the repository a ⭐.

Contributions, suggestions, bug reports, and feature ideas are welcome.

---

## AI HireBooster

**Practice smarter. Understand your weaknesses. Perform better in real interviews.**
