const { test, expect } = require('@playwright/test');
const ApiClient = require('../../api/ApiClient');

test('DELETE /posts/1 - Delete existing post', async ({ request }) => {

    const api = new ApiClient(request);

    const response = await api.delete('/posts/1');

    expect(response.status()).toBe(200);

    expect(response.headers()['content-type']).toContain('application/json');

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody).toEqual({});

});