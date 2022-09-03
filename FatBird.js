function FatBird(type, position, currLevel) {
  powerupjs.AnimatedGameObject.call(this, 1, ID.layer_objects);
  this.loadAnimation(sprites.enemies['fat_bird'].idle, 'idle', true, 0.05);
  this.type = type;
  this.position = position;
  this.currLevel = currLevel;
  this.moveVelocity = 50;
  this.direction = 'left'
  this.playAnimation('idle');
}

FatBird.prototype = Object.create(powerupjs.AnimatedGameObject.prototype);

FatBird.prototype.update = function(delta) {
  powerupjs.AnimatedGameObject.prototype.update.call(this, delta)
  if (this.direction === 'left') {
  this.velocity.x = 50
  }
} 