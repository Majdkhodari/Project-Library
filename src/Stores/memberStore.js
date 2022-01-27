import members from "../Data/membersData";
import { makeAutoObservable } from "mobx";

class MemberStore {
  members = members;
  constructor() {
    makeAutoObservable(this);
  }

  addMember(member) {
    member.id = this.members[this.members.length - 1].id + 1;
    member.currentlyBorrowedBooks = [];
    member.slug =
      member.firstName.toLowerCase() + "-" + member.lastName.toLowerCase();
    this.members.push(member);
  }
}

const memberStore = new MemberStore();
export default memberStore;
