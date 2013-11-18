#pragma strict
//
//Runner
var runner : GameObject;
private var runnerDist : float;

//Start
var startObjs : int;
private var i : int;

//Gen
var numOfObj : int;
var rate : float;
var coinGroup : int;
var coinDist : float;
private var objCont : int;
private var objs : GameObject[];
var queue : GameObject[];

//Positions
private var nextPos : Vector3;
var startPos : Vector3;


function Start () {
	
	objCont = 0;
	objs = new GameObject[numOfObj];
	nextPos = startPos;	
	
	
	for (i = 0; i<numOfObj; i++) {
		gen(i);
	}
	
}

function Update () {

	runnerDist = runner.transform.localPosition.x;

	if(objs[numOfObj-1].transform.position.x < runnerDist + 55){
		Recycle();
	}

}

function Recycle() {
	if(objs[0] != null){
		Destroy(objs[0]);
	}
	for (i = 1; i<numOfObj; i++) {
		objs[i-1] = objs[i];
	}
	
	gen(i-1);
//	objs[numOfObj-1] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.identity);
//	objs[numOfObj-1].transform.position = nextPos;
}

function gen(index : int) {

	if(objCont <= coinGroup){
		objs[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.identity);
		nextPos.x += coinDist;
		objCont++;
	} else {
		randomZ();
		nextPos.x += coinDist*Random.Range(15,30);
		objs[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.identity);
		nextPos.x += coinDist;
		objCont=1;
	}

}

function randomZ() {
	var rnd : int = Random.Range(1,4);
	switch(rnd){
		case 1: nextPos.z = -1.355;
				break;
		case 2: nextPos.z = -0.05;
				break;
		case 3: nextPos.z = 1.245;
				break;
		default: nextPos.z = -0.05;
				break;
	}
}

function Restart(){

	for (i = 0; i<numOfObj; i++) {
		Destroy(objs[i]);
	}
	
	nextPos = startPos;
	
	objCont = 0;	
	
	for (i = 0; i<numOfObj; i++) {
		gen(i);
	}
  
}