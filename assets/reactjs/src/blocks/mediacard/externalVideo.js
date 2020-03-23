 function ExternalVideo ({ videoUrl, autoPlay }) {
    if (videoUrl) {
        let src = '', autoplay = autoPlay ? '1' : '0';
        if (videoUrl.match('youtube|youtu\.be')) {
            let id = 0;
            if (videoUrl.match('embed')) { id = videoUrl.split(/embed\//)[1].split('"')[0]; }
            else { id = videoUrl.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0]; }
            src = '//www.youtube.com/embed/' + id + '?playlist=' + id + `&iv_load_policy=3&enablejsapi=1&disablekb=1&autoplay=${autoplay}&mute=1&controls=0&showinfo=0&rel=0&loop=1&wmode=transparent&widgetid=1`;
        } else if (videoUrl.match('vimeo\.com')) {
            let id = videoUrl.split(/video\/|https:\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
            src = "//player.vimeo.com/video/" + id + `?autoplay=${autoplay}&loop=1&title=0&byline=0&portrait=0`
        }
        return (
            <div className="qubely-video-bg-wrap"><iframe src={src} frameBorder="0" allowFullScreen></iframe></div>
        )
    }
    return null
}
export default ExternalVideo;