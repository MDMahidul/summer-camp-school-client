import { useTypewriter,Cursor } from "react-simple-typewriter";

const TypingEffect = () => {
    const [texts] = useTypewriter({
        words:['Football','Cricket','Tennis','Badminton','Rugby','Baseball','Basketball','Swimming'],
        loop:{},
        typeSpeed:300,
        delaySpeed:80
    })
    
    return (
      <div className="text-white">
        <h2 className="text-6xl font-bold">Northern Sports Academy</h2>
        <h4 className="text-4xl my-5 font-semibold bg-red-500 w-4/6 rounded mx-auto py-2.5">
          Admission Going On
        </h4>
        <div className="text-3xl font-semibold">
          <span>{texts}</span>
          <Cursor cursorStyle="." cursorColor="white" />
        </div>
        <p className="my-3">
          We offer flexible and porous educational pathways, and provide
          academic support, both of which are individually personalised to meet
          your unique needs and aspirations. Because your goals are ours too.
        </p>
        <button className="btn bg-transparent border-2 border-amber-500 text-white px-5 transition-all hover:scale-95 hover:bg-amber-500 hover:border-amber-500">
          Learn More
        </button>
      </div>
    );
};

export default TypingEffect;