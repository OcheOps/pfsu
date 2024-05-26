import { SelectQueryBuilder } from 'typeorm';
import { Field, ObjectMetadata } from '../types/metadata.types';

export const applyPagination = <T>(
  queryBuilder: SelectQueryBuilder<T>,
  page: number,
  limit: number,
) => {
  const skip = (page - 1) * limit;
  return queryBuilder.skip(skip).take(limit);
};

export const applyFilters = <T>(
  queryBuilder: SelectQueryBuilder<T>,
  filters: { field: Field; value: any; operator: string }[],
  metadata: ObjectMetadata,
) => {
  if (!filters || filters.length === 0) {
    return queryBuilder;
  }

  const allowedOperators = [
    'equals',
    'not',
    'gt',
    'gte',
    'lt',
    'lte',
    'like',
    'in',
    'notIn',
    'isNull',
    'isNotNull',
  ];

  const { alias, columns } = metadata;

  const filterQueries = filters.reduce((queries, filter) => {
    const { field, value, operator } = filter;

    if (!allowedOperators.includes(operator)) {
      throw new Error(`Operator '${operator}' is not allowed.`);
    }

    const column = columns.find((col) => col.field === field.field);
    if (!column) {
      throw new Error(`Field '${field.field}' not found in the entity metadata.`);
    }

    const propertyPath = `${alias}.${column.propertyPath}`;

    switch (operator) {
      case 'equals':
        queries.push(`${propertyPath} = :${field.field}`);
        break;
      case 'not':
        queries.push(`${propertyPath} != :${field.field}`);
        break;
      case 'gt':
        queries.push(`${propertyPath} > :${field.field}`);
        break;
      case 'gte':
        queries.push(`${propertyPath} >= :${field.field}`);
        break;
      case 'lt':
        queries.push(`${propertyPath} < :${field.field}`);
        break;
      case 'lte':
        queries.push(`${propertyPath} <= :${field.field}`);
        break;
      case 'like':
        queries.push(`${propertyPath} LIKE :${field.field}`);
        break;
      case 'in':
        queries.push(`${propertyPath} IN (:...${field.field})`);
        break;
      case 'notIn':
        queries.push(`${propertyPath} NOT IN (:...${field.field})`);
        break;
      case 'isNull':
        queries.push(`${propertyPath} IS NULL`);
        break;
      case 'isNotNull':
        queries.push(`${propertyPath} IS NOT NULL`);
        break;
    }

    queryBuilder.setParameter(`${field.field}`, value);
    return queries;
  }, [] as string[]);

  return queryBuilder.where(filterQueries.join(' AND '));
};

export const applySorting = <T>(
  queryBuilder: SelectQueryBuilder<T>,
  sort: { field: Field; order: 'ASC' | 'DESC' }[],
  metadata: ObjectMetadata,
) => {
  if (!sort || sort.length === 0) {
    return queryBuilder;
  }

  const { alias, columns } = metadata;

  const sortQueries = sort.reduce((queries, sortItem) => {
    const { field, order } = sortItem;
    const column = columns.find((col) => col.field === field.field);

    if (!column) {
      throw new Error(`Field '${field.field}' not found in the entity metadata.`);
    }

    const propertyPath = `${alias}.${column.propertyPath}`;
    queries.push(`${propertyPath} ${order}`);

    return queries;
  }, [] as string[]);

  return queryBuilder.orderBy(sortQueries.join(', '));
};