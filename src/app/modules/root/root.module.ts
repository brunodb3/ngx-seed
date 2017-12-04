/**
 *  root.module.ts
 *    - Root module definition
 *
 ******************************************************************************/

/**
 * Importing modules
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Importing custom modules
 */
import { HomeModule } from '../home/index';
import { RootRoutingModule } from './root-routing.module';

/**
 * Importing components
 */
import { RootComponent } from './root.component';

/**
 * Importing services (providers)
 */
import { RootService } from './root.service';

/**
 * Declaring the module
 */
@NgModule({
  providers: [ RootService ],
  bootstrap: [ RootComponent ],
  declarations: [ RootComponent ],
  imports: [
    BrowserModule, HomeModule, RootRoutingModule
  ]
})

/**
 * Exporting the module as a class
 */
export class RootModule { }
