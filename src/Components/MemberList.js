import React, { useState } from "react";
import memberStore from "../Stores/memberStore";
import MemberItem from "./MemberItem";
import { Button } from "react-bootstrap";
import AddMemeberModal from "./AddMemeberModal";
import { observer } from "mobx-react";

const MemberList = () => {
  const members = memberStore.members.map((member) => (
    <MemberItem key={member.id} member={member} />
  ));
  const [isShowing, setIsShowing] = useState(false);

  const handleClose = () => setIsShowing(false);
  const handleShow = () => setIsShowing(true);

  return (
    <div>
      <Button variant="primary" size="sm" onClick={handleShow}>
        + New
      </Button>
      <AddMemeberModal isShowing={isShowing} handleClose={handleClose} />
      <div className="cardsContainer">{members}</div>;
    </div>
  );
};

export default observer(MemberList);
