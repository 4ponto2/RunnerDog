#pragma strict

static var coins = 0;
private var timesec : float;
//private var rot : float;

function Update() {

	timesec = Time.time%60;
//	rot = (timesec*300)/60;
	
	this.transform.rotation = Quaternion.Euler(0,(timesec*360),0);
	

}

function OnTriggerEnter(collision:Collider){

     if(collision.gameObject.tag == "Player"){

          Destroy(this.gameObject);

          coins += 1;

          GameObject.Find("g_PointCount").guiText.text = ""+coins;

     }

}