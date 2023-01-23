import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from './material.module';
import { TransferService } from './service/transfer.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    
  ],

  providers: [TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
