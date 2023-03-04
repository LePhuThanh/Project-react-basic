//B1:code xong git add . để add vào stage area //git status để xem trạng thái code hiện tại ở nhánh nào..
//Lân đầu đẩy code lên github thì ko cần commit
//B2: git remote add origin https://github.com/LePhuThanh/react-basic.git // giúp link cái đường dẫn ở repos trên github về local máy tính
//B3: git push origin master để đẩy lên github
//Code hiện tại đã đẩy lên github, h code thêm nhiều nữa muốn update lên thì?
//B4: git add .
//B5: git commit -m 'update code' //Để thông báo mình cật nhật code
//B6: Sau đó đẩy lên git push origin master
import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
