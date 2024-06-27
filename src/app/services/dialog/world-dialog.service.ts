import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { World } from '../../../../output/yml/api';
import { WorldDetailComponent, WorldDialogRole } from '../../components/world-detail/world-detail.component';

@Injectable({
  providedIn: 'root'
})
export class WorldDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  public create(){
    this.open(undefined, WorldDialogRole.new)
  }

  public edit(world: World){
    this.open(world, WorldDialogRole.update)
  }

  public open(world?: World, role: WorldDialogRole = WorldDialogRole.view) {
    return this.dialog.open(WorldDetailComponent, {
      data: {world, role}
    })
  }
}
