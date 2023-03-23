const appendListItem = (parent) => (data) => {
  const li = document.createElement("li");
  li.textContent = data;
  parent.appendChild(li);
};

export const renderCharacter = ({
  name,
  thumbnail,
  description,
  stores,
}) => {
  const figure = document.createElement("figure");
  figure.classList.add("juego-card");

  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const h3Stores = document.createElement("h3");
  const ulStores = document.createElement("ul");

  img.src = thumbnail;
  h2.textContent = name;
  p.textContent = description;
  h3Stores.textContent = "Stores:";

  stores.forEach(appendListItem(ulStores));

  figure.appendChild(img);
  figure.appendChild(h2);
  figure.appendChild(p);
  figure.appendChild(h3Stores);
  figure.appendChild(ulStores);

  return figure;
};