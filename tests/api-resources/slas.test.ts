// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Clarative from 'clarative';

const client = new Clarative({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource slas', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.slas.retrieve('urn');
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
    const responsePromise = client.slas.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getUptimeMetrics: only required params', async () => {
    const responsePromise = client.slas.getUptimeMetrics('data_source_urn', {
      sla_urn: 'sla_urn',
      end: 'end',
      start: 'start',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getUptimeMetrics: required and optional params', async () => {
    const response = await client.slas.getUptimeMetrics('data_source_urn', {
      sla_urn: 'sla_urn',
      end: 'end',
      start: 'start',
    });
  });

  // Mock server tests are disabled
  test.skip('listDataSources', async () => {
    const responsePromise = client.slas.listDataSources('sla_urn');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listViolations', async () => {
    const responsePromise = client.slas.listViolations('sla_urn');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listViolations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.slas.listViolations(
        'sla_urn',
        {
          data_source_urn: 'data_source_urn',
          end_month: 'end_month',
          start_month: 'start_month',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clarative.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveViolation: only required params', async () => {
    const responsePromise = client.slas.retrieveViolation('violation_urn', { sla_urn: 'sla_urn' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveViolation: required and optional params', async () => {
    const response = await client.slas.retrieveViolation('violation_urn', { sla_urn: 'sla_urn' });
  });
});
