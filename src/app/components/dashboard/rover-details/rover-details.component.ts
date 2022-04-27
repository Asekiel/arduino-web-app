import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebasedataService } from 'src/app/shared/firebasedata.service';

import * as Highcharts from 'highcharts';
import { Gauge } from '../../../../assets/gauge.js'
import { Observable } from 'rxjs';
import { AngularFireObject } from '@angular/fire/compat/database';
@Component({
  selector: 'app-rover-details',
  templateUrl: './rover-details.component.html',
  styleUrls: ['./rover-details.component.scss']
})
export class RoverDetailsComponent implements OnInit {

  airQuality : any;
  chartOptions : {};

  messages : any;

  itemRef: AngularFireObject<any>;
  item: Observable<any>;

  @ViewChild('air', {static : false}) airChart;

  constructor(public fbService : FirebasedataService) { }



  ngOnInit(): void {
    // this.fbService.getObjects();
    // this.getRoverDetails();

    this.fbService.getAirQuality().on('value', (snapshot) => {
      console.log(snapshot.val());
      this.generateGauge(snapshot.val());
    })

 
  }
    
  getRoverDetails() {
    const rover = this.fbService.getObjects();
  }

  generateGauge(air : any) {
      this.airQuality = air;
        var opts = {
        angle : 0,
        lineWidth: 0.45,
        radiusScale : 1,
        pointer : {
          length : 0.6,
          strokeWidth : 0.035,
          color: '#000000'
        },
        limitMax : 1000,
        limitMin : 0,
        colorStart : '#C4C4C4',
        colorStop : '#C4C4C4',
        strokeColor : '#E0E0E0',
        generateGradient : true,
        highDpiSupport : true,
        // renderTicks : {
        //   divisions: 16,
        //   divWidth: 1,
        //   divLength : 0.4,
        //   divColor: '#FF0000',
        //   subDivisions : 5,
        //   subLength : 0.3,
        //   subWidth: 0.6,
        //   subColor: '#000000'
        // },
        staticLabels : {
          font: '12px sans-serif',
          labels : [0, 100, 200, 300, 400, 500, 600, 700, 800],
          color: '#FFFFFFF',
          fractionDigits : 0
        }
      };
      var target = document.getElementById('canvas-preview'); // your canvas element
      var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
      gauge.setMinValue(0);
      gauge.maxValue = 800;
      gauge.animationSpeed =32;
      gauge.set(air);


      // var target = document.getElementById('canvas-preview'); // your canvas element
      // var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
      // gauge.maxValue = 200000; // set max gauge value
      // gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
      // gauge.animationSpeed = 32; // set animation speed (32 is default value)
      // var val = 18000;
      // gauge.set(air); // set actual value
  }



}
