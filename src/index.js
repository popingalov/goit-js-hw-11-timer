import './sass/main.scss';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      fieldDays: document.querySelector(`${this.selector} span[data-value="days"]`),
      fieldHours: document.querySelector(`${this.selector} span[data-value="hours"]`),
      fieldMins: document.querySelector(`${this.selector} span[data-value="mins"]`),
      fieldSecs: document.querySelector(`${this.selector} span[data-value="secs"]`),
    };
  }
  start = () => {
    setInterval(() => {
      const currentDate = Date.now();
      const newYearsDate = new Date(this.targetDate);
      const totalSecond = (newYearsDate - currentDate) / 1000;

      const time = getTimeComponents(totalSecond);
      const { days, hours, mins, secs } = time;

      this.refs.fieldDays.textContent = days;
      this.refs.fieldHours.textContent = hours;
      this.refs.fieldMins.textContent = mins;
      this.refs.fieldSecs.textContent = secs;
    }, 1000);
  };
}

function getTimeComponents(time) {
  let days = Math.floor(time / 3600 / 24);
  let hours = Math.floor((time / 3600) % 24);
  hours = String(hours).padStart(2, '0');
  let mins = Math.floor((time / 60) % 60);
  mins = String(mins).padStart(2, '0');
  let secs = Math.floor(time % 60);
  secs = String(secs).padStart(2, '0');
  return { days, hours, mins, secs };
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
});

timer1.start();
/////
////
(function () {
  //Blowy Snow

  var flakeNum = 50;
  var pic = new Image(20, 20);
  pic.src = 'https://pngicon.ru/file/uploads/snejinka.png';
  var d = document;
  var deg = 180 / 3.14;
  var rad = 3.14 / 180;
  var idx = typeof d.getElementsByTagName != 'undefined' ? d.getElementsByTagName('div').length : 0;
  var f = {
    w: 0,
    h: 0,
    cx: 0,
    cy: 0,
    flake: [],
    x: [],
    y: [],
    cutRight: [],
    cutLeft: [],
    dst: [],
    size: [],
    vel: [],
    acc: [],
    blo: [],
    rate: [],
    rng: [],
    ang: [],
    counter: [],
  };

  var con = d.createElement('div');
  con.setAttribute(
    'style',
    'display:block;' +
      'position:fixed;' +
      'height:100%;width:100%;' +
      'margin:auto;padding:0px;' +
      'top:0;left:0;left:0;right:0;' +
      'overflow:hidden;' +
      'visibility:hidden;',
  );
  d.body.appendChild(con);

  for (var i = 0; i < flakeNum; i++) {
    f.counter[i] = 0;
    var img = d.createElement('img');
    img.setAttribute('id', 'flake' + (idx + i));
    img.setAttribute('src', pic.src);
    img.setAttribute(
      'style',
      'display:none;' +
        'position:absolute;' +
        'transform: translate3d(0px,0px,0)' +
        'height:5vh;width:5vh;' +
        '    border-radius: 50%;' +
        'visibility:visible;',
    );
    con.appendChild(img);
  }

  function win() {
    var ddw = d.documentElement.clientWidth;
    var ddh = d.documentElement.clientHeight;
    var scrollBarRight = typeof ddw == 'number' ? window.innerWidth - ddw : 0;
    var scrollBarBottom = typeof ddh == 'number' ? window.innerHeight - ddh : 0;
    f.h = window.innerHeight - scrollBarBottom - 1;
    f.w = window.innerWidth - scrollBarRight - 1;
    f.cy = (f.h / 2) | 0;
    f.cx = (f.w / 2) | 0;
  }

  function rsz() {
    win();
    for (var i = 0; i < flakeNum; i++) {
      f.flake[i].style.display = 'none';
      f.counter[i] = 0;
      rst(i);
    }
  }
  window.addEventListener('resize', rsz, false);

  function rst(s) {
    if (f.counter[s] > 1) {
      f.flake[s].style.display = 'block';
    }
    if (f.counter[s] < 2) {
      f.counter[s]++;
    }
    f.cutLeft[s] = 0 + (Math.random() * f.cx) / 2;
    f.cutRight[s] = f.w - (Math.random() * f.cx) / 2;
    f.y[s] = 0 + Math.random() * f.h;
    f.x[s] = f.cx - f.cx / 3 + (Math.random() * f.cx) / 1.5;
    f.rng[s] = f.cx - 100 + Math.random() * 50;
    var dy = f.y[s] - f.cy / 6;
    var dx = f.x[s] - f.rng[s];
    f.ang[s] = Math.atan2(dy, dx) * deg;
    f.dst[s] = 5 + Math.sqrt(dy * dy + dx * dx);
    f.size[s] = 0.1;
    f.acc[s] = 0;
    f.blo[s] = 0;
    f.vel[s] = (1.8 * (f.dst[s] / 2)) / 100;
    f.rate[s] = -0.01 + Math.random() * 0.02;
  }

  function animate() {
    for (var i = 0; i < flakeNum; i++) {
      f.y[i] += f.vel[i] * Math.sin(f.ang[i] * rad);
      f.x[i] += f.vel[i] * Math.cos((f.ang[i] += f.blo[i]) * rad);
      f.acc[i] = (f.vel[i] / (f.dst[i] + (400 * f.vel[i]) / 100)) * f.vel[i];
      f.vel[i] += f.acc[i];
      f.size[i] += (f.vel[i] * 0.6) / ((190 * f.dst[i]) / 100);
      f.blo[i] += f.rate[i];
      if (f.y[i] < -f.cy / 2) {
        f.ang[i] *= -1;
      }
      if (
        f.x[i] + f.size[i] < f.cutLeft[i] ||
        f.x[i] > f.cutRight[i] ||
        f.y[i] > f.h ||
        f.x[i] > f.w ||
        f.x[i] + f.size[i] < 0
      ) {
        rst(i);
      }
      f.flake[i].style.transform =
        'translate3d(' + f.x[i] + 'px, ' + f.y[i] + 'px,0) scale(' + f.size[i] + ')';
    }
  }

  function run() {
    requestAnimationFrame(run);
    animate();
  }

  function init() {
    win();
    for (var i = 0; i < flakeNum; i++) {
      f.flake[i] = d.getElementById('flake' + (idx + i));
      rst(i);
    }
    run();
  }
  window.addEventListener('load', init, false);
})();
