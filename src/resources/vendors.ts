// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Vendors extends APIResource {
  /**
   * Fetch in-depth information about a single vendor
   */
  retrieve(urn: string, options?: RequestOptions): APIPromise<VendorRetrieveResponse> {
    return this._client.get(path`/v1/vendors/${urn}`, options);
  }

  /**
   * List all vendors, sorted by name alphabetically (case-insensitive)
   */
  list(options?: RequestOptions): APIPromise<VendorListResponse> {
    return this._client.get('/v1/vendors', options);
  }
}

export interface VendorRetrieveResponse {
  /**
   * An ISO-8601-formatted timestamp representing when the vendor was created (UTC)
   */
  created_at: string;

  /**
   * The vendor's description
   */
  description: string | null;

  /**
   * The vendor's display name
   */
  name: string;

  /**
   * A unique identifier for the vendor
   */
  urn: string;
}

export type VendorListResponse = Array<VendorListResponse.VendorListResponseItem>;

export namespace VendorListResponse {
  export interface VendorListResponseItem {
    /**
     * An ISO-8601-formatted timestamp representing when the vendor was created (UTC)
     */
    created_at: string;

    /**
     * The vendor's description
     */
    description: string | null;

    /**
     * The vendor's display name
     */
    name: string;

    /**
     * A unique identifier for the vendor
     */
    urn: string;
  }
}

export declare namespace Vendors {
  export {
    type VendorRetrieveResponse as VendorRetrieveResponse,
    type VendorListResponse as VendorListResponse,
  };
}
