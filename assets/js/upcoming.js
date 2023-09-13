function handleUpcomingData(events, currentDate) {
    async function initialize(currentDate, events) {
      const categoriesSet = new Set();
  
      events.forEach(event => {
        categoriesSet.add(event.category);
      });
  
      const sortedCategories = Array.from(categoriesSet).sort();
      const categoryRow = document.getElementById("categoryRow");
  
      sortedCategories.forEach(category => {
        const th = document.createElement("th");
        const label = document.createElement("label");
        const input = document.createElement("input");
        const span = document.createElement("span");
  
        input.type = "checkbox";
        input.name = "category";
        input.value = category;
  
        span.textContent = category;
  
        label.appendChild(input);
        label.appendChild(span);
        th.appendChild(label);
  
        categoryRow.appendChild(th);
      });
  
      const categoryCheckboxes = document.querySelectorAll('input[type="checkbox"][name="category"]');
      const searchForm = document.getElementById("search-form");
      const searchInput = document.getElementById("search-input");
  
      categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"][name="category"]:checked')).map(checkbox => checkbox.value);
          const searchTerm = searchInput.value;
          filterAndShowCards(events, currentDate, selectedCategories, searchTerm);
        });
      });
  
      searchInput.addEventListener("input", () => {
        const selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"][name="category"]:checked')).map(checkbox => checkbox.value);
        const searchTerm = searchInput.value;
        filterAndShowCards(events, currentDate, selectedCategories, searchTerm);
      });
  
      showAllCards(events, currentDate);
    }
  
    function filterAndShowCards(events, currentDate, selectedCategories, searchTerm) {
      eventsContainer.innerHTML = '';
  
      const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  
      const filteredEvents = upcomingEvents
        .filter(event => selectedCategories.includes(event.category) || selectedCategories.length === 0)
        .filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
      if (filteredEvents.length === 0) {
        const noResultsMessage = document.getElementById('no-results-message');
        noResultsMessage.style.display = 'block';
      } else {
        const noResultsMessage = document.getElementById('no-results-message');
        noResultsMessage.style.display = 'none';
  
        filteredEvents.forEach(event => {
          let eventCard = tarjetas(event);
          eventsContainer.appendChild(eventCard);
        });
      }
    }
  
    function showAllCards(events, currentDate) {
      eventsContainer.innerHTML = '';
      const categoryCheckboxes = document.querySelectorAll('input[type="checkbox"][name="category"]');
      categoryCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
  
      const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  
      for (const event of upcomingEvents) {
        let eventCard = tarjetas(event);
        eventsContainer.appendChild(eventCard);
      }
    }
  
    initialize(currentDate, events);
  }
  
  fetchDataFromAPI((events, currentDate) => {
    handleUpcomingData(events, currentDate);
  });
