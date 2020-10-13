var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react').default;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class LineChart extends Component {
    render() {
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            title: {
                text: "Your performance Graph",
                fontColor: '#282C34',
                fontWeight: 'bold',
                fontSize: 18
            },
            axisY: {
                title: "Overall performace score",
                suffix: "%",
                lineThickness: 2
            },
            axisX: {
                title: "Interview Number",
                interval: 2,
                lineThickness: 2
            },
            data: [{
                type: "line",
                markerColor: '#282C34',
                lineColor: '#32C766',
                toolTipContent: "Interview Number {x}: {y}%",
                dataPoints: [
                    { x: 1, y: 64 },
                    { x: 2, y: 61 },
                    { x: 3, y: 64 },
                    { x: 4, y: 62 },
                    { x: 5, y: 80 },
                    { x: 6, y: 60 },
                    { x: 7, y: 58 },
                    { x: 8, y: 59 },
                    { x: 9, y: 99 },
                    { x: 10, y: 54 },
                    { x: 11, y: 61 },
                    { x: 12, y: 60 },
                    { x: 13, y: 55 },
                    { x: 14, y: 60 },
                    { x: 15, y: 56 },
                    { x: 16, y: 60 },
                    { x: 17, y: 59.5 },
                    { x: 18, y: 63 },
                    { x: 19, y: 58 },
                    { x: 20, y: 54 },
                    { x: 21, y: 59 },
                    { x: 22, y: 64 },
                    { x: 23, y: 59 }
                ]
            }]
        }
        return (
            <div>
                <CanvasJSChart options={options} />
            </div>
        );
    }
}

export default LineChart;
