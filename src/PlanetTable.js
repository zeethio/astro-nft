import React from 'react';
import styled from 'styled-components';

const PlanetRow = (props) => {
    return (
         <tr width="100%" >
             <td>{props.planet.name}</td>
             <td>{props.planet.sign}-{props.planet.angle}</td>
         </tr>
    )
}
class PlanetTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const data =[{"name":"Sun", "sign": "Aries", "angle": 10,},{"name":"Moon", "sign": "Cancer", "angle": 15}];
        console.log(this.props.planetData);
        return (<table width="100%">
            {data.map(function(d, idx){
                return  <PlanetRow planet={d} />
            })}
        </table>);
    }
}


export {
    PlanetTable,
}