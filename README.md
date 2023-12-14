<center>

# NC News

</center>

Welcome to NC News, a website that allows users to read, vote, and comment on articles. The app has several features, including viewing articles by topic, reading individual articles, voting on articles, posting and deleting comments, sorting articles, and logging in as a dummy user.

This README provides information on how to use the app, deploy it, and run it locally.

## Deployed Version

You can access the deployed version of NC News [here](https://nc-news-roshan.netlify.app/).

## Backend Repository

To explore the backend of NC News, visit the [backend repository](https://github.com/royr5/nc-news).

## Local Development

To run NC News locally, ensure you have Node.js installed. The minimum version required is v21.1.0:

Clone the repository:

```bash
git clone https://github.com/royr5/nc-news-frontend.git

cd nc-news-frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Project Structure

- `src`: Contains the source code of the React application.
  - `components`: Various React components used in the app.
  - `contexts`: Context providers for managing user data.
  - `utils`: Utility functions for interacting with the backend API.
- `index.css` and `main.jsx`: Entry point files for styling and rendering the app.
