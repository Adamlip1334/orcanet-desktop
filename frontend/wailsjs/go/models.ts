export namespace backend {
	
	export class Activity {
	    id: number;
	    name: string;
	    size: string;
	    hash: string;
	    status: string;
	    showDropdown: boolean;
	    peers: number;
	
	    static createFrom(source: any = {}) {
	        return new Activity(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.size = source["size"];
	        this.hash = source["hash"];
	        this.status = source["status"];
	        this.showDropdown = source["showDropdown"];
	        this.peers = source["peers"];
	    }
	}
	export class PeerInfo {
	    location: string;
	    latency: string;
	    peerID: string;
	    connection: string;
	    openStreams: string;
	    flagUrl: string;
	
	    static createFrom(source: any = {}) {
	        return new PeerInfo(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.location = source["location"];
	        this.latency = source["latency"];
	        this.peerID = source["peerID"];
	        this.connection = source["connection"];
	        this.openStreams = source["openStreams"];
	        this.flagUrl = source["flagUrl"];
	    }
	}

}

