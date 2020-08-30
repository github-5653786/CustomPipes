import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './services/http-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgePipePipe } from './Pipes/age-pipe.pipe';
import { FilterDataPipe } from './Pipes/filter-data.pipe';
import { AddSlashPipePipe } from './Pipes/add-slash-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgePipePipe,
    FilterDataPipe,
    AddSlashPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
