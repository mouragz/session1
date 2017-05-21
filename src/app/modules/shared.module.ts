import {NgModule} from '@angular/core';

import {AutoGrowDirective} from '../directives/auto-grow.directive';

@NgModule({
    declarations:[AutoGrowDirective],
    exports: [AutoGrowDirective]
})
export class SharedModule{

}
