#pragma strict

var startPos : Transform;
var endPos : Transform;
var delay: float;

function Start () {

}

function Update () {

	transform.position = Vector3.Lerp(transform.position, endPos.position, delay);
	transform.rotation = Quaternion.Lerp(transform.rotation, endPos.rotation, delay);

}