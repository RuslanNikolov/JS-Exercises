function solve(string) {
    let regex = /^\<message\s*(\s*[a-z]+="[A-Za-z0-9\s\.]+\s*")+\s*>(.*\n*.*\n*\n*\n*)<\/message>$/;
    let toRegex = /to="[A-Za-z0-9\s\.]+"/;
    let fromRegex = /from="[A-Za-z0-9\s\.]+"/;
    let regRegex = /(.+?)\\n/;
    let arr = [];
    let match = regex.exec(string);
    if(match !== null)
    {
      if(toRegex.exec(string) !== null && fromRegex.exec(string) !== null)
      {
        let fromToken = fromRegex.exec(string)[0].split('=');
        let fromPerson = fromToken[1].replace('"','').replace('"','');
        let toToken = toRegex.exec(string)[0].split('=');
        let toPerson = toToken[1].replace('"','').replace('"','');
        let message = match[2];
        console.log(`<article>`);
        console.log(`  <div>From: <span class="sender">${fromPerson}</span></div>`);
            console.log(`  <div>To: <span class="recipient">${toPerson}</span></div>`);
            console.log(`   <div>`);
          if(message.indexOf('\n') !== -1) {
              let arr = message.split('\n')
              for ( let el of arr)
              {   el = el.replace('\\','');
                  console.log(`   <p>${el}</p>`);
              }
          }
          else
          {
              console.log(`   <p>${message}</p>`);
          }
  
            console.log(`  </div>`);
            console.log(`</article>`);
      }
      else
      {
      console.log(`Missing attributes`);
      }
    }
    else
    {
    console.log(`Invalid message format`);
    }
  }