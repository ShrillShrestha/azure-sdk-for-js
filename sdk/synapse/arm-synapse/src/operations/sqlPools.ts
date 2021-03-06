/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/sqlPoolsMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a SqlPools. */
export class SqlPools {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a SqlPools.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Get SQL pool properties
   * @summary Get SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolsGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, callback: msRest.ServiceCallback<Models.SqlPool>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SqlPool>): void;
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SqlPool>, callback?: msRest.ServiceCallback<Models.SqlPool>): Promise<Models.SqlPoolsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SqlPoolsGetResponse>;
  }

  /**
   * Apply a partial update to a SQL pool
   * @summary Update SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param sqlPoolInfo The updated SQL pool properties
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolsUpdateResponse>
   */
  update(resourceGroupName: string, workspaceName: string, sqlPoolName: string, sqlPoolInfo: Models.SqlPoolPatchInfo, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param sqlPoolInfo The updated SQL pool properties
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceName: string, sqlPoolName: string, sqlPoolInfo: Models.SqlPoolPatchInfo, callback: msRest.ServiceCallback<Models.SqlPool>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param sqlPoolInfo The updated SQL pool properties
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceName: string, sqlPoolName: string, sqlPoolInfo: Models.SqlPoolPatchInfo, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SqlPool>): void;
  update(resourceGroupName: string, workspaceName: string, sqlPoolName: string, sqlPoolInfo: Models.SqlPoolPatchInfo, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SqlPool>, callback?: msRest.ServiceCallback<Models.SqlPool>): Promise<Models.SqlPoolsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        sqlPoolInfo,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.SqlPoolsUpdateResponse>;
  }

  /**
   * Create a SQL pool
   * @summary Create SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param sqlPoolInfo The SQL pool to create
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolsCreateResponse>
   */
  create(resourceGroupName: string, workspaceName: string, sqlPoolName: string, sqlPoolInfo: Models.SqlPool, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolsCreateResponse> {
    return this.beginCreate(resourceGroupName,workspaceName,sqlPoolName,sqlPoolInfo,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SqlPoolsCreateResponse>;
  }

  /**
   * Delete a SQL pool
   * @summary Delete SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolsDeleteMethodResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolsDeleteMethodResponse> {
    return this.beginDeleteMethod(resourceGroupName,workspaceName,sqlPoolName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SqlPoolsDeleteMethodResponse>;
  }

  /**
   * List all SQL pools
   * @summary List SQL pools
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolsListByWorkspaceResponse>
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolsListByWorkspaceResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.SqlPoolInfoListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SqlPoolInfoListResult>): void;
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SqlPoolInfoListResult>, callback?: msRest.ServiceCallback<Models.SqlPoolInfoListResult>): Promise<Models.SqlPoolsListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listByWorkspaceOperationSpec,
      callback) as Promise<Models.SqlPoolsListByWorkspaceResponse>;
  }

  /**
   * Pause a SQL pool
   * @summary Pause SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolsPauseResponse>
   */
  pause(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolsPauseResponse> {
    return this.beginPause(resourceGroupName,workspaceName,sqlPoolName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SqlPoolsPauseResponse>;
  }

  /**
   * Resume a SQL pool
   * @summary Resume SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolsResumeResponse>
   */
  resume(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolsResumeResponse> {
    return this.beginResume(resourceGroupName,workspaceName,sqlPoolName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SqlPoolsResumeResponse>;
  }

  /**
   * Create a SQL pool
   * @summary Create SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param sqlPoolInfo The SQL pool to create
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, sqlPoolInfo: Models.SqlPool, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        sqlPoolInfo,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Delete a SQL pool
   * @summary Delete SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Pause a SQL pool
   * @summary Pause SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPause(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      beginPauseOperationSpec,
      options);
  }

  /**
   * Resume a SQL pool
   * @summary Resume SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginResume(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      beginResumeOperationSpec,
      options);
  }

  /**
   * List all SQL pools
   * @summary List SQL pools
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolsListByWorkspaceNextResponse>
   */
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolsListByWorkspaceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SqlPoolInfoListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SqlPoolInfoListResult>): void;
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SqlPoolInfoListResult>, callback?: msRest.ServiceCallback<Models.SqlPoolInfoListResult>): Promise<Models.SqlPoolsListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByWorkspaceNextOperationSpec,
      callback) as Promise<Models.SqlPoolsListByWorkspaceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SqlPool
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "sqlPoolInfo",
    mapper: {
      ...Mappers.SqlPoolPatchInfo,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SqlPool
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  serializer
};

const listByWorkspaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolInfoListResult
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "sqlPoolInfo",
    mapper: {
      ...Mappers.SqlPool,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SqlPool
    },
    202: {},
    404: {},
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    202: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  serializer
};

const beginPauseOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/pause",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  serializer
};

const beginResumeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/resume",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  serializer
};

const listByWorkspaceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolInfoListResult
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  serializer
};
