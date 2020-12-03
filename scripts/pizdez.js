const tank1 = extendContent(UnitType, "tank1", {
 load() {
  this.super$load();
 }
});

tank1.constructor = prov(() => extend(MechUnit, {
    frame: 0,
    timerr: 0,
    
    setFramer(){
        
        if(this.frame >= tank1.frameCount){
            
            this.frame = 0
            
        }
        else{
            
            this.frame++
            
        }
        
    },
    
    update(){
        
        
        this.super$update();
        
        if(this.timerr * Time.delta > tank1.perSecond){
            
            this.setFramer();
            this.timerr = 0;

            
        }
        else {
            
            this.timerr++
            
        }
        
        tank1.legRegion = Core.atlas.find(tank1.name + "-leg-" + this.frame);
        
    },
    
}));
tank1.frameCount = 2;
tank1.perSecond = 30;
tank1.timers = 2

const tank2 = extendContent(UnitType, "tank2", {
 load() {
  this.super$load();
 }
});

tank2.constructor = () => {
 const unit = extend(MechUnit, {
 })
 return unit
}
const tank3 = extendContent(UnitType, "tank3", {
 load() {
  this.super$load();
 }
});

tank3.constructor = () => {
 const unit = extend(MechUnit, {
 })
 return unit
}
const tank4 = extendContent(UnitType, "tank4", {
 load() {
  this.super$load();
 }
});

tank4.constructor = () => {
 const unit = extend(MechUnit, {
 })
 return unit
}
const tank5 = extendContent(UnitType, "tank5", {
 load() {
  this.super$load();
 }
});

tank5.constructor = () => {
 const unit = extend(MechUnit, {
 })
 return unit
}

const tank6 = extendContent(UnitType, "tank6", {
 load() {
  this.super$load();
 }
});

tank6.constructor = () => {
 const unit = extend(MechUnit, {
 })
 return unit
}
const pizdez = extendContent(UnitType, "pizdez", {
 load() {
  this.super$load();
 }
});

pizdez.constructor = prov(() => extend(UnitEntity, {

spawnn(){
Vars.content.units().get(Mathf.random(0, Vars.content.units().size)).spawn(this.team, this.x, this.y)
},
update(){
this.super$update()
this.spawnn()
}}))

pizdez.abilities.add(new ForceFieldAbility(10000, 0.5, 200, 10000))
