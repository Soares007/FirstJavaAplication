import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Computer } from '../computer';
import { ComputersService } from '../computers.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  computer: Computer[] = [];
  formGroupComputers: FormGroup;
  constructor(private ComputersService: ComputersService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupComputers = formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: [''],
      date: [''],
      image: [''],
    });
  }
  save() {
    this.ComputersService.save(this.formGroupComputers.value).subscribe(
      {
        next: data => {
          this.computer.push(data)
          this.formGroupComputers.reset();
        }
      }
    );
  }
}

