import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropDownProfile = () => {
    return (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            <span><i class="ri-account-circle-line"></i></span>
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">View Account</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Signout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
}

export default DropDownProfile;
