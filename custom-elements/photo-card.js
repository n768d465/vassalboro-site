class PhotoCard extends HTMLElement {
  connectedCallback() {
    const description = this.getAttribute("description");
    const date = this.getAttribute("date");
    const credit = this.getAttribute("credit");
    const creditUrl = this.getAttribute("credit-url");
    const location = this.getAttribute("location");
    const src = this.getAttribute("src");

    const creditHTML = `
      <div>
        <i class="bi bi-camera"></i>
        <a class="text-info" href="${creditUrl}">${credit}</a>
      </div>`;

    const locationHTML = `
      <div>
        <i class="bi bi-geo-alt me-1"></i>${location}
      </div>`;

    const innerHTML = `
    <div class="card text-bg-dark mb-2">
      <img class="img-fluid rounded" src="${src}" />
      <div class="card-img-overlay d-flex flex-column justify-content-between">
        <p class="card-text">${description}</p>
        <div class=card-text-bottom>
          ${credit ? creditHTML : ""}
          ${location ? locationHTML : ""}
          ${date}
        </div>
      </div>
    </div>`;

    this.innerHTML = innerHTML;
  }
}

customElements.define("photo-card", PhotoCard);
