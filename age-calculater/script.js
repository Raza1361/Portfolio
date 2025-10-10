    const pad = (n) => n.toString().padStart(2, '0');
    const fmtDate = (d) => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
    const humanDate = (d) => d.toLocaleDateString(undefined, {weekday:'short', year:'numeric', month:'short', day:'numeric'});

    const today = new Date();
    const dobInput = document.getElementById('dob');
    dobInput.max = fmtDate(today);
    document.getElementById('todayText').textContent = `Today: ${humanDate(today)}`;

    function daysInMonth(y, m){ // m: 0-11
      return new Date(y, m+1, 0).getDate();
    }

    function diffYMD(from, to){
      let y = to.getFullYear() - from.getFullYear();
      let m = to.getMonth() - from.getMonth();
      let d = to.getDate() - from.getDate();

      if (d < 0){
        m -= 1;
        const pm = (to.getMonth() - 1 + 12) % 12; 
        const py = pm === 11 ? to.getFullYear() - 1 : to.getFullYear();
        d += daysInMonth(py, pm);
      }
      if (m < 0){
        y -= 1; m += 12;
      }
      return {y, m, d};
    }

    function compute(){
      const err = document.getElementById('error');
      err.style.display = 'none';
      const res = document.getElementById('results');

      const val = dobInput.value;
      if(!val){
        err.textContent = 'Please select your date of birth.';
        err.style.display = 'block';
        res.style.display = 'none';
        return;
      }
      const dob = new Date(val + 'T00:00:00'); 
      const now = new Date();

      if (dob > now){
        err.textContent = 'Birth date cannot be in the future.';
        err.style.display = 'block';
        res.style.display = 'none';
        return;
      }

      const {y, m, d} = diffYMD(dob, now);
      document.getElementById('years').textContent = y;
      document.getElementById('months').textContent = m;
      document.getElementById('days').textContent = d;

      const ms = now - dob;
      const totalDays = Math.floor(ms / (1000*60*60*24));
      const totalHours = Math.floor(ms / (1000*60*60));
      const totalMinutes = Math.floor(ms / (1000*60));
      const totalSeconds = Math.floor(ms / 1000);

      document.getElementById('totalDays').textContent = totalDays.toLocaleString();
      document.getElementById('hours').textContent = totalHours.toLocaleString();
      document.getElementById('minutes').textContent = totalMinutes.toLocaleString();
      document.getElementById('seconds').textContent = totalSeconds.toLocaleString();

      res.style.display = 'block';

      let next = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
      if (isNaN(next)){
        if (dob.getMonth() === 1 && dob.getDate() === 29){
          next = new Date(now.getFullYear(), 1, 29);
          if (isNaN(next)) next = new Date(now.getFullYear(), 1, 28);
        }
      }
      if (next < now){
        next = new Date(now.getFullYear()+1, dob.getMonth(), dob.getDate());
        if (isNaN(next) && dob.getMonth() === 1 && dob.getDate() === 29){
          next = new Date(now.getFullYear()+1, 1, 29);
          if (isNaN(next)) next = new Date(now.getFullYear()+1, 1, 28);
        }
      }

      const turning = y + 1;
      document.getElementById('turning').textContent = turning;
      document.getElementById('nextBdayDate').textContent = humanDate(next);

      const diffMs = next - now;
      const leftDays = Math.floor(diffMs / (1000*60*60*24));
      const leftHours = Math.floor((diffMs / (1000*60*60)) % 24);
      const leftMinutes = Math.floor((diffMs / (1000*60)) % 60);
      const leftSeconds = Math.floor((diffMs / 1000) % 60);
      document.getElementById('nextBdayLeft').textContent = `${leftDays} days, ${leftHours} hrs, ${leftMinutes} mins, ${leftSeconds} secs left`;
    }

    let ticking = null;
    function startTick(){
      if (ticking) return;
      ticking = setInterval(() => {
        const val = dobInput.value; if(!val) return;
        const dob = new Date(val + 'T00:00:00');
        const now = new Date();
        const ms = now - dob;
        document.getElementById('hours').textContent = Math.floor(ms/(1000*60*60)).toLocaleString();
        document.getElementById('minutes').textContent = Math.floor(ms/(1000*60)).toLocaleString();
        document.getElementById('seconds').textContent = Math.floor(ms/1000).toLocaleString();

        let next = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
        if (next < now) next = new Date(now.getFullYear()+1, dob.getMonth(), dob.getDate());
        const diffMs = next - now;
        const leftDays = Math.floor(diffMs / (1000*60*60*24));
        const leftHours = Math.floor((diffMs / (1000*60*60)) % 24);
        const leftMinutes = Math.floor((diffMs / (1000*60)) % 60);
        const leftSeconds = Math.floor((diffMs / 1000) % 60);
        document.getElementById('nextBdayLeft').textContent = `${leftDays} days, ${leftHours} hrs, ${leftMinutes} mins, ${leftSeconds} secs left`;
      }, 1000);
    }

    function stopTick(){ if(ticking){ clearInterval(ticking); ticking = null; } }

    document.getElementById('calcBtn').addEventListener('click', () => { compute(); startTick(); });
    document.getElementById('clearBtn').addEventListener('click', () => {
      stopTick();
      document.getElementById('results').style.display = 'none';
      document.getElementById('error').style.display = 'none';
      dobInput.value = '';
      document.getElementById('nextBdayDate').textContent = '—';
      document.getElementById('nextBdayLeft').textContent = '—';
      document.getElementById('turning').textContent = '—';
    });

    dobInput.addEventListener('change', () => { compute(); startTick(); });
