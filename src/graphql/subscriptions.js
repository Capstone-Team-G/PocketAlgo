/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategories = /* GraphQL */ `
  subscription OnCreateCategories {
    onCreateCategories {
      id
      name
      subcategories {
        items {
          id
          name
          categoriesID
          description
          categories {
            id
            name
            createdAt
            updatedAt
          }
          algorithms {
            nextToken
          }
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
      subcategories {
        items {
          id
          name
          categoriesID
          description
          categories {
            id
            name
            createdAt
            updatedAt
          }
          algorithms {
            nextToken
          }
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
      subcategories {
        items {
          id
          name
          categoriesID
          description
          categories {
            id
            name
            createdAt
            updatedAt
          }
          algorithms {
            nextToken
          }
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
export const onCreateSubcategories = /* GraphQL */ `
  subscription OnCreateSubcategories {
    onCreateSubcategories {
      id
      name
      categoriesID
      description
      categories {
        id
        name
        subcategories {
          items {
            id
            name
            categoriesID
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      algorithms {
        items {
          id
          name
          categoriesID
          subcategoriesID
          example
          description
          picture
          pictureDescription
          subcategories {
            nextToken
          }
          quizes {
            nextToken
          }
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
export const onUpdateSubcategories = /* GraphQL */ `
  subscription OnUpdateSubcategories {
    onUpdateSubcategories {
      id
      name
      categoriesID
      description
      categories {
        id
        name
        subcategories {
          items {
            id
            name
            categoriesID
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      algorithms {
        items {
          id
          name
          categoriesID
          subcategoriesID
          example
          description
          picture
          pictureDescription
          subcategories {
            nextToken
          }
          quizes {
            nextToken
          }
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
export const onDeleteSubcategories = /* GraphQL */ `
  subscription OnDeleteSubcategories {
    onDeleteSubcategories {
      id
      name
      categoriesID
      description
      categories {
        id
        name
        subcategories {
          items {
            id
            name
            categoriesID
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      algorithms {
        items {
          id
          name
          categoriesID
          subcategoriesID
          example
          description
          picture
          pictureDescription
          subcategories {
            nextToken
          }
          quizes {
            nextToken
          }
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
      subcategoriesID
      example
      description
      picture
      pictureDescription
      subcategories {
        items {
          id
          name
          categoriesID
          description
          categories {
            id
            name
            createdAt
            updatedAt
          }
          algorithms {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      quizes {
        items {
          id
          algorithmsID
          algorithms {
            id
            name
            categoriesID
            subcategoriesID
            example
            description
            picture
            pictureDescription
            createdAt
            updatedAt
          }
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
      subcategoriesID
      example
      description
      picture
      pictureDescription
      subcategories {
        items {
          id
          name
          categoriesID
          description
          categories {
            id
            name
            createdAt
            updatedAt
          }
          algorithms {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      quizes {
        items {
          id
          algorithmsID
          algorithms {
            id
            name
            categoriesID
            subcategoriesID
            example
            description
            picture
            pictureDescription
            createdAt
            updatedAt
          }
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
      subcategoriesID
      example
      description
      picture
      pictureDescription
      subcategories {
        items {
          id
          name
          categoriesID
          description
          categories {
            id
            name
            createdAt
            updatedAt
          }
          algorithms {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      quizes {
        items {
          id
          algorithmsID
          algorithms {
            id
            name
            categoriesID
            subcategoriesID
            example
            description
            picture
            pictureDescription
            createdAt
            updatedAt
          }
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
        subcategoriesID
        example
        description
        picture
        pictureDescription
        subcategories {
          items {
            id
            name
            categoriesID
            description
            createdAt
            updatedAt
          }
          nextToken
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
        subcategoriesID
        example
        description
        picture
        pictureDescription
        subcategories {
          items {
            id
            name
            categoriesID
            description
            createdAt
            updatedAt
          }
          nextToken
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
        subcategoriesID
        example
        description
        picture
        pictureDescription
        subcategories {
          items {
            id
            name
            categoriesID
            description
            createdAt
            updatedAt
          }
          nextToken
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
      question
      option
      answer
      createdAt
      updatedAt
    }
  }
`;
