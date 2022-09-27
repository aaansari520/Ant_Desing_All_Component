import React from "react";
import { Button, Collapse } from "antd";

const { Panel } = Collapse;

const AppFaq = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h3>Frequently Asked Questions?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quam molestias facilis libero ex repudiandae?
          </p>
        </div>

        <Collapse
          // defaultActiveKey={["1"]}
          style={{ width: "50%", margin: "auto" }}
        >
          <Panel
            style={{ backgroundColor: "pink" }}
            header="This is panel header 1"
            key="1"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            style={{ backgroundColor: "pink" }}
            header="This is panel header 2"
            key="2"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            style={{ backgroundColor: "pink", color: "pink" }}
            header="This is panel header 3"
            key="3"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        <div className="quickSupport" style={{ marginTop: "20px" }}>
          <div className="titleHolder">
            <h3>Want Quick Support</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              velit veritatis delectus, accusantium mollitia vitae?
            </p>
          </div>
          <Button type="primary">
            <i className="fas fa-envelope"></i> Email Your Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppFaq;
