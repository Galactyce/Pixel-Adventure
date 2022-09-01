function Trampoline(type, position, currLevel, rotation) {
  this.type = type;
  powerupjs.AnimatedGameObject.call(this, 1, ID.layer_overlays);
  this.position = position;
  this.levelIndex = currLevel;
  this.rotation = rotation;
  this.launchVelocity = new powerupjs.Vector2(0, -1800)
  this.loadAnimation(sprites.traps['trampoline'].idle, 'idle', true);
  this.loadAnimation(sprites.traps['trampoline'].bounce, 'launch', false, 0.05);
  this.playAnimation('idle');
}

Trampoline.prototype = Object.create(powerupjs.AnimatedGameObject.prototype);

Trampoline.prototype.launch = function() {
  this.origin.y = this.height / 2;
  this.playAnimation('idle'); // Reset animation
  this.playAnimation('launch');
  if (this.sheetIndex >= this.sprite.nrSheetElements - 1) {
    this.playAnimation('idle');
    this.origin.y = 0
  }
  else {
    setTimeout(this.launch, 1000 / 60)
  }
}