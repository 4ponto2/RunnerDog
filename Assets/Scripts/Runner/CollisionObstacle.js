#pragma strict
//
function OnCollisionEnter(collision:Collision){

     if(collision.gameObject.tag == "Dog"){
     	 
     	   if (CollisionCoin.coins <= 0){
     	  		
     	  		print("PONTOS: " + CollisionCoin.coins);
     	  		
     	  		}else{
          
          			CollisionCoin.coins -= 1;
          
          			print("PONTOS: " + CollisionCoin.coins);
          
          			GameObject.Find("g_PointCount").guiText.text = ""+CollisionCoin.coins;
     	  
   		   		}
   	 }
}