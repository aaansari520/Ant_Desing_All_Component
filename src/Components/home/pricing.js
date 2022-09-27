import { Button, Card, Col, List } from "antd";
import React from "react";

const AppPricing = () => {
  const data = [
    {
      title: "Basic",
      content: [
        {
          price: "£29.99",
          space: "1 GB of space",
          user: "1 user",
          support: "24/7 support",
          backup: "Safe, reliable backup",
          access: "Access from anywhere",
        },
      ],
    },
    {
      title: "Premium",
      content: [
        {
          price: "£59.99",
          space: "5 GB of space",
          user: "5 users",
          support: "24/7 support",
          backup: "Safe, reliable backup",
          access: "Access from anywhere",
        },
      ],
    },
    {
      title: "Enterprise",
      content: [
        {
          price: "£99.99",
          space: "Unlimited space",
          user: "15 users",
          support: "24/7 support",
          backup: "Safe, reliable backup",
          access: "Access from anywhere",
        },
      ],
    },
  ];
  return (
    <div
      className="block pricingBlock bgGrey"
      style={{
        backgroundColor: "#d0dbd6",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div className="container-fluid">
        <div className="titleHolder">
          <h3>Choose Your Plan</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quam molestias facilis libero ex repudiandae?
          </p>
        </div>
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              style={{
                margin: "auto",
                width: "100%",
              }}
            >
              <Card title={item.title}>
                <p>{item.content[0].price}</p>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <Button
                  style={{
                    margin: "auto",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  type="primary"
                >
                  Get Started
                </Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default AppPricing;
