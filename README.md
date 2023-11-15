# LINK-5

To set up and run your application, follow these steps:

Backend Setup (Express server):
Navigate to the backend directory in your terminal:

bash
Copy code
cd backend
Install the required Node.js packages:

bash
Copy code
npm install
Configure Google OAuth:

Create a project on the Google Cloud Console.
Set up the OAuth consent screen and create OAuth 2.0 client credentials.
Replace 'YOUR_GOOGLE_CLIENT_ID' and 'YOUR_GOOGLE_CLIENT_SECRET' in index.js with your actual credentials.
Run the backend server:

bash
Copy code
npm start
Frontend Setup (React app):
Navigate to the frontend directory in a new terminal window:

bash
Copy code
cd frontend
Install the required Node.js packages:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
Application Flow:
Google OAuth Login:

Open your browser and go to http://localhost:3000 (or the port specified by the React development server).
Click the "Login with Google" button.
You will be redirected to Google for authentication. Log in with your Google credentials and grant the required permissions.
View Due Invoices:

After successful Google OAuth login, you will be redirected back to the React app.
Explore the app and navigate to the "Invoices" section.
Trigger Automation Actions through Zapier:

In the "Invoices" section, there should be a button to "Trigger Automation" or a similar action.
Click the button to simulate triggering automation actions.
Check the backend console for logs related to the Zapier integration (ZapierIntegrationController.js).
Notes:
Ensure that your Google OAuth credentials are correctly set up in the backend.
If running into CORS issues during development, consider using the cors middleware in your Express backend.
Make sure your backend server is running on http://localhost:3001 (or the specified port).
Verify that the backend routes (/auth/google, /invoices, /zapier/webhook) are accessible and functioning as expected.

