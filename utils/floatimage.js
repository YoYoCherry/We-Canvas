class FloatImage{

    constructor(){

    }

    drawImage(ctx,p0,p1,p2,p3,factor,timer,img){
        var factor1= factor
        let t = factor1.t;
            
        let cx = 3*(p1.x-p0.x);
        let bx = 3*(p2.x-p1.x)-cx;
        let ax = p3.x-p0.x-cx-bx;

        let cy = 3*(p1.y-p0.y);
        let by = 3*(p2.y-p1.y)-cy;
        let ay = p3.y-p0.y-cy-by;

        let xt = ax*(t*t*t)+bx*(t*t)+cx*t+p0.x;
        let yt = ay*(t*t*t)+by*(t*t)+cy*t+p0.y;
        
        factor1.t +=factor1.speed;
            
        if(factor1.t>1){
            factor1.t=1;
        }
        ctx.drawImage(img,xt,yt,20,20);
        ctx.draw()
        if(yt==0){
            clearInterval(timer)
        }
    }

}


module.exports = FloatImage