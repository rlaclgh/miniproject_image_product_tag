import React from "react";

interface HeaderProps {
  renderLeft?: () => React.ReactNode;
  renderCenter: () => React.ReactNode;
  renderRight?: () => React.ReactNode;
}
const Header = (props: HeaderProps) => {
  const { renderLeft, renderCenter, renderRight } = props;

  return (
    <div className="border-solid border-black h-12 flex justify-center align-middle shadow items-center">
      {/* left */}
      <div className="w-20 flex justify-start pl-2">
        {renderLeft && renderLeft()}
      </div>

      {/* center */}
      <div className="flex-1 justify-center items-center flex">
        {renderCenter()}
      </div>

      {/* right */}
      <div className="w-20 flex justify-end pr-2">
        {renderRight && renderRight()}
      </div>
    </div>
  );
};

export default Header;
