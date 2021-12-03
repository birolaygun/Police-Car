import "./App.css";
import car from "./PoliceCar.gif";
import garage from "./garage.jpg";
import dat from "./dat.mp3";
import pol from "./pol.mp3";
import siren from "./siren.mp3";
import telsiz from "./telsiz.mp3";
import amb from "./amb.mp3";

function App() {
  const kapat = () => {
    document.getElementById("cakar1").className = "aa";
    document.getElementById("cakar2").className = "aa";
    document.getElementById("cakar3").className = "aa";
    document.getElementById("cakar4").className = "aa";
    document.getElementById("cakar5").className = "aa";
    document.getElementById("cakar6").className = "aa";
    document.getElementById("cakar11").className = "aa";
    document.getElementById("cakar12").className = "aa";
    document.getElementById("cakar13").className = "aa";
    document.getElementById("cakar14").className = "aa";
    document.getElementById("cakar15").className = "aa";
    document.getElementById("cakar16").className = "aa";
  };
  const acık = () => {
    document.getElementById("cakar1").className = "cakar1";
    document.getElementById("cakar2").className = "cakar2";
    document.getElementById("cakar3").className = "cakar3";
    document.getElementById("cakar4").className = "cakar4";
    document.getElementById("cakar5").className = "cakar5";
    document.getElementById("cakar6").className = "cakar6";
    document.getElementById("cakar11").className = "cakar11";
    document.getElementById("cakar12").className = "cakar12";
    document.getElementById("cakar13").className = "cakar13";
    document.getElementById("cakar14").className = "cakar14";
    document.getElementById("cakar15").className = "cakar15";
    document.getElementById("cakar16").className = "cakar16";
    document.getElementById("cakar1").style.animationDuration = "1.5s";
    document.getElementById("cakar2").style.animationDuration = "1.5s";
    document.getElementById("cakar3").style.animationDuration = "1.5s";
    document.getElementById("cakar4").style.animationDuration = "1.5s";
    document.getElementById("cakar5").style.animationDuration = "1.5s";
    document.getElementById("cakar6").style.animationDuration = "1.5s";
    document.getElementById("cakar11").style.animationDuration = "1.5s";
    document.getElementById("cakar12").style.animationDuration = "1.5s";
    document.getElementById("cakar13").style.animationDuration = "1.5s";
    document.getElementById("cakar14").style.animationDuration = "1.5s";
    document.getElementById("cakar15").style.animationDuration = "1.5s";
    document.getElementById("cakar16").style.animationDuration = "1.5s";
  };
  const hızlı = () => {
    acık();
    document.getElementById("cakar1").style.animationDuration = "0.75s";
    document.getElementById("cakar2").style.animationDuration = "0.75s";
    document.getElementById("cakar3").style.animationDuration = "0.75s";
    document.getElementById("cakar4").style.animationDuration = "0.75s";
    document.getElementById("cakar5").style.animationDuration = "0.75s";
    document.getElementById("cakar6").style.animationDuration = "0.75s";
    document.getElementById("cakar11").style.animationDuration = "0.75s";
    document.getElementById("cakar12").style.animationDuration = "0.75s";
    document.getElementById("cakar13").style.animationDuration = "0.75s";
    document.getElementById("cakar14").style.animationDuration = "0.75s";
    document.getElementById("cakar15").style.animationDuration = "0.75s";
    document.getElementById("cakar16").style.animationDuration = "0.75s";
  };

  function tkapat() {
    document.getElementById("tepe1").className = "nzo";
    document.getElementById("tepe2").className = "nzo";
    document.getElementById("tepe3").className = "nzo";
    document.getElementById("tepe4").className = "nzo";
    document.getElementById("tepe5").className = "nzo";
    document.getElementById("tepe6").className = "nzo";
    document.getElementById("tepe7").className = "nzo";
    document.getElementById("tepe8").className = "nzo";
    document.getElementById("tepe11").className = "nzo";
    document.getElementById("tepe12").className = "nzo";
    document.getElementById("tepe13").className = "nzo";
    document.getElementById("tepe14").className = "nzo";
    document.getElementById("tepe15").className = "nzo";
    document.getElementById("tepe16").className = "nzo";
    document.getElementById("tepe17").className = "nzo";
    document.getElementById("tepe18").className = "nzo";
  }

  const acc = () => {
    document.getElementById("tepe1").className = "tepe1";
    document.getElementById("tepe2").className = "tepe2";
    document.getElementById("tepe3").className = "tepe3";
    document.getElementById("tepe4").className = "tepe4";
    document.getElementById("tepe5").className = "tepe5";
    document.getElementById("tepe6").className = "tepe6";
    document.getElementById("tepe7").className = "tepe7";
    document.getElementById("tepe8").className = "tepe8";
    document.getElementById("tepe11").className = "tepe11";
    document.getElementById("tepe12").className = "tepe12";
    document.getElementById("tepe13").className = "tepe13";
    document.getElementById("tepe14").className = "tepe14";
    document.getElementById("tepe15").className = "tepe15";
    document.getElementById("tepe16").className = "tepe16";
    document.getElementById("tepe17").className = "tepe17";
    document.getElementById("tepe18").className = "tepe18";

    document.getElementById("tepe1").style.display = "block";
    document.getElementById("tepe2").style.display = "block";
    document.getElementById("tepe3").style.display = "block";
    document.getElementById("tepe4").style.display = "block";
    document.getElementById("tepe5").style.display = "block";
    document.getElementById("tepe6").style.display = "block";
    document.getElementById("tepe7").style.display = "block";
    document.getElementById("tepe8").style.display = "block";
    document.getElementById("tepe11").style.display = "block";
    document.getElementById("tepe12").style.display = "block";
    document.getElementById("tepe13").style.display = "block";
    document.getElementById("tepe14").style.display = "block";
    document.getElementById("tepe15").style.display = "block";
    document.getElementById("tepe16").style.display = "block";
    document.getElementById("tepe17").style.display = "block";
    document.getElementById("tepe18").style.display = "block";
  };
  const tacık = () => {
    acc();
    document.getElementById("tepe1").style.animation = "tepe1 1.5s infinite";
    document.getElementById("tepe2").style.animation = "tepe1 1.5s infinite";
    document.getElementById("tepe3").style.animation = "tepe1 1.5s infinite";
    document.getElementById("tepe4").style.animation = "tepe1 1.5s infinite";
    document.getElementById("tepe5").style.animation = "tepe2 1.5s infinite";
    document.getElementById("tepe6").style.animation = "tepe2 1.5s infinite";
    document.getElementById("tepe7").style.animation = "tepe2 1.5s infinite";
    document.getElementById("tepe8").style.animation = "tepe2 1.5s infinite";
    document.getElementById("tepe11").style.animation = "tepe2 1.5s infinite";
    document.getElementById("tepe12").style.animation = "tepe2 1.5s infinite";
    document.getElementById("tepe13").style.animation = "tepe2 1.5s infinite";
    document.getElementById("tepe14").style.animation = "tepe2 1.5s infinite";
    document.getElementById("tepe15").style.animation = "tepe1 1.5s infinite";
    document.getElementById("tepe16").style.animation = "tepe1 1.5s infinite";
    document.getElementById("tepe17").style.animation = "tepe1 1.5s infinite";
    document.getElementById("tepe18").style.animation = "tepe1 1.5s infinite";
  };

  function sagsolhızlı() {
    acc();
    document.getElementById("tepe1").style.display = "none";
    document.getElementById("tepe2").style.display = "none";
    document.getElementById("tepe3").style.display = "none";
    document.getElementById("tepe4").style.display = "none";
    document.getElementById("tepe5").style.animation = "tepe3 1s infinite";
    document.getElementById("tepe6").style.animation = "tepe3 1s infinite";
    document.getElementById("tepe7").style.animation = "tepe3 1s infinite";
    document.getElementById("tepe8").style.animation = "tepe3 1s infinite";
    document.getElementById("tepe11").style.animation = "tepe4 1s infinite";
    document.getElementById("tepe12").style.animation = "tepe4 1s infinite";
    document.getElementById("tepe13").style.animation = "tepe4 1s infinite";
    document.getElementById("tepe14").style.animation = "tepe4 1s infinite";
    document.getElementById("tepe15").style.display = "none";
    document.getElementById("tepe16").style.display = "none";
    document.getElementById("tepe17").style.display = "none";
    document.getElementById("tepe18").style.display = "none";
  }
  function turn() {
    acc();
    document.getElementById("tepe1").style.animation = "tepe11 2s infinite";
    document.getElementById("tepe2").style.animation = "tepe12 2s infinite";
    document.getElementById("tepe3").style.animation = "tepe13 2s infinite";
    document.getElementById("tepe4").style.animation = "tepe14 2s infinite";
    document.getElementById("tepe5").style.animation = "tepe15 2s infinite";
    document.getElementById("tepe6").style.animation = "tepe16 2s infinite";
    document.getElementById("tepe7").style.animation = "tepe17 2s infinite";
    document.getElementById("tepe8").style.animation = "tepe18 2s infinite";
    document.getElementById("tepe11").style.animation = "tepe21 2s infinite";
    document.getElementById("tepe12").style.animation = "tepe22 2s infinite";
    document.getElementById("tepe13").style.animation = "tepe23 2s infinite";
    document.getElementById("tepe14").style.animation = "tepe24 2s infinite";
    document.getElementById("tepe15").style.animation = "tepe25 2s infinite";
    document.getElementById("tepe16").style.animation = "tepe26 2s infinite";
    document.getElementById("tepe17").style.animation = "tepe27 2s infinite";
    document.getElementById("tepe18").style.animation = "tepe28 2s infinite";
  }
  function turnfast() {
    acc();

    document.getElementById("tepe1").style.animation = "tepe11 1s infinite";
    document.getElementById("tepe2").style.animation = "tepe12 1s infinite";
    document.getElementById("tepe3").style.animation = "tepe13 1s infinite";
    document.getElementById("tepe4").style.animation = "tepe14 1s infinite";
    document.getElementById("tepe5").style.animation = "tepe15 1s infinite";
    document.getElementById("tepe6").style.animation = "tepe16 1s infinite";
    document.getElementById("tepe7").style.animation = "tepe17 1s infinite";
    document.getElementById("tepe8").style.animation = "tepe18 1s infinite";
    document.getElementById("tepe11").style.animation = "tepe21 1s infinite";
    document.getElementById("tepe12").style.animation = "tepe22 1s infinite";
    document.getElementById("tepe13").style.animation = "tepe23 1s infinite";
    document.getElementById("tepe14").style.animation = "tepe24 1s infinite";
    document.getElementById("tepe15").style.animation = "tepe25 1s infinite";
    document.getElementById("tepe16").style.animation = "tepe26 1s infinite";
    document.getElementById("tepe17").style.animation = "tepe27 1s infinite";
    document.getElementById("tepe18").style.animation = "tepe28 1s infinite";
  }
  function oposite() {
    acc();

    document.getElementById("tepe1").style.animation =
      "tepe31 1.4s infinite alternate";
    document.getElementById("tepe2").style.animation =
      "tepe32 1.4s infinite alternate";
    document.getElementById("tepe3").style.animation =
      "tepe33 1.4s infinite alternate";
    document.getElementById("tepe4").style.animation =
      "tepe34 1.4s infinite alternate";
    document.getElementById("tepe5").style.animation =
      "tepe35 1.4s infinite alternate";
    document.getElementById("tepe6").style.animation =
      "tepe36 1.4s infinite alternate";
    document.getElementById("tepe7").style.animation =
      "tepe37 1.4s infinite alternate";
    document.getElementById("tepe8").style.animation =
      "tepe38 1.4s infinite alternate";
    document.getElementById("tepe11").style.animation =
      "tepe41 1.4s infinite alternate";
    document.getElementById("tepe12").style.animation =
      "tepe42 1.4s infinite alternate";
    document.getElementById("tepe13").style.animation =
      "tepe43 1.4s infinite alternate";
    document.getElementById("tepe14").style.animation =
      "tepe44 1.4s infinite alternate";
    document.getElementById("tepe15").style.animation =
      "tepe45 1.4s infinite alternate";
    document.getElementById("tepe16").style.animation =
      "tepe46 1.4s infinite alternate";
    document.getElementById("tepe17").style.animation =
      "tepe47 1.4s infinite alternate";
    document.getElementById("tepe18").style.animation =
      "tepe48 1.4s infinite alternate";
  }
  function opositefast() {
    acc();

    document.getElementById("tepe1").style.animation =
      "tepe31 0.7s infinite alternate";
    document.getElementById("tepe2").style.animation =
      "tepe32 0.7s infinite alternate";
    document.getElementById("tepe3").style.animation =
      "tepe33 0.7s infinite alternate";
    document.getElementById("tepe4").style.animation =
      "tepe34 0.7s infinite alternate";
    document.getElementById("tepe5").style.animation =
      "tepe35 0.7s infinite alternate";
    document.getElementById("tepe6").style.animation =
      "tepe36 0.7s infinite alternate";
    document.getElementById("tepe7").style.animation =
      "tepe37 0.7s infinite alternate";
    document.getElementById("tepe8").style.animation =
      "tepe38 0.7s infinite alternate";
    document.getElementById("tepe11").style.animation =
      "tepe41 0.7s infinite alternate";
    document.getElementById("tepe12").style.animation =
      "tepe42 0.7s infinite alternate";
    document.getElementById("tepe13").style.animation =
      "tepe43 0.7s infinite alternate";
    document.getElementById("tepe14").style.animation =
      "tepe44 0.7s infinite alternate";
    document.getElementById("tepe15").style.animation =
      "tepe45 0.7s infinite alternate";
    document.getElementById("tepe16").style.animation =
      "tepe46 0.7s infinite alternate";
    document.getElementById("tepe17").style.animation =
      "tepe47 0.7s infinite alternate";
    document.getElementById("tepe18").style.animation =
      "tepe48 0.7s infinite alternate";
  }
  function sagsol() {
    acc();

    document.getElementById("tepe1").style.display = "none";
    document.getElementById("tepe2").style.display = "none";
    document.getElementById("tepe3").style.display = "none";
    document.getElementById("tepe4").style.display = "none";
    document.getElementById("tepe5").style.animation = "tepe3 2s infinite";
    document.getElementById("tepe6").style.animation = "tepe3 2s infinite";
    document.getElementById("tepe7").style.animation = "tepe3 2s infinite";
    document.getElementById("tepe8").style.animation = "tepe3 2s infinite";
    document.getElementById("tepe11").style.animation = "tepe4 2s infinite";
    document.getElementById("tepe12").style.animation = "tepe4 2s infinite";
    document.getElementById("tepe13").style.animation = "tepe4 2s infinite";
    document.getElementById("tepe14").style.animation = "tepe4 2s infinite";
    document.getElementById("tepe15").style.display = "none";
    document.getElementById("tepe16").style.display = "none";
    document.getElementById("tepe17").style.display = "none";
    document.getElementById("tepe18").style.display = "none";
  }

  const dortlu = () => {
    document.getElementById("solSinyal").className = "nonn";
    document.getElementById("sağSinyal").className = "nonn";
  };
  let far = 0;

  const dortluac = () => {
    document.getElementById("solSinyal").className = "solSinyal";
    document.getElementById("sağSinyal").className = "sağSinyal";
  };
  const kapaf = () => {
    document.getElementById("solUzun").className = "";
    document.getElementById("solKısa").className = "";
    document.getElementById("sağUzun").className = "";
    document.getElementById("sağKısa").className = "";
    far = 0;
  };
  const kısa = () => {
    document.getElementById("solUzun").className = "u";
    document.getElementById("solKısa").className = "solKısa";
    document.getElementById("sağUzun").className = "u";
    document.getElementById("sağKısa").className = "sağKısa";
    far = 1;
  };
  const uzun = () => {
    document.getElementById("solUzun").className = "solUzun";
    document.getElementById("solKısa").className = "solKısa";
    document.getElementById("sağUzun").className = "sağUzun";
    document.getElementById("sağKısa").className = "sağKısa";
    far = 2;
  };
  const sele = () => {
    if (far === 2) {
      uzun();
      setTimeout(() => {
        kapaf();
        setTimeout(() => {
          uzun();
          setTimeout(() => {
            kapaf();
            setTimeout(() => {
              uzun();
              setTimeout(() => {
                kapaf();
                setTimeout(() => {
                  uzun();
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    } else if (far === 0) {
      uzun();
      setTimeout(() => {
        kapaf();
        setTimeout(() => {
          uzun();
          setTimeout(() => {
            kapaf();
            setTimeout(() => {
              uzun();
              setTimeout(() => {
                kapaf();
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    } else if (far === 1) {
      uzun();
      setTimeout(() => {
        kısa();
        setTimeout(() => {
          uzun();
          setTimeout(() => {
            kısa();
            setTimeout(() => {
              uzun();
              setTimeout(() => {
                kısa();
                setTimeout(() => {
                  kısa();
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }
  };

  const start = () => {
    opositefast();
    setTimeout(() => {
      tkapat();
      hızlı();
      setTimeout(() => {
        kapat();
        sele();
      }, 1500);
    }, 1500);
  };
  setTimeout(() => {
    start();
  }, 1000);

  const datPlay = () => {
    document.getElementById("datSound").play();
  };
  const datStop = () => {
    document.getElementById("datSound").pause();
  };
  const sirenPlay = () => {
    document.getElementById("sirenSound").load();
    document.getElementById("sirenSound").play();
  };
  const telsizPlay = () => {
    document.getElementById("telsizSound").load();
    document.getElementById("telsizSound").play();
  };
  const polPlay = () => {
    document.getElementById("ambSound").load();
    document.getElementById("polSound").load();

    document.getElementById("polSound").play();
  };
  const ambPlay = () => {
    document.getElementById("ambSound").load();
    document.getElementById("polSound").load();

    document.getElementById("ambSound").play();
  };
  const telsizStopPlay = () => {
    document.getElementById("telsizSound").load();
  };
  const srnStop = () => {
    document.getElementById("ambSound").load();
    document.getElementById("polSound").load();
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${garage})` }}>
      <div className="container">
        <div className="kumanda">
          <div className="tepe">
            <h5>Tepe Lambası</h5>
            <div className="iler">
              <i class="fas fa-window-close" onClick={() => tkapat()}></i>
              <i class="fas fa-grip-lines" onClick={() => tacık()}></i>
              <i
                class="far fa-arrow-alt-circle-up"
                onClick={() => sagsol()}
              ></i>
              <i
                class="fas fa-arrow-alt-circle-up"
                onClick={() => sagsolhızlı()}
              ></i>
              <i class="fas fa-redo-alt" onClick={() => turn()}></i>
              <i class="fas fa-sync-alt" onClick={() => turnfast()}></i>
              <i class="far fa-caret-square-left" onClick={() => oposite()}></i>
              <i
                class="fas fa-caret-square-left"
                onClick={() => opositefast()}
              ></i>
            </div>
          </div>

          <div className="cakarl">
            <h5>Çakarlar</h5>
            <div className="iler">
              <i class="fas fa-window-close" onClick={() => kapat()}></i>
              <i class="fas fa-angle-right" onClick={() => acık()}></i>
              <i class="fas fa-angle-double-right" onClick={() => hızlı()}></i>
            </div>
          </div>


          <div className="dortlu">
            <h5>Dörtlü</h5>
            <div className="iler">
              <i class="fas fa-window-close" onClick={() => dortlu()}></i>
              <i
                class="fas fa-exclamation-triangle"
                onClick={() => dortluac()}
              ></i>
            </div>
          </div>

          <div className="far">
            <h5>Farlar</h5>
            <div className="iler">
              <i class="fas fa-window-close" onClick={() => kapaf()}></i>
              <i class="far fa-lightbulb" onClick={() => kısa()}></i>
              <i class="fas fa-lightbulb" onClick={() => uzun()}></i>
              <i class="fas fa-bolt" onClick={() => sele()}></i>
            </div>
          </div>
        </div>

        <div className="audio">
          <div className="datsi">
            <h5>Dat - İkaz</h5>
            <audio id="sirenSound" src={siren}></audio>
            <audio id="datSound" src={dat}></audio>
            <div className="iler">
              <i
                class="fas fa-bullhorn"
                id="datButton "
                onMouseDown={() => datPlay()}
                onMouseUp={() => datStop()}
              ></i>

              <i
                class="fas fa-volume-off"
                id="datButton "
                onClick={() => sirenPlay()}
              ></i>
            </div>
          </div>

          <div className="tels">
            <h5>Telsiz</h5>

            <audio id="telsizSound" src={telsiz}></audio>

            <div className="iler">
              <i
                class="fas fa-broadcast-tower"
                id="telsizButton "
                onClick={() => telsizPlay()}
              ></i>
              <i
                class="fas fa-window-close"
                id="telsizStopButton "
                onClick={() => telsizStopPlay()}
              ></i>
            </div>
          </div>

          <div className="srn">
            <h5>Siren</h5>
            <audio id="ambSound" src={amb}></audio>

            <audio id="polSound" src={pol}></audio>
            <div className="iler">
              <i
                class="fas fa-headphones"
                id="polButton "
                onClick={() => polPlay()}
              ></i>

              <i
                class="fas fa-headphones-alt"
                id="ambButton "
                onClick={() => ambPlay()}
              ></i>

              <i class="fas fa-window-close" onClick={() => srnStop()}></i>
            </div>
          </div>
        </div>

        <div className="cardiv">
          <div className="car-item">
            <img className="car" src={car} alt="as" />

            <div id="tepe1"></div>
            <div id="tepe2"></div>
            <div id="tepe3"></div>
            <div id="tepe4"></div>
            <div id="tepe5"></div>
            <div id="tepe6"></div>
            <div id="tepe7"></div>
            <div id="tepe8"></div>
            <div id="tepe11"></div>
            <div id="tepe12"></div>
            <div id="tepe13"></div>
            <div id="tepe14"></div>
            <div id="tepe15"></div>
            <div id="tepe16"></div>
            <div id="tepe17"></div>
            <div id="tepe18"></div>

            <div id="cakar1"></div>
            <div id="cakar2"></div>
            <div id="cakar3"></div>
            <div id="cakar4"></div>
            <div id="cakar5"></div>
            <div id="cakar6"></div>

            <div id="cakar11"></div>
            <div id="cakar12"></div>
            <div id="cakar13"></div>
            <div id="cakar14"></div>
            <div id="cakar15"></div>
            <div id="cakar16"></div>

            <div id="sağSinyal"></div>
            <div id="solSinyal"></div>
            <div id="solUzun"></div>
            <div id="solKısa"></div>
            <div id="sağUzun"></div>
            <div id="sağKısa"></div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
