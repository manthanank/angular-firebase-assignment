import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersComponent } from './users/users.component';
import { ToppersComponent } from './toppers/toppers.component';
import { WinnersComponent } from './winners/winners.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ApiService } from './shared/api.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddToWinnersDialogComponent } from './add-to-winners-dialog/add-to-winners-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    AddToWinnersDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    UsersComponent,
    WinnersComponent,
    ToppersComponent,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [ApiService,{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
