// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {backend} from '../models';

export function AddPeer(arg1:backend.PeerInfo):Promise<void>;

export function GetAllPeers():Promise<Array<backend.PeerInfo>>;

export function GetPeer(arg1:string):Promise<backend.PeerInfo|boolean>;

export function RemovePeer(arg1:string):Promise<void>;

export function UpdatePeer(arg1:string,arg2:backend.PeerInfo):Promise<void>;