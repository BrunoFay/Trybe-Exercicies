enum weekDays {
  monday = 1,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
}
const monday = weekDays.monday;
const tuesday = weekDays["tuesday"];
const wednesday = weekDays[3];

enum rainbowCollors {
  red = "red",
  orange = "orange",
  yellow = "yellow",
  green = "green",
  blue = "blue",
  indigo = "indigo",
  violet = "violet"
}
const red = rainbowCollors.red
const yellow = rainbowCollors['yellow']


enum cardinalPoints {
  north = 'N',
  south = 'S',
  east = 200,
  west = 'W',
}
const north = cardinalPoints.north;
const south = cardinalPoints['south'];
const east = cardinalPoints[200];

console.log(monday, tuesday, wednesday, red, yellow, north, south,east)