#pragma strict
//
private var timesec : float;
//private var rot : float;

function Update() {
	timesec = Time.time%60;
	this.transform.rotation = Quaternion.Euler(0,(timesec*360),0);
}

function OnTriggerEnter(collision:Collider){

     if(collision.gameObject.tag == "Dog"){
          Destroy(this.gameObject);
          var guiobj = GameObject.Find("GUI").GetComponent(guiSc);
          guiobj.coin += 1;
     }

}