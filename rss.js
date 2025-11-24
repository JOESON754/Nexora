// This function fetches headlines from an RSS feed
async function loadRSS(feedUrl, containerId) {
  try {
    // Convert RSS feed into JSON using a free API
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`);
    const data = await response.json();

    // Find the container in your HTML
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    // Show the first 5 headlines
    data.items.slice(0, 5).forEach(item => {
      const headline = document.createElement("p");
      headline.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
      container.appendChild(headline);
    });
  } catch (error) {
    console.error("RSS load failed:", error);
  }
}

// Run this when the page loads
document.addEventListener("DOMContentLoaded", () => {
  loadRSS("https://www.standardmedia.co.ke/rss/kenya", "kenya-feed");
});
