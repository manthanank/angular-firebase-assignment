import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { getDatabase, ref, set } from 'firebase/database';
import { ApiService, User } from '../shared/api.service';
import { AddToWinnersDialogComponent } from '../add-to-winners-dialog/add-to-winners-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  displayedColumns: string[] = ['name', 'age', 'score', 'actions'];

  dataSource: any;

  constructor(private dialog: MatDialog, private api: ApiService, private snackBar: MatSnackBar) {}
  
  ngOnInit(): void {
    this.api.getAll().valueChanges().subscribe(data => {
      //console.log(data);
      //this.dataSource = data;
      const filteredUsers = data.filter(user => user.age < 21);
      this.dataSource = new MatTableDataSource(filteredUsers);      
      console.log(filteredUsers);
      //console.log(this.dataSource);
    })
  }

  addToWinners(user: User) {
    const dialogRef = this.dialog.open(AddToWinnersDialogComponent, {
      width: '350px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const db = getDatabase();
        set(ref(db, 'winners/' + user.name), {
          name: user.name,
          age: user.age,
          score: user.score
        });
        //this.api.create(user).winners.push(user);
        this.snackBar.open('Added to winners', 'Dismiss', {
          duration: 2000
        });
      }
    });
  }
  
}
