// function declaration----------
function a() {}
a();

// function expression----------
const b = function a() {};
b();
//why we need second way ?----------
// pass b as params
//return something to this var and use it later
// assign to a variabe in dynamic way , if else mai rs,dollar

//pass func as param----------
const c = function a(d) {};
c(function () {}); //ouput is undefined by argument passed
//kyunki hmne kuch return nhi kiya toh js kr deti hai

//returning function----------
function d() {
  return function () {
    console.log("hi");
  };
}
const e = d();
d()();
console.log(e());

//call appply bind
//1-call
const obj0 = {
  name: "cv",
  write: function () {
    console.log("hi i ", this.name);
    return "returned";
  },
};

const obj01 = function () {
  this.write();
};
// obj01("cv") not linked
obj01.call(obj0, "cv ");
