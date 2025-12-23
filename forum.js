document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.forum-section');

    // 标签切换功能
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有标签的活动状态
            tabs.forEach(t => t.classList.remove('active'));
            // 添加当前标签的活动状态
            this.classList.add('active');

            // 获取当前标签对应的类别
            const category = this.dataset.tab;

            // 根据类别显示/隐藏相应的版块
            if (category === 'all') {
                sections.forEach(section => {
                    section.style.display = 'block';
                });
            } else {
                sections.forEach(section => {
                    if (section.dataset.category === category) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
            }
        });
    });

    // 添加滑动效果
    let isDown = false;
    let startX;
    let scrollLeft;
    const tabContainer = document.querySelector('.forum-tabs');

    tabContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        tabContainer.classList.add('active');
        startX = e.pageX - tabContainer.offsetLeft;
        scrollLeft = tabContainer.scrollLeft;
    });

    tabContainer.addEventListener('mouseleave', () => {
        isDown = false;
        tabContainer.classList.remove('active');
    });

    tabContainer.addEventListener('mouseup', () => {
        isDown = false;
        tabContainer.classList.remove('active');
    });

    tabContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - tabContainer.offsetLeft;
        const walk = (x - startX) * 2;
        tabContainer.scrollLeft = scrollLeft - walk;
    });
}); 