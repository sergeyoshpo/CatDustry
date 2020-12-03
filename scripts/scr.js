const annihilator = extendContent(UnitType, "annihilator", {
 load() {
  this.super$load();
 }
});

annihilator.constructor = () => {
 const unit = extend(UnitEntity, {
 })
 return unit
}
annihilator.health = NaN;

const opustotitel = extendContent(UnitType, "opustotitel", {
 load() {
  this.super$load();
 }
});

opustotitel.constructor = () => {
 const unit = extend(MechUnit, {
 })
 return unit
}
opustotitel.abilities.add(new ForceFieldAbility(150, 5, 10000, 1200));

const poglotitel = extendContent(UnitType, "poglotitel", {
 load() {
  this.super$load();
 }
});

poglotitel.constructor = () => {
 const unit = extend(UnitEntity, {
 })
 return unit
}
poglotitel.abilities.add(new ForceFieldAbility(150, 5, 10000, 1200));

const sprict = extendContent(UnitType, "sprict", {
 load() {
  this.super$load();
 }
});

sprict.constructor = () => {
 const unit = extend(LegsUnit, {
 })
 return unit
}
sprict.abilities.add(new ForceFieldAbility(150, 5, 10000, 1200));

const avia1 = extendContent(UnitType, "avia1", {
 load() {
  this.super$load();
 }
});

avia1.constructor = () => {
 const unit = extend(UnitWaterMove, {
 })
 return unit
}
avia1.abilities.add(new UnitSpawnAbility(UnitTypes.flare, 900, 0, -8));



const avia2 = extendContent(UnitType, "avia2", {
 load() {
  this.super$load();
 }
});

avia2.constructor = () => {
 const unit = extend(UnitWaterMove, {
 })
 return unit
}
avia2.abilities.add(new UnitSpawnAbility(UnitTypes.horizon, 1800, 0, -8));



const avia3 = extendContent(UnitType, "avia3", {
 load() {
  this.super$load();
 }
});

avia3.constructor = () => {
 const unit = extend(UnitWaterMove, {
 })
 return unit
}
avia3.abilities.add(new UnitSpawnAbility(UnitTypes.zenith, 3600, 0, -8));



const avia4 = extendContent(UnitType, "avia4", {
 load() {
  this.super$load();
 }
});

avia4.constructor = () => {
 const unit = extend(UnitWaterMove, {
 })
 return unit
}
avia4.abilities.add(new UnitSpawnAbility(UnitTypes.antumbra, 7200, 0, -8));



const avia5 = extendContent(UnitType, "avia5", {
 load() {
  this.super$load();
 }
});

avia5.constructor = () => {
 const unit = extend(UnitWaterMove, {
 })
 return unit
}
avia5.abilities.add(new UnitSpawnAbility(UnitTypes.eclipse, 14400, 0, -8));



const avia6 = extendContent(UnitType, "avia6", {
 load() {
  this.super$load();
 }
});

avia6.constructor = () => {
 const unit = extend(UnitWaterMove, {
 })
 return unit
}
avia6.abilities.add(new UnitSpawnAbility(poglotitel, 28800,0,-8));



const gex = extendContent(UnitType, "gex", {
 load() {
  this.super$load();
 }
});

gex.constructor = () => {
 const unit = extend(UnitEntity, {
 })
 return unit
}
gex.abilities.add(new UnitSpawnAbility(UnitTypes.zenith, 3600,0,-24), new ForceFieldAbility(150, 5, 10000, 1200));
