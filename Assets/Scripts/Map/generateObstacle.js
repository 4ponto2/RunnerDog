var theObject:GameObject;
var maxPosX:float = 1000;
var minPosX:float = 10;
var maxPosZ:float = 2;
var minPosZ:float = -1;
var max = 700;

function Start(){
    StartCoroutine(spawn());
}
 
function spawn() : IEnumerator {
    for (var i = 0; i < max; i++) {
    	yield WaitForSeconds(2.0);
    	var theNewPos= new Vector3 (Random.Range(minPosX,maxPosX),0.49,Random.Range(minPosZ,maxPosZ));
    	var go : GameObject = Instantiate(theObject);
    	go.transform.position = theNewPos;
    }
}