import React from 'react';
import { Card } from 'antd';
import Map from 'pigeon-maps';


class BinMap extends React.Component {

    render() {
        return (
          <Card style={{margin: "1rem", filter: "grayscale(1)"}}>
             <Map center={[33.6404952, -117.8442962]} zoom={14} height={250} style={{width: "100%"}}></Map>
          </Card>
        );
      }
}

export default BinMap;