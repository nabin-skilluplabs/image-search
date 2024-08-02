export function addCookie(query){
    const now = new Date();
    const expires = now.setTime(now.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = `query=${query};expires=${new Date(expires)};path=/`;
}

export function getCookie() {
    const cookie = document.cookie;
    const query = cookie.split("=")[1];
    return query;
}