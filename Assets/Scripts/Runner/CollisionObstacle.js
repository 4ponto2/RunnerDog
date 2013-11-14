function OnCollisionEnter(collision:Collision){

     if(collision.gameObject.tag == "Player"){
     	 
     	   if (CollisionCoin.coins <= 0){
     	  		
     	  		}else{
          
          			CollisionCoin.coins -= 1;
          
          			GameObject.Find("g_PointCount").guiText.text = ""+CollisionCoin.coins;
     	  
   		   		}
   	 }
}