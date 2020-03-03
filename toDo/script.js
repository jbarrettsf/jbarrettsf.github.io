var toDo= []
function addItem(a) {
  toDo.push(a)
  console.log(toDo)
}
function update(b,c) {
  var z=search(b)
  if (z !=-1) {
    toDo[z]=c
  }
}
function search(e) {
  for (var i=0;i<toDo.length;i=i+1) {
    if (toDo[i].toLowerCase()==e.toLowerCase()) {
      return i
    }
  }
  return -1
}
function remove(d) {
 if (search(d)!=-1) {
    toDo.splice(search(d),1)
 }
}
function clear() {
    toDo=[]
}
function populate() {

}
function readList () {
    var items=$('#items')
    items.empty()
    for (var i=0;i<toDo.length;i=i+1) {
        items.append("<li class='col-sm-3'>" + toDo[i]+ "</li>")
    }
}