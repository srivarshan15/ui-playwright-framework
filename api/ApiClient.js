class ApiClient {
  constructor(request, baseURL = '') {
    this.request = request;
    this.baseURL = baseURL;
  }

  // Generic request handler
  async send(method, endpoint, options = {}) {
    const url = this.baseURL ? `${this.baseURL}${endpoint}` : endpoint;

    console.log(`\n=== API REQUEST ===`);
    console.log(`Method: ${method}`);
    console.log(`URL: ${url}`);
    if (options.data) console.log(`Payload:`, options.data);

    const response = await this.request.fetch(url, {
      method,
      ...options
    });

    console.log(`Status: ${response.status()}`);
    console.log(`===================\n`);

    return response;
  }

  // GET
  async get(endpoint, headers = {}, params = {}) {
    return await this.send('GET', endpoint, {
      headers,
      params
    });
  }

  // POST
  async post(endpoint, payload = {}, headers = {}) {
    return await this.send('POST', endpoint, {
      data: payload,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });
  }

  // PUT
  async put(endpoint, payload = {}, headers = {}) {
    return await this.send('PUT', endpoint, {
      data: payload,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });
  }

  // PATCH
  async patch(endpoint, payload = {}, headers = {}) {
    return await this.send('PATCH', endpoint, {
      data: payload,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });
  }

  // DELETE
  async delete(endpoint, headers = {}) {
    return await this.send('DELETE', endpoint, {
      headers
    });
  }

  // Utility: validate status
  async validateStatus(response, expectedStatus) {
    if (response.status() !== expectedStatus) {
      throw new Error(
        `Expected status ${expectedStatus} but got ${response.status()}`
      );
    }
  }

  // Utility: get JSON safely
  async getJson(response) {
    try {
      return await response.json();
    } catch (err) {
      throw new Error('Response is not valid JSON');
    }
  }

}

module.exports = ApiClient;