import Navbar from './components/Section1/navbar';
import Pagecontent from './components/Section1/pagecontent';

export const App = () => {

  const pokemon = [
  {
    img: "https://i.pinimg.com/736x/b0/62/24/b06224595fc452e70d268eebbda50bb0.jpg",
    name: "Gengar",
    p: "Mischievous Ghost-type Pokémon known for shadows, tricks, and creepy smiling attacks.",
    link: "https://in.pinterest.com/search/pins/?q=gengar%209%3A16%20images&rs=typed"
  },

  {
    img: "https://i.pinimg.com/736x/ca/9f/15/ca9f15bce249f6adb66ede5e54fe6811.jpg",
    name: "Pikachu",
    p: "Electric-type mascot Pokémon famous for thunder attacks and adorable yellow appearance.",
    link: "https://in.pinterest.com/search/pins/?q=pikachu%209%3A16%20images&rs=typed"
  },

  {
    img: "https://i.pinimg.com/736x/be/82/8d/be828d95d39fa952a928f370a7e0fedc.jpg",
    name: "Charizard",
    p: "Powerful Fire-type dragon Pokémon that breathes flames and dominates intense battles.",
    link: "https://in.pinterest.com/search/pins/?q=charizard%209%3A16%20images&rs=typed"
  },

  {
    img: "https://i.pinimg.com/736x/3f/89/7f/3f897fd92018810b0771f1c57d4131ac.jpg",
    name: "Bulbasaur",
    p: "Calm Grass-type starter Pokémon carrying a growing plant bulb on its back.",
    link: "https://in.pinterest.com/search/pins/?q=bulbasor%209%3A16%20images&rs=typed"
  },

  {
    img: "https://i.pinimg.com/736x/41/99/3e/41993e922807425b85ce84c29db2ab8e.jpg",
    name: "Squirtle",
    p: "Cute Water-type turtle Pokémon recognized for defensive shell and water attacks.",
    link: "https://in.pinterest.com/search/pins/?q=squirtle%209%3A16%20images&rs=typed"
  },

  {
    img: "https://i.pinimg.com/736x/6a/34/a9/6a34a943ee2cff4c306e870ab3a03e01.jpg",
    name: "Lucario",
    p: "Fighting Steel-type Pokémon capable of sensing aura and powerful energy attacks.",
    link: "https://in.pinterest.com/search/pins/?q=lucario%209%3A16%20images&rs=typed"
  },

  {
    img: "https://i.pinimg.com/736x/9b/70/c4/9b70c4ed8a3f1b0763906de51731fa72.jpg",
    name: "Eevee",
    p: "Special Normal-type Pokémon famous for multiple unique and powerful evolutions.",
    link: "https://in.pinterest.com/search/pins/?q=evee%209%3A16%20images&rs=typed"
  },

  {
    img: "https://i.pinimg.com/736x/ec/a1/7e/eca17e4312bd49e13b214cdcb194c094.jpg",
    name: "Snorlax",
    p: "Huge sleepy Pokémon blocking roads while constantly eating and peacefully relaxing.",
    link: "https://in.pinterest.com/search/pins/?q=snorlex%209%3A16%20images&rs=typed"
  },

  {
    img: "https://i.pinimg.com/736x/62/71/9f/62719f6171207cd1dd88a61e7d4c51ed.jpg",
    name: "Mewtwo",
    p: "Legendary psychic Pokémon created through experiments with incredible destructive mental powers.",
    link: "https://in.pinterest.com/search/pins/?q=sewtwo%209%3A16%20images&rs=typed"
  },

  {
    img: "https://i.pinimg.com/736x/07/2f/a4/072fa4109a760ffb7e1a354e258ded6d.jpg",
    name: "Greninja",
    p: "Fast ninja-inspired Water Dark-type Pokémon using stealth, speed, and sharp water attacks.",
    link: "https://in.pinterest.com/search/pins/?q=greninja%209%3A16%20images&rs=typed"
  },
];

  return (
    <div>
      <Navbar/>
      <Pagecontent pokemon={pokemon} />
    </div>
  )
}

export default App
