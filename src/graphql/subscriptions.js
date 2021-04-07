/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChildren = /* GraphQL */ `
  subscription OnCreateChildren {
    onCreateChildren {
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
export const onUpdateChildren = /* GraphQL */ `
  subscription OnUpdateChildren {
    onUpdateChildren {
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
export const onDeleteChildren = /* GraphQL */ `
  subscription OnDeleteChildren {
    onDeleteChildren {
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
export const onCreateTree = /* GraphQL */ `
  subscription OnCreateTree {
    onCreateTree {
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
export const onUpdateTree = /* GraphQL */ `
  subscription OnUpdateTree {
    onUpdateTree {
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
export const onDeleteTree = /* GraphQL */ `
  subscription OnDeleteTree {
    onDeleteTree {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan {
    onCreatePlan {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan {
    onUpdatePlan {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan {
    onDeletePlan {
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
export const onCreatePlanElement = /* GraphQL */ `
  subscription OnCreatePlanElement {
    onCreatePlanElement {
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
export const onUpdatePlanElement = /* GraphQL */ `
  subscription OnUpdatePlanElement {
    onUpdatePlanElement {
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
export const onDeletePlanElement = /* GraphQL */ `
  subscription OnDeletePlanElement {
    onDeletePlanElement {
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
