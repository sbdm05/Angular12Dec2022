import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';


// décorateur = définir la fonction de ce fichier
// = metadatas
@NgModule({
  declarations: [
    // pas de composants

    TotalPipe,
    BtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TotalPipe,
    BtnComponent
  ]
})
export class SharedModule { }
