/**
 *  home.module.ts
 *    - Home module definition
 *
 ******************************************************************************/

/**
 * Importing modules
 */
import { NgModule } from '@angular/core';

/**
 * Importing routing module
 */
import { HomeRoutingModule } from './home-routing.module';

/**
 * Importing components
 */
import { HomeComponent } from './home.component';

/**
 * Importing services (providers)
 */
import { HomeService } from './home.service';

/**
 * Declaring the module
 */
@NgModule({
  providers: [ HomeService ],
  exports: [ HomeComponent ],
  imports: [ HomeRoutingModule ],
  declarations: [ HomeComponent ]
})

/**
 * Exporting the module as a class
 */
export class HomeModule { }
