import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-toppers',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.css']
})
export class ToppersComponent {
  displayedColumns: string[] = ['name', 'age', 'score'];

  dataSource: any;
  constructor(private api: ApiService) {}
  
  ngOnInit(): void {
    this.api.getAll().valueChanges().subscribe(data => {
      //console.log(data);
      //this.dataSource = data;
      const filteredUsers = data.filter(user => user.score > 90);
      this.dataSource = new MatTableDataSource(filteredUsers);
      console.log(filteredUsers);
      //console.log(this.dataSource);
    })
  }
}
