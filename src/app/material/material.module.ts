import { NgModule } from "@angular/core";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';


const MaterialComponent=[
    MatTooltipModule,
    MatExpansionModule

]

@NgModule({
    imports: [MaterialComponent],
    exports: [MaterialComponent]
})

export class MaterialModule{

}