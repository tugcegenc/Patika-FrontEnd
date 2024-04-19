const menu = [
  {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img: "assets/tteokbokki.jpeg",
      desc: "Spicy rice cakes, serving with fish cake."
    },
    
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "assets/chicken-ramen.jpeg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "assets/bibimbap.jpeg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "assets/dandanmian.jpeg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "assets/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "assets/Onigiri.jpeg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "assets/Jajangmyeon.jpeg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
    "assets/ma yi .jpeg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "assets/Dorayaki.jpeg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// Butonların oluşturulması ve filtreleme işlevi
const buttonsContainer = document.querySelector(".btn-container");
const categories = ["All", ...new Set(menu.map(item => item.category))];

function displayButtons() {
  const categoryButtons = categories.map(category => {
    return `<button class="btn btn-outline-dark btn-item" data-id="${category}">${category}</button>`;
  }).join("");
  buttonsContainer.innerHTML = categoryButtons;

  const filterButtons = document.querySelectorAll(".btn-item");
  filterButtons.forEach(button => {
    button.addEventListener("click", e => {
      const category = e.currentTarget.dataset.id;
      const filteredMenu = category === "All" ? menu : menu.filter(item => item.category === category);
      displayMenu(filteredMenu);
    });
  });
}

// Menü öğelerinin listelenmesi
function displayMenu(menuItems) {
  const menuContainer = document.querySelector(".section-center");
  menuContainer.innerHTML = "";

  menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item", "col-md-6");

    menuItem.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="menu-img">
      <div class="menu-info">
        <div class="menu-title">${item.title}</div>
        <div class="menu-price">$${item.price.toFixed(2)}</div>
        <div class="menu-category">${item.category}</div>
        <div class="menu-desc">${item.desc}</div>
      </div>
    `;

    menuContainer.appendChild(menuItem);
  });
}

// Sayfa yüklendiğinde menüyü göster
window.addEventListener("DOMContentLoaded", () => {
  displayButtons();
  displayMenu(menu);
});