// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Slas extends APIResource {
  /**
   * Fetch in-depth information about a single SLA
   */
  retrieve(urn: string, options?: RequestOptions): APIPromise<SlaRetrieveResponse> {
    return this._client.get(path`/v1/slas/${urn}`, options);
  }

  /**
   * List all SLAs, sorted by name alphabetically (case-insensitive)
   */
  list(options?: RequestOptions): APIPromise<SlaListResponse> {
    return this._client.get('/v1/slas', options);
  }

  /**
   * Get uptime metrics for an SLA data source
   */
  getUptimeMetrics(
    dataSourceUrn: string,
    params: SlaGetUptimeMetricsParams,
    options?: RequestOptions,
  ): APIPromise<SlaGetUptimeMetricsResponse> {
    const { sla_urn, ...query } = params;
    return this._client.get(path`/v1/slas/${sla_urn}/data-sources/${dataSourceUrn}/uptime-metrics`, {
      query,
      ...options,
    });
  }

  /**
   * List all data sources for an SLA. There is never more than one status page
   * source, and the monitor data sources are sorted alphabetically by name
   * (case-insensitive).
   */
  listDataSources(slaUrn: string, options?: RequestOptions): APIPromise<SlaListDataSourcesResponse> {
    return this._client.get(path`/v1/slas/${slaUrn}/data-sources`, options);
  }

  /**
   * List all violations for an SLA, sorted first by timestamp (oldest first) and
   * second by total downtime (longest first).
   */
  listViolations(
    slaUrn: string,
    query: SlaListViolationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SlaListViolationsResponse> {
    return this._client.get(path`/v1/slas/${slaUrn}/violations`, { query, ...options });
  }

  /**
   * Get details on a specific SLA violation
   */
  retrieveViolation(
    violationUrn: string,
    params: SlaRetrieveViolationParams,
    options?: RequestOptions,
  ): APIPromise<SlaRetrieveViolationResponse> {
    const { sla_urn } = params;
    return this._client.get(path`/v1/slas/${sla_urn}/violations/${violationUrn}`, options);
  }
}

export interface SlaRetrieveResponse {
  /**
   * A description of the SLA
   */
  description: string;

  /**
   * The name of the SLA
   */
  name: string;

  /**
   * A unique identifier for the SLA
   */
  urn: string;

  /**
   * A unique identifier for the vendor associated with the SLA
   */
  vendor_urn: string;
}

export type SlaListResponse = Array<SlaListResponse.SlaListResponseItem>;

export namespace SlaListResponse {
  export interface SlaListResponseItem {
    /**
     * A description of the SLA
     */
    description: string;

    /**
     * The name of the SLA
     */
    name: string;

    /**
     * A unique identifier for the SLA
     */
    urn: string;

    /**
     * A unique identifier for the vendor associated with the SLA
     */
    vendor_urn: string;
  }
}

export interface SlaGetUptimeMetricsResponse {
  /**
   * The unique identifier of the data source
   */
  data_source_urn: string;

  /**
   * A non-deduplicated list of downtime events that occurred during the timeframe
   */
  downtime_events: Array<SlaGetUptimeMetricsResponse.DowntimeEvent>;

  /**
   * The uptime metrics for the data source during the timeframe
   */
  metrics: SlaGetUptimeMetricsResponse.Metrics;

  /**
   * The uptime metrics for the data source during the timeframe, with overlapping
   * windows of downtime (such as from different incidents that occurred
   * simultaneously) counted only once
   */
  metrics_deduplicated: SlaGetUptimeMetricsResponse.MetricsDeduplicated;

  /**
   * The unique identifier of the SLA
   */
  sla_urn: string;

  /**
   * The timeframe for which the uptime metrics are calculated
   */
  timeframe: SlaGetUptimeMetricsResponse.Timeframe;

  /**
   * The unique identifier of the vendor
   */
  vendor_urn: string;
}

export namespace SlaGetUptimeMetricsResponse {
  export interface DowntimeEvent {
    /**
     * The duration of the downtime event in hours
     */
    duration_hours: number;

    /**
     * The end time of the downtime event
     */
    end_time: string;

    /**
     * The display name of the downtime event
     */
    name: string;

    /**
     * The start time of the downtime event
     */
    start_time: string;
  }

  /**
   * The uptime metrics for the data source during the timeframe
   */
  export interface Metrics {
    /**
     * The total number of downtime hours during the timeframe
     */
    downtime_hours: number;

    /**
     * The percentage of uptime during the timeframe
     */
    uptime_percentage: number;
  }

  /**
   * The uptime metrics for the data source during the timeframe, with overlapping
   * windows of downtime (such as from different incidents that occurred
   * simultaneously) counted only once
   */
  export interface MetricsDeduplicated {
    /**
     * The total number of downtime hours during the timeframe
     */
    downtime_hours: number;

    /**
     * The percentage of uptime during the timeframe
     */
    uptime_percentage: number;
  }

