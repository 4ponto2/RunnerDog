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
private var objs : GameObject[];
var queue : GameObject[];

//Positions
private var nextPos : Vector3;
var startPos : Vector3;

function Start () {
	
	objs = new GameObject[numOfObj];
	nextPos = startPos;	
	
	
	for (i = 0; i<numOfObj; i++) {
		objs[i] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.identity);
		nextPos.x += objs[i].transform.localScale.x;
	}
	
}

function Update () {

	runnerDist = runner.transform.localPosition.x;

	if(objs[0].transform.position.x + (numOfObj*rate) < runnerDist){
		Recycle();
	}

}

function Recycle (){
	Destroy(objs[0]);
	for (i = 1; i<numOfObj; i++) {
		objs[i-1] = objs[i];
	}
	objs[numOfObj-1] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.identity);
//	objs[numOfObj-1].transform.position = nextPos;
	nextPos.x += objs[numOfObj-1].transform.localScale.x;
}