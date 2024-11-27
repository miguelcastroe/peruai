// Manually added bites from the CSV
const bites = [
  { category: "IA", type: "Propuesta", description: "La inteligencia artificial busca revolucionar los servicios públicos." },
  { category: "Datos Abiertos", type: "Beneficio", description: "El portal PNDA democratiza el acceso a la información pública." },
  { category: "IA", type: "Crítica", description: "Falta de presupuestos claros pone en riesgo la implementación." },
  { category: "Datos Abiertos", type: "Propuesta", description: "Crear incentivos fiscales para fomentar la adopción de datos abiertos." },
  { category: "IA", type: "Beneficio", description: "La IA puede transformar sectores clave como salud y educación." },
  { category: "Datos Abiertos", type: "Crítica", description: "La calidad de los datos no está alineada con las necesidades de IA avanzada." }
];

let currentIndex = 0;
const container = document.getElementById("bite-container");

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
  tag.textContent = bite.category;

  const text = document.createElement("div");
  text.className = "text";
  text.textContent = `${bite.type}: ${bite.description}`;

  // Append elements
  biteElement.appendChild(tag);
  biteElement.appendChild(text);
  container.appendChild(biteElement);
}

// Check if user scrolled near the bottom
function handleScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    loadBite(); // Load one bite per scroll
  }
}

// Initialize the application
function initialize() {
  loadBite(); // Load the first bite initially
  window.addEventListener("scroll", handleScroll);
}

// Start the application
initialize();
