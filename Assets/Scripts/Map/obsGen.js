#pragma strict

//Runner
var runner : GameObject;
private var runnerDist : float;

//Start
var startObjs : int;
private var i : int;

//Gen
var numOfObj : int;
var rate : float;
var objDist : float;
var empty : GameObject;
private var obsL : GameObject[];
private var obsM : GameObject[];
private var obsR : GameObject[];
var queue : GameObject[];

//Positions
private var nextPos : Vector3;
var startPos : Vector3;

function Start () {
	
	obsL = new GameObject[numOfObj];
	obsM = new GameObject[numOfObj];
	obsR = new GameObject[numOfObj];
	nextPos = startPos;
	
	for (i = 0; i<numOfObj; i++) {
		gen(i);
		nextPos.x += objDist;
		obsL[i].transform.position.z -= 1.3;
		obsR[i].transform.position.z += 1.3;
	}
	
}

function Update () {

	runnerDist = runner.transform.localPosition.x;

	if(obsL[0].transform.position.x + (numOfObj*rate) < runnerDist){
		Recycle();
	}

}

function Recycle (){
	Destroy(obsL[0]);
	Destroy(obsM[0]);
	Destroy(obsR[0]);
	
	for (i = 1; i<numOfObj; i++) {
		obsL[i-1] = obsL[i];
		obsM[i-1] = obsM[i];
		obsR[i-1] = obsR[i];
	}
	
	nextPos.x += objDist;
	gen(i-1);
	obsL[i-1].transform.position.z -= 1.3;
	obsR[i-1].transform.position.z += 1.3;
	//obsL[numOfObj-1] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.Euler(0,90,0));
}

function gen(index : int) {
	var rnd : int = Random.Range(0,6);
	switch (rnd) {
		case 0 :
			obsL[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.Euler(0,90,0));
			obsM[index] = GameObject.Instantiate(empty, nextPos, Quaternion.Euler(0,90,0));
			obsR[index] = GameObject.Instantiate(empty, nextPos, Quaternion.Euler(0,90,0));
			break;
		case 1 :
			obsL[index] = GameObject.Instantiate(empty, nextPos, Quaternion.Euler(0,90,0));
			obsM[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.Euler(0,90,0));
			obsR[index] = GameObject.Instantiate(empty, nextPos, Quaternion.Euler(0,90,0));
			break;
		case 2 :
			obsL[index] = GameObject.Instantiate(empty, nextPos, Quaternion.Euler(0,90,0));
			obsM[index] = GameObject.Instantiate(empty, nextPos, Quaternion.Euler(0,90,0));
			obsR[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.Euler(0,90,0));
			break;
		case 3 :
			obsL[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.Euler(0,90,0));
			obsM[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.Euler(0,90,0));
			obsR[index] = GameObject.Instantiate(empty, nextPos, Quaternion.Euler(0,90,0));
			break;
		case 4 :
			obsL[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.Euler(0,90,0));
			obsM[index] = GameObject.Instantiate(empty, nextPos, Quaternion.Euler(0,90,0));
			obsR[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.Euler(0,90,0));
			break;
		case 5 :
			obsL[index] = GameObject.Instantiate(empty, nextPos, Quaternion.Euler(0,90,0));
			obsM[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.Euler(0,90,0));
			obsR[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.Euler(0,90,0));
			break;
		case 6 :
			obsL[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.Euler(0,90,0));
			obsM[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.Euler(0,90,0));
			obsR[index] = GameObject.Instantiate(queue[Random.Range(0,queue.Length)], nextPos, Quaternion.Euler(0,90,0));
			break;
	}
}