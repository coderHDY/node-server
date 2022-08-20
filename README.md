## 上传文件api
```text
api: localhost:8888/uploadFile   
method: post  
body: {  
    type: formData  
    filename: "file"  
}  
```
## 开启服务器
```js
npm run server
```
## 前端测试代码
```html
<body>
    <input type="file" id="fileInput" />
    <button id="uploade">上传</button>

    <script>
        const server = "http://127.0.0.1:8888";
        uploade.addEventListener('click', () => {
            if (fileInput.files.length < 0) console.wran('请选择文件再上传！');
            const formData = new FormData();
            formData.append("file", fileInput.files[0]);
            fetch(`${server}/uploadFile`, {
                method: "POST",
                body: formData,
            }).then(res => res.json()).then(res => addFile(res));
        });

        const addFile = (file) => {
            const { filename, mimetype, originalname } = file;
            const type = mimetype.match(/[a-zA-Z0-9]+(?=\/)/g)[0];
            const el = document.createElement(type === "video" ? "video" : "img");
            el.src = `${server}/file/${filename}`;
            if (type === "video") {
                el.setAttribute("controls", true);
                el.setAttribute("autoplay", true);
            }
            document.body.append(el);
        };
    </script>
</body>
```