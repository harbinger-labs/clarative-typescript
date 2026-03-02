// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Clarative from 'clarative';

const client = new Clarative({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource riskEvents', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.riskEvents.retrieve('urn');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.riskEvents.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.riskEvents.list(
        { risk_threshold: 'LOW', vendor_urn: 'vendor_urn' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clarative.NotFoundError);
  });
});
