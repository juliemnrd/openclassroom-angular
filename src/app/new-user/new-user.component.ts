import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormArray} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup; //objet


//FormBuilder est une classe qui vous met à disposition des méthodes facilitant la création d'objet FormGroup
  constructor(private formBuilder:FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm()
  }

  //Dans ce cas de figure, 
  //tous les champs sont requis et la valeur du champ email doit être sous un format valable d'adresse mail 
  initForm(){
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      // ajout d'un FormArray vide
      hobbies: this.formBuilder.array([])
    })
  }

  onSubmitForm(){
    //récupère la  value  du formulaire, et crée un nouvel objet User à partir de la valeur des  controls  du formulaire
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  //avoir accès aux  controls  à l'intérieur de l'array
  //créer une méthode qui retourne hobbies par la méthode  get()
  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
};

//méthode qui permet d'ajouter un FormControl à hobbies,permettant ainsi à l'utilisateur d'en ajouter
//crée un  control  avec la méthode FormBuilder.control(),
//et l'ajoute au  FormArray rendu disponible par la méthode getHobbies()
  onAddHobby() {
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  };

}
