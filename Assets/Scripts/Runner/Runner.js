#pragma strict
//
var acceleration : float;
private var distanceTraveled : float;
private var zPos : int;
var jumpVelocity : float;
var dog : GameObject;
var dogGO : GameObject;
private var drot : float;
var largada : GameObject;

// Vida
private var running : boolean;
private var life : int;
var lifeGui : GameObject;
var lifeGuiBd : GameObject;
//var lifeTex : Texture;
//var emptyLifeTex : Texture;

// Start/End
var endGui : GameObject;
var playGui : GameObject;

function Start () {

	running = false;
	life = 3;
	zPos = 0;
	drot = 0;
	fitGui();

}

function Update() {
	
	//Vida
	lifeGui.guiText.text = ""+life;
	lifeGuiBd.guiText.text = ""+life;
	
	//Nao apagar a tela:
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
	if (Input.GetKeyDown(KeyCode.Escape)){
   		Application.Quit(); 
	}
	
	// Atualiza Largada
	if(largada.transform.position.x + 130 < distanceTraveled){
		largada.transform.position.x += 250;
	}
	
	// Movimentaçao do Cachorro
	if(running){
		acceleration += 0.0005;
		distanceTraveled = transform.localPosition.x;
		transform.Translate(acceleration * Time.deltaTime, 0, 0);
		transform.localPosition.z -= (Input.acceleration.x*0.2);
	}
	
	// Inclinaçao
	drot = (Input.acceleration.x*-0.2);
	dogGO.transform.localRotation.x = drot;
	dogGO.transform.localRotation.y = drot/-2;
	if(drot > 8){
		drot = 8;
	}
	if(drot < -8){
		drot = -8;
	}
	
	
	if(transform.localPosition.z > 1.57){
		transform.localPosition.z =1.569;
	}
	if(transform.localPosition.z < -1.98){
		transform.localPosition.z = -1.979;
	}	
	
	if(Input.GetKeyUp(KeyCode.LeftArrow)){
		zPos+=7;
	}	
	
	if(Input.GetKeyUp(KeyCode.RightArrow)){
		zPos-=7;
	}
	// 1.57 / -1.98
	if(Input.touchCount == 1 && transform.position.y < 0.08 ){
		rigidbody.AddRelativeForce(0, jumpVelocity, 0);
	}
	
	if(life==0){
		End();
	}
	
	var asphalt = GameObject.Find("AsphaltGen").GetComponent(mapGenerator);
	var coin = GameObject.Find("CoinGen").GetComponent(coinGen);
	var map = GameObject.Find("MapGen").GetComponent(mapGenerator);
	var obstacle = GameObject.Find("ObstacleGen").GetComponent(obsGen);
	
	if(Input.touchCount == 1){
		if(playGui.activeSelf == true){
			playGui.SetActive(false);
			running = true;
		}
		if(endGui.activeSelf == true){
			Restart();
			asphalt.Restart();
			coin.Restart();
			map.Restart();
			obstacle.Restart();
		}
	}
	
	
}

function Jump(){

    //animation.Play("jump_pose");
    rigidbody.AddForce(Vector3.up *jumpVelocity);

}

function Hit(){
	life--;
}

function End(){
	running = false;
	endGui.SetActive(true);
}

function Restart(){
	running = true;
	life = 3;
	zPos = 0;
	drot = 0;
	transform.position.x = 0;
	endGui.SetActive(false);
	acceleration = 5;
}

function fitGui(){

	playGui.guiTexture.pixelInset.width = Screen.width;
	playGui.guiTexture.pixelInset.height = Screen.height;
	playGui.guiTexture.pixelInset.x = (Screen.width/-2);
	playGui.guiTexture.pixelInset.y = (Screen.height/-2);

}