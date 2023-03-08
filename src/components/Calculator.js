import handleHook from "../Core/Hooks/hook.js"

function Calculator() {

  const hook = handleHook.create()

  const handleButtons = (element) => {
    if(!element) return;

    element.onsubmit = (e) => {
      e.preventDefault()
    }

    const result = element.querySelector("input");
    var ANS = 0;
    [...element.querySelectorAll("button")].map((btn) => {
      btn.onclick = (e) => {
        switch(e.target.innerText) {
          case "AC":
            result.value = "";
            break;
          case "DEL":
            result.value = result.value.slice(0, -1);
            break;
          case "X":
            result.value += "x";
            break;
          case "=": 
            try {
              let s = result.value;
              s = s.replace("x", "*");
              const res = eval(s);
              if(typeof res === "undefined") {
                break;
              }
              const r = res % 1 !== 0 ? res.toPrecision(4) : res.toString();
              result.value = r;
              ANS = res;
              break;
            } catch (e) {
              result.value = "???";
              setTimeout(() => {
                result.value = "";
              }, 500);
              break;
            }
          case "ANS":
            if(result.value === "" && ANS === 0) {break;}
            result.value += ANS;
            break;
          case "0":
            if(result.value === "") {break;}
          default:
            result.value += e.target.innerText;
        }

    }})
  }

  handleHook.attach(hook, handleButtons)

  return (
    `
    <div class="w-full bg-zinc-200 flex ${typeof isPage === "undefined" ? "py-[5rem] md:py-[8rem]" : ""}" justify-between min-h-screen h-fit">
        <div class="container px-2 max-w-[400px] w-full mx-auto py-0 ${typeof isPage === "undefined" ? "" : "lg:py-[10rem]"}">
            <form ${hook} data-aos="fade-down" data-aos-delay="200" class="bg-white rounded-lg p-5">
                <input data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000" type="text" placeholder="" class="mb-5 text-xl bg-zinc-200 rounded-md w-full p-4 outline-none" />
                <div class="grid grid-cols-4 gap-2">
                    <button data-aos="fade-right" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">AC</button>
                    <button data-aos="fade-right" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">DEL</button>
                    <button data-aos="fade-left" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">%</button>
                    <button data-aos="fade-left" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">/</button>
                    <button data-aos="fade-right" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">7</button>
                    <button data-aos="fade-right" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">8</button>
                    <button data-aos="fade-left" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">9</button>
                    <button data-aos="fade-left" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">X</button>
                    <button data-aos="fade-right" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">4</button>
                    <button data-aos="fade-right" data-aos-delay="200" data-aos-duration="500"  class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">5</button>
                    <button data-aos="fade-left" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">6</button>
                    <button data-aos="fade-left" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-bold text-lg">-</button>
                    <button data-aos="fade-right" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">1</button>
                    <button data-aos="fade-right" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">2</button>
                    <button data-aos="fade-left" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">3</button>
                    <button data-aos="fade-left" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold text-lg">+</button>
                    <button data-aos="fade-right" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">ANS</button>
                    <button data-aos="fade-right" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold">0</button>
                    <button data-aos="fade-left" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-bold">.</button>
                    <button data-aos="fade-left" data-aos-delay="200" data-aos-duration="500" class="bg-zinc-200 hover:text-white hover:bg-indigo-600 transition duration-200 rounded-md p-4 font-semibold text-xl">=</button>
                </div>
            </form>
        </div>
    </div>
    `
  )
}

export default Calculator