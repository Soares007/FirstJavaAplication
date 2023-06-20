import { Component, OnInit } from '@angular/core';
import { Computer } from '../computer';
import { ComputersService } from '../computers.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit{
  computer: Computer[] = [];
  randomComputer: Computer | undefined;
  constructor(private ComputersService: ComputersService
  ) { }
  ngOnInit(): void {
    this.loadRandomComputer();
  }
  loadRandomComputer(): void {
    this.ComputersService.getComputers().subscribe(
      (data: Computer[]) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        this.randomComputer = data[randomIndex];
      }
    );
  }
}
