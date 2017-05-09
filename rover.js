var myRover = {
  position: [0,0],
  direction: 'E'
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  }
}
  function goBackwards(rover) {
    switch(rover.direction) {
      case 'N':
        rover.position[0]--
        break;
      case 'E':
        rover.position[1]--
        break;
      case 'S':
        rover.position[0]++
        break;
      case 'W':
        rover.position[1]++
        break;
    }
}
    function goRight(rover) {
      switch(rover.direction) {
        case 'N':
          rover.direction: 'E'
          break;
        case 'E':
          rover.direction: 'S'
          break;
        case 'S':
          rover.direction: 'W'
          break;
        case 'W':
          rover.direction:'N'
          break;
      }
}
      function goLeft(rover) {
        switch(rover.direction) {
          case 'N':
            rover.direction: 'W'
            break;
          case 'E':
            rover.direction: 'N'
            break;
          case 'S':
            rover.direction: 'E'
            break;
          case 'W':
            rover.direction:'S'
            break;
        }
}

var myIndications = prompt ("Introduce el recorrido del rover");

var f = goForward
var b = goBackwards
var l = goLeft
var r = goRight

function position (myRover + myIndications);

alert ('La posición final del rover es '+ position);
