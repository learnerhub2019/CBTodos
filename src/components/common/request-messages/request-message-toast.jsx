import React from "react";
import { Spinner, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { utilsActionComplet } from "../../../modules/utils/utilsActions";

const RequestMessageToast = () => {
  const utilStates = useSelector((state) => state.utils);
  const dispatch = useDispatch();

  let themeColor = "";
  let bodyText = "Please wait";
  let themeTextColor = "";
  let title = "Loading...";

  let show = utilStates.isFetchRequest;

  if (utilStates.successMessage) {
    themeColor = "success";
    themeTextColor = "text-white";
    title = "Done";
    bodyText = utilStates.successMessage;
  } else if (utilStates.errorMessage) {
    themeColor = "danger";
    themeTextColor = "text-white";
    bodyText = utilStates.errorMessage;
    title = "Failed";
  }

  return (
    <Toast
      show={show}
      style={{
        position: "fixed",
        minHeight: "100px",
        minWidth: "300px",
        bottom: 20,
        right: 20
      }}
      onClose={() => dispatch(utilsActionComplet())}
      delay={3000}
      autohide={utilStates.autohide}
    >
      <Toast.Header className={`bg-${themeColor} ${themeTextColor}`}>
        {utilStates.isLoading && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            style={{
              marginRight: "10px"
            }}
          />
        )}

        <strong className="mr-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body className={`text-${themeColor}`}>{bodyText}</Toast.Body>
    </Toast>
    // </div>
  );
};

export default RequestMessageToast;
