const { test, expect } = require('@playwright/test');
const ApiClient = require('../../api/ApiClient');

test('GET /posts - Validate all posts', async ({ request }) => {

    const api = new ApiClient(request);
    const response = await api.get('/posts');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    console.log(body);

    body.forEach(post => {
        expect(post).toHaveProperty('userId');
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('body');
    });
});

test('GET /posts - negative scenario', async ({ request }) => {

    const api = new ApiClient(request);
    const response = await api.get('/abc');
    console.log(response.status());
    console.log(response);
    // expect(response.status()).toBe(404);

    const body = await response.json();
    console.log(body);
});
