const { test, expect } = require('@playwright/test');
const ApiClient = require('../../api/ApiClient');

test('PATCH /posts/1 - Partial update post', async ({ request }) => {

    const api = new ApiClient(request);

    const payload = { body: 'Patched Body Content' };

    const response = await api.patch('/posts/1', payload);

    expect(response.status()).toBe(200);

    expect(response.headers()['content-type']).toContain('application/json');
    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.body).toBe(payload.body);
  
    expect(responseBody.id).toBe(1);

});