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

class Groupedcolumn extends React.Component {
  render() {

    return (
      <div>
        <Chart height={400} data={this.props.data} forceFit>
          <Axis name="day"/>
          <Axis name="value" label={{
            offset: 12,
            formatter(text, item, index) {
              return text + "btc";
            },
          }}/>
          <Tooltip
            crosshairs={{
              type: 'cross',
              style: {
                lineWidth: 2,
                stroke: "#30344d",
              }
            }}/>
          <Geom
            type="interval"
            position="day*value" //x * y
            tooltip={['day*value', (day, value) => {
              return {
                //自定义 tooltip 上显示的 title 显示内容等。
                name: '收入',
                title: '时间:' + day,
                value: value + 'btc'
              };
            }]}
          />
        </Chart>
      </div>
    );
  }
}

export default Groupedcolumn;
