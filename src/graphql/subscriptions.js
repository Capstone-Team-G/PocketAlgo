/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategories = /* GraphQL */ `
  subscription OnCreateCategories {
    onCreateCategories {
      id
      name
      algorithms {
        items {
          id
          name
          categoriesID
          example
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategories = /* GraphQL */ `
  subscription OnUpdateCategories {
    onUpdateCategories {
      id
      name
      algorithms {
        items {
          id
          name
          categoriesID
          example
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategories = /* GraphQL */ `
  subscription OnDeleteCategories {
    onDeleteCategories {
      id
      name
      algorithms {
        items {
          id
          name
          categoriesID
          example
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAlgorithms = /* GraphQL */ `
  subscription OnCreateAlgorithms {
    onCreateAlgorithms {
      id
      name
      categoriesID
      example
      description
      categories {
        id
        name
        algorithms {
          nextToken
        }
        createdAt
        updatedAt
      }
      quizes {
        items {
          id
          algorithmsID
          question
          option
          answer
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAlgorithms = /* GraphQL */ `
  subscription OnUpdateAlgorithms {
    onUpdateAlgorithms {
      id
      name
      categoriesID
      example
      description
      categories {
        id
        name
        algorithms {
          nextToken
        }
        createdAt
        updatedAt
      }
      quizes {
        items {
          id
          algorithmsID
          question
          option
          answer
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAlgorithms = /* GraphQL */ `
  subscription OnDeleteAlgorithms {
    onDeleteAlgorithms {
      id
      name
      categoriesID
      example
      description
      categories {
        id
        name
        algorithms {
          nextToken
        }
        createdAt
        updatedAt
      }
      quizes {
        items {
          id
          algorithmsID
          question
          option
          answer
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuizes = /* GraphQL */ `
  subscription OnCreateQuizes {
    onCreateQuizes {
      id
      algorithmsID
      algorithms {
        id
        name
        categoriesID
        example
        description
        categories {
          id
          name
          createdAt
          updatedAt
        }
        quizes {
          nextToken
        }
        createdAt
        updatedAt
      }
      question
      option
      answer
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuizes = /* GraphQL */ `
  subscription OnUpdateQuizes {
    onUpdateQuizes {
      id
      algorithmsID
      algorithms {
        id
        name
        categoriesID
        example
        description
        categories {
          id
          name
          createdAt
          updatedAt
        }
        quizes {
          nextToken
        }
        createdAt
        updatedAt
      }
      question
      option
      answer
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuizes = /* GraphQL */ `
  subscription OnDeleteQuizes {
    onDeleteQuizes {
      id
      algorithmsID
      algorithms {
        id
        name
        categoriesID
        example
        description
        categories {
          id
          name
          createdAt
          updatedAt
        }
        quizes {
          nextToken
        }
        createdAt
        updatedAt
      }
      question
      option
      answer
      createdAt
      updatedAt
    }
  }
`;
