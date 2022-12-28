import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-winners',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent {
  displayedColumns: string[] = ['name', 'age', 'score'];

  dataSource: any;
  constructor(private api: ApiService) {}
  
  ngOnInit(): void {
    this.api.getWinner().valueChanges().subscribe(data => {
      //console.log(data);
      const winners = data;
      this.dataSource = new MatTableDataSource(winners);
      console.log(winners);
      //console.log(this.dataSource);
    })
  }
}
