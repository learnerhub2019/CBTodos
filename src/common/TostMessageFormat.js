function ToastMessageFormat(message) {
  this.message = message;
}

ToastMessageFormat.prototype.isACtive = false;
ToastMessageFormat.prototype.isLoading = false;
ToastMessageFormat.prototype.isSuccess = false;
ToastMessageFormat.prototype.isFailed = false;

ToastMessageFormat.setIsActive = (status) => {
  this.isACtive = status;
};

export default ToastMessageFormat;
