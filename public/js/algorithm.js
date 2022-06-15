// Global variable
var StartLocation;
var AdjMatrix = [
  [0.0, 0.16, 6.8, 4.2, 1.4, 0.95],
  [0.16, 0.0, 6.7, 4.0, 1.6, 1.1],
  [6.5, 6.3, 0.0, 9.7, 7.9, 7.4],
  [4.1, 4.2, 9.6, 0.0, 5.3, 4.0],
  [1.4, 1.6, 8.3, 5.3, 0.0, 3.4],
  [0.9, 1.1, 7.6, 4.1, 3.4, 0.0],
];
var IsVisited = [0, 0, 0, 0, 0, 0];
var LocationName = [
  "Kantor Camat",
  "Puskesmas Seririt 1",
  "Puskesmas Seririt 2",
  "Puskesmas Seririt 3",
  "Rumah Sakit Pratama",
  "Rumah Sakit Santhi Graha",
];
var Line;
var PathResult = [];

// Functions
function floyd_warshall() {
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      for (var k = 0; k < 6; k++) {
        if (AdjMatrix[j][i] + AdjMatrix[i][k] < AdjMatrix[j][k]) {
          AdjMatrix[j][k] = AdjMatrix[j][i] + AdjMatrix[i][k];
        }
      }
    }
  }
}

function init() {
  floyd_warshall();
  var select = document.getElementById("start");
  StartLocation = select.options[select.selectedIndex].value;
  IsVisited[StartLocation] = 1;
  PathResult.push("Rute Perjalanan: ");
  PathResult.push(LocationName[StartLocation]);
  // Create initial coordinate for line
  var temp = new google.maps.LatLng({
    lat: MarkerPosition.features[StartLocation].geometry.coordinates[1],
    lng: MarkerPosition.features[StartLocation].geometry.coordinates[0],
  });
  Line.push(temp);
  find_direction(StartLocation);
}

function find_direction(start) {
  var min = 999999;
  var saveMin;
  var repeat = 0;
  for (var i = 0; i < 6; i++) {
    if (AdjMatrix[start][i] == 0) {
      continue;
    } else {
      if (!IsVisited[i] && AdjMatrix[start][i] < min) {
        repeat = 1;
        min = AdjMatrix[start][i];
        saveMin = i;
      }
    }
  }
  if (repeat == 1) {
    PathResult.push(" -> ");
    PathResult.push(LocationName[saveMin]);
    // Create new coordinate for line
    var temp = new google.maps.LatLng({
      lat: MarkerPosition.features[saveMin].geometry.coordinates[1],
      lng: MarkerPosition.features[saveMin].geometry.coordinates[0],
    });
    Line.push(temp);
    IsVisited[saveMin] = 1;
    find_direction(saveMin);
  }
}

function reset_condition() {
  while (PathResult.length > 0) {
    PathResult.pop();
  }
  for (var i = 0; i < 6; i++) {
    IsVisited[i] = 0;
  }
  var parent_remove = document.getElementById("div-result");
  var child_remove = document.getElementById("result");
  child_remove.remove();
  var new_element = document.createElement("p");
  new_element.setAttribute("id", "result");
  new_element.setAttribute(
    "class",
    "bg-white p-2 border border-blue-400 rounded-md"
  );
  parent_remove.appendChild(new_element);
}

function create_element() {
  var parent_element = document.getElementById("result");
  var child_element = document.createTextNode(PathResult.join(""));
  parent_element.appendChild(child_element);
  var element = document.getElementById("div-result");
  element.appendChild(parent_element);
}
