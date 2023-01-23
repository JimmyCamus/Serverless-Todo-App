import { ReactNode } from "react";

const CreateTodoContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="card w-full bg-[#fafafa] mt-8 shadow-lg">
        <div className="card-body">
          <div className="card-title justify-center">
            <div className="tabs">
              <button className="tab tab-active">Tab 1</button>
              <button className="tab">Tab 2</button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default CreateTodoContainer;
