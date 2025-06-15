import React from 'react';
import GenericContext from './GenericContext';
import logo from '../includes/logo.svg';

function GenericHeader() {
  return (
    <GenericContext.Consumer>
      {data => (
        <div className="head">
          <div className="header">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="survey-title">
            <p>{data.title}</p>
          </div>
          <div className="description-text">
            {data.description && data.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="messageBox">
            <p className="message-info">{data.instruction}</p>
          </div>
        </div>
      )}
    </GenericContext.Consumer>
  );
}

export default GenericHeader;
