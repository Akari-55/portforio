window.addEventListener("load", function(){

    //プラグインを定義
    gsap.registerPlugin(ScrollTrigger);
  
    const area  = document.querySelector(".js-area");
    const wrap  = document.querySelector(".js-area-wrapper");
    const items = document.querySelectorAll(".js-item");
    const num   = items.length;
  
    //横幅を指定
    gsap.set(wrap,  { width: num * 100 + "%" });
    gsap.set(items, { width: 100 / num + "%" });
  
    gsap.to(items, {
      xPercent: -100 * ( num - 1 ), //x方向に移動させる
      ease: "none",
      scrollTrigger: {
        trigger: area, //トリガー
        start: ".top_flow-area-item01", //開始位置
        end: "+=3000", //終了位置
        pin: true, //ピン留め
        scrub: true, //スクロール量に応じて動かす
      }
    });
  });
// window.addEventListener("scroll", function() {
//   const flowArea = document.querySelector(".top_flow-area");
//   const flowAreaWrapper = document.querySelector(".top_flow-area-wrapper");
//   const flowItems = document.querySelectorAll(".top_flow-area-item");

//   const { top } = flowArea.getBoundingClientRect();

//   if (top < window.innerHeight) {
//     flowAreaWrapper.style.transform = `translateX(-${(window.innerHeight - top) / 8}px)`;

//     flowItems.forEach((item, index) => {
//       const { left } = item.getBoundingClientRect();
//       item.style.transform = `translateX(${(left - window.innerWidth) / 8}px)`;
//     });
//   }
// });