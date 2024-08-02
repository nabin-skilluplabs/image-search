export function addCookie(query) {
    const now = new Date();
    const expires =  now.setTime(now.getTime() + (24 * 60 * 60 * 1000));
    document.cookie = `query=${query};expires=${new Date(expires)};path=/`;
}