 // API key from Google Cloud Console
const API_KEY = 'AIzaSyAwf8a8pmMhPxRFb07S7ixqID0hlD9nhLM'; 

const form = document.getElementById("searchForm");

/*
async function searchVideos(query) {

    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${API_KEY}`);
  
    return response.json();  
  }*/
// Submit handler
form.addEventListener("submit", async (e) => {

  // Prevent page reload
  e.preventDefault(); 
  
  // Get input value  
  const searchTerm = form.elements["searchTerm"].value;

  // Call API
  const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${API_KEY}`);
  // Process response  
  displayResults(await response.json());

});

// Display results function
function displayResults(data) {
  // Loop through videos
  data.items.forEach(item => {
  
    // Create result element  
    const div = document.createElement("div");
    div.classList.add("result");
    div.innerHTML = `
      <h3>${item.snippet.title}</h3>
      <iframe width="250" height="140" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>`;

    // Append to container      
    document.getElementById("results").appendChild(div);
  
  });}