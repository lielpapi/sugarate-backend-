
# Sugarate Backend

## Installation

1. Clone the repository:
   ```
   git clone <repo-url>
   cd sugarate-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Copy the example environment file and configure it:
   ```
   cp .env.example .env
   ```

4. Update the `.env` file with your environment variables.

## Run the Project

```
npm run dev
```

## Environment Variables

| Key                  | Example                                          |
|----------------------|--------------------------------------------------|
| PORT                 | 4000                                             |
| MONGODB_URI          | mongodb://localhost:27017/Sugarate               |
| JWT_SECRET           | your-secret-key                                  |
| OPENAI_API_KEY       | your-openai-api-key                              |
| GOOGLE_CLIENT_ID     | your-google-client-id                            |
| GOOGLE_CLIENT_SECRET | your-google-client-secret                        |
| GOOGLE_REDIRECT_URI  | http://localhost:4000/api/auth/google/callback   |
| SESSION_SECRET       | your-session-secret                              |
| CLIENT_URL           | http://localhost:5173                            |
| SERVER_URL           | http://localhost:4000                            |