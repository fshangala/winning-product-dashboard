import LoadingGif from '../assets/images/loading.gif'

export default function Loading({visible=true}) {
  return <>
  <center style={{display: visible ? 'block' : 'none'}}>
    <img src={LoadingGif} />
  </center>
  </>
}