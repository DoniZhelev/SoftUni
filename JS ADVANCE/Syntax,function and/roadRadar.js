// function speedRadar(speed, area) {

// let motorwaySpeed = 130;
// let interstateSpeed = 90;
// let citySpeed = 50;
// let residentialSpeed = 20;
// let overSpeed = 0;
// let status = '';


// switch (area) {
//     case 'motorway':
//         if (speed > motorwaySpeed) {
//              overSpeed = speed - motorwaySpeed
//              if (overSpeed > 0 && overSpeed <= 20) {
//                 status = 'speeding';
//              } else if (overSpeed > 20 && overSpeed <= 40) {
//                 status = 'excessive speeding';
//              } else  if (overSpeed > 40 ) {
//                 status = 'reckless driving';
//              }
//               console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${area} - ${status}`);  
//         } else {
//             console.log( `Driving ${speed} km/h in a ${area} zone` );
//         }
        
//         break;


//         case 'interstate':
//         if (speed > interstateSpeed) {
//              overSpeed = speed - interstateSpeed
//              if (overSpeed > 0 && overSpeed <= 20) {
//                 status = 'speeding';
//              } else if (overSpeed > 20 && overSpeed <= 40) {
//                 status = 'excessive speeding'
//              } else if (overSpeed > 40 ) {
//                 status = 'reckless driving'
//              }
//               console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${area} - ${status}`);  
//         } else {
//             console.log( `Driving ${speed} km/h in a ${area} zone` );
//         }
        
//         break;
//         case 'city':
//             if (speed > citySpeed) {
//                  overSpeed = speed - citySpeed
//                  if (overSpeed > 0 && overSpeed <= 20) {
//                     status = 'speeding';
//                  } else if (overSpeed > 20 && overSpeed <= 40) {
//                     status = 'excessive speeding'
//                  } else if (overSpeed > 40 ) {
//                     status = 'reckless driving'
//                  }
//                   console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${area} - ${status}`);  
//             } else {
//                 console.log( `Driving ${speed} km/h in a ${area} zone` );
//             }
            
//             break;
//             case 'residential':
//                 if (speed > residentialSpeed) {
//                      overSpeed = speed - residentialSpeed
//                      if (overSpeed > 0 && overSpeed <= 20) {
//                         status = 'speeding';
//                      } else if (overSpeed > 20 && overSpeed <= 40) {
//                         status = 'excessive speeding'
//                      } else  if(overSpeed > 40 ) {
//                         status = 'reckless driving'
//                      }
//                       console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${area} - ${status}`);  
//                 } else {
//                     console.log( `Driving ${speed} km/h in a ${area} zone` );
//                 }
                
//                 break;
// }

// }

function main(speed,area) {
    let dic = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20,
    }

    let speedLimit = dic[area];

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        let difference = speed - speedLimit;
        let status = '';

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

main(200, 'motorway')