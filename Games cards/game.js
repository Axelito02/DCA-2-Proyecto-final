const appendListItem = (parent) => (data) => {
  const li = document.createElement("li");
  li.textContent = data;
  parent.appendChild(li);
};

export const renderCharacter = ({
  name,
  thumbnail,
  publisher,
  releaseyear,
}) => {
  const figure = document.createElement("figure");
  figure.classList.add("juego-card");

  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const h3publisher = document.createElement("h3");
  const h3releaseyear = document.createElement("h3");

  img.src = thumbnail;
  h2.textContent = name;
  h3releaseyear.textContent = "Release year: " + releaseyear;
  h3publisher.textContent = "Publisher: " + publisher;


  figure.appendChild(img);
  figure.appendChild(h2);
  figure.appendChild(h3releaseyear);
  figure.appendChild(h3publisher);

  return figure;
};