import image1 from "../../assets/images/modern-design.jpg";
import image2 from "../../assets/images/clean-design.jpg";
import image3 from "../../assets/images/great-support.jpg";
import image4 from "../../assets/images/easy-customise.jpg";
import image5 from "../../assets/images/unlimited-features.jpg";
import image6 from "../../assets/images/advanced-option.jpg";
import { Col, Row } from "antd";
import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const AppFeatures = () => {
  return (
    <div
      className="block featureBlock bgGrey"
      style={{ backgroundColor: "#d0dbd6" }}
    >
      <div className="container-fluid">
        <div className="titleHolder">
          <h3>Key Features & Benefits</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            repellat, ullam dicta ad in nihil.
          </p>
        </div>
        <Row
          gutter={[16, 16]}
          style={{
            margin: "auto",
            width: "100%",

            justifyContent: "space-between",
          }}
        >
          <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{ width: "calc(100% - 40px)" }}
              cover={<img alt="example" src={image1} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <Card
              hoverable
              style={{ width: "calc(100% - 40px)" }}
              cover={<img alt="example" src={image2} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <Card
              hoverable
              style={{ width: "calc(100% - 40px)" }}
              cover={<img alt="example" src={image3} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <Card
              hoverable
              style={{ width: "calc(100% - 40px)" }}
              cover={<img alt="example" src={image4} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <Card
              hoverable
              style={{ width: "calc(100% - 40px)" }}
              cover={<img alt="example" src={image5} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <Card
              hoverable
              style={{ width: "calc(100% - 40px)" }}
              cover={<img alt="example" src={image6} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AppFeatures;
