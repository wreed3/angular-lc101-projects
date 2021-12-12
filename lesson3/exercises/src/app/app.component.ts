import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffStatusCheck: boolean = true;


  handleTakeOff(){
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if(result){
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffStatusCheck = false;

    }
  }

handleLand(rocketImage){
  window.alert('The shuttle is landing. Landing gear engaged.');
  this.color = 'green'
  this.height = 0;
  this.width = 0;
  this.message = 'The shuttle has landed';
  rocketImage.style.bottom = '0px';
  rocketImage.style.left = '0px';
  this.takeOffStatusCheck = true;
}

handleAbortMission(rocketImage){
  let abort = window.confirm('Do you really want to abort this mission?')
  if(abort){
    this.color ='red'
    this.height = 0;
    this.width = 0;
    this.message = 'Mission aborted'
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
    this.takeOffStatusCheck = true;
  }
}

limits(width, height){
  if(width > 470000 || width < -20000 ||height < 0 || height > 340000){
  this.color = 'orange'
  }else {
  this.color = 'blue'
  }
}

moveRocket(rocketImage, direction){
  if(direction === 'right'){
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width += 10000;
  }else if(direction === 'left'){
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width -= 10000;
  }else if(direction === 'up'){
    let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height += 10000
  }else if(direction === 'down'){
    let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height -= 10000
  }
  this.limits(this.width, this.height)
}








}
