const URL = "https://dragonball-api.com/api/characters";

/*

PUT -> actualizar un recurso existente

{
    "name": "Vegeta",
    "age": 46,
    "powerLevel": 7000
}

PATCH -> actualizar parcialmente un recurso existente

{
    "name": "Vegeta",
    "age": 47,
    "powerLevel": 7000
}

*/

/*fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Fetch operation completed.");
  });*/

export async function getData() {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      console.log("Error fetching data: " + res.status);
      return;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Error: " + error);
  }
}

/*
{
id: 1
name: "Goku"
ki: "60.000.000"
maxKi: "90 Septillion"
race: "Saiyan"
gender: "Male"
description: "El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente envia..."
image: "https://dragonball-api.com/characters/goku_normal.webp"
affiliation: "Z Fighter"
deletedAt: null
}

*/

export function buildCharacterItem(character) {
  return `<div class="glass-card rounded-lg p-4 mb-4 flex flex-col">
  <div class="flex justify-between items-start mb-2">
  <img src="${character.image}" alt="${character.name}" class="w-full h-10 object-contain" />
                        <div class="flex items-center gap-3">
                            <div class="task-status"></div>
                            <h3 class="text-xl font-semibold">${character.name}</h3>
                        </div>
                    </div>
                    <p class="text-gray-300 mb-3">Crear una interfaz futurista con animaciones y efectos visuales
                        atractivos.</p>
                    <div class="mt-auto">
                        <div class="flex justify-between text-xs text-gray-400 mb-1">
                            <span>KI: ${character.ki}</span>
                            <span>Race: ${character.race}</span>
                        </div>
                        <div class="progress-bar w-full">
                            <div class="h-full bg-[var(--primary)]" style="width: ${character.ki}"></div>
                        </div>
                    </div>
                </div>`;
}
