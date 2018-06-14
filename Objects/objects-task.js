function solve(objArr) {
    let galaxyObj = {};
    let pointsObj  = {};
    let mObj = {};

    for ( let obj of objArr )
    {
       if(!galaxyObj.hasOwnProperty(obj['system']))
       {
         galaxyObj[obj['system']] = {};

       }
        if(!galaxyObj[obj['system']].hasOwnProperty(obj['candidate']))
        {
            galaxyObj[obj['system']][obj['candidate']] = 0;
            galaxyObj[obj['system']][obj['candidate']] += obj['votes'];

        }
        else
        {
            galaxyObj[obj['system']][obj['candidate']] += obj['votes'];
        }
        if(!mObj.hasOwnProperty(obj['system']))
        {
          mObj[obj['system']] = {};
        }
        if(!mObj[obj['system']].hasOwnProperty(obj['candidate'])) {
            mObj[obj['system']][obj['candidate']] = 0;
        }

    }

    for ( let planet in galaxyObj)
    {
        let pointsPerPlanet = [];
        let namesArr = [];
        for ( let candidate in galaxyObj[planet])
        {
          pointsPerPlanet.push(galaxyObj[planet][candidate])
            namesArr.push(candidate);
        }
        let maxPoints = Math.max.apply(Math,pointsPerPlanet);
        let indexMax = pointsPerPlanet.indexOf(maxPoints);

         let winner = namesArr[indexMax];

         if(!pointsObj.hasOwnProperty(winner))
         {
         pointsObj[winner] = 0;
         }
         pointsObj[winner] += pointsPerPlanet.reduce((a,b) => a+b);
         mObj[planet][winner] = pointsPerPlanet.reduce((a,b) => a+b);
    }


    let pArr = [];
    let nameArr = [];
    for ( let name in pointsObj )
    {
      pArr.push(pointsObj[name]);
      nameArr.push(name);
    }
    let objj = {};
    if(nameArr.length == 1)
    {
    console.log(`${nameArr[0]} wins with ${pArr[0]} votes`);
    console.log(`${nameArr[0]} wins unopposed!`);
    }
    else
    {

    if(Math.max.apply(Math,pArr) > ((1/2) * pArr.reduce((a,b) => a + b)))
    {
        let maxNum = Math.max.apply(Math,pArr);
        let maxInd = pArr.indexOf(maxNum)
        console.log(`${nameArr[maxInd]} wins with ${pArr[maxInd]} votes`)
        pArr[maxInd] = 0;
        maxNum = Math.max.apply(Math,pArr);
        let secondmaxInd = pArr.indexOf(maxNum);
        console.log(`Runner up: ${nameArr[secondmaxInd]}`);
        for ( let planet in mObj)
        {
            for ( let candidate in mObj[planet] )
            {
                if(candidate == nameArr[secondmaxInd])
                {
                    if(mObj[planet][candidate] !== 0)
                    {
                        objj[planet] = mObj[planet][candidate];
                    }

                }
            }
        }
        let map = new Map();
        for ( let index in objj)
        {
            map.set(index,objj[index]);
        }

        let ordMap = [...map].sort((a,b) => a[1] < b[1]);
        let mmObj = {};
        for ( let arr of ordMap )
        {
            mmObj[arr[0]] = arr[1];
        }

        for ( let planet in mmObj)
        {
            if(mmObj[planet] !== 0)
            {
                console.log(`${planet}: ${mmObj[planet]}`)
            }
        }

    }
    else
    {
      let maxNum = Math.max.apply(Math,pArr);
      let sumArr = pArr.reduce((a,b) => a + b);
      let maxInd = pArr.indexOf(maxNum);
      let maxPoints = maxNum;
      pArr[maxInd] = 0;
      maxNum = Math.max.apply(Math,pArr);
      let secondmaxInd = pArr.indexOf(maxNum);
      let secondmaxPoints = maxNum;
      let firstPercentage = Math.floor((maxPoints / sumArr) * 100);
      let secondPercentage = Math.floor((secondmaxPoints / sumArr) * 100);
      console.log(`Runoff between ${nameArr[maxInd]} with ${firstPercentage}% and ${nameArr[secondmaxInd]} with ${secondPercentage}%`);


    }

    }

}