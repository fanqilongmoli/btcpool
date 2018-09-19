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
    const data = [
      {
        day: "8-11",
        value: 1
      },
      {
        day: "8-12",
        value: 21
      },
      {
        day: "8-13",
        value: 21
      }, {
        day: "8-14",
        value: 21
      }, {
        day: "8-15",
        value: 31
      }, {
        day: "8-16",
        value: 21
      }, {
        day: "8-17",
        value: 21
      }, {
        day: "8-18",
        value: 21
      },
      {
        day: "8-19",
        value: 1.11
      },{
        day: "8-21",
        value: 1
      },
      {
        day: "8-22",
        value: 21
      },
      {
        day: "8-23",
        value: 21
      }, {
        day: "8-24",
        value: 21
      }, {
        day: "8-25",
        value: 31
      }, {
        day: "8-26",
        value: 21
      }, {
        day: "8-27",
        value: 21
      }, {
        day: "8-28",
        value: 21
      },
      {
        day: "8-29",
        value: 1.11
      },
      {
        day: "8-33",
        value: 21
      }, {
        day: "8-34",
        value: 21
      }, {
        day: "8-35",
        value: 31
      }, {
        day: "8-36",
        value: 21
      }, {
        day: "8-37",
        value: 21
      }, {
        day: "8-38",
        value: 21
      },
      {
        day: "8-39",
        value: 1.11
      },
      {
        day: "8-43",
        value: 21
      }, {
        day: "8-44",
        value: 21
      }, {
        day: "8-45",
        value: 31
      }, {
        day: "8-46",
        value: 21
      }, {
        day: "8-47",
        value: 21
      }, {
        day: "8-48",
        value: 21
      },
      {
        day: "8-49",
        value: 1.11
      }

    ];


    return (
      <div>
        <Chart height={400} data={data} forceFit>
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
