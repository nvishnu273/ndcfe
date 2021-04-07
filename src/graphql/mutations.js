/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChildren = /* GraphQL */ `
  mutation CreateChildren(
    $input: CreateChildrenInput!
    $condition: ModelChildrenConditionInput
  ) {
    createChildren(input: $input, condition: $condition) {
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
export const updateChildren = /* GraphQL */ `
  mutation UpdateChildren(
    $input: UpdateChildrenInput!
    $condition: ModelChildrenConditionInput
  ) {
    updateChildren(input: $input, condition: $condition) {
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
export const deleteChildren = /* GraphQL */ `
  mutation DeleteChildren(
    $input: DeleteChildrenInput!
    $condition: ModelChildrenConditionInput
  ) {
    deleteChildren(input: $input, condition: $condition) {
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
export const createTree = /* GraphQL */ `
  mutation CreateTree(
    $input: CreateTreeInput!
    $condition: ModelTreeConditionInput
  ) {
    createTree(input: $input, condition: $condition) {
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
export const updateTree = /* GraphQL */ `
  mutation UpdateTree(
    $input: UpdateTreeInput!
    $condition: ModelTreeConditionInput
  ) {
    updateTree(input: $input, condition: $condition) {
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
export const deleteTree = /* GraphQL */ `
  mutation DeleteTree(
    $input: DeleteTreeInput!
    $condition: ModelTreeConditionInput
  ) {
    deleteTree(input: $input, condition: $condition) {
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
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
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
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
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
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
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
export const createPlanElement = /* GraphQL */ `
  mutation CreatePlanElement(
    $input: CreatePlanElementInput!
    $condition: ModelPlanElementConditionInput
  ) {
    createPlanElement(input: $input, condition: $condition) {
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
export const updatePlanElement = /* GraphQL */ `
  mutation UpdatePlanElement(
    $input: UpdatePlanElementInput!
    $condition: ModelPlanElementConditionInput
  ) {
    updatePlanElement(input: $input, condition: $condition) {
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
export const deletePlanElement = /* GraphQL */ `
  mutation DeletePlanElement(
    $input: DeletePlanElementInput!
    $condition: ModelPlanElementConditionInput
  ) {
    deletePlanElement(input: $input, condition: $condition) {
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
