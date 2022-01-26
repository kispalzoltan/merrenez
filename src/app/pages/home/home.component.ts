import { Component, OnDestroy, OnInit } from '@angular/core';
import { PATIENTS } from 'src/app/shared/database/patient.database';
import { Patient } from 'src/app/shared/models/patient.model';
import { patientAddComponent } from '../patient/add/patient-add.component';
import { CATEGORIES } from './../../shared/database/category.database';
import { SCORES } from './../../shared/database/score.database';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  [x: string]: any;
  categories = CATEGORIES;
  scores = SCORES;
  patients = PATIENTS;
  category?='';
  page = 'home';


  constructor() { }

  ngOnInit(): void {
    this.category='';

  }
  ngOnDestroy(): void {
    delete this.category;
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(patientAddComponent, {});
    dialogRef.afterClosed().subscribe((result: Patient) => {
      if (result) {
        this.patients.push(result);
      }
    });
  }

}
