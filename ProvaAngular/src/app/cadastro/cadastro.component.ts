import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  submitted: boolean = false;
  constructor(private ComputersService: ComputersService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupComputers = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      date: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }
  save() {
    this.submitted = true;
    if (this.formGroupComputers.valid) {
    this.ComputersService.save(this.formGroupComputers.value).subscribe(
      {
        next: data => {
          this.computer.push(data)
          this.formGroupComputers.reset();
          this.submitted = false
        }
      }
    );
  }
}

  get name(): any {
    return this.formGroupComputers.get("name");
  }
  get price(): any {
    return this.formGroupComputers.get("price");
  }
  get description(): any {
    return this.formGroupComputers.get("description");
  }
  get date(): any {
    return this.formGroupComputers.get("date");
  }
  get image(): any {
    return this.formGroupComputers.get("image");
  }
}

