// Search Module
export function initSearch() {
    let fuse;
    let searchIndex = [];

    // Create search data
    const createSearchIndex = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const headings = section.querySelectorAll('h2, h3');
            headings.forEach(heading => {
                searchIndex.push({
                    title: heading.textContent,
                    id: heading.id,
                    content: heading.nextElementSibling?.textContent || ''
                });
            });
        });

        // Initialize Fuse.js
        const options = {
            keys: ['title', 'content'],
            threshold: 0.3
        };
        fuse = new Fuse(searchIndex, options);
    };

    // Handle keyboard shortcut
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        if (e.key === 'Escape') {
            closeSearch();
        }
    });

    // Create and show search modal
    const openSearch = () => {
        if (!fuse) createSearchIndex();

        const modal = document.createElement('div');
        modal.className = 'search-modal';
        modal.innerHTML = `
            <div class="search-container">
                <input type="search" placeholder="Search (Ctrl + K)" class="search-input" autofocus>
                <div class="search-results"></div>
            </div>
        `;
        document.body.appendChild(modal);

        const input = modal.querySelector('.search-input');
        const results = modal.querySelector('.search-results');

        input.addEventListener('input', (e) => {
            const searchResults = fuse.search(e.target.value);
            renderResults(searchResults, results);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeSearch();
        });
    };

    // Render search results
    const renderResults = (searchResults, container) => {
        container.innerHTML = searchResults
            .slice(0, 5)
            .map(result => `
                <a href="#${result.item.id}" class="search-result">
                    <h3>${result.item.title}</h3>
                    <p>${result.item.content.slice(0, 100)}...</p>
                </a>
            `)
            .join('') || '<p class="no-results">No results found</p>';

        container.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeSearch();
            });
        });
    };

    // Close search modal
    const closeSearch = () => {
        const modal = document.querySelector('.search-modal');
        if (modal) {
            modal.remove();
        }
    };
}
