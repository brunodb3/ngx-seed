/**
 *  main.ts
 *    - Main Angular file. This defines the app and how it will run
 *
 ******************************************************************************/

/**
 * Importing modules
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/**
 * Importing custom modules
 */
import { RootModule } from './app/modules/root/index';
import { environment } from './environments/environment';

/**
 * Checking for environment
 */
if (environment.production) {
  /**
   * Enabling Angular's production mode
   */
  enableProdMode();
}

/**
 * Bootstraping the root module
 */
platformBrowserDynamic().bootstrapModule(RootModule)
  .catch(err => console.log(err));
