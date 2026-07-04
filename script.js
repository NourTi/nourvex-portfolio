(function(){
var hl=document.getElementById("headline");
var txt="Transforming ideas into digital solutions that scale your business.";
var words=txt.split(" ");
words.forEach(function(w,i){var s=document.createElement("span");s.className="word-r";s.textContent=w;s.style.animationDelay=(1.2+i*0.04)+"s";hl.appendChild(s)});
var bb=document.getElementById("burgerBtn"),mp=document.getElementById("menuPanel"),mo=false;
function toggleMenu(state){mo=state!==undefined?state:!mo;bb.classList.toggle("open",mo);mp.classList.toggle("open",mo);bb.setAttribute("aria-label",mo?"Close":"Open")}
bb.addEventListener("click",function(e){e.stopPropagation();toggleMenu()});
mp.querySelectorAll("nav a").forEach(function(a){a.addEventListener("click",function(){toggleMenu(false)})});
// Close menu when clicking outside
document.addEventListener("click",function(e){if(mo&&!mp.contains(e.target)&&!bb.contains(e.target))toggleMenu(false)});
setTimeout(function(){var s=document.querySelector(".splash");if(s)s.remove()},2000);
var SR=260,cv=document.getElementById("rev-canvas"),img=document.getElementById("revImg");
if(cv&&img){cv.style.display="block";var cx=cv.getContext("2d");
function resize(){cv.width=window.innerWidth;cv.height=window.innerHeight}
resize();window.addEventListener("resize",resize);
var mx=-999,my=-999,smx=-999,smy=-999;
window.addEventListener("mousemove",function(e){mx=e.clientX;my=e.clientY});
(function loop(){smx+=(mx-smx)*0.1;smy+=(my-smy)*0.1;
cx.clearRect(0,0,cv.width,cv.height);var g=cx.createRadialGradient(smx,smy,0,smx,smy,SR);
g.addColorStop(0,"rgba(255,255,255,1)");g.addColorStop(0.4,"rgba(255,255,255,1)");
g.addColorStop(0.6,"rgba(255,255,255,0.75)");g.addColorStop(0.75,"rgba(255,255,255,0.4)");
g.addColorStop(0.88,"rgba(255,255,255,0.12)");g.addColorStop(1,"rgba(255,255,255,0)");
cx.beginPath();cx.arc(smx,smy,SR,0,Math.PI*2);cx.fillStyle=g;cx.fill();
var du=cv.toDataURL();img.style.webkitMaskImage="url("+du+")";img.style.maskImage="url("+du+")";
img.style.webkitMaskSize="100% 100%";img.style.maskSize="100% 100%";
requestAnimationFrame(loop)})()}
var pw=document.getElementById("parallaxWrap");
if(pw){var smX=.5,smY=.5,mX=.5,mY=.5;
window.addEventListener("mousemove",function(e){var r=pw.getBoundingClientRect();mX=(e.clientX-r.left)/r.width;mY=(e.clientY-r.top)/r.height});
(function anim(){smX+=(mX-smX)*.08;smY+=(mY-smY)*.08;
var rx=(smX-.5)*10,ry=(smY-.5)*-6;
var t="perspective(1200px) rotateY("+rx+"deg) rotateX("+ry+"deg)";
var bi=document.getElementById("baseImg"),ri=document.getElementById("revImg");
if(bi)bi.style.transform=t;
if(ri)ri.style.transform="perspective(1200px) rotateY("+(rx*1.4)+"deg) rotateX("+(ry*1.4)+"deg) scale(1.02)";
requestAnimationFrame(anim)})()}
var counters=document.querySelectorAll(".int-stat-num");
var co=new IntersectionObserver(function(entries){entries.forEach(function(e){
if(e.isIntersecting&&!e.target.classList.contains("counted")){e.target.classList.add("counted");
var t=parseInt(e.target.getAttribute("data-target"))||0,d=1500,st=performance.now();
(function u(tm){var p=Math.min((tm-st)/d,1),eased=1-Math.pow(1-p,3);
e.target.textContent=t===100?Math.floor(eased*t)+"%":Math.floor(eased*t);
if(p<1)requestAnimationFrame(u)})(st)}})});
counters.forEach(function(c){co.observe(c)});
var ro=new IntersectionObserver(function(entries){entries.forEach(function(e){
if(e.isIntersecting){e.target.classList.add("visible");ro.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll(".reveal,.reveal-l,.reveal-r").forEach(function(el){ro.observe(el)});
})();


// ✨ Whimsy Injector - Confetti on form success
function launchConfetti() {
  var colors = ['#2EC4B6', '#FF6B9D', '#FFD93D', '#6BCB77', '#4D96FF', '#FF6B6B'];
  for (var i = 0; i < 30; i++) {
    setTimeout(function() {
      var piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.left = (10 + Math.random() * 80) + '%';
      piece.style.top = (30 + Math.random() * 20) + '%';
      piece.style.width = (4 + Math.random() * 6) + 'px';
      piece.style.height = piece.style.width;
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      piece.style.animationDuration = (1 + Math.random() * 1.5) + 's';
      document.body.appendChild(piece);
      setTimeout(function() { piece.remove(); }, 3000);
    }, Math.random() * 300);
  }
}
(function() {
  var el = document.getElementById('signupSuccess');
  if (el) {
    var obs = new MutationObserver(function(muts) {
      muts.forEach(function(m) {
        if (m.type === 'attributes' && m.attributeName === 'class' && el.classList.contains('show')) {
          launchConfetti();
        }
      });
    });
    obs.observe(el, { attributes: true });
  }
})();


// CTA Explode + Smooth Scroll
(function(){
  var cta = document.querySelector('.cta-explode');
  if(cta){
    cta.addEventListener('click',function(e){
      e.preventDefault();
      if(cta.classList.contains('animating')) return;
      cta.classList.add('animating');
      var target = document.getElementById('signup');
      if(target){
        setTimeout(function(){
          target.scrollIntoView({behavior:'smooth',block:'start'});
        }, 200);
      }
      setTimeout(function(){
        cta.classList.remove('animating');
      }, 800);
    });
  }
})();

// === Sign-up Form Handling ===
(function(){
  const form = document.getElementById('signupForm');
  if (!form) return;
  const btn = document.getElementById('signupBtn');
  const success = document.getElementById('signupSuccess');
  const frame = document.getElementById('fsFrame');
  let submitted = false;
  
  // Listen for iframe load (means Formspree received the submission)
  if (frame) {
    frame.addEventListener('load', function() {
      if (!submitted) return;
      btn.classList.remove('loading');
      btn.querySelector('span').textContent = 'Send Interest';
      success.classList.add('show');
      form.reset();
      submitted = false;
      // Reset the iframe so re-submission works
      setTimeout(function() {
        frame.src = 'about:blank';
      }, 500);
    });
  }
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (btn.classList.contains('loading')) return;
    
    btn.classList.add('loading');
    btn.querySelector('span').textContent = 'Sending...';
    success.classList.remove('show');
    
    submitted = true;
    form.submit();
    
    // Safety timeout if iframe never loads
    setTimeout(function() {
      if (btn.classList.contains('loading')) {
        btn.classList.remove('loading');
        btn.querySelector('span').textContent = 'Send Interest';
        // Still show success - form likely went through
        success.classList.add('show');
        form.reset();
        submitted = false;
      }
    }, 8000);
  });
})();
