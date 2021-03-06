// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { CanonicalCode } from "@opentelemetry/api";
import { createSpan } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClient } from "../artifactsClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  SqlScriptResource,
  SqlScriptGetSqlScriptsByWorkspaceResponse,
  SqlScriptCreateOrUpdateSqlScriptOptionalParams,
  SqlScriptCreateOrUpdateSqlScriptResponse,
  SqlScriptGetSqlScriptOptionalParams,
  SqlScriptGetSqlScriptResponse,
  ArtifactRenameRequest,
  SqlScriptGetSqlScriptsByWorkspaceNextResponse
} from "../models";

/**
 * Class representing a SqlScript.
 */
export class SqlScript {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class SqlScript class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * Lists sql scripts.
   * @param options The options parameters.
   */
  public listSqlScriptsByWorkspace(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<SqlScriptResource> {
    const iter = this.getSqlScriptsByWorkspacePagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getSqlScriptsByWorkspacePagingPage(options);
      }
    };
  }

  private async *getSqlScriptsByWorkspacePagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<SqlScriptResource[]> {
    let result = await this._getSqlScriptsByWorkspace(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getSqlScriptsByWorkspaceNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getSqlScriptsByWorkspacePagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<SqlScriptResource> {
    for await (const page of this.getSqlScriptsByWorkspacePagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists sql scripts.
   * @param options The options parameters.
   */
  private async _getSqlScriptsByWorkspace(
    options?: coreHttp.OperationOptions
  ): Promise<SqlScriptGetSqlScriptsByWorkspaceResponse> {
    const { span, updatedOptions } = createSpan(
      "ArtifactsClient-_getSqlScriptsByWorkspace",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      options: updatedOptions
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getSqlScriptsByWorkspaceOperationSpec
      );
      return result as SqlScriptGetSqlScriptsByWorkspaceResponse;
    } catch (error) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Creates or updates a Sql Script.
   * @param sqlScriptName The sql script name.
   * @param sqlScript Sql Script resource definition.
   * @param options The options parameters.
   */
  async createOrUpdateSqlScript(
    sqlScriptName: string,
    sqlScript: SqlScriptResource,
    options?: SqlScriptCreateOrUpdateSqlScriptOptionalParams
  ): Promise<SqlScriptCreateOrUpdateSqlScriptResponse> {
    const { span, updatedOptions } = createSpan(
      "ArtifactsClient-createOrUpdateSqlScript",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      sqlScriptName,
      sqlScript,
      options: updatedOptions
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        createOrUpdateSqlScriptOperationSpec
      );
      return result as SqlScriptCreateOrUpdateSqlScriptResponse;
    } catch (error) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Gets a sql script.
   * @param sqlScriptName The sql script name.
   * @param options The options parameters.
   */
  async getSqlScript(
    sqlScriptName: string,
    options?: SqlScriptGetSqlScriptOptionalParams
  ): Promise<SqlScriptGetSqlScriptResponse> {
    const { span, updatedOptions } = createSpan(
      "ArtifactsClient-getSqlScript",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      sqlScriptName,
      options: updatedOptions
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getSqlScriptOperationSpec
      );
      return result as SqlScriptGetSqlScriptResponse;
    } catch (error) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Deletes a Sql Script.
   * @param sqlScriptName The sql script name.
   * @param options The options parameters.
   */
  async deleteSqlScript(
    sqlScriptName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const { span, updatedOptions } = createSpan(
      "ArtifactsClient-deleteSqlScript",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      sqlScriptName,
      options: updatedOptions
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        deleteSqlScriptOperationSpec
      );
      return result as coreHttp.RestResponse;
    } catch (error) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Renames a sqlScript.
   * @param sqlScriptName The sql script name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  async renameSqlScript(
    sqlScriptName: string,
    request: ArtifactRenameRequest,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const { span, updatedOptions } = createSpan(
      "ArtifactsClient-renameSqlScript",
      this.getOperationOptions(options, "undefined")
    );
    const operationArguments: coreHttp.OperationArguments = {
      sqlScriptName,
      request,
      options: updatedOptions
    };
    const sendOperation = async (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as coreHttp.RestResponse;
      } catch (error) {
        span.setStatus({
          code: CanonicalCode.UNKNOWN,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      renameSqlScriptOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: renameSqlScriptOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * GetSqlScriptsByWorkspaceNext
   * @param nextLink The nextLink from the previous successful call to the GetSqlScriptsByWorkspace
   *                 method.
   * @param options The options parameters.
   */
  private async _getSqlScriptsByWorkspaceNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<SqlScriptGetSqlScriptsByWorkspaceNextResponse> {
    const { span, updatedOptions } = createSpan(
      "ArtifactsClient-_getSqlScriptsByWorkspaceNext",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: updatedOptions
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getSqlScriptsByWorkspaceNextOperationSpec
      );
      return result as SqlScriptGetSqlScriptsByWorkspaceNextResponse;
    } catch (error) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getSqlScriptsByWorkspaceOperationSpec: coreHttp.OperationSpec = {
  path: "/sqlScripts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlScriptsListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateSqlScriptOperationSpec: coreHttp.OperationSpec = {
  path: "/sqlScripts/{sqlScriptName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SqlScriptResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.sqlScript,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.sqlScriptName],
  headerParameters: [Parameters.accept, Parameters.contentType, Parameters.ifMatch],
  mediaType: "json",
  serializer
};
const getSqlScriptOperationSpec: coreHttp.OperationSpec = {
  path: "/sqlScripts/{sqlScriptName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlScriptResource
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.sqlScriptName],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deleteSqlScriptOperationSpec: coreHttp.OperationSpec = {
  path: "/sqlScripts/{sqlScriptName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.sqlScriptName],
  headerParameters: [Parameters.accept],
  serializer
};
const renameSqlScriptOperationSpec: coreHttp.OperationSpec = {
  path: "/sqlScripts/{sqlScriptName}/rename",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.sqlScriptName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getSqlScriptsByWorkspaceNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlScriptsListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
