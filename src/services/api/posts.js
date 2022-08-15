import posts from "@/mocks/posts";

/**
 * API is mocked and works on mocks and set timeout
 */

const API_DELAY = 500;

export function loadOne (id) {
  return new Promise(resolve => {
    const post = posts.find(p => p.id === +id) || null;

    setTimeout(() => resolve(post), API_DELAY);
  });
}

export function loadAll () {
  return new Promise(resolve => {
    setTimeout(() => resolve(posts), API_DELAY);
  });
}
