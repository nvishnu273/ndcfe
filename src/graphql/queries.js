/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncChildren = /* GraphQL */ `
  query SyncChildren(
    $filter: ModelChildrenFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChildren(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        demand
        supply
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getChildren = /* GraphQL */ `
  query GetChildren($id: ID!) {
    getChildren(id: $id) {
      id
      demand
      supply
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listChildrens = /* GraphQL */ `
  query ListChildrens(
    $filter: ModelChildrenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChildrens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        demand
        supply
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTrees = /* GraphQL */ `
  query SyncTrees(
    $filter: ModelTreeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        children {
          id
          demand
          supply
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTree = /* GraphQL */ `
  query GetTree($id: ID!) {
    getTree(id: $id) {
      id
      children {
        id
        demand
        supply
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listTrees = /* GraphQL */ `
  query ListTrees(
    $filter: ModelTreeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        children {
          id
          demand
          supply
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlans = /* GraphQL */ `
  query SyncPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _id
        _rev
        doc_type
        visibility
        plan
        headerMap
        tree {
          id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      id
      _id
      _rev
      doc_type
      visibility
      plan
      headerMap
      tree {
        id
        children {
          id
          demand
          supply
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _id
        _rev
        doc_type
        visibility
        plan
        headerMap
        tree {
          id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlanElements = /* GraphQL */ `
  query SyncPlanElements(
    $filter: ModelPlanElementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlanElements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _id
        _rev
        doc_type
        visibility
        column_id
        key
        beig
        created_at
        plan
        creator_id
        creator_name
        linked_outcome
        linked_output
        linked_kpi
        updated_at
        updator_id
        updator_name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPlanElement = /* GraphQL */ `
  query GetPlanElement($id: ID!) {
    getPlanElement(id: $id) {
      id
      _id
      _rev
      doc_type
      visibility
      column_id
      key
      beig
      created_at
      plan
      creator_id
      creator_name
      linked_outcome
      linked_output
      linked_kpi
      updated_at
      updator_id
      updator_name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPlanElements = /* GraphQL */ `
  query ListPlanElements(
    $filter: ModelPlanElementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlanElements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _id
        _rev
        doc_type
        visibility
        column_id
        key
        beig
        created_at
        plan
        creator_id
        creator_name
        linked_outcome
        linked_output
        linked_kpi
        updated_at
        updator_id
        updator_name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
