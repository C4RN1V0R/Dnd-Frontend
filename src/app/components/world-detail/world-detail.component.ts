import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { World, WorldRequest, WorldRequestService } from '../../../../output/yml/api';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth/auth.service';

export enum WorldDialogRole {
  update,
  new,
  view
}

export interface WorldDialogData {
  world?: World,
  role: WorldDialogRole
}

@Component({
  selector: 'app-world-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgSwitch,
    NgSwitchCase,
    ReactiveFormsModule,
    FormsModule,
    NgSwitchDefault
  ],
  templateUrl: './world-detail.component.html',
  styleUrl: './world-detail.component.scss'
})
export class WorldDetailComponent {
  
  public worldForm: FormGroup;
  public roleType = WorldDialogRole;
  public role: WorldDialogRole;
  public title: string;
  private id?: string;
  
  constructor(
    public dialogRef: MatDialogRef<WorldDetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: WorldDialogData,
    formBuilder: FormBuilder,
    private worldApi: WorldRequestService

    ){
      this.worldForm = formBuilder.group({
        name: [data.world?.name || "", Validators.required]
      })
      this.id = data.world?.id
      this.role = data.role;
      this.title = data.world?.name || "Create new world";
      
    }
    
    submitDialog() {
      if (this.role == this.roleType.new) {
        console.log("World creation triggered")
        this.worldApi.createWorld(this.worldForm.value as WorldRequest).subscribe(response => {
          console.log(response)
        })
      } else if (this.role == this.roleType.update) {
        console.log("Update triggered")
        if (this.id) {
          this.worldApi.updateWorld(this.id, this.worldForm.value as WorldRequest).subscribe(response => {
            console.log(this.id, this.worldForm.value)
            console.log(response)
          })
        } else {
          console.error("Something went wrong with the World-ID")
        }
      }
      this.closeDialog()
    }
    
  closeDialog() {
    this.dialogRef.close();
  }

}
