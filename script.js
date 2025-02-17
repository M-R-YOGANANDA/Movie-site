async function fetchContent() {
    const response = await fetch('/api/content');
    const data = await response.json();
    const carousel = document.querySelector('.carousel');
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.thumbnail}" alt="${item.title}">
        <h3>${item.title}</h3>
      `;
      carousel.appendChild(card);
    });
  }
  
  fetchContent();