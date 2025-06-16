import React from 'react';

const GradientButton = ({ text, phoneNumber = '', style = {} }) => {
  return (
    <>
      <style>
        {`
          .gradient-button {
            display: inline-block;
            background: linear-gradient(135deg, #006400, #228B22); /* Bottle green gradient */
            border: none;
            color: white;
            padding: 14px 28px;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 9999px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 6px 20px rgba(0, 100, 0, 0.2);
            position: relative;
            overflow: hidden;
            z-index: 1;
            text-decoration: none;
            text-align: center;
          }

          .gradient-button::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.2);
            transition: left 0.5s ease;
            z-index: 0;
          }

          .gradient-button:hover::before {
            left: 100%;
          }

          .gradient-button:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 8px 24px rgba(0, 100, 0, 0.3);
          }

          .gradient-button:focus {
            outline: 2px solid #32CD32;
            outline-offset: 2px;
          }
        `}
      </style>
      <a
        href={`tel:${+919158844821}`}
        className="gradient-button"
        style={style}
      >
        {text}
      </a>
    </>
  );
};

export default GradientButton;
