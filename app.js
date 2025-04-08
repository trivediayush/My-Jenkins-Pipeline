const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Node App</title>
      <style>
        body {
          background-color: #121212;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-family: Arial, sans-serif;
          margin: 0;
        }
        .container {
          text-align: center;
          border: 2px solid #ffffff33;
          padding: 40px;
          border-radius: 10px;
          background-color: #1e1e1e;
          box-shadow: 0 0 20px #00ffcc55;
        }
        h1 {
          font-size: 3em;
          margin-bottom: 10px;
          color: #00ffcc;
        }
        p {
          font-size: 1.2em;
          margin-top: 0;
        }
        .footer {
          margin-top: 20px;
          font-size: 0.9em;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Hello from Ayush Trivedi!</h1>
        <p>Welcome to my Node.js CI/CD Application.</p>
      </div>
    </body>
    </html>
  `;
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
