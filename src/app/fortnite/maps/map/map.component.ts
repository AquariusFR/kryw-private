import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fortnite-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class FortniteMapComponent implements OnInit {

  @Input() height !: string
  @Input() width !: string
  @Input() title !: string

  points: string
  titleAngle: string
  titleX: number
  titleY: number

  constructor() { }

  ngOnInit() {
    this.calculateBorders();
  }

  private calculateBorders() {

    const ax: number = Math.floor(Math.random() * 45),
      ay: number = Math.floor(Math.random() * 45),
      bx: number = Math.floor(Math.random() * 45) + 450,
      by: number = Math.floor(Math.random() * 45),
      cx: number = Math.floor(Math.random() * 45) + 450,
      cy: number = Math.floor(Math.random() * 45) + 250,
      dx: number = Math.floor(Math.random() * 45),
      dy: number = Math.floor(Math.random() * 45) + 250,
      titleAngle = Math.atan2(by - ay, bx - ax) * 180 / Math.PI;

    this.points =
      ax + ' ' + ay + ', ' +
      bx + ' ' + by + ', ' +
      cx + ' ' + cy + ', ' +
      dx + ' ' + dy;

    this.titleAngle = 'rotate(' + titleAngle + ')'
    this.titleX = ax + 10
    this.titleY = ay + 50
  }
}
