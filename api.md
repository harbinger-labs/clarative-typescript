# RiskEvents

Types:

- <code><a href="./src/resources/risk-events.ts">RiskEventRetrieveResponse</a></code>
- <code><a href="./src/resources/risk-events.ts">RiskEventListResponse</a></code>

Methods:

- <code title="get /v1/risk-events/{urn}">client.riskEvents.<a href="./src/resources/risk-events.ts">retrieve</a>(urn) -> RiskEventRetrieveResponse</code>
- <code title="get /v1/risk-events">client.riskEvents.<a href="./src/resources/risk-events.ts">list</a>({ ...params }) -> RiskEventListResponse</code>

# Slas

Types:

- <code><a href="./src/resources/slas.ts">SlaRetrieveResponse</a></code>
- <code><a href="./src/resources/slas.ts">SlaListResponse</a></code>
- <code><a href="./src/resources/slas.ts">SlaGetUptimeMetricsResponse</a></code>
- <code><a href="./src/resources/slas.ts">SlaListDataSourcesResponse</a></code>
- <code><a href="./src/resources/slas.ts">SlaListViolationsResponse</a></code>
- <code><a href="./src/resources/slas.ts">SlaRetrieveViolationResponse</a></code>

Methods:

- <code title="get /v1/slas/{urn}">client.slas.<a href="./src/resources/slas.ts">retrieve</a>(urn) -> SlaRetrieveResponse</code>
- <code title="get /v1/slas">client.slas.<a href="./src/resources/slas.ts">list</a>() -> SlaListResponse</code>
- <code title="get /v1/slas/{sla_urn}/data-sources/{data_source_urn}/uptime-metrics">client.slas.<a href="./src/resources/slas.ts">getUptimeMetrics</a>(dataSourceUrn, { ...params }) -> SlaGetUptimeMetricsResponse</code>
- <code title="get /v1/slas/{sla_urn}/data-sources">client.slas.<a href="./src/resources/slas.ts">listDataSources</a>(slaUrn) -> SlaListDataSourcesResponse</code>
- <code title="get /v1/slas/{sla_urn}/violations">client.slas.<a href="./src/resources/slas.ts">listViolations</a>(slaUrn, { ...params }) -> SlaListViolationsResponse</code>
- <code title="get /v1/slas/{sla_urn}/violations/{violation_urn}">client.slas.<a href="./src/resources/slas.ts">retrieveViolation</a>(violationUrn, { ...params }) -> SlaRetrieveViolationResponse</code>

# Vendors

Types:

- <code><a href="./src/resources/vendors.ts">VendorRetrieveResponse</a></code>
- <code><a href="./src/resources/vendors.ts">VendorListResponse</a></code>

Methods:

- <code title="get /v1/vendors/{urn}">client.vendors.<a href="./src/resources/vendors.ts">retrieve</a>(urn) -> VendorRetrieveResponse</code>
- <code title="get /v1/vendors">client.vendors.<a href="./src/resources/vendors.ts">list</a>() -> VendorListResponse</code>
