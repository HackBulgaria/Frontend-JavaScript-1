# File Upload with HTML 5

Implement a simple web application that can handle file uploads with the new HTML5 drag & drop API (Example - http://html5demos.com/dnd-upload).

The app should support tracking progress (Implement it with `Q`) of the uploaded file.

After the file has been uploaded, the app should notify the user for that!

## The Server

In `server` folder, there is a simple NodeJS application that listens for `POST /fileUpload` and saves the file in `server/tmp` folder.

The server is very simple and will respond with JSON if the upload is successful!

If you want to dry-test the server with cURL, this is a helpful link - https://ariejan.net/2010/06/07/uploading-files-with-curl/

### tmp folder in server

The server needs a local `tmp` folder in order to work with the file upload.

If you look in the `server/.gitignore` file, you will see `tmp/` there, so you need to create a local copy for you:

```
mkdir tmp
```

## HTML 5 API for Drag & Drop

Your first task is to create a web app, that uses the Drag & Drop API for File Uploads - http://html5doctor.com/drag-and-drop-to-server/

__* Use promises to make all XHR calls and to track file upload progress!__
__* Use RequireJS to make it more modular!__

When you are appending things to `FormData` object, be sure to place it under `'filedata'` key, because the server is looking for that!

## Refactor the server

Since promises are a JavaScript-wide abstraction, that is not only browser-specific, you are going to refactor the NodeJS server!

Use the Q's version for Node - https://github.com/kriskowal/q#adapting-node

Your tasks are:

* Reimplement `fs.rename` so it is using promises
* After the file has been successfuly renamed, remove the old file that has been created by `formidable`. Use [`fs.remove` for that](https://github.com/jprichardson/node-fs-extra#removedir-callback)

Make sure that `remove` is happening after `rename`, both of which are async operations. Use promises to make the code look nice!
