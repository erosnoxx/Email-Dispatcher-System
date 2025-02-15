import { v4 as uuidv4 } from 'uuid';

export default class BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.id = uuidv4();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  update() {
    this.updatedAt = new Date();
  }
}
