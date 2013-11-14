#pragma strict

var acceleration : float;
private var distanceTraveled : float;
private var zPos : int;
private var touchingPlatform : boolean;
var jumpVelocity : float;
var dog : GameObject;

function Start () {
	zPos = 0;
	touchingPlatform = true;
}

function Update () {

	acceleration += 0.0002;
	
	distanceTraveled = transform.localPosition.x;
	
	transform.Translate(acceleration * Time.deltaTime, 0, 0);
	
	transform.localPosition.z -= Input.GetAxis("Mouse X")*0.05;
	
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
	if(Input.GetKeyUp(KeyCode.Space) && transform.position.y < 0.2 ){
	
		rigidbody.AddRelativeForce(0, jumpVelocity, 0);
		
	}
	
}

//function FixedUpdate() {
//	if(touchingPlatform){
//		//rigidbody.AddForce(acceleration, 0f, 0f);
//		transform.Translate(acceleration * Time.deltaTime, 0, 0);
//	}
	//ForceMode.Acceleration
//}

function Jump() {

    //animation.Play("jump_pose");
    rigidbody.AddForce(Vector3.up *jumpVelocity);
 
}