export default class MyUploadAdapter {
  constructor(loader) {
    // The file loader instance to use during the upload.
    this.loader = loader;
  }

  // Starts the upload process.
  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          this._initRequest();
          this._initListeners(resolve, reject, file);
          this._sendRequest(file);
        })
    );
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Initializes the XMLHttpRequest object using the URL passed to the constructor.
  _initRequest() {
	  // 取得 token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)AdminToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    const xhr = (this.xhr = new XMLHttpRequest());

    // Use the specified upload URL.
    // 帶入上傳圖片的 API 路徑
    xhr.open(
      "POST",
      `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/upload`,
      true
    );
    
    // 設置 API 文件要求的表頭
    xhr.setRequestHeader("Authorization", token);
    xhr.responseType = "json";
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject, file) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = `Couldn't upload file: ${file.name}.`;

    xhr.addEventListener("error", () => reject(genericErrorText));
    xhr.addEventListener("abort", () => reject());
    xhr.addEventListener("load", () => {
      const response = xhr.response;

      if (!response || response.error) {
        return reject(
          response && response.error ? response.error.message : genericErrorText
        );
      }
			// API 回傳的結果，將網址部分取出來
      resolve({
        default: response.imageUrl,
      });
    });

    if (xhr.upload) {
      xhr.upload.addEventListener("progress", (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest(file) {
    const data = new FormData();

    data.append("file-to-upload", file);

    this.xhr.send(data);
  }
}