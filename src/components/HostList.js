import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

const HostList = ({ hosts }) => {
  return (
    <Card.Group itemsPerRow={6}>
      {hosts.map((host) => (
        <Host key={host.id} {...host} />
      ))}
    </Card.Group>
  );
};

// HostList.defaultProps = {
//   hosts: [],
// };

export default HostList;
