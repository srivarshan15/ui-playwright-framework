const { test, expect } = require('@playwright/test');
const ApiClient = require('../../api/ApiClient');

test('POST /posts - Create new post', async ({ request }) => {

    const api = new ApiClient(request);

    const payload = {
        title: 'Framework Level',
        body: 'Reusable API Client',
        userId: 5
    };

    const response = await api.post('/posts', payload);

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.title).toBe(payload.title);
    expect(responseBody.body).toBe(payload.body);
    expect(responseBody.userId).toBe(payload.userId);


    expect(responseBody.id).toBeDefined();

});

test('POST /posts - Create new post using ApiClient utilities', async ({ request }) => {

    const api = new ApiClient(request);

    const payload = {
        title: 'Framework Level',
        body: 'Reusable API Client',
        userId: 5
    };

    const response = await api.post('/posts', payload);

    await api.validateStatus(response, 201);

    const body = await api.getJson(response);

    expect(body.title).toBe(payload.title);
    expect(body.body).toBe(payload.body);
    expect(body.userId).toBe(payload.userId);
    expect(body.id).toBeDefined();

});