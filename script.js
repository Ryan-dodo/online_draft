// 等待页面 DOM 加载完成后再执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    const btn = document.getElementById('my-btn');
    const title = document.getElementById('main-title');

    // 为按钮添加点击事件
    btn.addEventListener('click', function() {
        // title.textContent = 'JS 链接成功！';
        title.style.color = '#28a745';
        alert('JavaScript 已经成功运行！');
    });
});