var database;
var userCount;

var trick;
var form;
var user;
function setup() {
    database = firebase.database();
    trick = new Trick();
    trick.start();
}