/**
 *  home-routing.module.ts
 *    - Home routing module definition
 *
 ******************************************************************************/

 /**
 * Importing modules
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Importing components
 */
import { HomeComponent } from './home.component';

/**
 * Declaring the module
 */
@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forChild([
      { path: 'home', component: HomeComponent }
    ])
  ]
})

/**
 * Exporting the module as a class
 */
export class HomeRoutingModule { }
