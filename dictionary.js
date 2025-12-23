document.addEventListener('DOMContentLoaded', function() {
    // 标签切换
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            tags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // 这里可以添加筛选逻辑
        });
    });

    // 视频播放控制
    const videos = document.querySelectorAll('.video-container');
    videos.forEach(container => {
        const video = container.querySelector('video');
        const playBtn = container.querySelector('.play-btn');
        
        playBtn.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playBtn.style.display = 'none';
            }
        });

        video.addEventListener('pause', function() {
            playBtn.style.display = 'block';
        });

        video.addEventListener('ended', function() {
            playBtn.style.display = 'block';
        });
    });

    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // 这里添加搜索逻辑
            console.log('Searching for:', searchTerm);
        }
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 筛选器功能
    const filterCheckboxes = document.querySelectorAll('.filters input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // 这里添加筛选逻辑
            console.log('Filter changed:', this.parentElement.textContent.trim());
        });
    });

    const video = document.getElementById('signVideo');
    const playBtn = document.querySelector('.play-btn');
    const loopBtn = document.querySelector('.loop-btn');
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.querySelector('.progress');
    let isLooping = false;

    // 播放/暂停控制
    playBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playBtn.querySelector('.play-icon').style.borderStyle = 'double';
            playBtn.querySelector('.play-icon').style.borderWidth = '0 0 0 12px';
        } else {
            video.pause();
            playBtn.querySelector('.play-icon').style.borderStyle = 'solid';
            playBtn.querySelector('.play-icon').style.borderWidth = '8px 0 8px 12px';
        }
    });

    // 循环播放控制
    loopBtn.addEventListener('click', function() {
        isLooping = !isLooping;
        video.loop = isLooping;
        this.style.background = isLooping ? '#3498db' : 'transparent';
        this.style.color = isLooping ? 'white' : '#3498db';
    });

    // 进度条更新
    video.addEventListener('timeupdate', function() {
        const percentage = (video.currentTime / video.duration) * 100;
        progress.style.width = percentage + '%';
    });

    // 进度条点击跳转
    progressBar.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        video.currentTime = pos * video.duration;
    });

    // 视频结束时重置播放按钮
    video.addEventListener('ended', function() {
        if (!isLooping) {
            playBtn.querySelector('.play-icon').style.borderStyle = 'solid';
            playBtn.querySelector('.play-icon').style.borderWidth = '8px 0 8px 12px';
        }
    });

    // 筛选功能
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            const region = document.querySelector('input[name="region"]:checked').value;
            const level = document.querySelector('input[name="level"]:checked').value;
            console.log('筛选条件:', { region, level });
            // 这里添加筛选逻辑
        });
    });
}); 