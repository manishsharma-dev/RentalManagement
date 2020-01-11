import { NgModule } from '@angular/core';
import {MatButtonModule, MatGridListModule, MatMenuModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({    
    imports: [
      MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatGridListModule,
        MatMenuModule ,
        MatButtonModule 
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatGridListModule,
        MatMenuModule ,
        MatButtonModule 
    ]
  })

  export class MaterialModule { }