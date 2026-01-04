
import Dither from "../components/Background/heroSectionBG"
import UrlInput from "../components/form/urlInput"


export default function Hero() {
  return (
<>
<div className="w-screen h-screen relative">
  <Dither
    waveColor={[0.5, 0.5, 0.5]}
    disableAnimation={false}
    enableMouseInteraction={true}
    mouseRadius={0.3}
    colorNum={4}
    waveAmplitude={0.3}
    waveFrequency={3}
    waveSpeed={0.05}
  />


</div>

<div className="absolute top-[40vh] left-[40vw]">

<UrlInput></UrlInput>

</div>

</>
  )
}

