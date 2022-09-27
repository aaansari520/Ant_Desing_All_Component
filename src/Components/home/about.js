import React from "react";
import { Col, Row } from "antd";

const AppAbout = () => {
  const items = [
    {
      key: "1",
      icon: <i className="fas fa-chart-pie"></i>,
      title: "High Performance",
      content:
        "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    },
    {
      key: "2",
      icon: <i className="fas fa-desktop"></i>,
      title: "Flat Design",
      content:
        "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    },
    {
      key: "3",
      icon: <i className="fas fa-database"></i>,
      title: "Simplified Workflow",
      content:
        "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    },
  ];

  return (
    <div className="block aboutBlock" style={{ backgroundColor: "#edfaf4" }}>
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            at, quisquam est excepturi necessitatibus repellendus!
          </p>
        </div>
        <div className="contentHolder">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae iste
            minima sed amet nesciunt commodi exercitationem rem dolorem facilis
            unde. Necessitatibus ex dolorem quibusdam, dolore nisi porro a
            voluptatem in? Eveniet, aliquid placeat. Est animi, minima id quod
            qui adipisci culpa nemo quos dicta. Doloribus earum voluptatum
            voluptatibus? Ipsam illo perspiciatis enim voluptatem corrupti
            quaerat! Cum iusto incidunt debitis ea.
          </p>
        </div>
        <Row
          gutter={[16, 16]}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {items.map((item) => {
            return (
              <Col span={8} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default AppAbout;
