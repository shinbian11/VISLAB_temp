import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import * as d3 from 'd3';
import { arc, color } from 'd3';
import { bindCallback } from 'rxjs';

interface ILayoutInfo {
  width : number,
  height : number,
  outerRadius : number,
  innerRadius : number,
  cornerRadius : number
}

interface IData {
  idx : string;
  kind : string;
  fre : number;
  decrease : number;
  increase : number;
  nochange : number;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {
  //a : number[]=[];
  layout: ILayoutInfo;
  @ViewChild('rootSvg') svgRoot!: ElementRef;

  constructor() {
    this.layout = {
      width: 200, 
      height: 200, 
      outerRadius: 170,
      innerRadius : 0,
      cornerRadius : 15
    };
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    //elect2 data (코로나 이후 국민의 일상생활 변화 (감소 정도)) 를 가지고 pie chart 를 만들어 봄.
    d3.csv('../../../assets/data/elect2.csv').then((d: any) => {
      d.decrease = +d.decrease;
      d.idx = +d.idx;
      return d;
    }).then((data: IData[]) => {
      this.render(data);
    });

  }

  render(data: IData[]): void {

    //this.in_data : decrease 데이터들만 필터링하여 정리한 data
    //data.forEach(d=>this.in_data[this.i++] = d.decrease);
    
    //this.in_data.forEach(a=>console.log(a)); //console에 데이터들의 decrease한 부분들을 출력하는 부분

    // this.a = data.map(d=>d.decrease);
    // this.a.forEach(d=>console.log('아 제발!!'+ d));

    const arcChart = d3.pie()(data.map(d=>d.decrease)); //map을 이용하여 decrease 데이터만 filtering!
    
    //pie chart의 안쪽 반지름/바깥쪽 반지름 에 해당하는 값을 준다. innerRadius 가 0이면 가운데가 뚫려 있지 않은 원 모양이 된다.
    const arcR = d3.arc()
      .innerRadius(0) //innerRadius가 0이면 가운데가 뚫려 있지 않은 pie chart가 된다. 가운데가 뚫려 있으면 donut chart이다.
      .outerRadius(170)
      .cornerRadius(15)
   
    //chart의 width, height, background 색깔에 해당하는 값을 준다. #f0dad5는 연한 분홍색 계열이다.
    const svg = d3.select("body").append("svg")
      .attr("width",this.layout.width)
      .attr("height", this.layout.height)
      .style("background-color","#f0dad5");
    
    //연한 분홍색 계열로 만들어진 layout에서 pie chart를 얼마만큼 이동시켜여 display 할 것인지에 대한 정보이다.
    //d3의 좌표계에서, 원점(0,0)은 왼쪽 상단이다. 
    //translate(0,0) 이라는 값은, pie chart의 정 중앙이 background의 왼쪽 상단에서 이동하지 않는다는 의미이므로, 
    //pie 의 오른쪽 하단 부분만 나오게 된다.
    //layout의 width의 절반만큼, height의 절반만큼 이동시킨다면, pie chart가 layout의 정중앙에 위치하므로,
    //비로소 완벽한 pie chart가 display 되게 된다. 
    const g = svg.append("g")
      .attr("transform", "translate("+this.layout.width/2+ "," + this.layout.height/2+ ")")
    
    const pie = g.selectAll("path")
      .data(arcChart)
      .enter()
      .append("path")
      //.style("fill", function(d : any, i : any){ return d3.color("hsl(10, 40%, " + d.value + "%)");} as any) //pie 조각의 색깔을 지정한다.
      .style("fill", (d, i) => (d3.color("hsl(10, 40%, " + d.value + "%)") as any)) //pie 조각의 색깔을 지정한다. (화살표 함수 이용)
      .attr("d", arcR as any)


  }
}
