// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.riskEvents.retrieve',
    fullyQualifiedName: 'riskEvents.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/risk-events/{urn}',
  },
  {
    clientCallName: 'client.riskEvents.list',
    fullyQualifiedName: 'riskEvents.list',
    httpMethod: 'get',
    httpPath: '/v1/risk-events',
  },
  {
    clientCallName: 'client.slas.retrieve',
    fullyQualifiedName: 'slas.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/slas/{urn}',
  },
  {
    clientCallName: 'client.slas.list',
    fullyQualifiedName: 'slas.list',
    httpMethod: 'get',
    httpPath: '/v1/slas',
  },
  {
    clientCallName: 'client.slas.getUptimeMetrics',
    fullyQualifiedName: 'slas.getUptimeMetrics',
    httpMethod: 'get',
    httpPath: '/v1/slas/{sla_urn}/data-sources/{data_source_urn}/uptime-metrics',
  },
  {
    clientCallName: 'client.slas.listDataSources',
    fullyQualifiedName: 'slas.listDataSources',
    httpMethod: 'get',
    httpPath: '/v1/slas/{sla_urn}/data-sources',
  },
  {
    clientCallName: 'client.slas.listViolations',
    fullyQualifiedName: 'slas.listViolations',
    httpMethod: 'get',
    httpPath: '/v1/slas/{sla_urn}/violations',
  },
  {
    clientCallName: 'client.slas.retrieveViolation',
    fullyQualifiedName: 'slas.retrieveViolation',
    httpMethod: 'get',
    httpPath: '/v1/slas/{sla_urn}/violations/{violation_urn}',
  },
  {
    clientCallName: 'client.vendors.retrieve',
    fullyQualifiedName: 'vendors.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/vendors/{urn}',
  },
  {
    clientCallName: 'client.vendors.list',
    fullyQualifiedName: 'vendors.list',
    httpMethod: 'get',
    httpPath: '/v1/vendors',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
