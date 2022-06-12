import { schema } from 'normalizr';

export const counterTypeEntity = new schema.Entity('counterTypes');

export const counterEntity = new schema.Entity('counter', {
  counterType: counterTypeEntity,
});

export default counterEntity;
