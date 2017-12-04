/**
 *  root.component.ts
 *    - Root component definition
 *
 ******************************************************************************/

/**
 * Importing modules
 */
import { Component, OnInit} from '@angular/core';

/**
 * Importing services (prodivers)
 */
import { RootService } from './root.service';

/**
 * Declaring the component
 */
@Component({
  selector: 'app-root',
  styleUrls: [ './root.styles.scss' ],
  templateUrl: './root.template.html'
})
/**
 * Exporting the component as a class
 */
export class RootComponent implements OnInit {

  /**
   * Class-wide variables
   */
  public serviceName: String = '';
  public componentName: String = '';

  /**
   * Constructor for the class
   */
  constructor(
    public rootService: RootService
  ) { }

  /**
   * Fires when component has loaded
   */
  ngOnInit() {
    /**
     * Getting service name
     */
    this.serviceName = `This is ${ this.rootService.getServiceName() } service!`;
    this.componentName = `This is ${ this.rootService.getServiceName() } component!`;

    console.log('Service Name', this.serviceName);
    console.log('Component Name', this.componentName);
  }

}
