#pragma strict
//
var endPos : Transform;
var delay: float;
var playGui : GameObject;

function Start () {

}

function Update () {

	if(playGui.activeSelf==false){
		transform.position = Vector3.Lerp(transform.position, endPos.position, delay);
		transform.rotation = Quaternion.Lerp(transform.rotation, endPos.rotation, delay);
	}

}