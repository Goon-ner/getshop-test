import YouTube from 'react-youtube'

const Youtube = ({ videoId }) => {
  const options = {
    height: '720',
    width: '1280',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      loop: 1,
      modestbranding: 1,
    },
  }

  return (
    <div className="video-background">
      <div className="video-foreground">
        <YouTube className="youtube" videoId={videoId} opts={options} />
      </div>
    </div>
  )
}

export default Youtube
