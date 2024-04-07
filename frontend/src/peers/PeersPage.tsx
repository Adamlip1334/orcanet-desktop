import { useEffect, useState, useMemo } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Sphere,
    Graticule,
} from "react-simple-maps";
import MarkerDialog from './MarkerDialog';
import "./peers-page.css";
import { scaleLinear } from "d3-scale";
import sortBy from "lodash/sortBy";
import geoData from "./features.json";
import mapData  from "./data.json";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import fakeSeeds from "./fakeSeeds";
import MarkerPoints from './MarkerPoints';

import AddConnection from "./addConnection";

import {GetAllPeers,AddPeer} from "../../wailsjs/go/backend/PeerStorage";
import { FormEvent } from "react";
type MapData = {
  rank: number;
  country_code: number;
  country: string;
  city_code: number;
  city: string;
  lat: number;
  lng: number;
  population: number;
}
type Peer = {
  location: string;
  latency: string;
  peerID: string;
  connection: string;
  openStreams: string;
  flagUrl: string;
};

const RadialGradient = () => (
  <svg width="0" height="0">
    <defs>
      <pattern
        id="radialPattern"
        patternUnits="userSpaceOnUse"
        width="5"
        height="5"
      >
        <circle cx="5" cy="5" r="2" fill="gray" />
      </pattern>
    </defs>
  </svg>
);

const PeersPage = () => {
  const [data, setData] = useState<MapData[]>([]);
  const [maxValue, setMaxValue] = useState(0);

  const [peers, setPeers] = useState<Peer[]>([]);
  const [newPeer, setNewPeer] = useState<Peer>({
    location: '',
    latency: '',
    peerID: '',
    connection: '',
    openStreams: '',
    flagUrl: '',
  });
  

  useEffect(() => {
  try{
    const sortedCities = sortBy(mapData.data, (o: MapData) => -o.population);
      setMaxValue(sortedCities[0].population);
      setData(sortedCities);

      const fetchPeers = async () => {
        try {
          // This is a placeholder. Replace with your actual data fetching method
          const fetchedPeers: Peer[] = await GetAllPeers();
          setPeers(fetchedPeers);
        } catch (error) {
          console.error("Failed to fetch peers:", error);
        }
      };

      fetchPeers();
  } catch(err:any){
    console.log("err-", err);
  }
  }, []);

  const handleAddPeer = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await AddPeer(newPeer);
      // Optionally clear the newPeer state here if needed
      // Refresh the peers list
      const updatedPeers = await GetAllPeers();
      setPeers(updatedPeers);
    } catch (error) {
      console.error('Failed to add peer:', error);
    }
  };
  
  const popScale = useMemo(
    () => scaleLinear().domain([0, maxValue]).range([0, 24]),
    [maxValue]
  );

  return (
    <div className="p-2 pb-0 block w-auto overflow-y-scroll">
      <form onSubmit={handleAddPeer}>
        <input
          type="text"
          value={newPeer.location}
          onChange={(e) => setNewPeer({ ...newPeer, location: e.target.value })}
          placeholder="Location"
        />
        <input
          type="text"
          value={newPeer.latency}
          onChange={(e) => setNewPeer({ ...newPeer, latency: e.target.value })}
          placeholder="Latency"
        />
        <input
          type="text"
          value={newPeer.peerID}
          onChange={(e) => setNewPeer({ ...newPeer, peerID: e.target.value })}
          placeholder="PeerID"
        />
        <input
          type="text"
          value={newPeer.connection}
          onChange={(e) => setNewPeer({ ...newPeer, connection: e.target.value })}
          placeholder="Connection"
        />
         <input
          type="text"
          value={newPeer.openStreams}
          onChange={(e) => setNewPeer({ ...newPeer, openStreams: e.target.value })}
          placeholder="OpenStreams"
        />
         <input
          type="text"
          value={newPeer.flagUrl}
          onChange={(e) => setNewPeer({ ...newPeer, flagUrl: e.target.value })}
          placeholder="flagUrl"
        />
        {/* Add input fields for other peer attributes */}
        <button type="submit">Add Peer</button>
      </form>
      <div id="peers-page" className="container p-8 pt-0 pl-12 justify-self-center">
        <AddConnection/>
        <RadialGradient />
        <ComposableMap>
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} fill="transparent" id="sphere"/>
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
          <Geographies geography={geoData}>
            {({ geographies }:  {geographies: any[]}) => {
                return geographies.map((geo: any) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "url(#radialPattern)", // Apply the radial gradient as fill
                        stroke: "#FFF", // Add stroke if needed
                        strokeWidth: 0.5,
                      },
                      hover: {
                        fill: "#2a354d",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                ))
            }
              
            }
          </Geographies>

          {data.map(({ city_code, lng, lat, population }: MapData) => {
            return (
              <MarkerDialog
                key={city_code}
                lng={lng}
                lat={lat}
                city_code={city_code} 
                popScale={popScale}
                population={population}
              />
            );
          })}
        </ComposableMap>
        

       <h1 className="text-center text-3xl">900</h1>
       <h1 className="text-center font-bold text-gray-400 text-base">PEERS</h1>
        
        <MarkerPoints />

       <div className="mt-9 w-auto">
          <DataTable columns={columns} data={peers} />
       </div>

      </div>
    
    </div>
  );
};

export default PeersPage;