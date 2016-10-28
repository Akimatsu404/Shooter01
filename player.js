import explode.js;

function Player(canvas)
{
	var x, y;
	var vx, vy;
	var r;
	var dying = false;

	this.SetPosition = function(x1, y1)
	{
		x = x1;
		y = y1;
	}
	this.GetPosition = function()
	{
		return {x: x, y: y};
	}
	this.SetVector = function(vx1, vy1)
	{
		vx = vx1;
		vy = vy1;
	}
	this.GetVector = function()
	{
		return {vx: vx, vy: vy};
	}

//引数：行動 0000 0001
	this.Update = function(actCode)
	{
		//1:右 10:左 100:上 1000:下 10000:攻撃

		if(actCode >> 0/*Right*/){x+=2;}
		if(actCode >> 1/*Left*/){x-=2;}
		if(actCode >> 2/*Up*/){y-=2;}
		if(actCode >> 3/*Down*/){y+=2;}
		if(actCode >> 4/*z*/)
		{


		}
		
	}
	this.Draw = function(ctx)
	{
		if(dying)
		{

		}

	}

}


class Player
{
	//座標
	var x, y;
	var v, vy;
	var r = 5;	

   	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}
	set position(x, y)
	{
		this.x = x;
		this.y = y;
	}
	get position()
	{
		return {x: x, y: y};
	}

	draw(ctx)
	{
		ctx.beginPath();
		ctx.fillStyle = 'red';
		ctx.arc(x, y, r, 0, Math.PI*2, false);
		ctx.fill();
	}

}
