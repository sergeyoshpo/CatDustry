const mira = extendContent(UnitType, "mira", {
    load() {
        this.super$load();
        this.rotatorRegion = Core.atlas.find(this.name + "-rotator");
    }
});

mira.constructor = () => {
    const unit = extend(UnitEntity, {
        draw(){
            const vec = new Vec2();
            this.super$draw();
vec.trns(unit.rotation-90, 7.5)
            Draw.rect(this.rotatorRegion, this.x + vec.x + 4.2, this.y + vec.y + -0.3, Time.time() * 10);
            Draw.rect(this.rotatorRegion, this.x + vec.x + -4.2, this.y + vec.y + -0.3, Time.time() * 10);
        }
    })
    return unit
}
