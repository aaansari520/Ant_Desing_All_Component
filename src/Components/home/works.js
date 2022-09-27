import React, { useState } from "react";
import { Button, Modal } from "antd";

const AppWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How It Works?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus, eius corrupti magnam sapiente quas laboriosam id ex
            totam possimus autem dolore dolores. Optio, odit ratione. Nostrum
            velit ipsum aut aliquam.
          </p>
        </div>
        <div className="contentHolder">
          <Button onClick={showModal}>
            <i className="fas fa-play"></i>
          </Button>
        </div>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <iFrame
            src="https://youtu.be/o1ED4FQjDGk"
            // frameborder="0"
            width="100%"
            height="350"
          ></iFrame>
        </Modal>
      </div>
    </div>
  );
};

export default AppWorks;
