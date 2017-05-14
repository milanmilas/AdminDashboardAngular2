import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerInfoList } from '../serverinfo/serverinfo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerInfoList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        { path: 'serverInfoList', component: ServerInfoList },
        { path: '', component: ServerInfoList },
        { path: '**', component: ServerInfoList }
      ], { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
