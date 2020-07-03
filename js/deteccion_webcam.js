const d = document,
  n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
        // console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML("beforebegin", `<p>Error: <mark>${err}</marck></p>`);
        console.log(`Error: ${err}`);
      })

  }
}