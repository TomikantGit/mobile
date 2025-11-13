// Armazenamento em memória para Snack Expo
let petsStorage = [];

// busca os pets salvos
export async function getPets() {
  return petsStorage;
}

// salva a lista de pets
export async function savePet(pets) {
  petsStorage = pets;
}
