/**
 *  home.component.ts
 *    - Home component definition
 *
 ******************************************************************************/

/**
 * Importing modules
 */
import { Component, OnInit} from '@angular/core';

/**
 * Importing services (prodivers)
 */
import { HomeService } from './home.service';

/**
 * Declaring the component
 */
@Component({
  selector: 'app-home',
  styleUrls: [ './home.styles.scss' ],
  templateUrl: './home.template.html'
})
/**
 * Exporting the component as a class
 */
export class HomeComponent implements OnInit {

  /**
   * Class-wide variables
   */
  public serviceName: String = '';
  public componentName: String = '';

  /**
   * Constructor for the class
   */
  constructor(
    public homeService: HomeService
  ) { }

  /**
   * Fires when component has loaded
   */
  ngOnInit() {
    /**
     * Getting service name
     */
    this.serviceName = `This is ${ this.homeService.getServiceName() } service!`;
    this.componentName = `This is ${ this.homeService.getServiceName() } component!`;

    console.log('Service Name', this.serviceName);
    console.log('Component Name', this.componentName);
  }

}
