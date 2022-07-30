import { useState } from "react";

export default function App() {
  const sentence = (
    <p>
      吾輩は猫である。名前はまだない。<br></br>
      どこで生れたか頓（とん）と見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
      吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪（どうあく）な種族であったそうだ。
      この書生というのは時々我々を捕（つかま）えて煮て食うという話である。しかしその当時は何という考（かんがえ）もなかったから別段恐しいとも思わなかった。
      ただ彼の掌（てのひら）に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。
      掌の上で少し落ち付いて書生の顔を見たのがいわゆる人間というものの見始（みはじめ）であろう。
      この時妙なものだと思った感じが今でも残っている。第一毛を以て装飾されべきはずの顔がつるつるしてまるで薬缶（やかん）だ。
      その後猫にも大分逢（あ）ったがこんな片輪には一度も出会（でく）わした事がない。のみならず顔の真中が余りに突起している。
      そうしてその穴の中から時々ぷうぷうと烟（けむり）を吹く。どうも咽（む）せぽくて実に弱った。これが人間の飲む烟草（タバコ）というものである事は漸（ようや）くこの頃（ごろ）知った。
    </p>
  );
  const enpty = "";
  const hide = "文章を隠す";
  const display = "文章を表示する";

  const [stateValue, setStateValue] = useState(sentence);
  const [buttonValue, setButtonValue] = useState(hide);

  return (
    <div className="App">
      <p>{stateValue}</p>
      <input
        type="button"
        value={buttonValue}
        onClick={() =>
          buttonValue === hide
            ? (setButtonValue(display), setStateValue(enpty))
            : (setButtonValue(hide), setStateValue(sentence))
        }
      />
    </div>
  );
}
