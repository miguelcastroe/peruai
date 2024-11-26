// Supabase CSV URL
const csvUrl = "https://ouauehtpqfvldbvsihpu.supabase.co/storage/v1/object/public/portfolio/bites_supa.csv";
let bites = [];
let currentIndex = 0;
const container = document.getElementById("bite-container");

// Function to parse CSV into JSON format
function parseCSV(csv) {
  const rows = csv.split("\n").slice(1); // Skip header
  return rows.map(row => {
    const [categoria, tipo, descripcion] = row.split(",");
    return { categoria, tipo, descripcion };
  });
}

// Function to load a single bite into the UI
function loadBite() {
  if (currentIndex >= bites.length) {
    // If no more bites, show a "no more content" message
    const endMessage = document.createElement("div");
    endMessage.textContent = "No hay más contenido disponible.";
    endMessage.style.textAlign = "center";
    endMessage.style.color = "#657786"; // Twitter Gray
    endMessage.style.marginTop = "20px";
    container.appendChild(endMessage);
    window.removeEventListener("scroll", handleScroll);
    return;
  }

  // Load the current bite
  const bite = bites[currentIndex];
  currentIndex++;

  // Create bite elements
  const biteElement = document.createElement("div");
  biteElement.className = "bite";

  const tag = document.createElement("div");
  tag.className = "tag";
  tag.textContent = bite.categoria;

  const text = document.createElement("div");
  text.className = "text";
  text.textContent = `${bite.tipo}: ${bite.descripcion}`;

  // Append elements
  biteElement.appendChild(tag);
  biteElement.appendChild(text);
  container.appendChild(biteElement);
}

// Fetch CSV and initialize the app
async function initialize() {
  try {
    const response = await fetch(csvUrl);
    const csvText = await response.text();
    bites = parseCSV(csvText);
    loadBite(); // Load the first bite initially
    window.addEventListener("scroll", handleScroll);
  } catch (error) {
    console.error("Error fetching CSV:", error);
  }
}

// Check if user scrolled near the bottom
function handleScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    loadBite(); // Load one bite per scroll
  }
}

// Initialize the application
initialize();
