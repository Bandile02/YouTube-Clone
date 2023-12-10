# YouTube Clone App

This is a YouTube clone app that leverages the YouTube API to display YouTube video content. 

## Features

- Search for YouTube videos  
- Display video title, thumbnails, embed videos
- Pagination for multiple pages of results
- Responsive design for mobile and desktop

## Usage

The app allows you to search for YouTube videos on any topic. It will display the matching video results including the titles, thumbnails, and embedded video players.

To start, enter a search term in the search box. The app will call the YouTube API and display paginated results.

Click on any video thumbnail or title to watch the video in the embedded player. 

Navigate between result pages using the next/previous buttons.

## API Integration

The app uses the YouTube Data API v3 to retrieve search results and display videos.

A valid API key with the YouTube Data API enabled is required. This should be stored as a server-side environment variable.

On the initial search, the app makes a GET request to the API endpoint:

```
https://www.googleapis.com/youtube/v3/search
```

With search, pagination, and API key parameters. Video IDs are extracted from the response to display embed players.

Subsequent paginated requests update the pageToken to advance through all available result pages.

## Built With

- [YouTube Data API](https://developers.google.com/youtube/v3) - Used to search and retrieve YouTube video metadata
- HTML, CSS, JavaScript - Frontend implementation
- Node.js / Express - Backend to store API key  

## Installation

1. Get a YouTube Data API key and enable the YouTube Data API
2. Clone the repo
3. Install dependencies with `npm install`  
4. Configure the API key in the environment
5. Start local dev server

Let me know if you have any other questions!
