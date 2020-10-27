const fetch = require('node-fetch');
//Attitude Data
fetch('https://captionss.herokuapp.com/api/attitude')
    .then(res => res.json())
    .then(data => {
        attitudeQuotedData = data.captions;
        console.log(attitudeQuotedData[Math.floor(Math.random() * attitudeQuotedData.length)].caption)
      })
//Art Data
fetch('https://captionss.herokuapp.com/api/art')
      .then(res => res.json())
      .then(data => {
          artQuotedData = data.captions;
          console.log(artQuotedData[Math.floor(Math.random() * artQuotedData.length)].caption)
        })
//Boys Data   
fetch('https://captionss.herokuapp.com/api/boys')
    .then(res => res.json())
    .then(data => {
        boysQuotedData = data.captions;
        console.log(boysQuotedData[Math.floor(Math.random() * boysQuotedData.length)].caption)
      })
//Travel Data
fetch('https://captionss.herokuapp.com/api/travel')
    .then(res => res.json())
    .then(data => {
        travelQuotedData = data.captions;
        console.log(travelQuotedData[Math.floor(Math.random() * travelQuotedData.length)].caption)
      })
// Vehicle Data
fetch('https://captionss.herokuapp.com/api/vehicle')
    .then(res => res.json())
    .then(data => {
       vehicleQuotedData = data.captions;
        console.log(vehicleQuotedData[Math.floor(Math.random() * vehicleQuotedData.length)].caption)
      })
// Beauty Data
fetch('https://captionss.herokuapp.com/api/beauty')
    .then(res => res.json())
    .then(data => {
       beautyQuotedData = data.captions;
        console.log(beautyQuotedData[Math.floor(Math.random() * beautyQuotedData.length)].caption)
      })
// Books Data
fetch('https://captionss.herokuapp.com/api/books')
    .then(res => res.json())
    .then(data => {
       booksQuotedData = data.captions;
        console.log(booksQuotedData[Math.floor(Math.random() * booksQuotedData.length)].caption)
      })
// Birthday Data
fetch('https://captionss.herokuapp.com/api/birthday')
    .then(res => res.json())
    .then(data => {
       birthdayQuotedData = data.captions;
        console.log(birthdayQuotedData[Math.floor(Math.random() * birthdayQuotedData.length)].caption)
      })
// Abstract Data
fetch('https://captionss.herokuapp.com/api/abstract')
      .then(res => res.json())
      .then(data => {
        abstractQuotedData = data.captions;
          console.log(abstractQuotedData[Math.floor(Math.random() * abstractQuotedData.length)].caption)
        })
// Startup Data
fetch('https://captionss.herokuapp.com/api/startup')
      .then(res => res.json())
      .then(data => {
        startupQuotedData = data.captions;
          console.log(startupQuotedData[Math.floor(Math.random() * startupQuotedData.length)].caption)
        })
//College Data
fetch('https://captionss.herokuapp.com/api/college')
      .then(res => res.json())
      .then(data => {
        collegeQuotedData = data.captions;
          console.log(collegeQuotedData[Math.floor(Math.random() * collegeQuotedData.length)].caption)
        })
// selfie Data
fetch('https://captionss.herokuapp.com/api/selfie')
      .then(res => res.json())
      .then(data => {
        selfieQuotedData = data.captions;
          console.log(selfieQuotedData[Math.floor(Math.random() * selfieQuotedData.length)].caption)
        })
// Seasons Data
fetch('https://captionss.herokuapp.com/api/seasons')
      .then(res => res.json())
      .then(data => {
        seasonsQuotedData = data.captions;
          console.log(seasonsQuotedData[Math.floor(Math.random() * seasonsQuotedData.length)].caption)
        })
// Success Data
// fetch('https://captionss.herokuapp.com/api/success')
//       .then(res => res.json())
//       .then(data => {
//         successQuotedData = data.captions;
//           console.log(successQuotedData[Math.floor(Math.random() * successQuotedData.length)].caption)
//         })
// Family Data
fetch('https://captionss.herokuapp.com/api/family')
      .then(res => res.json())
      .then(data => {
        familyQuotedData = data.captions;
          console.log(familyQuotedData[Math.floor(Math.random() * familyQuotedData.length)].caption)
        })
//   const fetchAttitude = async () => {
//     const res = await fetch("https://captionss.herokuapp.com/api/boys");
//     const data = await res.json();
//     return data.captions;
//   }

// module.exports.fetchAttitude = fetchAttitude;