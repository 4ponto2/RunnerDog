#pragma strict
//
var acceleration : float;
private var distanceTraveled : float;
private var zPos : int;
private var touchingPlatform : boolean;
var jumpVelocity : float;
var dog : GameObject;
var dogGO : GameObject;
private var drot : float;
var largada : GameObject;

// Vida
private var life : int;
var lifeTex : Texture;
var emptyLifeTex : Texture;

function Start () {
	life = 3;
	zPos = 0;
	drot = 0;
	touchingPlatform = true;
}

function Update () {

	//Nao apagar a tela:
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
	if (Input.GetKeyDown(KeyCode.Escape)){
   		Application.Quit(); 
	}
	
	// Atualiza Largada
	if(largada.transform.position.x + 130 < distanceTraveled){
		largada.transform.position.x +=250;
	}
	
	// Movimentaçao do Cachorro
	acceleration += 0.0005;
	distanceTraveled = transform.localPosition.x;
	transform.Translate(acceleration * Time.deltaTime, 0, 0);
	transform.localPosition.z -= (Input.acceleration.x*0.2);
	
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
	
}

function FixedUpdate() {
//	if(touchingPlatform){
//		//rigidbody.AddForce(acceleration, 0f, 0f);
//		transform.Translate(acceleration * Time.deltaTime, 0, 0);
//	}
	//ForceMode.Acceleration
}

function Jump() {

    //animation.Play("jump_pose");
    rigidbody.AddForce(Vector3.up *jumpVelocity);
 
}