import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { World } from '../../../../output/yml/api';
import { WorldDetailComponent } from '../../components/world-detail/world-detail.component';

@Injectable({
  providedIn: 'root'
})
export class WorldDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  public open(world: World): MatDialogRef<WorldDetailComponent> {
    return this.dialog.open(WorldDetailComponent, {
      width: '250px',
      height: '300px',
      data: world
    })
  }
}
