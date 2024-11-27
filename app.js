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

  // Create tags container
  const tagsContainer = document.createElement("div");
  tagsContainer.className = "tags";

  const categoryTag = document.createElement("div");
  categoryTag.className = "tag";
  categoryTag.textContent = bite.category;

  const typeTag = document.createElement("div");
  typeTag.className = "tag";
  typeTag.textContent = bite.type;

  // Append tags to tags container
  tagsContainer.appendChild(categoryTag);
  tagsContainer.appendChild(typeTag);

  // Create description
  const text = document.createElement("div");
  text.className = "text";
  text.textContent = bite.description;

  // Append tags and text to bite element
  biteElement.appendChild(tagsContainer);
  biteElement.appendChild(text);
  container.appendChild(biteElement);
}

// Improved scroll handling
function handleScroll() {
  const scrollOffset = window.innerHeight + window.scrollY;
  const threshold = document.body.offsetHeight - 50;

  if (scrollOffset >= threshold) {
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
