import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";
import moment from 'moment'

class TopChart extends React.Component{


render(){
  console.log('TopChart',this.props.hashList);
  const scale = {
    value:{
      min: 0, // 定义数值范围的最小值
    }
  };
  return(<div>
    <Chart height={180} padding={0} width={756} data={this.props.hashList} forceFit={true} scale={scale}>
      {/*<Tooltip crosshairs />*/}
      {/*<Legend />*/}
      <Geom type="area" position="day*value"
            color="l (0)  0:rgba(222, 86, 170, 60) 1:rgba(130, 28, 201, 62)"
            shape="smooth"
            opacity={1}/>
      <Geom type="line" position="day*value"
            color="l (0) 0:rgba(255, 149, 215, 47) 1:rgba(186, 112, 255, 49)"
            shape="smooth" />
    </Chart>

  </div>)
}

}

export default TopChart;
