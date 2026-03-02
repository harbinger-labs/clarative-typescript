// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Clarative } from '../client';

export abstract class APIResource {
  protected _client: Clarative;

  constructor(client: Clarative) {
    this._client = client;
  }
}
