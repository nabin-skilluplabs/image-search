export function setQuery(query) {
    localStorage.setItem('query', query);
}

export function getQuery() {
    const query = localStorage.getItem('query');
    return query;
}