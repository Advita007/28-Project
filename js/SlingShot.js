class SlingShot{
    constructor(bodyA,pointB){
      
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.09,
        length: 10
    }
    this.pointB = pointB
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    
    }

     attach(body){
        bodyA: stone1
        this.sling.bodyA = body
      }

    fly(){
    this.sling.bodyA = null
    
    }
  
    

    display() {
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position
            var pointB = this.pointB
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
          
        }

    }
}