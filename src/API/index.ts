export function request<T>(url: string, options?: RequestInit): Promise<T> {
  return fetch(url, { method: 'GET', ...options }).then(res => res.json());
}