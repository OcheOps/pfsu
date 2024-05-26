export interface Field {
    field: string;
    propertyPath: string;
  }
  
  export interface ObjectMetadata {
    alias: string;
    columns: Field[];
  }