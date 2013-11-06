function OnCollisionEnter(collision:Collision){

     if(collision.gameObject.tag == "Player"){
     	 
     	   if (CollisionCoin.PONTOS <= 0){
     	  		
     	  		print("PONTOS: " + CollisionCoin.PONTOS);
     	  		
     	  		}else{
          
          			CollisionCoin.PONTOS -= 100;
          
          			print("PONTOS: " + CollisionCoin.PONTOS);
          
          			GameObject.Find("g_PointCount").guiText.text = ""+CollisionCoin.PONTOS;
     	  
   		   		}
   	 }
}