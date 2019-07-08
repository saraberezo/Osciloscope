import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { isRightSide } from 'ionic-angular/umd/util/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  angle:any = {lower: 0, upper: 2};
  value_A:any = {lower: 0, upper: 200};
  value_B:any = {lower: 0, upper: 200};
  value_a:any = {lower: 0, upper: 20};
  value_b:any = {lower: 0, upper: 20};

  phi = 0;
  x = 0; nx = 0;
  y = 0; ny = 0;
  a = 0; b = 0;
  A = 0; B = 0;
  t = 0;

  PI = 3.14159265;
  speed = 0.005;
  canvas; ctx; image;
  timer;
  WIDTH; HEIGHT;

  constructor(public navCtrl: NavController) {
    this.angle = 0;
    this.value_A = 0;
    this.value_B = 0;
    this.value_a = 0;
    this.value_b = 0;
  }

  phi_angle(ON) {

    this.canvas = <HTMLCanvasElement> document.getElementById("canvas");

    this.ctx = this.canvas.getContext("2d");
    this.image = document.getElementById("img");

    //Calculate width and height od the screen
    this.WIDTH = this.canvas.width;
    this.HEIGHT = this.canvas.height;

    this.clear();
    clearTimeout(this.timer);

    // The scroll has values from 0 to 20 so we divide them by 10 to get the range [0, 2]
    this.phi = this.angle/10;
    this.A = this.value_A;
    this.B = this.value_B;
    this.a = this.value_a;
    this.b = this.value_b;
  
    if (ON) {
      this.t = 0;
      // Calculate the first point to start
      this.nx = this.A * Math.sin(this.a * this.t);
      this.ny = this.B * Math.sin(this.b * this.t + this.angle);

      // Clear the screen each time we change the angle
      this.clear();
      this.lissajous();
    }
  }

  lissajous(){

    // Timer to calculate the next point
    this.timer = setTimeout(() => {
      this.lissajous();
    }, 5);

    // LISSAJOUS CURVES
    this.x = this.A * Math.sin(this.a * this.t);
    this.y = this.B * Math.sin(this.b * this.t + this.angle);

    // Draw the point
    this.draw();

    // Actual point is now the previous one
    this.nx = this.x;
    this.ny = this.y;

    // Increment time
    this.t += this.speed;

  }

  draw() {

    this.ctx.beginPath();
	
    // Last point
    this.ctx.moveTo(this.nx + this.WIDTH/2, this.ny + this.HEIGHT/2);
	
    // Next point
    this.ctx.lineTo(this.x + this.WIDTH/2, this.y + this.HEIGHT/2);
    this.ctx.lineWidth = 5;
    this.ctx.stroke();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
  }

}
