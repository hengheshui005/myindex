// 图片灯箱效果 
document.querySelectorAll('.gallery  img').forEach(img => {
    img.onclick  = () => {
        const overlay = document.createElement('div'); 
        overlay.className  = 'lightbox';
        overlay.innerHTML  = `<img src="${img.src}"  alt="放大图片">`;
        document.body.appendChild(overlay); 
    }
});
 
// 表单提交验证 
document.getElementById('contact-form').addEventListener('submit',  e => {
    e.preventDefault(); 
    alert('表单提交成功！');
});