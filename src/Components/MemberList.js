import React from 'react';
import memberStore from '../Stores/memberStore';
import MemberItem from './MemberItem';

const MemberList = () => {

    const members = memberStore.members.map((member)=> 
        <MemberItem key={member.id} member={member}/> );

  return (
        <div>
            {members}
        </div>
    );
};

export default MemberList;
