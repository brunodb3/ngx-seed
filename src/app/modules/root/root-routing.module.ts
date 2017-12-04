/**
 *  root-routing.module.ts
 *    - Root routing module definition
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
import { RootComponent } from './root.component';

/**
 * Declaring the module
 */
@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '**', pathMatch: 'full', redirectTo: 'home' }
    ])
  ]
})

/**
 * Exporting the module as a class
 */
export class RootRoutingModule { }
