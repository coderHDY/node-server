## 上传文件api
```text
api: localhost:8070/api/uploadFile   
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
  <div><img src="" alt="" id="img"></div>
  <script>
      uploade.addEventListener('click', async () => {
          if (fileInput.files.length < 0) console.wran('请选择文件再上传！');
          const formData = new FormData();
          formData.append("file", fileInput.files[0]);
          const { filename } = await fetch('http://127.0.0.1:8070/api/uploadFile', {
              method: "POST",
              body: formData,
          }).then(res => res.json());
          console.log(filename);
          img.setAttribute("src", `http://127.0.0.1:8070/files/${filename}`);
      })
  </script>

</body>
```
## 更新流程
1. 推代码
2. ssh去服务器
    ```shell
    lsof -i:8070
    kill -9 xxxx
    ```
3. 宝塔重启服务
---
* 新
```shell
pm2 restart all
```