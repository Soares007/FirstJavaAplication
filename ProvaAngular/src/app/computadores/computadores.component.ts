import { Component, OnInit } from '@angular/core';
import { Computer } from '../computer';
import { ComputersService } from '../computers.service';

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.css']
})
export class ComputadoresComponent implements OnInit{
  computer: Computer[] = [];
  constructor(private ComputersService: ComputersService
  ) { }

  ngOnInit(): void {
    this.loadComputers();
  }

  loadComputers() {
    this.ComputersService.getComputers().subscribe({
      next: data => this.computer = data
    });
  }
}
