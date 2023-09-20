class GameManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.currentLevel = 1;
        this.isSoundOn = true;
        this.isLastLevel = 10;
       this.totalMiliSec = 1.5 * 300;
    }
    updateLevel() {
        this.currentLevel++;
        console.log(this.currentLevel);
        this.oScene.container_popup.visible = false;
        this.oScene.setLevel(this.currentLevel);
        this.oScene.restartTimer();
    }

}