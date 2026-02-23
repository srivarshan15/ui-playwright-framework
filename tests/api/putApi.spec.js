const { test, expect } = require('@playwright/test');
const ApiClient = require('../../api/ApiClient');

test('PUT /posts/1 - Update existing post', async ({ request }) => {

   const api = new ApiClient(request);

    const payload = {
        id: 1,
        title: 'Framework Update',
        body: 'PUT automation example',
        userId: 2
    };

    const response = await api.put('/posts/1', payload);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');


    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toBe(payload.title);
    expect(responseBody.body).toBe(payload.body);
    expect(responseBody.userId).toBe(payload.userId);

});