# Chat Application with MongoDB and OpenAI Integration

This project is a simple Flask-based web application that integrates MongoDB for storing chat data and OpenAI's GPT-3.5 for generating responses. Users can interact with the application by asking questions, and the application will either retrieve a stored response or generate a new one using OpenAI's API.

## Installation and Setup

### Prerequisites

1. MongoDB Compass (v1.40.3)
2. Node.js (v18.18.1)
3. Tailwind CSS (v3.3.3)
4. Python (ensure you have `pip` for installing libraries)

### Step-by-Step Guide

#### 1. Install MongoDB Compass

Download and install MongoDB Compass from the official website.

#### 2. Install Node.js

Download and install Node.js from the official website.

#### 3. Install Tailwind CSS

Download Tailwind CSS for Windows and place the files in the specified directory.

#### 4. Copy the Required Files

1. Copy the `tailwindcss-3.3.3` folder to `C:\`
2. Copy the `npm` folder to `C:\Users\%User%\AppData\Roaming`

#### 5. Update Environment Variables

Add the following paths to your system's environment variables under `Path`:

1. `C:\Users\%User%\AppData\Roaming\npm`
2. `C:\tailwindcss-3.3.3`
3. `C:\Program Files\nodejs`

#### 6. Install Python Libraries

Open your terminal and run the following commands to install the necessary Python libraries:

```sh
pip install flask
pip install pymongo
pip install open ai
pip install flask_pymongo
pip install openai==0.28
```

### Running the Application

#### 1. Start Tailwind CSS

Open VSCode or any terminal and run:

```sh
npm run tw
```

#### 2. Start the Flask Application

In the same or a new terminal, navigate to the project directory and run:

```sh
python main.py
```

The application will start and be accessible at `http://127.0.0.1:2001`.

### Application Routes

- `/`: Home route displaying chat history.
- `/delete_query`: Route to delete a specific question from the database.
- `/api`: Route for handling chat questions and generating responses.

### Environment Configuration

Ensure you set the following configurations in your code:

- `openai.api_key`: Your OpenAI API key.
- `app.config["MONGO_URI"]`: Your MongoDB URI.


### Adding Your OpenAI API Key and MongoDB URI

#### 1. Generate an OpenAI API Key

1. Go to the [OpenAI website](https://www.openai.com/).
2. Log in to your OpenAI account (or sign up if you don't have one).
3. Navigate to the API section in your account settings.
4. Generate a new API key and copy it to your clipboard.

#### 2. Set Up a MongoDB Cluster and Get the Connection String (URI)

1. Go to the [MongoDB website](https://www.mongodb.com/).
2. Log in to your MongoDB account (or sign up if you don't have one).
3. Navigate to the **Clusters** section in the MongoDB Atlas dashboard.
4. Create a new cluster (you can use the free tier for development purposes).
5. Once the cluster is created, click on the **Connect** button.
6. Choose **Connect your application**.
7. Copy the provided connection string (URI) and replace `<password>` with your MongoDB database user's password.

#### 3. Add the OpenAI API Key and MongoDB URI to Your Project

##### Method 1: Directly in the Code

1. Open the project file where the API key and MongoDB URI are used (e.g., `main.py`).
2. Replace `"YOUR_API_KEY"` with your actual OpenAI API key.
3. Replace `"YOUR_MONGODB_URI"` with your actual MongoDB URI.


##### Method 2: Using Environment Variables (Recommended for Security)

1. Create a `.env` file in the root directory of your project.
2. Add your OpenAI API key and MongoDB URI to the `.env` file:

```
OPENAI_API_KEY=your_openai_api_key
MONGO_URI=your_mongodb_uri
```

3. Install the `python-dotenv` package to load environment variables from the `.env` file:

```sh
pip install python-dotenv
```

The application will start and be accessible at `http://127.0.0.1:2001`.

- by Aditya Kumar
- Do not forget to give credits.