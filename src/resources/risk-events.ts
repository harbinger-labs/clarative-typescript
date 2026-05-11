// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RiskEvents extends APIResource {
  /**
   * Fetch in-depth information about a single risk event
   */
  retrieve(urn: string, options?: RequestOptions): APIPromise<RiskEventRetrieveResponse> {
    return this._client.get(path`/v1/risk-events/${urn}`, options);
  }

  /**
   * List all risk events with optional filters, sorted by most recent first
   */
  list(
    query: RiskEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RiskEventListResponse> {
    return this._client.get('/v1/risk-events', { query, ...options });
  }
}

export interface RiskEventRetrieveResponse {
  /**
   * AI's risk level recommendation for this event, if available. AI recommendations
   * are made automatically, shortly after a risk event is discovered.
   */
  ai_risk_level_recommendation: RiskEventRetrieveResponse.AIRiskLevelRecommendation | null;

  /**
   * An ISO-8601-formatted timestamp representing when the risk event was created
   * (UTC)
   */
  created_at: string;

  /**
   * The risk event's description
   */
  description: string | null;

  /**
   * The risk event's display name
   */
  name: string;

  /**
   * The current review status of the risk event, representing where it is in the
   * triage process.
   */
  review_status: 'PENDING' | 'VERIFYING' | 'APPLICABLE' | 'NOT_APPLICABLE';

  /**
   * The finalized, user-determined risk level for the event (if set)
   */
  risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

  /**
   * The type of the risk event
   */
  source_type: 'STATUS_PAGE' | 'MONITOR' | 'NEWS' | 'SEC_FILING';

  /**
   * A URL with more information about the risk event
   */
  url: string | null;

  /**
   * A unique identifier for the risk event
   */
  urn: string;

  /**
   * Details about the vendor associated with this risk event.
   */
  vendor: RiskEventRetrieveResponse.Vendor;

  /**
   * Tags indicating the nature of the risk event.
   */
  category_tags?: Array<string> | null;
}

export namespace RiskEventRetrieveResponse {
  /**
   * AI's risk level recommendation for this event, if available. AI recommendations
   * are made automatically, shortly after a risk event is discovered.
   */
  export interface AIRiskLevelRecommendation {
    /**
     * The explanation for the AI's risk level recommendation
     */
    explanation: string;

    /**
     * The AI-recommended risk level for the event
     */
    recommended_risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  }

  /**
   * Details about the vendor associated with this risk event.
   */
  export interface Vendor {
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

    /**
     * A list of domains associated with the vendor
     */
    domains?: Array<string>;
  }
}

export type RiskEventListResponse = Array<RiskEventListResponse.RiskEventListResponseItem>;

export namespace RiskEventListResponse {
  export interface RiskEventListResponseItem {
    /**
     * AI's risk level recommendation for this event, if available. AI recommendations
     * are made automatically, shortly after a risk event is discovered.
     */
    ai_risk_level_recommendation: RiskEventListResponseItem.AIRiskLevelRecommendation | null;

    /**
     * An ISO-8601-formatted timestamp representing when the risk event was created
     * (UTC)
     */
    created_at: string;

    /**
     * The risk event's description
     */
    description: string | null;

    /**
     * The risk event's display name
     */
    name: string;

    /**
     * The current review status of the risk event, representing where it is in the
     * triage process.
     */
    review_status: 'PENDING' | 'VERIFYING' | 'APPLICABLE' | 'NOT_APPLICABLE';

    /**
     * The finalized, user-determined risk level for the event (if set)
     */
    risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

    /**
     * The type of the risk event
     */
    source_type: 'STATUS_PAGE' | 'MONITOR' | 'NEWS' | 'SEC_FILING';

    /**
     * A URL with more information about the risk event
     */
    url: string | null;

    /**
     * A unique identifier for the risk event
     */
    urn: string;
  }

  export namespace RiskEventListResponseItem {
    /**
     * AI's risk level recommendation for this event, if available. AI recommendations
     * are made automatically, shortly after a risk event is discovered.
     */
    export interface AIRiskLevelRecommendation {
      /**
       * The explanation for the AI's risk level recommendation
       */
      explanation: string;

      /**
       * The AI-recommended risk level for the event
       */
      recommended_risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    }
  }
}

export interface RiskEventListParams {
  /**
   * Filter events created on or after this ISO-8601 timestamp
   */
  created_after?: string | null;

  /**
   * Filter events created before this ISO-8601 timestamp
   */
  created_before?: string | null;

  /**
   * Filter events by review status (PENDING, VERIFYING, APPLICABLE, NOT_APPLICABLE)
   */
  review_statuses?: Array<'PENDING' | 'VERIFYING' | 'APPLICABLE' | 'NOT_APPLICABLE'> | null;

  /**
   * Filter events by minimum risk level
   */
  risk_threshold?: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' | null;

  /**
   * A vendor's unique identifier
   */
  vendor_urn?: string | null;
}

export declare namespace RiskEvents {
  export {
    type RiskEventRetrieveResponse as RiskEventRetrieveResponse,
    type RiskEventListResponse as RiskEventListResponse,
    type RiskEventListParams as RiskEventListParams,
  };
}
