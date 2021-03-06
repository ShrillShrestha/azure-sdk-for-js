/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/serviceAssociationLinksMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ServiceAssociationLinks. */
export class ServiceAssociationLinks {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ServiceAssociationLinks.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of service association links for a subnet.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param subnetName The name of the subnet.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceAssociationLinksListResponse>
   */
  list(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServiceAssociationLinksListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param subnetName The name of the subnet.
   * @param callback The callback
   */
  list(resourceGroupName: string, virtualNetworkName: string, subnetName: string, callback: msRest.ServiceCallback<Models.ServiceAssociationLinksListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param subnetName The name of the subnet.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServiceAssociationLinksListResult>): void;
  list(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServiceAssociationLinksListResult>, callback?: msRest.ServiceCallback<Models.ServiceAssociationLinksListResult>): Promise<Models.ServiceAssociationLinksListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualNetworkName,
        subnetName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ServiceAssociationLinksListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}/ServiceAssociationLinks",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
    Parameters.subnetName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceAssociationLinksListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
