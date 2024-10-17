import React from "react";

function Account({ isOpen, toggleOffcanvas }) {
  return (
    <>
      {/* Offcanvas Section */}
      <div
        className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`} // Conditionally add the "show" class
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ visibility: isOpen ? "visible" : "hidden" }} // Control visibility based on state
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Account Details
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={toggleOffcanvas} // Close offcanvas when button is clicked
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column justify-content-between">
          
          {/* Avatar Section */}
          <div className="d-flex flex-column align-items-center mb-3">
            <img
              src="AvatarAcc.jpeg" // Replace with the actual avatar URL
              alt="User Avatar"
              className="rounded-circle"
              style={{ width: "150px", height: "150px", objectFit: "cover"}} // Larger avatar size
            />
            <div className="text-center mt-3">
              <h5>Dummy name</h5> 
              <div className="text-muted">Dummy@example.com</div>
              <div className="text-muted">+91 99898 799890</div>
            </div>
          </div>

          <div className="text-center m-3" style={{ textAlign: "start" }}>
            <p className="mb-1" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, eligendi possimus? Accusantium, ad reiciendis officiis temporibus nesciunt animi architecto dolorem porro dignissimos! Libero natus consectetur facere iusto quos fuga. Totam.</p>
          </div>

          {/* Logout Button at Bottom */}
          <div className="text-center">
            <button 
              className="btn btn-danger w-100" 
              onClick={() => console.log("Logout clicked!")}> {/* Replace with logout logic */}
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
