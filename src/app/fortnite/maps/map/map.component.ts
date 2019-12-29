import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'fortnite-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class FortniteMapComponent implements OnInit {

  @Input() height !: number
  @Input() width !: number
  @Input() title !: string

  points: string
  titleAngle: string
  titleX: number
  titleY: number
  imagePoints: string
  imageHeight: number;
  imageWidth: number;

  constructor() { }

  ngOnInit() {
    this.calculateBorders();
  }

  private calculateBorders(): void {

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
    const padding = 2.5;
    const ayImage = ay + 50
    const byImage = by + 50
    const cyImage = cy - 30
    const dyImage = dy - 30
    this.imagePoints =
      (padding + this.getAFunc((ayImage), ax, ay, dx, dy)) + ' ' + (ayImage) + ', ' +
      (this.getAFunc((byImage), bx, by, cx, cy) - padding) + ' ' + (byImage) + ', ' +
      (this.getAFunc((cyImage), bx, by, cx, cy) - padding) + ' ' + (cyImage) + ', ' +
      (padding + this.getAFunc((dyImage), ax, ay, dx, dy)) + ' ' + (dyImage);


    this.titleAngle = 'rotate(' + titleAngle + ')'
    this.titleX = ax + 10
    this.titleY = ay + 40

    this.imageHeight = this.height / 2
    this.imageWidth = this.width / 2

  }

  private getAFunc(y: number, x1: number, y1: number, x2: number, y2: number) {

    if ((x2 - x1) == 0) {
      return y;
    }

    const slope = (y2 - y1) / (x2 - x1)

    const b = y2 - (slope * x2)

    return (y - b) / slope;
  }
}
