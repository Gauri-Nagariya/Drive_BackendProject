<h1>Drive Backend Project</h1>

<p>
  A full backend + server-rendered project built with <strong>Node.js, Express, MongoDB, JWT, Multer, and EJS</strong>.
  Users can register, login, upload files, view them, delete them, download them, and update their profile.
  <br><br>
  All uploaded files are stored <strong>directly inside MongoDB</strong> using <strong>Binary Buffer</strong> (not locally).
</p>

<!-- View Project Button -->
<p>
  <a href="https://drive-x6zy.onrender.com" target="_blank" style="
      display:inline-block;
      padding:12px 20px;
      background:#2563eb;
      color:white;
      border-radius:8px;
      text-decoration:none;
      font-weight:bold;">
    View Project
  </a>
</p>

<hr>

<h2>Features</h2>
<ul>
  <li>User Registration & Login with <strong>JWT Authentication</strong></li>
  <li>Password hashing using <strong>Bcrypt</strong></li>
  <li>File Upload using <strong>Multer</strong></li>
  <li><strong>Files stored directly in MongoDB (Buffer/Binary)</strong></li>
  <li>View, Download & Delete uploaded files</li>
  <li>Profile Update (username, email, password)</li>
  <li>Form validations using <strong>express-validator</strong></li>
  <li>Cookies handled with <strong>cookie-parser</strong></li>
  <li>Server-Side Rendering using <strong>EJS</strong></li>
</ul>

<hr>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Node.js</strong></li>
  <li><strong>Express.js</strong></li>
  <li><strong>MongoDB Atlas</strong></li>
  <li><strong>Mongoose</strong></li>
  <li><strong>Multer</strong></li>
  <li><strong>JWT</strong> (jsonwebtoken)</li>
  <li><strong>EJS</strong></li>
  <li><strong>dotenv</strong></li>
</ul>

<hr>

<h2>Project Structure</h2>

<pre>
/project-root
│── server.js
│── package.json
│── .env
│── /views        → EJS templates
│── /routes       → App routes
│── /models       → Mongoose schemas
│── /controllers  → Business logic
│── /middleware   → Auth + validators
</pre>

<hr>

<h2>Installation</h2>

<h3>1️⃣ Clone the Repo</h3>
<pre>git clone https://github.com/your-repo.git</pre>

<h3>2️⃣ Install Dependencies</h3>
<pre>npm install</pre>

<h3>3️⃣ Add .env File</h3>
<pre>
MONGO_URI = your_mongodb_link
JWT_SECRET = your_secret
PORT = 3000
</pre>

<h3>4️⃣ Start Server</h3>
<pre>npm run dev</pre>

<hr>

<h2>Authentication Flow</h2>
<ul>
  <li>Password hashed with Bcrypt</li>
  <li>JWT generated on login</li>
  <li>Token stored in cookies</li>
  <li>Protected routes require verification</li>
</ul>

<hr>

<h2>CRUD Operations</h2>
<ul>
  <li>Create User Account</li>
  <li>Login</li>
  <li>Upload File</li>
  <li>View / Download / Delete File</li>
  <li>Update Profile</li>
</ul>

<hr>

<h2>Deployment</h2>
<ul>
  <li>Deployable on <strong>Render</strong></li>
  <li>No need for local file storage</li>
  <li>Makes deployment simple + clean</li>
</ul>

<hr>

<h2>License</h2>
<p>MIT License</p>

<hr>

<h2>👤 Author</h2>
<p>Gauri Nagariya</p>
