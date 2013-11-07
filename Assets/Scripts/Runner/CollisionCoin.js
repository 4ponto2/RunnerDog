#pragma strict

static var coins = 0;

function OnTriggerEnter(collision:Collider){

     if(collision.gameObject.tag == "Player"){

          Destroy(this.gameObject);

          coins += 1;

          GameObject.Find("g_PointCount").guiText.text = ""+coins;

     }

}