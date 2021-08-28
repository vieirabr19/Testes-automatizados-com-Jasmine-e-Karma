import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {

  private numberOfGeneratedIds = 0;

  constructor() { }

  public generatedUniqueIdWithPrefix(prefix: string): string {
    if(!prefix) {
      throw Error("Prefix cen not be empty.");
    }

    const uniqueId = this.generatedUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueId(): number {
    return this.numberOfGeneratedIds;
  }

  private generatedUniqueId(): string {    
    return uuidv4();
  }
}
