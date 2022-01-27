import members from "../Data/membersData";
import { makeAutoObservable} from 'mobx';

class MemberStore {
    members = members;
    constructor(){
        makeAutoObservable(this);
    }

}

const memberStore = new MemberStore();
export default memberStore;