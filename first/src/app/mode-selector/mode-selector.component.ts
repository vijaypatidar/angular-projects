import { Component, OnInit } from '@angular/core';

export type Mode = string
export interface Server {
  name: string,
  type: Mode
}

@Component({
  selector: 'app-mode-selector',
  templateUrl: './mode-selector.component.html',
  styleUrls: ['./mode-selector.component.css']
})
export class ModeSelectorComponent implements OnInit {

  modes: Mode[] = ["Prod", "DevA", "UAT"]

  mode: Mode = this.modes[0]

  private servers: Server[] = [{
    name: "Server a",
    type: this.modes[0]
  }, {
    name: "Server b",
    type: this.modes[1]
  }, {
    name: "Server c",
    type: this.modes[1]
  }, {
    name: "Server d",
    type: this.modes[2]
  }]

  getServers() {
    return this.servers.filter(server => server.type == this.mode)
  }


  constructor() { }

  ngOnInit(): void {

  }
  sel(sMode: Mode) {
    this.mode = sMode
  }

}
