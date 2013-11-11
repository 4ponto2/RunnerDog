#pragma strict
//
var acceleration : float;
private var distanceTraveled : float;
private var zPos : int;
private var touchingPlatform : boolean;
var jumpVelocity : float;
var dog : GameObject;
var largada : GameObject;

function Start () {
	zPos = 0;
	touchingPlatform = true;
}

function Update () {

	//Nao apagar a tela:
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
	if (Input.GetKeyDown(KeyCode.Escape)){
   		Application.Quit(); 
	}
	
	if(largada.transform.position.x + 130 < distanceTraveled){
		largada.transform.position.x +=250;
	}
	
	acceleration += 0.0005;
	distanceTraveled = transform.localPosition.x;
	transform.Translate(acceleration * Time.deltaTime, 0, 0);
//	transform.localPosition.z -= (Input.GetAxis("Mouse X")*0.05);
	transform.localPosition.z -= (Input.acceleration.x*0.2);
	
	
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