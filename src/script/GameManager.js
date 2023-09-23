class GameManager {
    constructor(oScene) {
        this.oScene = oScene;
        // this.currentLevel = 10;
        this.isSoundOn = true;
        this.isLastLevel = 10;
        this.totalMiliSec = 1.5 * 3000;
    }
    updateLevel() {
        // this.currentLevel++;
        nCurrentLevel++;
        this.oScene.container_popup.visible = false;
        // this.oScene.setLevel(this.currentLevel);
        this.oScene.setLevel(nCurrentLevel);
        this.oScene.restartTimer();
    }

}