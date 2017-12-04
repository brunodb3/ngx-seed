/**
 *  home.service.ts
 *   - Home service (prodiver) definition
 *
 ******************************************************************************/

/**
 * Importing modules
 */
import { Injectable } from '@angular/core';

/**
 * Declaring the service (provider)
 */
@Injectable()
export class HomeService {

  /**
   * Constructor for the class
   */
  constructor() {}

  /**
   * Returns a simple string with service name
   */
  getServiceName() {
    return 'home';
  }

}
