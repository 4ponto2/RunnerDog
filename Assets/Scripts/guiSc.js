#pragma strict
static var coin : int;
var runner : GameObject;
var kmText : GameObject;
var kmBorder : GameObject;
var coinText : GameObject;
var coinBorder : GameObject;

function Start () {

}

function Update () {

	kmText.guiText.text = Mathf.Round(runner.transform.localPosition.x) + "M";
	coinText.guiText.text = ""+coin;
	
	//bordas
	coinBorder.guiText.text = coinText.guiText.text;
	kmBorder.guiText.text = kmText.guiText.text;

}