// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'retrieve',
    endpoint: '/v1/risk-events/{urn}',
    httpMethod: 'get',
    summary: 'Fetch in-depth information about a single risk event',
    description: 'Fetch in-depth information about a single risk event',
    stainlessPath: '(resource) risk_events > (method) retrieve',
    qualified: 'client.riskEvents.retrieve',
    params: ['urn: string;'],
    response:
      "{ ai_risk_level_recommendation: { explanation: string; recommended_risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'; }; created_at: string; description: string; name: string; review_status: 'PENDING' | 'VERIFYING' | 'APPLICABLE' | 'NOT_APPLICABLE'; risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'; source_type: 'STATUS_PAGE' | 'MONITOR' | 'NEWS' | 'SEC_FILING'; url: string; urn: string; vendor: { created_at: string; description: string; name: string; urn: string; }; }",
    markdown:
      "## retrieve\n\n`client.riskEvents.retrieve(urn: string): { ai_risk_level_recommendation: object; created_at: string; description: string; name: string; review_status: 'PENDING' | 'VERIFYING' | 'APPLICABLE' | 'NOT_APPLICABLE'; risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'; source_type: 'STATUS_PAGE' | 'MONITOR' | 'NEWS' | 'SEC_FILING'; url: string; urn: string; vendor: object; }`\n\n**get** `/v1/risk-events/{urn}`\n\nFetch in-depth information about a single risk event\n\n### Parameters\n\n- `urn: string`\n\n### Returns\n\n- `{ ai_risk_level_recommendation: { explanation: string; recommended_risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'; }; created_at: string; description: string; name: string; review_status: 'PENDING' | 'VERIFYING' | 'APPLICABLE' | 'NOT_APPLICABLE'; risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'; source_type: 'STATUS_PAGE' | 'MONITOR' | 'NEWS' | 'SEC_FILING'; url: string; urn: string; vendor: { created_at: string; description: string; name: string; urn: string; }; }`\n\n  - `ai_risk_level_recommendation: { explanation: string; recommended_risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'; }`\n  - `created_at: string`\n  - `description: string`\n  - `name: string`\n  - `review_status: 'PENDING' | 'VERIFYING' | 'APPLICABLE' | 'NOT_APPLICABLE'`\n  - `risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'`\n  - `source_type: 'STATUS_PAGE' | 'MONITOR' | 'NEWS' | 'SEC_FILING'`\n  - `url: string`\n  - `urn: string`\n  - `vendor: { created_at: string; description: string; name: string; urn: string; }`\n\n### Example\n\n```typescript\nimport Clarative from 'clarative';\n\nconst client = new Clarative();\n\nconst riskEvent = await client.riskEvents.retrieve('urn');\n\nconsole.log(riskEvent);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/risk-events',
    httpMethod: 'get',
    summary: 'List all risk events with optional filters, sorted by recency (oldest first)',
    description: 'List all risk events with optional filters, sorted by recency (oldest first)',
    stainlessPath: '(resource) risk_events > (method) list',
    qualified: 'client.riskEvents.list',
    params: [
      "risk_threshold?: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';",
      'vendor_urn?: string;',
    ],
    response:
      "{ ai_risk_level_recommendation: { explanation: string; recommended_risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'; }; created_at: string; description: string; name: string; review_status: 'PENDING' | 'VERIFYING' | 'APPLICABLE' | 'NOT_APPLICABLE'; risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'; source_type: 'STATUS_PAGE' | 'MONITOR' | 'NEWS' | 'SEC_FILING'; url: string; urn: string; }[]",
    markdown:
      "## list\n\n`client.riskEvents.list(risk_threshold?: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL', vendor_urn?: string): { ai_risk_level_recommendation: object; created_at: string; description: string; name: string; review_status: 'PENDING' | 'VERIFYING' | 'APPLICABLE' | 'NOT_APPLICABLE'; risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'; source_type: 'STATUS_PAGE' | 'MONITOR' | 'NEWS' | 'SEC_FILING'; url: string; urn: string; }[]`\n\n**get** `/v1/risk-events`\n\nList all risk events with optional filters, sorted by recency (oldest first)\n\n### Parameters\n\n- `risk_threshold?: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'`\n  Filter events by minimum risk level\n\n- `vendor_urn?: string`\n  A vendor's unique identifier\n\n### Returns\n\n- `{ ai_risk_level_recommendation: { explanation: string; recommended_risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'; }; created_at: string; description: string; name: string; review_status: 'PENDING' | 'VERIFYING' | 'APPLICABLE' | 'NOT_APPLICABLE'; risk_level: 'UNASSIGNED' | 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'; source_type: 'STATUS_PAGE' | 'MONITOR' | 'NEWS' | 'SEC_FILING'; url: string; urn: string; }[]`\n\n### Example\n\n```typescript\nimport Clarative from 'clarative';\n\nconst client = new Clarative();\n\nconst riskEvents = await client.riskEvents.list();\n\nconsole.log(riskEvents);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/slas/{urn}',
    httpMethod: 'get',
    summary: 'Fetch in-depth information about a single SLA',
    description: 'Fetch in-depth information about a single SLA',
    stainlessPath: '(resource) slas > (method) retrieve',
    qualified: 'client.slas.retrieve',
    params: ['urn: string;'],
    response: '{ description: string; name: string; urn: string; vendor_urn: string; }',
    markdown:
      "## retrieve\n\n`client.slas.retrieve(urn: string): { description: string; name: string; urn: string; vendor_urn: string; }`\n\n**get** `/v1/slas/{urn}`\n\nFetch in-depth information about a single SLA\n\n### Parameters\n\n- `urn: string`\n\n### Returns\n\n- `{ description: string; name: string; urn: string; vendor_urn: string; }`\n\n  - `description: string`\n  - `name: string`\n  - `urn: string`\n  - `vendor_urn: string`\n\n### Example\n\n```typescript\nimport Clarative from 'clarative';\n\nconst client = new Clarative();\n\nconst sla = await client.slas.retrieve('urn');\n\nconsole.log(sla);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/slas',
    httpMethod: 'get',
    summary: 'List all SLAs, sorted by name alphabetically (case-insensitive)',
    description: 'List all SLAs, sorted by name alphabetically (case-insensitive)',
    stainlessPath: '(resource) slas > (method) list',
    qualified: 'client.slas.list',
    response: '{ description: string; name: string; urn: string; vendor_urn: string; }[]',
    markdown:
      "## list\n\n`client.slas.list(): { description: string; name: string; urn: string; vendor_urn: string; }[]`\n\n**get** `/v1/slas`\n\nList all SLAs, sorted by name alphabetically (case-insensitive)\n\n### Returns\n\n- `{ description: string; name: string; urn: string; vendor_urn: string; }[]`\n\n### Example\n\n```typescript\nimport Clarative from 'clarative';\n\nconst client = new Clarative();\n\nconst slas = await client.slas.list();\n\nconsole.log(slas);\n```",
  },
  {
    name: 'get_uptime_metrics',
    endpoint: '/v1/slas/{sla_urn}/data-sources/{data_source_urn}/uptime-metrics',
    httpMethod: 'get',
    summary: 'Get uptime metrics for an SLA data source',
    description: 'Get uptime metrics for an SLA data source',
    stainlessPath: '(resource) slas > (method) get_uptime_metrics',
    qualified: 'client.slas.getUptimeMetrics',
    params: ['sla_urn: string;', 'data_source_urn: string;', 'end: string;', 'start: string;'],
    response:
      '{ data_source_urn: string; downtime_events: { duration_hours: number; end_time: string; name: string; start_time: string; }[]; metrics: { downtime_hours: number; uptime_percentage: number; }; metrics_deduplicated: { downtime_hours: number; uptime_percentage: number; }; sla_urn: string; timeframe: { end: string; start: string; }; vendor_urn: string; }',
    markdown:
      "## get_uptime_metrics\n\n`client.slas.getUptimeMetrics(sla_urn: string, data_source_urn: string, end: string, start: string): { data_source_urn: string; downtime_events: object[]; metrics: object; metrics_deduplicated: object; sla_urn: string; timeframe: object; vendor_urn: string; }`\n\n**get** `/v1/slas/{sla_urn}/data-sources/{data_source_urn}/uptime-metrics`\n\nGet uptime metrics for an SLA data source\n\n### Parameters\n\n- `sla_urn: string`\n\n- `data_source_urn: string`\n\n- `end: string`\n  Year and month landing within the last SLA evaluation period to include in the result, in the format YYYY-MM\n\n- `start: string`\n  Year and month landing within the first SLA evaluation period to include in the result, in the format YYYY-MM\n\n### Returns\n\n- `{ data_source_urn: string; downtime_events: { duration_hours: number; end_time: string; name: string; start_time: string; }[]; metrics: { downtime_hours: number; uptime_percentage: number; }; metrics_deduplicated: { downtime_hours: number; uptime_percentage: number; }; sla_urn: string; timeframe: { end: string; start: string; }; vendor_urn: string; }`\n\n  - `data_source_urn: string`\n  - `downtime_events: { duration_hours: number; end_time: string; name: string; start_time: string; }[]`\n  - `metrics: { downtime_hours: number; uptime_percentage: number; }`\n  - `metrics_deduplicated: { downtime_hours: number; uptime_percentage: number; }`\n  - `sla_urn: string`\n  - `timeframe: { end: string; start: string; }`\n  - `vendor_urn: string`\n\n### Example\n\n```typescript\nimport Clarative from 'clarative';\n\nconst client = new Clarative();\n\nconst response = await client.slas.getUptimeMetrics('data_source_urn', {\n  sla_urn: 'sla_urn',\n  end: 'end',\n  start: 'start',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_data_sources',
    endpoint: '/v1/slas/{sla_urn}/data-sources',
    httpMethod: 'get',
    summary:
      'List all data sources for an SLA. There is never more than one status page source, and the monitor data sources are sorted alphabetically by name (case-insensitive).',
    description:
      'List all data sources for an SLA. There is never more than one status page source, and the monitor data sources are sorted alphabetically by name (case-insensitive).',
    stainlessPath: '(resource) slas > (method) list_data_sources',
    qualified: 'client.slas.listDataSources',
    params: ['sla_urn: string;'],
    response:
      "{ monitor_data_sources: { description: string; name: string; urn: string; data_source_type?: 'MONITOR'; }[]; sla_urn: string; status_page_data_source: { excluded_product_tags: string[]; included_product_tags: string[]; urn: string; data_source_type?: 'STATUS_PAGE'; }; vendor_urn: string; }",
    markdown:
      "## list_data_sources\n\n`client.slas.listDataSources(sla_urn: string): { monitor_data_sources: object[]; sla_urn: string; status_page_data_source: object; vendor_urn: string; }`\n\n**get** `/v1/slas/{sla_urn}/data-sources`\n\nList all data sources for an SLA. There is never more than one status page source, and the monitor data sources are sorted alphabetically by name (case-insensitive).\n\n### Parameters\n\n- `sla_urn: string`\n\n### Returns\n\n- `{ monitor_data_sources: { description: string; name: string; urn: string; data_source_type?: 'MONITOR'; }[]; sla_urn: string; status_page_data_source: { excluded_product_tags: string[]; included_product_tags: string[]; urn: string; data_source_type?: 'STATUS_PAGE'; }; vendor_urn: string; }`\n\n  - `monitor_data_sources: { description: string; name: string; urn: string; data_source_type?: 'MONITOR'; }[]`\n  - `sla_urn: string`\n  - `status_page_data_source: { excluded_product_tags: string[]; included_product_tags: string[]; urn: string; data_source_type?: 'STATUS_PAGE'; }`\n  - `vendor_urn: string`\n\n### Example\n\n```typescript\nimport Clarative from 'clarative';\n\nconst client = new Clarative();\n\nconst response = await client.slas.listDataSources('sla_urn');\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_violations',
    endpoint: '/v1/slas/{sla_urn}/violations',
    httpMethod: 'get',
    summary:
      'List all violations for an SLA, sorted first by timestamp (oldest first) and second by total downtime (longest first).',
    description:
      'List all violations for an SLA, sorted first by timestamp (oldest first) and second by total downtime (longest first).',
    stainlessPath: '(resource) slas > (method) list_violations',
    qualified: 'client.slas.listViolations',
    params: ['sla_urn: string;', 'data_source_urn?: string;', 'end_month?: string;', 'start_month?: string;'],
    response:
      "{ allowable_downtime_hours: number; data_source_type: 'STATUS_PAGE' | 'MONITOR'; data_source_urn: string; downtime_hours: number; evaluation_period: { end_month: { month: number; year: number; }; start_month: { month: number; year: number; }; }; uptime_percentage: number; urn: string; }[]",
    markdown:
      "## list_violations\n\n`client.slas.listViolations(sla_urn: string, data_source_urn?: string, end_month?: string, start_month?: string): { allowable_downtime_hours: number; data_source_type: 'STATUS_PAGE' | 'MONITOR'; data_source_urn: string; downtime_hours: number; evaluation_period: object; uptime_percentage: number; urn: string; }[]`\n\n**get** `/v1/slas/{sla_urn}/violations`\n\nList all violations for an SLA, sorted first by timestamp (oldest first) and second by total downtime (longest first).\n\n### Parameters\n\n- `sla_urn: string`\n\n- `data_source_urn?: string`\n  An SLA data source's unique identifier\n\n- `end_month?: string`\n  Year and month landing within the last SLA evaluation period to include in the result, in the format YYYY-MM. Defaults to the current time.\n\n- `start_month?: string`\n  Year and month landing within the first SLA evaluation period to include in the result, in the format YYYY-MM. Defaults to 2024-01.\n\n### Returns\n\n- `{ allowable_downtime_hours: number; data_source_type: 'STATUS_PAGE' | 'MONITOR'; data_source_urn: string; downtime_hours: number; evaluation_period: { end_month: { month: number; year: number; }; start_month: { month: number; year: number; }; }; uptime_percentage: number; urn: string; }[]`\n\n### Example\n\n```typescript\nimport Clarative from 'clarative';\n\nconst client = new Clarative();\n\nconst response = await client.slas.listViolations('sla_urn');\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve_violation',
    endpoint: '/v1/slas/{sla_urn}/violations/{violation_urn}',
    httpMethod: 'get',
    summary: 'Get details on a specific SLA violation',
    description: 'Get details on a specific SLA violation',
    stainlessPath: '(resource) slas > (method) retrieve_violation',
    qualified: 'client.slas.retrieveViolation',
    params: ['sla_urn: string;', 'violation_urn: string;'],
    response:
      "{ allowable_downtime_hours: number; data_source: { excluded_product_tags: string[]; included_product_tags: string[]; urn: string; data_source_type?: 'STATUS_PAGE'; } | { description: string; name: string; urn: string; data_source_type?: 'MONITOR'; }; data_source_type: 'STATUS_PAGE' | 'MONITOR'; data_source_urn: string; downtime_events: { duration_hours: number; end_time: string; name: string; start_time: string; }[]; downtime_hours: number; evaluation_period: { end_month: { month: number; year: number; }; start_month: { month: number; year: number; }; }; sla: { description: string; name: string; urn: string; vendor_urn: string; }; uptime_percentage: number; urn: string; vendor: { created_at: string; description: string; name: string; urn: string; }; }",
    markdown:
      "## retrieve_violation\n\n`client.slas.retrieveViolation(sla_urn: string, violation_urn: string): { allowable_downtime_hours: number; data_source: object | object; data_source_type: 'STATUS_PAGE' | 'MONITOR'; data_source_urn: string; downtime_events: object[]; downtime_hours: number; evaluation_period: object; sla: object; uptime_percentage: number; urn: string; vendor: object; }`\n\n**get** `/v1/slas/{sla_urn}/violations/{violation_urn}`\n\nGet details on a specific SLA violation\n\n### Parameters\n\n- `sla_urn: string`\n\n- `violation_urn: string`\n\n### Returns\n\n- `{ allowable_downtime_hours: number; data_source: { excluded_product_tags: string[]; included_product_tags: string[]; urn: string; data_source_type?: 'STATUS_PAGE'; } | { description: string; name: string; urn: string; data_source_type?: 'MONITOR'; }; data_source_type: 'STATUS_PAGE' | 'MONITOR'; data_source_urn: string; downtime_events: { duration_hours: number; end_time: string; name: string; start_time: string; }[]; downtime_hours: number; evaluation_period: { end_month: { month: number; year: number; }; start_month: { month: number; year: number; }; }; sla: { description: string; name: string; urn: string; vendor_urn: string; }; uptime_percentage: number; urn: string; vendor: { created_at: string; description: string; name: string; urn: string; }; }`\n\n  - `allowable_downtime_hours: number`\n  - `data_source: { excluded_product_tags: string[]; included_product_tags: string[]; urn: string; data_source_type?: 'STATUS_PAGE'; } | { description: string; name: string; urn: string; data_source_type?: 'MONITOR'; }`\n  - `data_source_type: 'STATUS_PAGE' | 'MONITOR'`\n  - `data_source_urn: string`\n  - `downtime_events: { duration_hours: number; end_time: string; name: string; start_time: string; }[]`\n  - `downtime_hours: number`\n  - `evaluation_period: { end_month: { month: number; year: number; }; start_month: { month: number; year: number; }; }`\n  - `sla: { description: string; name: string; urn: string; vendor_urn: string; }`\n  - `uptime_percentage: number`\n  - `urn: string`\n  - `vendor: { created_at: string; description: string; name: string; urn: string; }`\n\n### Example\n\n```typescript\nimport Clarative from 'clarative';\n\nconst client = new Clarative();\n\nconst response = await client.slas.retrieveViolation('violation_urn', { sla_urn: 'sla_urn' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/vendors/{urn}',
    httpMethod: 'get',
    summary: 'Fetch in-depth information about a single vendor',
    description: 'Fetch in-depth information about a single vendor',
    stainlessPath: '(resource) vendors > (method) retrieve',
    qualified: 'client.vendors.retrieve',
    params: ['urn: string;'],
    response:
      "{ created_at: string; description: string; name: string; urn: string; metadata?: { name: string; type: 'TEXT' | 'SELECT' | 'MULTI_SELECT'; urn: string; value?: object; }[]; }",
    markdown:
      "## retrieve\n\n`client.vendors.retrieve(urn: string): { created_at: string; description: string; name: string; urn: string; metadata?: object[]; }`\n\n**get** `/v1/vendors/{urn}`\n\nFetch in-depth information about a single vendor\n\n### Parameters\n\n- `urn: string`\n\n### Returns\n\n- `{ created_at: string; description: string; name: string; urn: string; metadata?: { name: string; type: 'TEXT' | 'SELECT' | 'MULTI_SELECT'; urn: string; value?: object; }[]; }`\n\n  - `created_at: string`\n  - `description: string`\n  - `name: string`\n  - `urn: string`\n  - `metadata?: { name: string; type: 'TEXT' | 'SELECT' | 'MULTI_SELECT'; urn: string; value?: object; }[]`\n\n### Example\n\n```typescript\nimport Clarative from 'clarative';\n\nconst client = new Clarative();\n\nconst vendor = await client.vendors.retrieve('urn');\n\nconsole.log(vendor);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/vendors',
    httpMethod: 'get',
    summary: 'List all vendors, sorted by name alphabetically (case-insensitive)',
    description: 'List all vendors, sorted by name alphabetically (case-insensitive)',
    stainlessPath: '(resource) vendors > (method) list',
    qualified: 'client.vendors.list',
    response: '{ created_at: string; description: string; name: string; urn: string; }[]',
    markdown:
      "## list\n\n`client.vendors.list(): { created_at: string; description: string; name: string; urn: string; }[]`\n\n**get** `/v1/vendors`\n\nList all vendors, sorted by name alphabetically (case-insensitive)\n\n### Returns\n\n- `{ created_at: string; description: string; name: string; urn: string; }[]`\n\n### Example\n\n```typescript\nimport Clarative from 'clarative';\n\nconst client = new Clarative();\n\nconst vendors = await client.vendors.list();\n\nconsole.log(vendors);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
