import { Component, OnInit } from '@angular/core';
import { World, WorldRequestService } from '../../../../output/yml/api';
import { NgFor } from '@angular/common';
import { WorldDialogService } from '../../services/dialog/world-dialog.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [NgFor, MatButtonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  
  worlds: World[] = []
  
  constructor(
    private worldApi: WorldRequestService,
    private worldDialogService: WorldDialogService
  ) {
    this.load();
  }
    
  load() {
    this.worldApi.getAllWorlds().subscribe(response => {
      this.worlds = response
    })
  }
  
  openWorldDialog(world: World) {
    const dialogRef = this.worldDialogService.open(world)
  }


}