import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../shared/api.service';

@Component({
  selector: 'app-add-to-winners-dialog',
  templateUrl: './add-to-winners-dialog.component.html',
  styleUrls: ['./add-to-winners-dialog.component.css']
})
export class AddToWinnersDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { user: User }) {}
}
