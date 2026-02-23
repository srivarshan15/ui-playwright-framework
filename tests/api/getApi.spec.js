const { test, expect } = require('@playwright/test');
const ApiClient = require('../../api/ApiClient');
const testData = require('./testData/posts.data.js');

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

// test('GET /posts - negative scenario 404', async ({ request }) => {

//     const api = new ApiClient(request);
//     const response = await api.get('/posts/1');
//     expect(response.status()).toBe(404);
//     expect(response.headers()['content-type']).toContain('application/json');

//     const body = await response.json();
//     console.log(body);
// });

test('Parameterized GET /posts/:id', () => {

  testData.forEach((data) => {

    test(`Validate post with id ${data.id}`, async ({ request }) => {

      const api = new ApiClient(request);

      const response = await api.get(`/posts/${data.id}`);

      await api.validateStatus(response, 200);

      const body = await api.getJson(response);

      expect(body.id).toBe(data.id);
      expect(body.userId).toBe(data.expectedUserId);

    });

  });

});