import React from 'react';
import './barchart.css';

const BarGroup = (props) => {
    let barPadding = 10;
    let barColour = '#32C766';
    let widthScale = d => d * 10;

    let width = widthScale(props.d.value);
    let yMid = props.barHeight * 0.5;

    return (
        <g className="bar-group">
            <text className="name-label" x="-150" y={yMid} alignmentBaseline='middle' >{props.d.name}</text> <span className='horizontal-space'></span>
            {width != 0 ? (<rect y={barPadding * 0.5} width='1000' height={props.barHeight - barPadding} fill='#393939' />) :
                (<rect y={barPadding * 0.5} width='0' height={props.barHeight - barPadding} fill='#333fff' />)}
            <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
            <text className="value-label" x={width - 10} y={yMid} alignmentBaseline='middle' >{props.d.value}</text>
        </g>);
}

class BarChart extends React.Component {
    state = {
        data: [
            { name: 'Concentration', value: 80 },
            { name: 'Clarity', value: 40 },
            { name: 'Expression', value: 35 },
            { name: 'Posture', value: 60 },
            { name: 'Focus', value: 55 },
            { name: 'Understanding', value: 40 },
        ]
    }

    render() {
        let barHeight = 50
        let overall = 0;
        this.state.data.forEach(element => {
            overall += element.value;
        });
        overall = overall / this.state.data.length;
        this.state.data.push({ name: '', value: 0 });
        this.state.data.push({ name: 'Overall', value: overall.toFixed(2) });

        let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
            <BarGroup d={d} barHeight={barHeight} />
        </g>)

        return <svg width='auto' height="500" >
            <g className="container">
                <g className="chart" transform="translate(150,30)">
                    {barGroups}
                </g>
            </g>
        </svg>
    }
}

export default BarChart;