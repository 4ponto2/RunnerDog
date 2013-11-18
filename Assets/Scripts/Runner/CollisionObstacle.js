#pragma strict
//
function OnCollisionEnter(collision:Collision){

	var runner = GameObject.Find("_Runner").GetComponent(Runner);	
    if(collision.gameObject.tag == "Dog"){
  		runner.Hit();
   	}
}