  /**
   * The timeframe for which the uptime metrics are calculated
   */
  export interface Timeframe {
    /**
     * The ISO-formatted end datetime of the timeframe for which the metrics are
     * calculated
     */
    end: string;

    /**
     * The ISO-formatted start datetime of the timeframe for which the metrics are
     * calculated
     */
    start: string;
  }
}

export interface SlaListDataSourcesResponse {
  /**
   * A list of any monitor data sources associated with the SLA
   */
  monitor_data_sources: Array<SlaListDataSourcesResponse.MonitorDataSource>;

  /**
   * A unique identifier for the SLA associated with this data source
   */
  sla_urn: string;

  /**
   * The SLA's data source for incidents pulled from vendor status pages, if
   * applicable
   */
  status_page_data_source: SlaListDataSourcesResponse.StatusPageDataSource | null;

  /**
   * A unique identifier for the vendor associated with this data source
   */
  vendor_urn: string;
}

export namespace SlaListDataSourcesResponse {
  export interface MonitorDataSource {
    /**
     * The monitor's description
     */
    description: string | null;

    /**
     * The monitor's display name
     */
    name: string;

    /**
     * A unique identifier for the data source
     */
    urn: string;

    /**
     * The type of the data source
     */
    data_source_type?: 'MONITOR';
  }

  /**
   * The SLA's data source for incidents pulled from vendor status pages, if
   * applicable
   */
  export interface StatusPageDataSource {
    /**
     * A list of incident tags that are excluded from the SLA's calculations
     */
    excluded_product_tags: Array<string>;

    /**
     * A list of incident tags that are included in the SLA's calculations
     */
    included_product_tags: Array<string>;

    /**
     * A unique identifier for the data source
     */
    urn: string;

    /**
     * The type of the data source
     */
    data_source_type?: 'STATUS_PAGE';
  }
}

export type SlaListViolationsResponse = Array<SlaListViolationsResponse.SlaListViolationsResponseItem>;

export namespace SlaListViolationsResponse {
  export interface SlaListViolationsResponseItem {
    /**
     * The total number of allowable downtime hours during the evaluation period, as
     * defined by the SLA's terms
     */
    allowable_downtime_hours: number;

    /**
     * The type of data source used to determine the violation.
     */
    data_source_type: 'STATUS_PAGE' | 'MONITOR';

    /**
     * The unique identifier of the data source used to determine the violation
     */
    data_source_urn: string;

    /**
     * The total number of downtime hours during the evaluation period
     */
    downtime_hours: number;

    /**
     * The evaluation period during which the SLA violation occurred. The length of the
     * period is determined by the SLA's configured evaluation window (for example:
     * monthly or quarterly).
     */
    evaluation_period: SlaListViolationsResponseItem.EvaluationPeriod;

    /**
     * The percentage of uptime during the evaluation period
     */
    uptime_percentage: number;

    /**
     * A unique identifier composed of the SLA URN and the evaluation period
     */
    urn: string;
  }

  export namespace SlaListViolationsResponseItem {
    /**
     * The evaluation period during which the SLA violation occurred. The length of the
     * period is determined by the SLA's configured evaluation window (for example:
     * monthly or quarterly).
     */
    export interface EvaluationPeriod {
      /**
       * The month in which the SLA violation ended. Null if the violation is ongoing.
       */
      end_month: EvaluationPeriod.EndMonth;

      /**
       * The month in which the SLA violation started
       */
      start_month: EvaluationPeriod.StartMonth;
    }

    export namespace EvaluationPeriod {
      /**
       * The month in which the SLA violation ended. Null if the violation is ongoing.
       */
      export interface EndMonth {
        /**
         * The month number (1-12)
         */
        month: number;

        /**
         * The year of the month
         */
        year: number;
      }

      /**
       * The month in which the SLA violation started
       */
      export interface StartMonth {
        /**
         * The month number (1-12)
         */
        month: number;

        /**
         * The year of the month
         */
        year: number;
      }
    }
  }
}

export interface SlaRetrieveViolationResponse {
  /**
   * The total number of allowable downtime hours during the evaluation period, as
   * defined by the SLA's terms
   */
  allowable_downtime_hours: number;

  /**
   * The data source used to determine the violation.
   */
  data_source:
    | SlaRetrieveViolationResponse.APIStatusPageSlaDataSource
    | SlaRetrieveViolationResponse.APIMonitorSlaDataSource;

  /**
   * The type of data source used to determine the violation.
   */
  data_source_type: 'STATUS_PAGE' | 'MONITOR';

  /**
   * The unique identifier of the data source used to determine the violation
   */
  data_source_urn: string;

  /**
   * A list of downtime events that occurred during the evaluation period and
   * contributed to the SLA violation
   */
  downtime_events: Array<SlaRetrieveViolationResponse.DowntimeEvent>;

