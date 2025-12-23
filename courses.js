document.addEventListener('DOMContentLoaded', function() {
    // 筛选功能
    const filterSelects = document.querySelectorAll('.filter-group select');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            filterCourses();
        });
    });

    // 课程卡片交互
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        const enrollBtn = card.querySelector('.enroll-btn');
        enrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // 这里添加报名逻辑
            console.log('报名课程:', card.querySelector('h3').textContent);
        });
    });

    // 学习路径交互
    const pathBtns = document.querySelectorAll('.path-btn');
    pathBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const pathName = this.closest('.path-card').querySelector('h3').textContent;
            // 这里添加学习路径选择逻辑
            console.log('选择学习路径:', pathName);
        });
    });

    // 筛选课程的函数
    function filterCourses() {
        const type = document.querySelector('select[name="type"]').value;
        const level = document.querySelector('select[name="level"]').value;
        const price = document.querySelector('select[name="price"]').value;

        // 这里添加课程筛选逻辑
        console.log('筛选条件:', { type, level, price });
    }

    // 添加课程卡片悬停效果
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 