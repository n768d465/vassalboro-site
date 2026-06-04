class PhotoCard extends HTMLElement {
  connectedCallback() {
    const description = this.getAttribute("description");
    const date = this.getAttribute("date");
    const credit = this.getAttribute("credit");
    const creditUrl = this.getAttribute("credit-url");
    const location = this.getAttribute("location");
    const src = this.getAttribute("src");

    let bottomLeft = "";
    if (credit) {
      bottomLeft = `
      <div>
        <i class="bi bi-camera"></i>
        <a href="${creditUrl}">${credit}</a>
      </div>`;
    } else if (location) {
      bottomLeft = `
      <div>
        <i class="bi bi-geo-alt me-1"></i>${location}
      </div>`;
    }

    const bottomRow = bottomLeft
      ? `<div class="d-flex justify-content-between card-text-bottom">
        ${bottomLeft}
        <div class="card-text">
          ${date}
        </div>
       </div>`
      : `<div class="card-text-bottom">
        ${date}
       </div>`;

    this.innerHTML = `
    <div class="card text-bg-dark mb-2">
      <img class="img-fluid rounded" src="${src}" />
      <div class="card-img-overlay d-flex flex-column justify-content-between">
        <p class="card-text">${description}</p>
        ${bottomRow}
      </div>
    </div>
  `;
  }
}

customElements.define('photo-card', PhotoCard);