  /**
   * The total number of downtime hours during the evaluation period
   */
  downtime_hours: number;

  /**
   * The evaluation period during which the SLA violation occurred. The length of the
   * period is determined by the SLA's configured evaluation window (for example:
   * monthly or quarterly).
   */
  evaluation_period: SlaRetrieveViolationResponse.EvaluationPeriod;

  /**
   * The SLA that was violated
   */
  sla: SlaRetrieveViolationResponse.Sla;

  /**
   * The percentage of uptime during the evaluation period
   */
  uptime_percentage: number;

  /**
   * A unique identifier composed of the SLA URN and the evaluation period
   */
  urn: string;

  /**
   * The vendor responsible for the violation
   */
  vendor: SlaRetrieveViolationResponse.Vendor;
}

export namespace SlaRetrieveViolationResponse {
  export interface APIStatusPageSlaDataSource {
    /**
     * A list of incident tags that are excluded from the SLA's calculations
     */
    excluded_product_tags: Array<string>;

    /**
     * A list of incident tags that are included in the SLA's calculations
     */
    included_product_tags: Array<string>;

    /**
     * A unique identifier for the data source
     */
    urn: string;

    /**
     * The type of the data source
     */
    data_source_type?: 'STATUS_PAGE';
  }

  export interface APIMonitorSlaDataSource {
    /**
     * The monitor's description
     */
    description: string | null;

    /**
     * The monitor's display name
     */
    name: string;

    /**
     * A unique identifier for the data source
     */
    urn: string;

    /**
     * The type of the data source
     */
    data_source_type?: 'MONITOR';
  }

  export interface DowntimeEvent {
    /**
     * The duration of the downtime event in hours
     */
    duration_hours: number;

    /**
     * The end time of the downtime event
     */
    end_time: string;

    /**
     * The display name of the downtime event
     */
    name: string;

    /**
     * The start time of the downtime event
     */
    start_time: string;
  }

  /**
   * The evaluation period during which the SLA violation occurred. The length of the
   * period is determined by the SLA's configured evaluation window (for example:
   * monthly or quarterly).
   */
  export interface EvaluationPeriod {
    /**
     * The month in which the SLA violation ended. Null if the violation is ongoing.
     */
    end_month: EvaluationPeriod.EndMonth;

    /**
     * The month in which the SLA violation started
     */
    start_month: EvaluationPeriod.StartMonth;
  }

  export namespace EvaluationPeriod {
    /**
     * The month in which the SLA violation ended. Null if the violation is ongoing.
     */
    export interface EndMonth {
      /**
       * The month number (1-12)
       */
      month: number;

      /**
       * The year of the month
       */
      year: number;
    }

    /**
     * The month in which the SLA violation started
     */
    export interface StartMonth {
      /**
       * The month number (1-12)
       */
      month: number;

      /**
       * The year of the month
       */
      year: number;
    }
  }

  /**
   * The SLA that was violated
   */
  export interface Sla {
    /**
     * A description of the SLA
     */
    description: string;

    /**
     * The name of the SLA
     */
    name: string;

    /**
     * A unique identifier for the SLA
     */
    urn: string;

    /**
     * A unique identifier for the vendor associated with the SLA
     */
    vendor_urn: string;
  }

  /**
   * The vendor responsible for the violation
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
  }
}

export interface SlaGetUptimeMetricsParams {
  /**
   * Path param
   */
  sla_urn: string;

  /**
   * Query param: Year and month landing within the last SLA evaluation period to
   * include in the result, in the format YYYY-MM
   */
  end: string;

  /**
   * Query param: Year and month landing within the first SLA evaluation period to
   * include in the result, in the format YYYY-MM
   */
  start: string;
}

export interface SlaListViolationsParams {
  /**
   * An SLA data source's unique identifier
   */
  data_source_urn?: string | null;

  /**
   * Year and month landing within the last SLA evaluation period to include in the
   * result, in the format YYYY-MM. Defaults to the current time.
   */
  end_month?: string | null;

  /**
   * Year and month landing within the first SLA evaluation period to include in the
   * result, in the format YYYY-MM. Defaults to 2024-01.
   */
  start_month?: string;
}

export interface SlaRetrieveViolationParams {
  sla_urn: string;
}

export declare namespace Slas {
  export {
    type SlaRetrieveResponse as SlaRetrieveResponse,
    type SlaListResponse as SlaListResponse,
    type SlaGetUptimeMetricsResponse as SlaGetUptimeMetricsResponse,
    type SlaListDataSourcesResponse as SlaListDataSourcesResponse,
    type SlaListViolationsResponse as SlaListViolationsResponse,
    type SlaRetrieveViolationResponse as SlaRetrieveViolationResponse,
    type SlaGetUptimeMetricsParams as SlaGetUptimeMetricsParams,
    type SlaListViolationsParams as SlaListViolationsParams,
    type SlaRetrieveViolationParams as SlaRetrieveViolationParams,
  };
}
