// JavaScript Code

// Create a global variable to store the YouTube player object
var player;

// This function creates a new YouTube player and stores it in the global variable
function onYouTubePlayerAPIReady() {
  // Select the container element for the YouTube video
  var videoContainer = document.getElementById('bg-video');

  // Create a new div element and insert the YouTube player into it
  var playerElement = document.createElement('div');
  videoContainer.appendChild(playerElement);

  // Initialize the YouTube player
  player = new YT.Player(playerElement, {
    videoId: 'UEOLPDOKdtY',
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'mute': 0,
      'loop': 1,
      // 'playlist': 'your-youtube-video-id'
    }
  });
}

// This function plays the specified audio track
function playAudio(audioTrack) {
  // Tell the YouTube player to play the specified audio track
  player.setPlaybackQuality('small');
  // player.loadPlaylist({'playlist': 'your-youtube-playlist-id', 'index': audioTrack - 1});
  player.playVideo();
}
