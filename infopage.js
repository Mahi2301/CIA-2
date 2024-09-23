const videoContainer = document.getElementById('videoContainer');
        const videoFrame = document.getElementById('videoFrame');
        const playButton = document.getElementById('playButton');

        videoContainer.addEventListener('click', function() {
            playButton.style.display = 'none';
            videoFrame.style.display = 'block';
            videoFrame.src += "?autoplay=1";
        });