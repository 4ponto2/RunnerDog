var cam1 : Camera;
var cam2 : Camera;

function Start(){

	cam1.enabled = false;
	cam2.enabled = true;
}

function OnCollisionEnter(collision:Collision){

     if(collision.gameObject.tag == "Player"){
		
		Destroy(this.gameObject);
        
        cam1.enabled = true;
        
        cam2.enabled = false;

     }

}