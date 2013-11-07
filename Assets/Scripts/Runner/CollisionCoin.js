static var PONTOS = 0;

function OnCollisionEnter(collision:Collision){

     if(collision.gameObject.tag == "Player"){

          Destroy(this.gameObject);

          PONTOS += 200;

          print("PONTOS: " + PONTOS);

          GameObject.Find("g_PointCount").guiText.text = ""+PONTOS;

     }

}